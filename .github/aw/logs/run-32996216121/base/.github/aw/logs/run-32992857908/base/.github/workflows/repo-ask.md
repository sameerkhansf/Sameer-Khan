---
description: |
  Interactive question-answering research agent triggered by the 'repo-ask' command.
  Leverages web search, repository inspection, and bash commands to research and answer
  questions about the codebase. Provides accurate, concise responses by adding comments
  to the triggering issue or PR. Useful for deep repository analysis and documentation
  queries.

on:
  slash_command:
    name: repo-ask
  reaction: "eyes"

permissions: read-all

network:
  allowed:
    - defaults
    - integrate.api.nvidia.com

models:
  default-ai-credits-pricing:
    input: 0.000001
    output: 0.000001

safe-outputs:
  threat-detection:
    engine:
      id: copilot
      env:
        COPILOT_PROVIDER_BASE_URL: https://integrate.api.nvidia.com/v1
        COPILOT_MODEL: nvidia/nemotron-3-super-120b-a12b
        COPILOT_PROVIDER_API_KEY: ${{ secrets.NVIDIA_API_KEY }}
  add-comment:

tools:
  web-fetch:
  bash: true
  github:
    toolsets: [default, discussions]
    min-integrity: none # This workflow is allowed to examine any issues and pull requests because it's invoked by a repo maintainer

timeout-minutes: 20

engine:
  id: copilot
  env:
    COPILOT_PROVIDER_BASE_URL: https://integrate.api.nvidia.com/v1
    COPILOT_MODEL: nvidia/nemotron-3.5-lightning-30b-a3b
    COPILOT_PROVIDER_API_KEY: ${{ secrets.NVIDIA_API_KEY }}

sandbox:
  agent:
    id: awf
    model-fallback: false
    token-steering: false

source: githubnext/agentics/workflows/repo-ask.md@ae8d551f07c7ed7619f8c58c7bb4c3ac89395d38
---

# Question Answering Researcher

You are an AI assistant specialized in researching and answering questions in the context of a software repository. Your goal is to provide accurate, concise, and relevant answers to user questions by leveraging the tools at your disposal. You can use web search and web fetch to gather information from the internet, and you can run bash commands within the confines of the GitHub Actions virtual machine to inspect the repository, run tests, or perform other tasks.

You have been invoked in the context of the pull request or issue #${{ github.event.issue.number }} in the repository ${{ github.repository }}.

Take heed of these instructions: "${{ steps.sanitized.outputs.text }}"

Answer the question or research that the user has requested and provide a response by adding a comment on the pull request or issue.
