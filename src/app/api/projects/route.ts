import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

/** Public JSON API for the project index. */
export async function GET() {
  return NextResponse.json(
    { count: projects.length, projects },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
  );
}
