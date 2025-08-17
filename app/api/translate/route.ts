export async function POST(req:any) {
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

    return new Response(
      JSON.stringify({ translatedText: data.data.translations[0].translatedText }),
      { status: 200 }
    );
  } catch (error:any) {
    return new Response(
      JSON.stringify({ error: "Translation failed", details: error.message }),
      { status: 500 }
    );
  }
}
