# AEO/LLM SEO Research Findings

Based on comprehensive research from official documentation and community resources.

---

## 1. llms.txt Standard (Official Spec)

**Source:** https://llmstxt.org | https://github.com/AnswerDotAI/llms-txt

### Key Findings:

The `llms.txt` standard is designed for **inference time** (when users ask LLMs questions), not just training.

### Best Practices You Should Implement:

#### A. llms.txt Format (You have this ✅)
- H1 with site name
- Blockquote summary
- H2 sections with file lists
- "Optional" section for secondary content

#### B. `.md` Versions of Pages (🔴 MISSING)
The spec recommends providing **markdown versions** of your pages:
- Add `.md` to any URL to get LLM-friendly content
- Example: `https://sameerkhan.me/blog/gpt-5-2-technical-review.md`

#### C. llms-ctx.txt and llms-ctx-full.txt (🔴 CONSIDER ADDING)
Expanded versions with URL contents inline:
- `llms-ctx.txt` - Core content only
- `llms-ctx-full.txt` - Full content with optional sections

### Directories to Submit Your Site:
- https://llmstxt.site/
- https://directory.llmstxt.cloud/
- https://github.com/thedaviddias/llms-txt-hub (648 stars!)

---

## 2. Additional AI Bots Discovered

From Dark Visitors and research, these notable bots were found:

### Already Added in robots.txt ✅
- OpenAI: GPTBot, ChatGPT-User, OAI-SearchBot, ChatGPT Agent, Operator
- Anthropic: ClaudeBot, Claude-Web, Claude-User
- Google: Google-Extended, GoogleOther, Gemini-Deep-Research, Google-NotebookLM
- Apple: Applebot, Applebot-Extended
- Amazon: Amazonbot, AmazonBuyForMe, NovaAct
- And 40+ more...

### Notable Additions from Research:
| Bot | Purpose | Provider |
|-----|---------|----------|
| Claude-SearchBot | Claude's search feature | Anthropic |
| NotebookLM | Direct user access | Google |
| Cloudflare-AutoRAG | Cloudflare AI Gateway | Cloudflare |
| bedrockbot | AWS Bedrock | Amazon |
| PetalBot | Petal Search (Chinese) | Petal |

---

## 3. Schema.org Speakable Specification

**Source:** https://schema.org/speakable

### What It Does:
Indicates sections of a webpage that are appropriate for **text-to-speech conversion** by voice assistants.

### Implementation (You have basic version ✅):
```json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".quick-answer", "article p:first-of-type"]
  }
}
```

### Enhancement - Use XPath for more precision:
```json
{
  "speakable": {
    "@type": "SpeakableSpecification",
    "xpath": [
      "/html/head/title",
      "/html/body/article/h1",
      "/html/body/article/p[1]"
    ]
  }
}
```

---

## 4. Well-Known URI Standards

**Source:** https://well-known.dev

### Relevant well-known paths for SEO/AEO:
| Path | Purpose |
|------|---------|
| `/.well-known/security.txt` | Security contact info |
| `/.well-known/trust.txt` | Trust relationships |
| `/robots.txt` | Crawler instructions |
| `/sitemap.xml` | Page listing |
| `/llms.txt` | LLM-friendly content (emerging) |
| `/llms-full.txt` | Extended LLM content |

### security.txt (Recommended for trust signals)
Create `/.well-known/security.txt` for security researcher contact:
```
Contact: mailto:khansam@sonoma.edu
Expires: 2026-12-31T23:59:00.000Z
Preferred-Languages: en
Canonical: https://sameerkhan.me/.well-known/security.txt
```

---

## 5. Jina Reader Integration

**Source:** https://github.com/jina-ai/reader

Jina Reader converts URLs to LLM-friendly format:
- `https://r.jina.ai/https://sameerkhan.me` → Clean markdown
- `https://s.jina.ai/sameer+khan+software+engineer` → Search results

### Why This Matters:
Many AI tools use Jina Reader to fetch web content. Ensuring your site renders cleanly for Jina improves AI visibility.

### Test Your Site:
```bash
curl https://r.jina.ai/https://sameerkhan.me/blog/gpt-5-2-technical-review
```

---

## 6. AI Model Training Data Opt-In Signals

### Key Insight from Research:
Some crawlers have separate bots for **training** vs **inference**:

| Provider | Training Bot | Inference Bot |
|----------|-------------|---------------|
| Apple | Applebot-Extended | Applebot |
| Google | Google-Extended | Googlebot |
| OpenAI | GPTBot | ChatGPT-User, OAI-SearchBot |
| Anthropic | ClaudeBot | Claude-User |

**Your robots.txt allows all of these** ✅

---

## 7. llms-txt-hub Directory Submission

**Source:** https://github.com/thedaviddias/llms-txt-hub

### Why Submit:
- 648+ GitHub stars
- Curated directory of llms.txt implementations
- Increases discoverability for AI systems
- Backlink from high-authority GitHub repo

### How to Submit:
1. Fork the repository
2. Add your site to the appropriate category
3. Submit a pull request

### Your Entry Would Be:
```markdown
- ![Sameer Khan favicon](https://www.google.com/s2/favicons?domain=sameerkhan.me&size=128) **[Sameer Khan](https://sameerkhan.me)** - Full-Stack Software Engineer portfolio with technical blog covering AI model reviews, React tutorials, and developer tools comparisons. <sub>[llms.txt](https://sameerkhan.me/llms.txt) • [llms-full.txt](https://sameerkhan.me/llms-full.txt)</sub>
```

---

## 8. Additional Bots to Consider Adding

From the ai.robots.txt project, these are worth adding:

```
# Cloudflare AI
User-agent: Cloudflare-AutoRAG
Allow: /

# Additional Anthropic
User-agent: Claude-SearchBot
Allow: /

# AWS
User-agent: bedrockbot
Allow: /

# Jina AI (Reader service)
User-agent: JinaAI
Allow: /

# Other AI Search
User-agent: PetalBot
Allow: /

# WebPilot (ChatGPT plugin)
User-agent: WebPilot
Allow: /

# Google Firebase Hosting
User-agent: Google-Firebase
Allow: /
```

---

## 9. Content Freshness Signals

### Best Practices (Vercel + llmstxt.org):
1. **lastModified in sitemap** ✅ (You have this)
2. **Updated dates on articles** ✅ (You have this)
3. **Regular refresh cadence** - Review content at 30, 90, 180 days
4. **Canonical URLs** ✅ (You have this)

---

## 10. Action Items Summary

### Immediate (High Impact):
- [ ] Add more bots to robots.txt (Claude-SearchBot, bedrockbot, etc.)
- [ ] Submit site to llms-txt-hub directory
- [ ] Submit site to llmstxt.site and directory.llmstxt.cloud

### Medium Term:
- [ ] Consider adding `.md` versions of key blog posts
- [ ] Create `/.well-known/security.txt`
- [ ] Test site with Jina Reader

### Low Priority (Nice to Have):
- [ ] Create llms-ctx.txt (expanded version with inline content)
- [ ] Add XPath-based speakable schema for more precision

---

## Resources

- **llms.txt Official Spec:** https://llmstxt.org
- **llms-txt-hub Directory:** https://github.com/thedaviddias/llms-txt-hub
- **Dark Visitors (Bot Database):** https://darkvisitors.com/agents
- **ai.robots.txt Project:** https://github.com/ai-robots-txt/ai.robots.txt
- **Schema.org Speakable:** https://schema.org/speakable
- **Jina Reader:** https://jina.ai/reader
- **OpenAI Bots:** https://platform.openai.com/docs/bots
- **Apple Applebot:** https://support.apple.com/en-us/119829
- **Vercel LLM SEO Guide:** https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search
