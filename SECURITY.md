# Security Policy

## Reporting a Vulnerability

Please report security issues privately via
[GitHub private vulnerability reporting](https://github.com/sameerkhansf/Sameer-Khan/security/advisories/new)
rather than opening a public issue.

You can expect an initial response within a few days. Please include steps to
reproduce and the affected page or workflow.

## Scope

This repository contains the source for [samkhan.net](https://samkhan.net) and
its automated publishing workflows. Secrets are stored exclusively in GitHub
Actions secrets; the `INDEXNOW_KEY` value that appears in git history is public
by design (the [IndexNow protocol](https://www.indexnow.org/) requires the key
to be publicly hosted at `https://samkhan.net/<key>.txt`).
