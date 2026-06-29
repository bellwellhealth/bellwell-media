// Config for the approval bot. Secrets come from the environment (GitHub Secrets).
export const SLACK_API = 'https://slack.com/api';
export const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
export const ANTHROPIC_VERSION = '2023-06-01';

// Sonnet handles the judgment well at a fraction of Opus cost. Override with APPROVAL_MODEL.
export const MODEL = process.env.APPROVAL_MODEL || 'claude-sonnet-4-6';

export const MONTH = process.env.APPROVAL_MONTH || '2026-07';
export const CONTENT_PATH = `content/${MONTH}.json`;
export const STATE_PATH = 'content/approval_state.json';

export const DM = process.env.SLACK_APPROVAL_DM; // the review DM channel id

// Nova's display identity in Slack (needs the chat:write.customize bot scope).
export const NOVA_NAME = process.env.NOVA_NAME || 'Nova';
export const NOVA_ICON_URL = process.env.NOVA_ICON_URL
  || 'https://raw.githubusercontent.com/bellwellhealth/bellwell-media/main/nova.png';

export function slackToken() {
  const t = process.env.SLACK_BOT_TOKEN;
  if (!t) throw new Error('SLACK_BOT_TOKEN is not set.');
  return t;
}
export function anthropicKey() {
  const k = process.env.ANTHROPIC_API_KEY;
  if (!k) throw new Error('ANTHROPIC_API_KEY is not set.');
  return k;
}
