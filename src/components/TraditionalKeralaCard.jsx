import React from 'react';
import { Flame } from 'lucide-react';
import styles from './TraditionalKeralaCard.module.css';

export default function TraditionalKeralaCard() {
  return (
    <div className={styles.card}>
      <div className={styles.eyebrow}>Curated full-day sequence</div>
      <div className={styles.badge}>
        <Flame className={styles.badgeIcon} aria-hidden="true" />
        <span>In High Demand</span>
      </div>
      <h2 className={styles.title}>All-Inclusive Alleppey Backwater Package</h2>
      <p className={styles.description}>
        A full-day Kerala backwater plan for guests who want more than one kind of Alleppey
        experience, combining kayaking, a scenic shikkara ride, an evening open-boat cruise,
        local food, refreshments, and optional stay support in one smoother itinerary.
      </p>
      <div className={styles.highlights}>
        <span>Sunrise kayaking 6:30 AM - 8:30 AM</span>
        <span>Shikkara with lunch 11:00 AM - 2:00 PM</span>
        <span>Sunset open boat 4:00 PM - 7:00 PM</span>
        <span>Optional stay available</span>
      </div>
      <ul className={styles.list}>
        <li>
          <strong>Morning route:</strong> Start with peaceful kayaking through calm village canals
          while the backwaters still feel cooler and quieter.
        </li>
        <li>
          <strong>Lunch ride:</strong> Shift into a relaxed shikkara ride with lunch, planned on a
          different scenic route for a fuller Alleppey feel.
        </li>
        <li>
          <strong>Evening route:</strong> Finish with an open-boat cruise, speed-boat inclusion,
          and evening tea with snacks as the light softens.
        </li>
        <li>
          <strong>Traditional focus:</strong> The package is shaped around slower village-backwater
          routes, local food, and a more grounded Kerala rhythm instead of a rushed checklist.
        </li>
        <li>
          <strong>Stay support:</strong> Optional stay can be arranged when the plan needs a day
          cruise format or an overnight Kerala backwater stay.
        </li>
      </ul>
    </div>
  );
}
