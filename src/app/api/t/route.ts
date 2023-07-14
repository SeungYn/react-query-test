import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ test: 1 });
}

export function POST() {
  return NextResponse.json({ test: 1 });
}
