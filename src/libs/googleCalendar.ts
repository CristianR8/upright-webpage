import { google } from "googleapis";

type ServiceAccountKey = {
  client_email: string;
  private_key: string;
};

export type ReservationEventInput = {
  customerName: string;
  serviceName: string;
  startDateTime: string;
  endDateTime: string;
  timezone: string;
  phone?: string;
  notes?: string;
  calendarId?: string;
};

function getServiceAccountKey(): ServiceAccountKey {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_JSON;

  if (!raw) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_KEY_JSON");
  }

  let parsed: ServiceAccountKey;
  try {
    parsed = JSON.parse(raw) as ServiceAccountKey;
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY_JSON is not valid JSON");
  }

  if (!parsed.client_email || !parsed.private_key) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY_JSON must include client_email and private_key");
  }

  return {
    client_email: parsed.client_email,
    private_key: parsed.private_key.replace(/\\n/g, "\n"),
  };
}

function getCalendarId(calendarId?: string): string {
  const id = calendarId || process.env.GOOGLE_CALENDAR_ID;

  if (!id) {
    throw new Error("Missing GOOGLE_CALENDAR_ID");
  }

  return id;
}

export async function createReservationEvent(input: ReservationEventInput) {
  const key = getServiceAccountKey();
  const auth = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/calendar.events"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const calendarId = getCalendarId(input.calendarId);
  const descriptionLines = [
    `Cliente: ${input.customerName}`,
    input.phone ? `Telefono: ${input.phone}` : "",
    input.notes ? `Notas: ${input.notes}` : "",
  ].filter(Boolean);

  const response = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: `${input.serviceName} - ${input.customerName}`,
      description: descriptionLines.join("\n"),
      start: {
        dateTime: input.startDateTime,
        timeZone: input.timezone,
      },
      end: {
        dateTime: input.endDateTime,
        timeZone: input.timezone,
      },
    },
  });

  return {
    eventId: response.data.id,
    eventLink: response.data.htmlLink,
    calendarId,
  };
}
