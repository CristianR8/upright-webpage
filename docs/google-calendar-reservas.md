# Google Calendar para Reservas

## 1) Crear credenciales en Google Cloud
- Crea un proyecto en Google Cloud.
- Habilita `Google Calendar API`.
- Crea una `Service Account`.
- Descarga la llave JSON.
- Comparte tu calendario de Google con el `client_email` de la service account (permiso para crear eventos).

## 2) Variables de entorno
En `.env.local`:

```bash
GOOGLE_CALENDAR_ID=tu_calendario@group.calendar.google.com
GOOGLE_SERVICE_ACCOUNT_KEY_JSON={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"...","client_id":"..."}
```

## 3) Endpoint implementado
- `POST /api/reservations/google-calendar`

Body:

```json
{
  "customerName": "Juan Perez",
  "serviceName": "Corte + Barba",
  "startDateTime": "2026-02-26T15:00:00",
  "endDateTime": "2026-02-26T16:00:00",
  "timezone": "America/Bogota",
  "phone": "+57 300 000 0000",
  "notes": "Cliente frecuente"
}
```

Respuesta esperada:

```json
{
  "ok": true,
  "eventId": "abc123",
  "eventLink": "https://www.google.com/calendar/event?eid=...",
  "calendarId": "tu_calendario@group.calendar.google.com"
}
```

## 4) Instalar dependencia

```bash
npm install
```

Incluye `googleapis` para crear eventos desde el backend.
