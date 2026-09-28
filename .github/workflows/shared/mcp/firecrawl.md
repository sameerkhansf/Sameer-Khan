---
# Firecrawl hosted MCP, same shape as gh-aw's own shared/mcp/tavily.md.
# Why an MCP instead of web-fetch: gh-aw #63474 "Copilot and the built-in
# web-fetch and web-search tools can access network resources outside
# configured firewall restrictions". Here the firewall allows only the MCP
# host (added by the compiler); Firecrawl fetches pages server-side.
# Docs: https://docs.firecrawl.dev/mcp-server
mcp-servers:
  firecrawl:
    type: http
    url: "https://mcp.firecrawl.dev/v2/mcp"
    headers:
      Authorization: "Bearer ${{ secrets.FIRECRAWL_API_KEY }}"
    # Read-only research tools only (from the server's tools/list, 2026-09-28).
    # Excluded: monitor_* (create/update/delete), interact (live browser),
    # crawl and agent (multi-page, credit-heavy), feedback, credit_usage.
    allowed:
      - firecrawl_search
      - firecrawl_scrape
      - firecrawl_map
      - firecrawl_parse
      - firecrawl_research_inspect_paper
      - firecrawl_research_read_paper
      - firecrawl_developer_search
---
