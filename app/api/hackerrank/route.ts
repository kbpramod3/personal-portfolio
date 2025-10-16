import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {

    const res = await fetch('https://www.hackerrank.com/rest/hackers/kbpramod7/badges', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://www.hackerrank.com/profile/kbpramod7',
      }
    })

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('geeksforgeeks proxy error:', error)
    return NextResponse.json({ error: 'Failed to fetch geeksforgeeks data' }, { status: 500 })
  }
}
