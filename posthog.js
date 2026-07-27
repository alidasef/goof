var PostHog = require('posthog-node').PostHog;

var apiKey = process.env.POSTHOG_API_KEY;
var host = process.env.POSTHOG_HOST;

if (!apiKey && process.env.NODE_ENV !== 'production') {
  console.warn('POSTHOG_API_KEY variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once POSTHOG_API_KEY is configured');
}

var posthog = apiKey
  ? new PostHog(apiKey, {
      host: host || 'https://us.i.posthog.com',
      enableExceptionAutocapture: true,
    })
  : null;

module.exports = posthog;
