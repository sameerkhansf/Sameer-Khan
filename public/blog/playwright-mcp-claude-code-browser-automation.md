---
title: "Playwright MCP Setup Guide for Claude Code"
description: "How to set up Playwright MCP with Claude Code for AI-powered browser automation. Control Chrome, fill forms, scrape data, and automate web testing with natural language commands."
date: "2025-12-14"

author: "Sameer Khan"
tags: ["Claude Code","Playwright","MCP","Browser Automation","AI","Developer Tools"]
category: "Developer Tools"


---

# Playwright MCP Setup Guide for Claude Code

How to set up Playwright MCP with Claude Code for AI-powered browser automation. Control Chrome, fill forms, scrape data, and automate web testing with natural language commands.

**Published:** December 13, 2025

**Author:** Sameer Khan
**Category:** Developer Tools
**Reading Time:** 5 min read
**Word Count:** 844

---


I've been using Claude Code for months, but last week I discovered something that genuinely changed my workflow: browser automation through Playwright MCP.

Instead of writing Playwright scripts manually, I can now just tell Claude "open the browser, navigate to my staging site, fill out the signup form, and tell me if there are any console errors."

It does exactly that. Here's how to set it up.

## The Setup (One Command)

```bash
claude mcp add playwright npx '@playwright/mcp@latest'
```

That's it. Restart Claude Code and you now have browser automation.

**What this does:** Registers Playwright as an MCP (Model Context Protocol) server. Claude Code can now spawn and control a Chrome browser window.

---

## What You Can Actually Do

Here's what made me realize this was useful—not the documentation, but actually using it.

### 1. Visual Debugging

**Before:** Opening DevTools, clicking around, copying console errors manually.

**After:** "Open my localhost:3000, click the submit button, and show me any console errors."

Claude opens the browser, interacts with it, and reports back. The browser window is visible so you can watch what's happening.

### 2. Form Testing

**Before:** Manually filling out forms to test validation.

**After:** "Go to /signup, try submitting with an empty email, then with an invalid email, then with a valid one. Tell me what error messages appear."

This caught a regression I missed—my error message wasn't showing on the second invalid attempt.

### 3. Authentication Flows

**Before:** Either writing complex Playwright scripts or logging in manually every time.

**After:** The browser window is visible. Claude navigates to the login page, you type your credentials (Claude can see the page but you control sensitive input), and the session persists for the rest of your Claude Code session.

This is surprisingly practical. Sessions stay authenticated while you work.

### 4. Scraping for Context

**Before:** Opening sites in another tab, copying text, pasting into Claude.

**After:** "Fetch the API documentation from [url] and summarize the rate limits."

Claude reads the page and extracts what you need.

---

## The Actual Tools Available

Playwright MCP gives Claude 25 browser tools. You don't need to remember them—Claude picks the right ones automatically. But for reference:

| Category | Tools |
|----------|-------|
| **Navigation** | Navigate, go back, wait for load |
| **Interaction** | Click, type, fill forms, select options |
| **Screenshots** | Full page, element-specific, viewport |
| **Data** | Get console logs, network requests, page content |
| **Tabs** | Open, close, switch between tabs |

The snapshot tool is particularly useful—it captures the page's accessibility tree, which Claude uses to understand what's on screen.

---

## Configuration Details

The `claude mcp add` command stores settings in `~/.claude.json`:

```json
{
  "projects": {
    "/your/project/path": {
      "mcpServers": {
        "playwright": {
          "command": "npx",
          "args": ["@playwright/mcp@latest"]
        }
      }
    }
  }
}
```

It's project-specific. Different projects can have different MCP configurations.

---

## Tips From Actually Using This

### Mention "Playwright" Initially

On your first request, say something like "use playwright to open..." Otherwise Claude might try alternative approaches (like curl or fetching HTML directly). After the first interaction, it remembers.

### Keep the Browser Visible

Don't minimize it. Watching Claude interact with the browser helps you catch issues and understand what it's doing. Plus, you need it visible for manual authentication.

### Use Snapshots Over Screenshots

Claude works better with accessibility snapshots than screenshots. The snapshot gives it structured data about the page elements, not just pixels.

### Chain Actions Naturally

You don't need separate commands. "Open the site, fill out the form with test data, submit it, wait for the response, and check if the success message appears" works as one request.

---

## When This Doesn't Make Sense

- **Heavy scraping jobs** — Use proper Playwright scripts for scale
- **Sensitive credentials** — Don't let Claude see passwords; authenticate manually
- **Complex test suites** — This is for ad-hoc automation, not replacing your test framework
- **Headless needs** — The browser is visible by design

---

## What I Use It For Now

After a week of using this:

1. **Quick smoke tests** on staging deployments
2. **Checking responsive behavior** ("resize to mobile width and screenshot the nav")
3. **Debugging user-reported issues** ("go to this URL and see if you can reproduce this")
4. **Form validation testing** across edge cases
5. **Grabbing content from docs** without leaving my terminal

It's not replacing my test suite. But it's replaced a lot of "let me just quickly check this in the browser" moments that used to break my flow.

---

## Getting Started

```bash
# Add Playwright MCP to your project
claude mcp add playwright npx '@playwright/mcp@latest'

# Restart Claude Code, then try:
# "Use playwright to open https://example.com and describe what you see"
```

The browser window will pop up, Claude will interact with it, and you'll get a response describing the page.

That's the whole setup. One command, and you have AI-controlled browser automation.

---

*Have you tried MCP integrations with Claude Code? I'm curious what other tools people are connecting—[let me know](https://x.com/sameerkhan_sf).*

