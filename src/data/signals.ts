export type Category =
  | "High-Society Movement"
  | "Private Clubs"
  | "Speakeasies"
  | "Micro-Influencer Leaks"
  | "PR Agency Activations"
  | "Wealth-Adjacent Hacks"
  | "Unsavory but Legal"
  | "Social-Media Loopholes";

export const CATEGORIES: Category[] = [
  "High-Society Movement",
  "Private Clubs",
  "Speakeasies",
  "Micro-Influencer Leaks",
  "PR Agency Activations",
  "Wealth-Adjacent Hacks",
  "Unsavory but Legal",
  "Social-Media Loopholes",
];

export type Signal = {
  id: string;
  time: string;
  title: string;
  venue: string;
  district: string;
  category: Category;
  source: string;
  confidence: number;
  dress: string;
  access: "Open" | "Soft door" | "Hard door" | "List only";
  play: string;
  lesson: string;
};

export const SIGNALS: Signal[] = [
  {
    id: "s1",
    time: "6:12 PM",
    title: "Unlisted rooftop pour before a members-only dinner",
    venue: "Hotel Saint Vireo — 11th floor terrace",
    district: "Rainey Street",
    category: "High-Society Movement",
    source: "Two stories geotagged 9 min apart",
    confidence: 88,
    dress: "Ivory linen, low-shine gold, no logos",
    access: "Soft door",
    play: "Arrive in the 20-minute seam between the pour and the seated dinner — the host is still greeting, not counting.",
    lesson:
      "Rooms are easiest to enter while they are still forming. Early is not eager; early is invited-adjacent.",
  },
  {
    id: "s2",
    time: "6:40 PM",
    title: "Founder dinner overflow at the bar rail",
    venue: "Cellar Nine",
    district: "Downtown / 2nd Street",
    category: "Wealth-Adjacent Hacks",
    source: "Reservation blocks + LP calendar chatter",
    confidence: 74,
    dress: "Tailored dark, one interesting object (watch, cuff, book)",
    access: "Open",
    play: "Sit at the rail nearest the private room door. Overflow conversations happen where the room breathes.",
    lesson:
      "You don't need the table. Proximity plus patience produces introductions the table never would.",
  },
  {
    id: "s3",
    time: "7:05 PM",
    title: "Micro-influencer RSVP leak: 'see you at the green door 🌿'",
    venue: "Unnamed — likely East 6th courtyard",
    district: "East Austin",
    category: "Micro-Influencer Leaks",
    source: "Story hint, 3.1k-follower lifestyle account",
    confidence: 61,
    dress: "Vintage silk, flat shoes, small bag",
    access: "List only",
    play: "The leak is the invitation's shadow. Reply to the story with a question, not a request.",
    lesson:
      "Micro-influencers trade access for warmth. Be the person who makes their night better and the list opens itself.",
  },
  {
    id: "s4",
    time: "7:30 PM",
    title: "Brand activation teardown = second, softer party",
    venue: "Warehouse District pop-up",
    district: "Warehouse District",
    category: "PR Agency Activations",
    source: "Field crew call sheet posted publicly",
    confidence: 82,
    dress: "Clean monochrome; look like talent, not guest",
    access: "Soft door",
    play: "The last hour is when publicists relax and actually talk. Compliment the build, not the brand.",
    lesson: "Every activation has an afterlife. The afterlife is where the real network is.",
  },
  {
    id: "s5",
    time: "8:15 PM",
    title: "Private club mixer with a guest-of-guest window",
    venue: "The Reserve at Colorado & 4th",
    district: "Downtown",
    category: "Private Clubs",
    source: "Member newsletter excerpt, forwarded publicly",
    confidence: 69,
    dress: "Cocktail, covered shoulders, heels you can stand in for 3 hours",
    access: "Hard door",
    play: "Guest-of-guest is a real policy at most Austin clubs. Ask one member, once, three days out.",
    lesson: "Confidence is asking early and plainly. Desperation is asking late and often.",
  },
  {
    id: "s6",
    time: "9:00 PM",
    title: "Speakeasy password rotated — hint dropped in a playlist title",
    venue: "Behind the laundromat, S. Lamar",
    district: "South Lamar",
    category: "Speakeasies",
    source: "Public playlist renamed 47 min ago",
    confidence: 55,
    dress: "Dark, quiet, 1930s silhouette",
    access: "List only",
    play: "Say the password like you've said it before. Hesitation is the only thing the doorman screens for.",
    lesson: "Tone carries more access than credentials.",
  },
  {
    id: "s7",
    time: "9:45 PM",
    title: "Lobby drift: hotel bar absorbing three private parties",
    venue: "The Ellsworth lobby lounge",
    district: "Congress Ave",
    category: "High-Society Movement",
    source: "Valet queue volume + four overlapping check-ins",
    confidence: 91,
    dress: "Whatever the loudest party is wearing, one notch calmer",
    access: "Open",
    play: "Lobbies are legally public. Sit, order something slow, and let the groups merge around you.",
    lesson:
      "The lobby is the most underrated room in the city. You are never trespassing on a sofa.",
  },
  {
    id: "s8",
    time: "10:20 PM",
    title: "Group-merge window at the valet stand",
    venue: "Between two Rainey venues",
    district: "Rainey Street",
    category: "Unsavory but Legal",
    source: "Pattern model, 6 prior Fridays",
    confidence: 66,
    dress: "Match the group's formality exactly",
    access: "Soft door",
    play: "Groups re-form at the valet. Join a conversation outside, walk in mid-sentence.",
    lesson:
      "Nobody checks the middle of a group. Being mid-sentence is the oldest credential in the world.",
  },
  {
    id: "s9",
    time: "11:05 PM",
    title: "Tagged-location loophole surfaces tomorrow's guest list",
    venue: "N/A — platform behavior",
    district: "Citywide",
    category: "Social-Media Loopholes",
    source: "Venue tag page, close-friends spillover",
    confidence: 78,
    dress: "—",
    access: "Open",
    play: "Follow the venue tag, not the people. Tags surface strangers the algorithm hides from you.",
    lesson: "Watch places, not personalities. Places don't curate themselves.",
  },
];

export type Lesson = {
  title: string;
  body: string;
};

export const CURRICULUM: Lesson[] = [
  {
    title: "Confidence-based access",
    body: "Walk at the pace of someone who is late to something she is welcome at. Doors read gait before they read guest lists.",
  },
  {
    title: "Dress-code camouflage",
    body: "Dress one notch quieter than the room's loudest guest. Wealth in Austin whispers in linen, unbranded leather and good tailoring.",
  },
  {
    title: "Group merge",
    body: "Enter conversations outside, not inside. You arrive as part of a group, never as a petitioner at a door.",
  },
  {
    title: "Lobby drift",
    body: "Hotel lobbies are public rooms attached to private nights. Sit long enough and the private night comes to you.",
  },
  {
    title: "The 20-minute seam",
    body: "Every event has a seam between arrival and seating where nobody is counting. Learn each venue's seam.",
  },
  {
    title: "Warm exits",
    body: "Leave before the room thins. Being remembered as early-and-elegant beats being remembered at all costs.",
  },
];
