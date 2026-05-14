# .opencode Automation

This project follows a Claude-style automation structure: skills live in their own folders with a dedicated `SKILL.md`, while agents, sub-agents, commands, and rules live as focused single-file definitions. This root is exported under `.opencode` for tool compatibility.

## Selected Modules

- **skills**: PR Summary, Commit Message, Review Diff, Test Triage, Playwright E2E, Security Review
- **agents**: Code Reviewer, Test Engineer, PR Manager, Security Engineer
- **subAgents**: Diff Reviewer, Test Runner
- **commands**: /pr, /commit, /review, /test
- **rules**: Commit Convention, PR Standard, Testing Policy, Review Expectations, Architecture Principles

## Conventions

- Skills use one directory per skill with `SKILL.md` as the canonical entry file.
- Agents and sub-agents use single Markdown files with YAML frontmatter.
- Commands are explicit workflow entry points.
- Rules are persistent standards stored as `.mdc` guidance.
- There is intentionally no single root `skills.md`; the standard pattern is one skill per folder plus an index file.
