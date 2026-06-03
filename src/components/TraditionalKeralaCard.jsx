import React from 'react';
import { Flame } from 'lucide-react';
import styles from './TraditionalKeralaCard.module.css';

export default function TraditionalKeralaCard() {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>
        <Flame className={styles.badgeIcon} aria-hidden="true" />
        <span>Trending in Alleppey</span>
      </div>
      <h2 className={styles.title}>Traditional Alleppey Backwater Experience</h2>
      <p className={styles.description}>
        All-Inclusive Alleppey Backwater Package. Designed for guests who want the full Kerala
        experience in one plan, with kayaking, shikkara, open boat, and speed boat rides across
        different village backwater routes, plus traditional food, refreshments, and stay options.
      </p>
      <div className={styles.highlights}>
        <span>Kayaking 6:30 AM - 8:30 AM</span>
        <span>Shikkara 11:00 AM - 2:00 PM</span>
        <span>Open boat 4:00 PM - 7:00 PM</span>
        <span>Stay also provided</span>
      </div>
      <ul className={styles.list}>
        <li>
          <strong>Morning route:</strong> Morning kayaking through calm traditional backwater
          routes and village canals.
        </li>
        <li>
          <strong>Lunch ride:</strong> Shikkara ride with lunch included, planned around a
          different scenic route.
        </li>
        <li>
          <strong>Evening route:</strong> Open boat cruise with speed boat included in the package
          and tea with snacks.
        </li>
        <li>
          <strong>Traditional focus:</strong> Every trip follows a different route with village
          backwaters, local food, and a slower Kerala rhythm.
        </li>
        <li>
          <strong>Stay provided:</strong> Stay options are arranged when the package needs a day
          cruise format or an overnight Kerala backwater stay.
        </li>
      </ul>
    </div>
  );
}
