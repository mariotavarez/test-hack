# Supabase — Style Reference
> Developer infrastructure in a quiet dark shell with bright green signals and low-friction surfaces.

**Theme:** dark

The Supabase design language is best understood as a system, not just a palette. Developer infrastructure in a quiet dark shell with bright green signals and low-friction surfaces. It should guide typography, spacing, interaction emphasis, surfaces, and component behavior so the generated UI feels intentional from the first commit instead of visually generic.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Carbon | `#0f1115` | `--color-carbon` | Background |
| Snow | `#f6f7f8` | `--color-snow` | Text |
| Supabase Green | `#3ecf8e` | `--color-supabase-green` | Accent |
| Cloud Gray | `#94a3b8` | `--color-cloud-gray` | Muted |
| Shell Border | `#20242d` | `--color-shell-border` | Border |

## Tokens — Typography

### Inter · `--font-primary`
- **Substitute:** system-ui
- **Suggested weights:** 400, 500, 600, 700
- **Role:** Primary typeface for body copy, labels, buttons, and the main interface rhythm.

### JetBrains Mono · `--font-mono`
- **Substitute:** ui-monospace
- **Suggested weights:** 400, 500
- **Role:** Monospace support for code, tokens, paths, commands, and dense technical UI.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| body | 16px | 1.5 | -0.01em | `--text-body` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** balanced

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 16 | 16px | `--spacing-16` |

### Border Radius

| Element | Value |
|---------|-------|
| default | 10px |
| pill | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| card | `0 14px 34px rgba(0, 0, 0, 0.24)` | `--shadow-card` |

### Layout

- **Section gap:** 48px
- **Card padding:** 16px
- **Element gap:** 12px

## Components

### Primary Filled Button
**Role:** Main call to action

Use Supabase Green (#3ecf8e) as the action surface with Carbon (#0f1115) as the surrounding canvas. The primary button should read as the clearest action in a section and inherit the system's strongest radius token where buttons are meant to feel intentional rather than neutral.

### Secondary Outline Button
**Role:** Secondary action

Use a transparent background, a border based on Shell Border (#20242d), and text derived from Snow (#f6f7f8). The goal is hierarchy without losing clarity.

### Surface Card
**Role:** Grouped content block

Cards should sit on Carbon with separation created by subtle borders, controlled shadows, or surface shifts, not by noisy gradients. Text hierarchy should move from Snow to Cloud Gray to communicate emphasis.

### Input / Field Row
**Role:** User input and configuration

Inputs should remain understated and readable, using the system's border token and reserving Supabase Green for focus, validation, and active states rather than constant decoration.

### Content Hero
**Role:** First impression section

Hero blocks should combine the display end of the type scale with generous vertical spacing and one clear primary action. The visual weight belongs to strong copy, product surface, or content framing, not ornamental UI chrome.

### Navigation / Utility Row
**Role:** Persistent orientation and lightweight actions

Navigation should feel structurally clear and visually light. Labels should rely on typography and spacing first, using borders, pills, or filled surfaces only when a state needs to be emphasized.

## Do's and Don'ts

### Do
- Use Snow (#f6f7f8) for the strongest copy hierarchy and Cloud Gray (#94a3b8) for secondary narrative support.
- Reserve Supabase Green (#3ecf8e) for interaction, focus, and emphasis so the accent remains meaningful.
- Keep spacing decisions aligned to the extracted spacing scale instead of inventing one-off gaps.
- Let component radius, shadow, and surface tokens determine tone before adding decorative treatments.
- Use JetBrains Mono selectively for code, file paths, commands, and technical affordances.

### Don't
- Do not treat every card, pill, or button as equally important; hierarchy should remain visible at a glance.
- Avoid introducing extra colors that sit outside the system palette unless a deliberate product area needs them.
- Do not overuse heavy shadows if a subtle border or surface shift communicates the layer more clearly.
- Avoid mixing typography rhythms that conflict with the extracted type scale.
- Do not let interactive accents compete with the primary content narrative.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Carbon | `#0f1115` | Background surface |

## Elevation

- **Shadow Card:** `0 14px 34px rgba(0, 0, 0, 0.24)`

## Imagery

Imagery should support clarity instead of spectacle. Screenshots, diagrams, and product surfaces should feel precise, dense enough to be useful, and visually subordinate to the information hierarchy.

## Layout

This system works best when sections keep a clear vertical rhythm and components are spaced with restraint. The layout should highlight content, system clarity, and navigation flow before decorative expression. Use the section gap and card padding tokens consistently so the scaffold feels deliberate across landing sections, dashboards, settings surfaces, and generated internal tools.

## Similar Brands

- **Linear** — disciplined dark-mode hierarchy with strong accent restraint.
- **Vercel** — clean technical presentation with consistent spacing and sharp interaction emphasis.
- **GitHub** — developer-native UI language with practical density and restrained decoration.

## Agent Prompt Guide

Quick Color Reference:
- Text Primary: #f6f7f8 (Snow)
- Background Canvas: #0f1115 (Carbon)
- Call To Action: #3ecf8e (Supabase Green)
- Border / Divider: #20242d (Shell Border)

Example Component Prompts:
1. Create a hero section with Carbon background (#0f1115), a large headline in Inter, body copy in Cloud Gray, and a primary CTA using Supabase Green.
2. Design a settings panel with grouped cards, compact labels in Inter, technical values in JetBrains Mono, and separators based on Shell Border.
3. Build a data surface with restrained chrome, one clear primary action, and spacing that follows the system scale instead of ad hoc values.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-carbon: #0f1115;
  --color-snow: #f6f7f8;
  --color-supabase-green: #3ecf8e;
  --color-cloud-gray: #94a3b8;
  --color-shell-border: #20242d;
  --font-primary: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --radius-default: 10px;
  --radius-pill: 9999px;
  --shadow-card: 0 14px 34px rgba(0, 0, 0, 0.24);
}
```

### Tailwind v4

```css
@theme {
  --color-carbon: #0f1115;
  --color-snow: #f6f7f8;
  --color-supabase-green: #3ecf8e;
  --color-cloud-gray: #94a3b8;
  --color-shell-border: #20242d;
  --font-primary: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --radius-default: 10px;
  --radius-pill: 9999px;
}
```

## References

- [Anthropic Claude Code Skills](https://docs.anthropic.com/en/docs/claude-code/skills)

