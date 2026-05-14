---
name: test-triage
description: "Interprets failing test output and proposes the smallest likely fix path."
---

# Test Triage
> Standard: Testing workflow

## When To Use
Interprets failing test output and proposes the smallest likely fix path.

## Workflow
- Group failures by root cause instead of treating each assertion independently.
- Distinguish flaky failures from deterministic regressions.
- Recommend the minimum code or test change required to restore trust.

## References

- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

