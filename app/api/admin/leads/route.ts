import { type NextRequest, NextResponse } from "next/server"

// Simple admin authentication (in production, use proper auth)
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization")
  // For demo purposes, we'll allow access without auth
  // In production, implement proper authentication
  return true
}

export async function GET(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // For now, return mock data since Supabase isn't connected
    // In production, this would query the Supabase database
    const mockLeads = [
      {
        id: "1",
        first_name: "John",
        last_name: "Doe",
        location: "New York, USA",
        phone: "+1234567890",
        worked_online: true,
        notes: "Interested in freelance writing opportunities",
        privacy_consent: true,
        created_at: new Date().toISOString(),
      },
    ]

    console.log("[v0] Admin leads request - returning mock data")

    // TODO: Replace with actual Supabase query when integration is available
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

    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { message: 'Failed to fetch leads' },
        { status: 500 }
      )
    }
    */

    return NextResponse.json({
      leads: mockLeads, // Replace with 'leads' when using Supabase
      total: mockLeads.length,
    })
  } catch (error) {
    console.error("Admin API error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
