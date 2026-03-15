const skills = [
  {
    title: "Front-end Development",
    tag: "UI systems",
    text: "Experience in building application interfaces, component systems, and user-facing workflows.",
    points: ["Component-based UI", "Responsive layouts", "Interaction design"]
  },
  {
    title: "Back-end Engineering",
    tag: "Services",
    text: "Experience across APIs, service integration, application logic, and production-oriented backend workflows.",
    points: ["API design", "Service orchestration", "Data flow and integration"]
  },
  {
    title: "AI Infrastructure",
    tag: "LLM systems",
    text: "Interest in LLM workflows, model integration, prompt pipelines, and production AI system design.",
    points: ["Inference workflows", "Evaluation loops", "Cost and latency tradeoffs"]
  },
  {
    title: "System Integration",
    tag: "Platform",
    text: "Focus on connecting tools, services, and internal systems into stable end-to-end workflows.",
    points: ["Cross-system design", "Interface contracts", "Operational clarity"]
  },
  {
    title: "Responsible AI",
    tag: "Governance",
    text: "Focus on review loops, safe deployment patterns, transparency, and operational safeguards in AI systems.",
    points: ["Human review", "Risk awareness", "Trust and auditability"]
  },
  {
    title: "Engineering Strategy",
    tag: "Systems thinking",
    text: "Interest in how software engineering is changing through AI-assisted development, evaluation, and system design.",
    points: ["Architecture", "Reliability", "Technical decision-making"]
  }
];

const projects = [
  {
    title: "AI Operations Dashboard",
    tag: "Internal tools",
    text: "Portfolio concept for tracking prompt quality, latency, token usage, and fallback behavior in LLM-based systems.",
    points: ["Operational visibility", "Model evaluation", "Cost monitoring"]
  },
  {
    title: "Agent Workflow Workbench",
    tag: "AI platform",
    text: "Portfolio concept for managing agent tasks with tool access, approval steps, and human review.",
    points: ["Agent orchestration", "Approval flows", "Tool integration"]
  },
  {
    title: "Travel Systems Platform",
    tag: "Product systems",
    text: "Portfolio concept for connecting customer workflows, service logic, and decision systems in travel software.",
    points: ["Customer workflows", "Service design", "Full-stack implementation"]
  }
];

const notes = [
  {
    title: "Paradigm shift",
    text: "AI is reducing the cost of routine implementation work and increasing the value of system design, review, and operational judgment."
  },
  {
    title: "Skills that remain durable",
    text: "Architecture, security, reliability, testing, evaluation, and business-context decisions remain high-value engineering skills."
  },
  {
    title: "AI-native engineering",
    text: "Modern software workflows increasingly involve coding agents, parallel task execution, verification loops, and tool orchestration."
  },
  {
    title: "Production reality",
    text: "Incidents, debugging, observability, governance, and integration across teams remain difficult to automate fully."
  }
];

const essayParagraphs = [
  "Artificial intelligence has changed software development by reducing the amount of manual effort required for routine coding tasks. Boilerplate generation, refactoring, test scaffolding, and first-pass implementation can now be done much faster with AI-assisted tools. This has shifted the role of software engineers away from pure code production and toward system-level judgment.",
  "The main change is that code is becoming cheaper while decision-making is becoming more valuable. Writing code is still important, but the market increasingly rewards engineers who can define problems clearly, structure systems well, and verify that software works correctly in production. AI can generate components, but it does not remove the need for architecture, reliability, security, and business-aware tradeoffs.",
  "Software engineering is therefore moving from implementation-heavy work to orchestration-heavy work. Engineers are expected to work with AI systems, review outputs, define constraints, and manage quality. Instead of only asking whether code was written, teams now ask whether the right system was built, whether it is safe, and whether it can scale.",
  "This shift makes system design more important. Service boundaries, data models, trust zones, observability, failure handling, and integration patterns still require human judgment. The same is true for production operations. Incident response, debugging, resilience, and root-cause analysis remain critical parts of engineering work.",
  "Security and responsible AI are also becoming central. Faster software delivery creates more room for mistakes if systems are not designed carefully. Developers need stronger knowledge in authentication, authorization, secrets handling, dependency risk, prompt injection, agent permissions, and auditability.",
  "Evaluation is another core skill in the AI era. When AI contributes to implementation, engineers need strong testing and validation practices. This includes regression testing, acceptance criteria, model evaluation, and behavioral checks for AI-assisted workflows.",
  "The most important skills for software developers now include AI-native workflow design, system design, cloud and platform fundamentals, security, reliability, testing, and communication. Product sense and business understanding also matter more because engineers are expected to make better prioritization and system tradeoff decisions.",
  "AI is not removing software engineering. It is changing where the value sits. The role is moving upward from writing code alone to shaping systems, validating outcomes, and governing technology that affects users and organizations."
];

const skillGrid = document.querySelector("#skill-grid");
const projectGrid = document.querySelector("#project-grid");
const notesGrid = document.querySelector("#notes-grid");
const essayBody = document.querySelector("#essay-body");

function renderSkills() {
  skillGrid.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card">
          <span class="tag">${skill.tag}</span>
          <h3>${skill.title}</h3>
          <p>${skill.text}</p>
          <ul>${skill.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <span class="tag">${project.tag}</span>
          <h3>${project.title}</h3>
          <p>${project.text}</p>
          <ul>${project.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderNotes() {
  notesGrid.innerHTML = notes
    .map(
      (note) => `
        <article class="note-card">
          <h3>${note.title}</h3>
          <p>${note.text}</p>
        </article>
      `
    )
    .join("");
}

function renderEssay() {
  essayBody.innerHTML = essayParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

renderSkills();
renderProjects();
renderNotes();
renderEssay();
