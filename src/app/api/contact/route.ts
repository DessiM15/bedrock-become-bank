import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

const rateLimitMap = new Map<string, number>();

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}

export async function POST(request: NextRequest) {
  // Rate limiting: 1 submission per IP per minute
  const key = getRateLimitKey(request);
  const now = Date.now();
  const lastSubmission = rateLimitMap.get(key);

  if (lastSubmission && now - lastSubmission < 60_000) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before trying again." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Log the submission (replace with email integration later)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Name:", result.data.name);
    console.log("Email:", result.data.email);
    console.log("Phone:", result.data.phone);
    console.log("Message:", result.data.message || "(no message)");
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    // Update rate limit
    rateLimitMap.set(key, now);

    // Clean up old entries periodically
    if (rateLimitMap.size > 1000) {
      for (const [k, v] of rateLimitMap.entries()) {
        if (now - v > 60_000) rateLimitMap.delete(k);
      }
    }

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
