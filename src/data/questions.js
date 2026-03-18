// Questions 1, 3, and 8 are weighted 1.5x (index 0, 2, 7)
export const WEIGHTED_QUESTIONS = [0, 2, 7];

export const questions = [
  {
    id: 1,
    text: "When an AI gives you an output you're not sure about, what do you typically do?",
    options: [
      { label: "A", text: "Accept it if it looks right", score: 1 },
      { label: "B", text: "Google it to check", score: 2 },
      { label: "C", text: "Ask the AI to explain its reasoning and push back with my own domain knowledge", score: 3 },
      { label: "D", text: "I've built guardrails into my AI setup — memory, reasoning checks, and signal strength validation are pre-configured so output is already stress-tested before I see it", score: 4 },
    ],
  },
  {
    id: 2,
    text: "How do you use AI in a typical working day?",
    options: [
      { label: "A", text: "Occasionally, when I remember to", score: 1 },
      { label: "B", text: "For specific repeatable tasks I've identified", score: 2 },
      { label: "C", text: "As a core part of how I work across most tasks", score: 3 },
      { label: "D", text: "It's embedded in systems that run without me prompting them", score: 4 },
    ],
  },
  {
    id: 3,
    text: "Which best describes your prompting approach?",
    options: [
      { label: "A", text: "I describe what I want and take what comes back", score: 1 },
      { label: "B", text: "I iterate until I get something usable", score: 2 },
      { label: "C", text: "I give context, constraints, and examples upfront", score: 3 },
      { label: "D", text: "I have systemised prompt frameworks with memory and controls — the AI operates within a pre-defined process rather than starting from scratch each time", score: 4 },
    ],
  },
  {
    id: 4,
    text: "Have you built anything with AI that someone else uses?",
    options: [
      { label: "A", text: "No", score: 1 },
      { label: "B", text: "I've shared outputs but not built tools", score: 2 },
      { label: "C", text: "Yes — a simple app or automation", score: 3 },
      { label: "D", text: "Yes — production systems with memory, learning loops, and controls that improve over time without manual intervention", score: 4 },
    ],
  },
  {
    id: 5,
    text: "When a tool you're using hits a limitation, what do you do?",
    options: [
      { label: "A", text: "Accept the limitation and work around it manually", score: 1 },
      { label: "B", text: "Try a different prompt", score: 2 },
      { label: "C", text: "Switch to a different tool better suited to the task", score: 3 },
      { label: "D", text: "My systems are designed with fallbacks and tool orchestration built in — limitations are handled automatically rather than discovered manually", score: 4 },
    ],
  },
  {
    id: 6,
    text: "How do you handle data and credentials when building with AI tools?",
    options: [
      { label: "A", text: "I haven't built anything that involves this", score: 1 },
      { label: "B", text: "I'm aware it matters but haven't thought it through properly", score: 2 },
      { label: "C", text: "I use environment variables and keep credentials out of code", score: 3 },
      { label: "D", text: "I manage separate dev and production environments with proper secret management", score: 4 },
    ],
  },
  {
    id: 7,
    text: "Which best describes how you think about AI tool selection?",
    options: [
      { label: "A", text: "I use whatever I've heard of", score: 1 },
      { label: "B", text: "I have one or two tools I default to", score: 2 },
      { label: "C", text: "I choose tools based on the specific task and output type", score: 3 },
      { label: "D", text: "I've designed an integrated tool architecture where each component has a defined role, memory is shared across tools, and the system improves with use", score: 4 },
    ],
  },
  {
    id: 8,
    text: "Have you ever identified an error in AI output that would have caused a real problem if you'd missed it?",
    options: [
      { label: "A", text: "Not that I know of", score: 1 },
      { label: "B", text: "Possibly, but I'm not sure", score: 2 },
      { label: "C", text: "Yes, occasionally", score: 3 },
      { label: "D", text: "I don't rely on catching errors manually — validation, cross-checking and signal strength thresholds are built into the process before output reaches me", score: 4 },
    ],
  },
  {
    id: 9,
    text: "Which best describes your relationship with code?",
    options: [
      { label: "A", text: "I don't work with code at all", score: 1 },
      { label: "B", text: "I can read it but not write it", score: 2 },
      { label: "C", text: "I can direct AI to write and modify code and understand what it produces", score: 3 },
      { label: "D", text: "I work directly in codebases with AI as a precision tool, with automated pipelines, version control, and environment management", score: 4 },
    ],
  },
  {
    id: 10,
    text: "What does AI enable you to do that you couldn't do before?",
    options: [
      { label: "A", text: "Save time on tasks I was already doing", score: 1 },
      { label: "B", text: "Do things I'd have needed to hire someone for", score: 2 },
      { label: "C", text: "Build systems that compound — each one making the next faster", score: 3 },
      { label: "D", text: "Operate an integrated AI system that learns, improves and runs autonomously — my role is architecture and domain expertise, not execution", score: 4 },
    ],
  },
];
