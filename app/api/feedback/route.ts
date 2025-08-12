import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const googleRes = await fetch("https://script.google.com/macros/s/AKfycbzhcoTCPBg5zDvJqGp7rUBc6K68mNUbbufdiptrKzw_5POIt4uEwgW5d5e_W3AAu4Fz/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!googleRes.ok) {
      return NextResponse.json({ error: "Google Script error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
