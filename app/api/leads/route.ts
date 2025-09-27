import { type NextRequest, NextResponse } from "next/server"

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown"
  return ip
}

function checkRateLimit(key: string): { allowed: boolean; resetTime: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // 5 requests per 15 minutes

  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, resetTime: now + windowMs }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, resetTime: record.resetTime }
  }

  record.count++
  return { allowed: true, resetTime: record.resetTime }
}

function validateLeadData(data: any) {
  const errors: string[] = []

  if (!data.firstName || typeof data.firstName !== "string" || data.firstName.trim().length < 1) {
    errors.push("First name is required")
  }
  if (!data.lastName || typeof data.lastName !== "string" || data.lastName.trim().length < 1) {
    errors.push("Last name is required")
  }
  if (!data.location || typeof data.location !== "string" || data.location.trim().length < 1) {
    errors.push("Location is required")
  }
  if (!data.phone || typeof data.phone !== "string" || data.phone.trim().length < 1) {
    errors.push("Phone number is required")
  }
  if (typeof data.workedOnline !== "boolean") {
    errors.push("Work experience selection is required")
  }
  if (!data.privacyConsent) {
    errors.push("Privacy consent is required")
  }

  // Validate phone number format (basic validation)
  if (data.phone && !/^[+]?[0-9][\d\s\-()]{7,20}$/.test(data.phone)) {
    errors.push("Invalid phone number format")
  }

  return errors
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    const rateLimit = checkRateLimit(rateLimitKey)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Reset": new Date(rateLimit.resetTime).toISOString(),
          },
        },
      )
    }

    const body = await request.json()

    // Validate input data
    const validationErrors = validateLeadData(body)
    if (validationErrors.length > 0) {
      console.log("Validation errors:", validationErrors)
      console.log("Received data:", body)
      return NextResponse.json({ message: "Validation failed", errors: validationErrors }, { status: 400 })
    }

    // For now, we'll simulate database storage since Supabase isn't connected
    // In production, this would use the Supabase client
    console.log("[v0] Lead data received:", {
      firstName: body.firstName,
      lastName: body.lastName,
      location: body.location,
      phone: body.phone,
      workedOnline: body.workedOnline,
      notes: body.notes || "",
      privacyConsent: body.privacyConsent,
      timestamp: new Date().toISOString(),
    })

    // TODO: Replace with actual Supabase insertion when integration is available
    /*
    const { createServerClient } = await import('@supabase/ssr')
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        cookies: {
          get: () => null,
          set: () => {},
          remove: () => {},
        },
      }
    )

    const { data, error } = await supabase
      .from('leads')
      .insert({
        first_name: body.firstName,
        last_name: body.lastName,
        location: body.location,
        phone: body.phone,
        worked_online: body.workedOnline,
        notes: body.notes || '',
        privacy_consent: body.privacyConsent
      })
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { message: 'Failed to save lead data' },
        { status: 500 }
      )
    }
    */

    return NextResponse.json(
      {
        message: "Lead submitted successfully",
        // data: data[0] // Uncomment when using Supabase
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
