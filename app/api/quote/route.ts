export async function GET() {
  try {
    const response = await fetch("https://api.quotable.io/random", {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch quote from API")
    }

    const data = await response.json()

    return Response.json({
      _id: data._id,
      content: data.content,
      author: data.author,
    })
  } catch (error) {
    console.error("Error fetching quote:", error)

    // Return fallback quote
    return Response.json({
      _id: "fallback",
      content: "Stay strong — you are not alone. Together we fight cancer.",
      author: "Cancer Awareness & Support",
    })
  }
}


