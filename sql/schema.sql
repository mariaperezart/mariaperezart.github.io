-- FARO — Esquema mínimo de base de datos (PostgreSQL)
-- Ver FARO_TESIS_MVP_60DIAS.md, sección 2.5, para el razonamiento completo.
-- Ejecutar contra la instancia de PostgreSQL del VPS antes de importar los flujos de n8n.

CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- necesaria para gen_random_uuid()

-- Clínicas cliente de FARO
CREATE TABLE clinics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(150) NOT NULL,
    whatsapp_phone_number_id VARCHAR(50) NOT NULL UNIQUE,
    whatsapp_business_account_id VARCHAR(50) NOT NULL,
    direccion VARCHAR(255),
    ciudad VARCHAR(100),
    horario_json JSONB NOT NULL,              -- {"lunes": {"apertura":"09:00","cierre":"20:00"}, ...}
    precios_orientativos TEXT,                -- contexto libre para el prompt del Flujo A
    atiende_urgencias BOOLEAN DEFAULT true,
    telefono_urgencias VARCHAR(30),
    email_recepcion VARCHAR(150) NOT NULL,    -- destino del resumen diario
    plan VARCHAR(20) NOT NULL DEFAULT 'START', -- START | GROW | OPS
    activa BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Pacientes (mínimo necesario, no historia clínica)
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    nombre VARCHAR(150),
    telefono_whatsapp VARCHAR(30) NOT NULL,   -- wa_id formato E.164
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE (clinic_id, telefono_whatsapp)
);

-- Citas (import manual/CSV desde el PMS, sin integración automática en el MVP)
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    fecha_hora TIMESTAMPTZ NOT NULL,
    tipo_tratamiento VARCHAR(150),
    estado VARCHAR(30) NOT NULL DEFAULT 'programada',
        -- programada | confirmada | pendiente_reprogramacion | cancelada | completada | no_show
    recordatorio_enviado BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Registro de conversaciones (ambos flujos, para trazabilidad y email diario)
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    patient_id UUID REFERENCES patients(id) ON DELETE SET NULL,
    appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
    tipo VARCHAR(30) NOT NULL,                -- fuera_horario | confirmacion_cita
    mensaje_entrante TEXT,
    mensaje_saliente TEXT,
    es_urgencia BOOLEAN DEFAULT false,
    estado VARCHAR(30) NOT NULL DEFAULT 'ok', -- ok | error_envio | esperando_respuesta | alerta_manual | fallido
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_conversations_clinic_date ON conversations (clinic_id, created_at);
CREATE INDEX idx_appointments_clinic_fecha ON appointments (clinic_id, fecha_hora);
CREATE INDEX idx_appointments_recordatorio ON appointments (fecha_hora, estado) WHERE recordatorio_enviado = false;
