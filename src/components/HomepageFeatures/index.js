import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unified Customer Profiles',
    image: '/img/illustrations/unified-profile.svg',
    description:
      'Merge behavioral, transactional, CRM, and consent data into a real-time profile across channels.',
  },
  {
    title: 'Segmentation and Predictive Insights',
    image: '/img/illustrations/segmentation.svg',
    description:
      'Build dynamic audiences, run propensity-oriented analyses, and focus journeys on measurable business outcomes.',
  },
  {
    title: 'Cross-Channel Orchestration',
    image: '/img/illustrations/orchestration.svg',
    description:
      'Activate customer data through email, SMS, push, web, and CRM destinations with event-driven workflows.',
  },
];

function Feature({ title, description, image }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <img className={styles.featureImage} src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
