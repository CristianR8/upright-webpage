import { NextResponse } from "next/server";
import { createReservationEvent } from "@/libs/googleCalendar";

type Body = {
  customerName?: string;
  serviceName?: string;
  startDateTime?: string;
  endDateTime?: string;
  timezone?: string;
  phone?: string;
  notes?: string;
  calendarId?: string;
};

export const runtime = "nodejs";

function missingFields(body: Body): string[] {
  const required: Array<keyof Body> = [
    "customerName",
    "serviceName",
    "startDateTime",
    "endDateTime",
    "timezone",
  ];

  return required.filter((field) => !body[field]);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const missing = missingFields(body);

    if (missing.length > 0) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          missing,
        },
        { status: 400 }
      );
    }

    const result = await createReservationEvent({
      customerName: body.customerName as string,
      serviceName: body.serviceName as string,
      startDateTime: body.startDateTime as string,
      endDateTime: body.endDateTime as string,
      timezone: body.timezone as string,
      phone: body.phone,
      notes: body.notes,
      calendarId: body.calendarId,
    });

    return NextResponse.json(
      {
        ok: true,
        ...result,
      },
      { status: 201 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
