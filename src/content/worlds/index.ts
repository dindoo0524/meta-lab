import { growthTalkWorld } from "./growth-talk";
import { spanishWorld } from "./spanish";
import type { WorldConfig } from "@/lib/chat/types";

export const worlds: Record<string, WorldConfig> = {
  "growth-talk": growthTalkWorld,
  spanish: spanishWorld,
};
