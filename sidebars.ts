import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      items: [
        'introduction/what-is-valora',
        'introduction/architecture-overview',
        'introduction/cloud-vs-oss',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        'getting-started/quickstart-cloud',
        'getting-started/quickstart-oss',
        'getting-started/core-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsible: false,
      items: [
        'core-concepts/organizations-workspaces',
        'core-concepts/products-pricing',
        'core-concepts/meters-usage',
        'core-concepts/rating-proration',
        'core-concepts/ledger-accounting',
        'core-concepts/invoices',
      ],
    },
    {
      type: 'category',
      label: 'Usage Ingestion',
      collapsible: false,
      items: [
        'usage-ingestion/api-overview',
        'usage-ingestion/authentication-api-keys',
        'usage-ingestion/event-schema',
        'usage-ingestion/batching-idempotency',
        'usage-ingestion/examples',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsible: false,
      items: [
        'api-reference/usage-api',
        'api-reference/billing-api',
        'api-reference/errors-retries',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsible: false,
      items: [
        'operations/environments',
        'operations/reconciliation',
        'operations/backfills',
        'operations/limits-safeguards',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsible: false,
      items: [
        'security/authentication-model',
        'security/api-keys',
        'security/sessions',
        'security/org-isolation',
      ],
    },
    {
      type: 'category',
      label: 'Deployment (OSS)',
      collapsible: false,
      items: [
        'deployment-oss/requirements',
        'deployment-oss/configuration',
        'deployment-oss/bootstrap-org-admin',
        'deployment-oss/upgrades',
      ],
    },
    'faq-troubleshooting',
  ],
};

export default sidebars;
