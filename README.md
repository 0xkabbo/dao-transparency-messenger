# DAO Transparency Messenger

Governance shouldn't happen in a vacuum. This bot ensures that every strategic move made by the Treasury—from liquidity injections to MEV-protected swaps—is clearly communicated to the community.

## Key Features
* **Audit Broadcasting**: Converts raw JSON surplus audits into beautiful Discord Embeds.
* **Proposal Alerts**: Monitors the Governor contract and pings a `@voter` role when a new proposal goes live.
* **Multi-Platform Support**: Uses a unified notification engine to post to Discord Webhooks and Discourse API simultaneously.
* **Custom Templates**: Easily adjust the "Tone" of the reports (e.g., "Highly Technical" for developers vs. "Summary" for holders).

## How it Works
1. **Trigger**: Receives a webhook from the `v3-liquidity-rebalancer` or `treasury-surplus-auditor`.
2. **Format**: Uses Liquid or Handlebars templates to build the message.
3. **Dispatch**: Sends the payload to the configured social endpoints.
