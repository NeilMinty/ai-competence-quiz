// Score ranges based on max 46 (7 regular × 4 + 3 weighted × 4 × 1.5)
// Weighted questions: Q1, Q3, Q8

export const levels = [
  {
    name: "Prompted",
    range: [0, 16],
    percentile: 25,
    description: "You're using AI reactively — prompting when needed but not yet building systematic habits.",
    nextSteps: [
      "Build your first dedicated prompt: Pick one repeatable task and write a prompt for it. Save it. Use it every time instead of starting from scratch.",
      "Set up persistent context: Add three facts about how you work and what good output looks like for you into your AI tool's memory or system prompt settings.",
      "Ship something without writing code: Build one simple tool using a no-code AI builder. Ship it even if it's imperfect.",
    ],
  },
  {
    name: "Practitioner",
    range: [17, 22],
    percentile: 55,
    description: "You apply AI consistently in your workflows and are developing reliable prompting instincts.",
    nextSteps: [
      "Redesign one workflow around AI: Map a weekly workflow and identify every step where AI could do it or improve it. Redesign around those steps.",
      "Learn to read code: You don't need to write it — you need to know if it's right. Spend time reading what AI generates and asking it to explain choices.",
      "Start a prompt library: Every prompt that works well, saved and categorised. You'll reuse patterns constantly.",
    ],
  },
  {
    name: "Architect",
    range: [23, 28],
    percentile: 80,
    description: "You design AI-augmented workflows and think in systems, not just individual prompts.",
    nextSteps: [
      "Deploy something real: Get an app to a real URL someone else can access. Understand environment variables and what it takes to move from local to live.",
      "Audit a codebase you've built: Use an AI coding assistant to review it. Read the output and act on the criticals.",
      "Build one automated process: Something that runs on a schedule without you triggering it. Prove the system works while you're not watching.",
    ],
  },
  {
    name: "Builder",
    range: [29, 34],
    percentile: 93,
    description: "You build tools and automations that extend AI capabilities into real products and pipelines.",
    nextSteps: [
      "Build a system with memory: Not just stores data — uses historical output to inform future output.",
      "Design an agent architecture: Multiple tools passing context to each other. Define what each is responsible for and what it hands off.",
      "Write a standing instructions document: Encode your domain expertise so the AI knows what good looks like for your specific context before you say a word. Most tools support this — use it.",
    ],
  },
  {
    name: "Integrator",
    range: [35, 46],
    percentile: 98,
    description: "You operate at the frontier — integrating AI at an architectural level across systems, teams, and strategy.",
    nextSteps: [
      "You're in rare company: Focus on depth over breadth. The next step isn't a new tool — it's systematising the judgement layer so others can operate within what you've built.",
      "Consider sharing your framework: The most valuable thing you can do at this level is make your approach legible to others. Document it. Teach it.",
      "Identify one more manual decision to systematise: There's always one. Find the decision you still make manually that the system should be making, and build it.",
    ],
  },
];

export function getLevel(score) {
  return levels.find((l) => score >= l.range[0] && score <= l.range[1]) ?? levels[0];
}

export const MAX_SCORE = 46;
