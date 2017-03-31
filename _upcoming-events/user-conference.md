---
title: User conference
description: >
  Meet up with our awesome users and see what we
  can do to improve their experience.
icon: users
link: ""
bg_color: '#3399cc'
sort_order: 3

event_details:
- location: Anaheim, CA
  start_date: 2017-03-21T00:00:00+0700
  end_date: 2017-03-22T00:00:00+0700

layout: event-details
---

<p>
  {% if page.event_details[0].start_date != '' and page.event_details[0].start_date != nil %}
    <time datetime="{{ page.event_details[0].start_date | date: '%FT%T%:z' }}" class="start-date">
      {{ page.event_details[0].start_date | date: '%A, %B %-d, %Y' }}
    </time>
  {% endif %}
  {% if page.event_details[0].end_date != '' and page.event_details[0].end_date != nil %}
    {% if page.event_details[0].start_date != '' and page.event_details[0].start_date != nil %}
    &ndash;
    {% endif %}
    <time datetime="{{ page.event_details[0].end_date | date: '%FT%T%:z' }}" class="end-date">
      {{ page.event_details[0].end_date | date: '%A, %B %-d, %Y' }}
    </time>
  {% endif %}
</p>

### Travel Arrangements

If you live in SoCal, please meet us at the conference on Monday morning.  If you require a flight to meet us, please [fill out the travel form](#) so we can help arrange the travel.

### Responsibilities

Make sure to [review specific responsibilities you were given](#) prior to the conference.  Your responsibilities may override some of the information given below.

- Monday Morning
  - Be in the convention center at 8am
  - Park in the Hilton Anaheim parking structure
  - A light breakfast will be served

- Monday Evening
  - Check in to the Hilton Anaheim
    - Your roommate was emailed to you in an email titled "Conference Roommates"
  - Hub will reimburse up to $25 for each employee's dinner
  - Preferably, go to dinner with someone who has a team credit card to help reduce the burden on the finance team

- Tuesday Morning
  - Be in the convention center at 9am
  - A light breakfast will be served

- Tuesday Afternoon
  - Help pack up after the conference is over at 2pm
  - Drive home safely

### Location

<address>
  <strong>Anaheim Convention Center</strong><br />
  800 W Katella Ave<br />
  Anaheim, CA 92802
</address>

<iframe width="100%" height="400" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJPSkYXt7X3IARFClnE7qisj4&zoom=14&key=AIzaSyDufBzDi-Hg1O0ELSijlFmo4oG90fZg5fQ" allowfullscreen></iframe>
