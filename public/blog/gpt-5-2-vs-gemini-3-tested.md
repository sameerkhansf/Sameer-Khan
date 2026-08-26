---
title: "GPT-5.2 vs Gemini 3: Real Coding Test Results"
description: "GPT-5.2 dropped yesterday. I put it head-to-head against Gemini 3 on real development tasks: debugging, refactoring, API design, and more. The results surprised me."
date: "2025-12-12"

author: "Sameer Khan"
tags: ["AI","GPT-5","Gemini","OpenAI","Google","Coding"]
category: "AI"


---

# GPT-5.2 vs Gemini 3: Real Coding Test Results

GPT-5.2 dropped yesterday. I put it head-to-head against Gemini 3 on real development tasks: debugging, refactoring, API design, and more. The results surprised me.

**Published:** December 11, 2025

**Author:** Sameer Khan
**Category:** AI
**Reading Time:** 6 min read
**Word Count:** 1008

---


GPT-5.2 dropped yesterday. Within hours, my Twitter feed was flooded with takes—most of them based on benchmarks, not actual usage.

So I did what any curious developer would do: I tested both models on real tasks I actually face in my day-to-day work.

Here's what I found.

## The Setup

I used the same prompts for both models, testing them on five tasks that represent actual development work:

1. **Debugging** a React hydration error
2. **Refactoring** a messy useEffect into cleaner code
3. **Designing** a REST API for a new feature
4. **Explaining** a complex TypeScript type
5. **Writing** a technical blog outline

For GPT-5.2, I used the new "Thinking" variant (the one optimized for coding). For Gemini, I used Gemini 3 Pro.

Let's see how they did.

---

## Task 1: Debug This React Hydration Error

I gave both models this error that's plagued many React developers:

```text
Error: Hydration failed because the initial UI does not match
what was rendered on the server.
```

Along with a component that uses `new Date()` in the render.

**GPT-5.2's Response:**

Immediately identified the issue: `new Date()` returns different values on server vs client. Suggested three solutions ranked by preference:

1. Move the date logic to `useEffect`
2. Use a library like `date-fns` with consistent formatting
3. Suppress hydration warnings (with a warning about why this is a band-aid)

What impressed me: It explained *why* each solution works and when to use each one.

**Gemini 3's Response:**

Also correctly identified the problem. Gave a single solution (useEffect approach) with a working code example.

**Winner: GPT-5.2** — Both got it right, but GPT-5.2's ranked solutions with trade-offs felt more like advice from a senior developer.

---

## Task 2: Refactor This Messy useEffect

I pasted a real useEffect from one of my projects—the kind with multiple concerns crammed together:

```javascript
useEffect(() => {
  fetchUserData();
  const interval = setInterval(checkNotifications, 30000);
  document.title = `${unreadCount} notifications`;
  window.addEventListener('focus', handleFocus);
  return () => {
    clearInterval(interval);
    window.removeEventListener('focus', handleFocus);
  };
}, [userId, unreadCount]);
```

**GPT-5.2's Response:**

Split it into four separate hooks:

- `useFetchUser(userId)`
- `useNotificationPolling()`
- `useDocumentTitle(unreadCount)`
- `useFocusHandler(handleFocus)`

Then showed me how to compose them. The code was clean, each hook had a single responsibility, and it even suggested extracting them to a `/hooks` folder.

**Gemini 3's Response:**

Also split into multiple useEffects within the same component. Correct approach, but kept everything inline rather than extracting to custom hooks.

**Winner: GPT-5.2** — The custom hooks approach is what I'd actually want in a real codebase.

---

## Task 3: Design a REST API for User Notifications

I asked both to design an API for a notification system with these requirements:

- List notifications (paginated)
- Mark as read (single and bulk)
- Delete notifications
- Real-time updates via WebSocket

**GPT-5.2's Response:**

```text
GET    /api/notifications?page=1&limit=20&unread=true
GET    /api/notifications/:id
PATCH  /api/notifications/:id          { read: true }
PATCH  /api/notifications/bulk         { ids: [...], read: true }
DELETE /api/notifications/:id
DELETE /api/notifications/bulk         { ids: [...] }

WebSocket: /ws/notifications
Events: notification.new, notification.read, notification.deleted
```

Also included notes on cursor-based pagination for scale and rate limiting considerations.

**Gemini 3's Response:**

Similar structure but used `PUT` instead of `PATCH` for updates and didn't mention WebSocket event naming conventions.

**Winner: GPT-5.2** — The attention to real-world concerns (cursor pagination, rate limiting) made this feel production-ready.

---

## Task 4: Explain This TypeScript Type

I threw a complex generic at both:

```typescript
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
```

**GPT-5.2's Response:**

Started with a one-sentence summary: "DeepPartial makes every property in an object optional, recursively—including nested objects."

Then walked through it step by step:

1. What `T extends object` checks
2. How the mapped type works
3. Why the recursion matters
4. A practical example with a User type

Ended with when you'd actually use this (form state, patch updates).

**Gemini 3's Response:**

Technically correct explanation but more academic. Felt like reading documentation rather than having someone explain it to me.

**Winner: GPT-5.2** — The practical framing and step-by-step breakdown was more useful.

---

## Task 5: Write a Blog Post Outline

I asked both to outline a technical blog post about "Building a Real-Time Collaborative Editor."

**GPT-5.2's Response:**

```text
1. Hook: "Google Docs feels like magic. Let's build that magic."
2. The Problem: Why real-time is hard (conflicts, latency, state)
3. CRDT vs OT: When to use each (with a decision flowchart)
4. Building It: Step-by-step with Yjs + React
5. The Gotchas: What I learned the hard way
6. Demo: Working CodeSandbox
7. What's Next: Presence, cursors, comments
```

**Gemini 3's Response:**

More traditional structure (Introduction, Background, Implementation, Conclusion). Technically complete but less engaging.

**Winner: GPT-5.2** — The hook and "gotchas" section showed understanding of what makes technical content readable.

---

## The Final Score

| Task | Winner |
| ------ | -------- |
| Debugging | GPT-5.2 |
| Refactoring | GPT-5.2 |
| API Design | GPT-5.2 |
| TypeScript Explanation | GPT-5.2 |
| Blog Outline | GPT-5.2 |

**GPT-5.2: 5 | Gemini 3: 0**

This surprised me. I expected it to be closer.

## What This Actually Means

Here's my takeaway after a day of testing:

**GPT-5.2 feels like a senior developer.** It doesn't just answer—it considers trade-offs, suggests best practices, and thinks about real-world implications.

**Gemini 3 feels like a very smart junior.** Technically correct, but missing the context and experience that makes advice actionable.

That said, Gemini 3 is still excellent. For straightforward tasks, you won't notice a difference. The gap shows up on nuanced, open-ended problems.

## Should You Switch?

If you're using Gemini 3 and happy with it: probably not worth switching for small gains.

If you're making a fresh choice today: GPT-5.2 Thinking is my new default for coding tasks.

If you want the best of both: Use GPT-5.2 for complex reasoning, Gemini for quick lookups and multimodal tasks (it's still better with images).

---

*This is one developer's experience on day one. Your mileage may vary. I'd love to hear what you're seeing—find me on [Twitter](https://x.com/sameerkhan_sf).*

