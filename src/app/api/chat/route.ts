import Anthropic from "@anthropic-ai/sdk";
import { worlds } from "@/content/worlds";

const client = new Anthropic();

export async function POST(req: Request) {
  const { worldId, messages } = await req.json();

  const world = worlds[worldId];
  if (!world) {
    return Response.json({ error: "Unknown world" }, { status: 400 });
  }

  const stream = client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 512,
    system: world.systemPrompt,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  });

  return new Response(stream.toReadableStream());
}
