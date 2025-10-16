import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const res = await fetch('https://practiceapi.geeksforgeeks.org/api/v1/user/problems/submissions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://www.geeksforgeeks.org',
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('geeksforgeeks proxy error:', error)
    return NextResponse.json({ error: 'Failed to fetch geeksforgeeks data' }, { status: 500 })
  }
}
