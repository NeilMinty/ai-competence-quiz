// Score ranges based on max 46 (7 regular × 4 + 3 weighted × 4 × 1.5)
// Weighted questions: Q1, Q3, Q8

export const levels = [
  {
    name: "Prompted",
    range: [0, 16],
    percentile: 25,
    description: "You're using AI reactively — prompting when needed but not yet building systematic habits.",
    nextSteps: [
      "Build your first dedicated prompt: Pick one repeatable task and write a prompt for it. Save it somewhere you'll actually reuse it — a Notion page, a Google Doc, or a simple text file. Use it every time instead of starting from scratch.",
      "Set up persistent context: Add three facts about how you work and what good output looks like for you into your AI tool's memory or system prompt. ChatGPT has a Memory setting, Claude has a similar feature — find it and use it.",
      "Ship something without writing code: Use a natural language app builder — Lovable, Base44, or Bolt — describe what you want and deploy it. Ship it even if it's imperfect.",
    ],
  },
  {
    name: "Practitioner",
    range: [17, 22],
    percentile: 55,
    description: "You apply AI consistently in your workflows and are developing reliable prompting instincts.",
    nextSteps: [
      "Redesign one workflow around AI: Map a weekly workflow — use Miro, Notion, or pen and paper — and identify every step where AI could do it or improve it. Redesign around those steps, not around the original process.",
      "Learn to read code: You don't need to write it — you need to know if it's right. Open Cursor, VS Code with Copilot, or just your usual AI chat tool and spend time reading what it generates. Ask it to explain every decision you don't understand.",
      "Start a prompt library: Every prompt that works well, saved and categorised. Use Notion, Obsidian, or even a shared Google Doc. You'll reuse patterns constantly and the library compounds over time.",
    ],
  },
  {
    name: "Architect",
    range: [23, 28],
    percentile: 80,
    description: "You design AI-augmented workflows and think in systems, not just individual prompts.",
    nextSteps: [
      "Deploy something real: Get an app to a real URL someone else can access. Use Vercel, Railway, or Render — all have free tiers. Learn what environment variables are and how to keep credentials out of your code.",
      "Audit a codebase you've built: Use an AI coding assistant — Cursor, Claude Code, or GitHub Copilot — to review it. Read the output and act on the criticals. This will expose gaps you didn't know you had.",
      "Build one automated process: Something that runs on a schedule without you triggering it. Use Zapier, Make, or n8n. Prove the system works while you're not watching.",
    ],
  },
  {
    name: "Builder",
    range: [29, 34],
    percentile: 93,
    description: "You build tools and automations that extend AI capabilities into real products and pipelines.",
    nextSteps: [
      "Build a system with memory: Not one that just stores data — one that uses historical output to inform future output. Explore Mem0 for lightweight memory layers, or implement your own with a vector store like Pinecone or Supabase pgvector.",
      "Design an agent architecture: Multiple tools passing context to each other. Use n8n, LangChain, or direct API chaining. Define what each component is responsible for, what it hands off, and where human review sits.",
      "Write a standing instructions document: Encode your domain expertise so the AI knows what good looks like for your specific context before you say a word. In Claude Code this is CLAUDE.md, in ChatGPT it's custom instructions, in most APIs it's the system prompt. Use it in every project.",
    ],
  },
  {
    name: "Integrator",
    range: [35, 46],
    percentile: 98,
    description: "You operate at the frontier — integrating AI at an architectural level across systems, teams, and strategy.",
    nextSteps: [
      "Systematise the judgement layer: The next step isn't a new tool — it's encoding the decisions that currently live only in your head so others can operate within what you've built. Document your criteria, your thresholds, your override conditions.",
      "Make your framework legible: Write it up — a long-form post, an internal playbook, a talk. Tools like Notion, Substack, or a simple PDF work fine. The act of articulating it will sharpen it, and sharing it will compound your reach.",
      "Identify one more manual decision to systematise: There's always one. Find the decision you still make manually that the system should be making — and build it. LLM-as-judge patterns, confidence scoring, and structured outputs are your toolkit here.",
    ],
  },
];

export function getLevel(score) {
  return levels.find((l) => score >= l.range[0] && score <= l.range[1]) ?? levels[0];
}

export const MAX_SCORE = 46;
