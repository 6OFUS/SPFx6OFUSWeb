import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, targetLang } = body;

    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          format: "text",
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error("Google Translate API error:", data.error);
      return NextResponse.json(
        { error: "Translation failed", details: data.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      translatedText: data.data.translations[0].translatedText,
    });
  } catch (error: any) {
    console.error("Translation endpoint error:", error);
    return NextResponse.json(
      { error: "Translation failed", details: error.message },
      { status: 500 }
    );
  }
}
