# Kairos

Kairos is an open source Customer Data Platform designed to collect, unify, enrich, analyze, and activate customer data
across the entire lifecycle. It combines the analytical power of insights CDPs with the activation power of Engagement
CPDs, resulting in a platform that transforms raw data into meaningful action.

Kairos gives teams a complete view of known and anonymous customers, allows deep analytics, and delivers real time
personalization and orchestrated engagement across channels.

## Core Philosophy

In Greek, "Kairos" means "the right moment". The platform is built around the idea that customer data only becomes
valuable when it can create understanding and drive action at the right moment.

Kairos brings together:

* A system of insights for deep customer understanding.
* A system of Engagement for real time activation.
* A unified real time customer profile.
* A platform echosystem for developers and teams.

## Feature Summary

| Capability             | Insights CDP | Engagement CDP | Kairos |
|------------------------|--------------|----------------|--------|
| 360 Profile            | ✓            | ✓              | ✓      |
| Segmentation           | ✓            | ✓              | ✓      |
| Predictive analytics   | ✓            | —              | ✓      |
| Personalization        | —            | ✓              | ✓      |
| Campaign orchestration | —            | ✓              | ✓      |
| Activation             | —            | ✓              | ✓      |
| Developer platform     | Partial      | Partial        | Full   |
| Governance             | ✓            | ✓              | ✓      |

## Key Capabilities

### 1. Data collection and Ingestion

Kairos supports:

* First party behavioral events.
* Transactional records.
* CRM data.
* Offline imports.
* Third party enrichment.
* Realtime event streams.

### 2. Identity Resolution

Kairos includes:

* Deterministic and probabilistic matching.
* Identity graphs.
* Profile stitching across devices and channels.
* Unification of anonymous and known customer data.

### 3. Unified Customer Profile

Real time merged profiles including:

* Personal data.
* Behavioral history.
* Transactional data.
* Preferences and segments.
* Predictive attributes.
* Consent and GDPR metadata.

### 4. Audience Building and Segmentation

Kairos supports:

* Real time segmentation.
* Predictive segments.
* Rule and event based segments.
* Frequency and recency analysis.
* [LTV](https://en.wikipedia.org/wiki/Customer_lifetime_value) and propensity scoring.

### 5. Analytics, Modeling, and Insights

Capabilities include:

* LTV analysis.
* [Propensity modeling](https://archive.is/k60oU).
* Churn prediction.
* Cohort analysis.
* Trend discovery.
* Multi-touch journeys.
* Custom dashboards via [Aletheia](https://github.com/openkairos/aletheia).

### 6. Real Time Personalization

* Profile lookups in milliseconds.
* Context aware recommendations.
* Trigger based personalization.
* Streaming segment evaluation.

### 7. Cross Channel Orchestration

* Journey orchestration.
* Event driven workflows.
* Multi-channel message routing.
* Conditional logic and branching.
* Frequency capping.

### 8. Activation and Campaign Execution

Supports integrations for:

* Email.
* SMS.
* Push notifications.
* Web personalization.
* Advertising audiences.
* CRM updates.

### 9. Developer Friendly Platform

Kairos offers:

* APIs and SDKs
* Webhooks
* Plugin architecture
* Reverse ETL
* Developer sandbox environments

### 10. Governance, Privacy, and Security

* Consent tracking
* Data lineage
* Role based access
* Data minimization
* Audit trails

## Documentation Structure

All documentation is organized in the `/docs` directory with the following structure:

- **[/docs/requirements](docs/requirements/README.md)** - Requirements documentation
- **[/docs/design](docs/design/README.md)** - Design documentation
- **[/docs/technical](docs/technical/README.md)** - Technical documentation
- **[/docs/quality-assurance](docs/quality-assurance/README.md)** - Quality assurance documentation
- **[/docs/user](docs/user/README.md)** - User documentation

## Contributing

All documentation is written in Markdown (`.md`) files. Please place documentation in the appropriate directory based on
its type.
