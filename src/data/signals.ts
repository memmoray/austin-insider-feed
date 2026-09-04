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
  address: string;
  district: string;
  category: Category;
  source: string;
  confidence: number;
  dress: string;
  access: "Open" | "Soft door" | "Hard door" | "List only";
  /** Exact minutes to walk in */
  window: string;
  /** Exact minutes to walk out */
  exitBy: string;
  /** Where to physically place yourself once inside */
  position: string;
  /** What it costs to hold the spot */
  spend: string;
  /** Arrival logistics: parking, valet, entrance */
  arrival: string;
  play: string;
  lesson: string;
};

export const SIGNALS: Signal[] = [
  {
    id: "s1",
    time: "6:12 PM",
    title: "Unlisted rooftop pour before a members-only dinner",
    venue: "Hotel Saint Vireo — 11th floor terrace",
    address: "88 Rainey St, Austin, TX 78701 — elevator bank past the lobby bar",
    district: "Rainey Street",
    category: "High-Society Movement",
    source: "Two stories geotagged 9 min apart",
    confidence: 88,
    dress: "Ivory linen, low-shine gold, no logos",
    access: "Soft door",
    window: "Walk in 6:12–6:32 PM",
    exitBy: "Leave by 7:10 PM, before seating is called",
    position: "Terrace west rail, left of the bar — where the host circulates between greetings",
    spend: "One glass of wine, ~$18",
    arrival: "Street parking on Davis; skip valet — valet tickets get matched to the guest list",
    play: "Arrive in the 20-minute seam between the pour and the seated dinner — the host is still greeting, not counting.",
    lesson:
      "Rooms are easiest to enter while they are still forming. Early is not eager; early is invited-adjacent.",
  },
  {
    id: "s2",
    time: "6:40 PM",
    title: "Founder dinner overflow at the bar rail",
    venue: "Cellar Nine",
    address: "214 W 2nd St, Austin, TX 78701 — downstairs, bar rail on the right",
    district: "Downtown / 2nd Street",
    category: "Wealth-Adjacent Hacks",
    source: "Reservation blocks + LP calendar chatter",
    confidence: 74,
    dress: "Tailored dark, one interesting object (watch, cuff, book)",
    access: "Open",
    window: "Be seated 6:40–7:00 PM (rail fills by 7:15)",
    exitBy: "Hold the seat until 8:30 PM — the private room breaks at 8:15",
    position: "Two stools from the private-room door, facing the room, not the bottles",
    spend: "Amaro and a snack, ~$26 for two hours",
    arrival: "Garage at 2nd & Colorado, $12 flat; enter through the street door, not the hotel side",
    play: "Sit at the rail nearest the private room door. Overflow conversations happen where the room breathes.",
    lesson:
      "You don't need the table. Proximity plus patience produces introductions the table never would.",
  },
  {
    id: "s3",
    time: "7:05 PM",
    title: "Micro-influencer RSVP leak: 'see you at the green door 🌿'",
    venue: "Courtyard behind a East 6th retail row",
    address: "E 6th St between Waller & Attayac, 78702 — green door off the alley",
    district: "East Austin",
    category: "Micro-Influencer Leaks",
    source: "Story hint, 3.1k-follower lifestyle account",
    confidence: 61,
    dress: "Vintage silk, flat shoes, small bag",
    access: "List only",
    window: "Arrive 7:05–7:25 PM with the first cluster, never alone after 8",
    exitBy: "Out by 9:00 PM when the list is re-checked for the second seating",
    position: "The courtyard's string-light corner, near the photographer's setup",
    spend: "Free entry; bring a small bottle for the host, ~$30",
    arrival: "Rideshare drop at 6th & Waller and walk the last block — cars at the alley get noticed",
    play: "The leak is the invitation's shadow. Reply to the story with a question, not a request.",
    lesson:
      "Micro-influencers trade access for warmth. Be the person who makes their night better and the list opens itself.",
  },
  {
    id: "s4",
    time: "7:30 PM",
    title: "Brand activation teardown = second, softer party",
    venue: "Warehouse District pop-up",
    address: "4th & Colorado, 78701 — loading side on Colorado",
    district: "Warehouse District",
    category: "PR Agency Activations",
    source: "Field crew call sheet posted publicly",
    confidence: 82,
    dress: "Clean monochrome; look like talent, not guest",
    access: "Soft door",
    window: "Last hour only: 7:30–8:30 PM",
    exitBy: "Leave when the crew starts coiling cable, ~8:45 PM",
    position: "Near the build wall / photo set, where the production team congregates",
    spend: "Nothing — open bar during teardown",
    arrival: "Walk in from 4th St; the loading door is propped during strike",
    play: "The last hour is when publicists relax and actually talk. Compliment the build, not the brand.",
    lesson: "Every activation has an afterlife. The afterlife is where the real network is.",
  },
  {
    id: "s5",
    time: "8:15 PM",
    title: "Private club mixer with a guest-of-guest window",
    venue: "The Reserve at Colorado & 4th",
    address: "400 Colorado St, 78701 — second floor, ask the desk for the mixer",
    district: "Downtown",
    category: "Private Clubs",
    source: "Member newsletter excerpt, forwarded publicly",
    confidence: 69,
    dress: "Cocktail, covered shoulders, heels you can stand in for 3 hours",
    access: "Hard door",
    window: "8:15–8:40 PM, arriving with your member",
    exitBy: "Leave with your member, or by 10:30 PM at the latest",
    position: "The library room off the main bar — quieter, senior members land there",
    spend: "Members can't be reimbursed; bring a $40–60 gift instead",
    arrival: "Valet at the Colorado entrance is fine here; the club logs guests by member name",
    play: "Guest-of-guest is a real policy at most Austin clubs. Ask one member, once, three days out.",
    lesson: "Confidence is asking early and plainly. Desperation is asking late and often.",
  },
  {
    id: "s6",
    time: "9:00 PM",
    title: "Speakeasy password rotated — hint dropped in a playlist title",
    venue: "Room behind a laundromat, S. Lamar",
    address: "S Lamar Blvd near Bluebonnet Ln, 78704 — rear entrance off the lot",
    district: "South Lamar",
    category: "Speakeasies",
    source: "Public playlist renamed 47 min ago",
    confidence: 55,
    dress: "Dark, quiet, 1930s silhouette",
    access: "List only",
    window: "9:00–9:30 PM — door tightens once the room hits capacity",
    exitBy: "Before the 11:30 PM second seating turns the room",
    position: "Back banquette, facing the door; regulars read who watches the entrance",
    spend: "Two cocktails, ~$40",
    arrival: "Park in the lot behind the strip; walk to the unmarked rear door, knock once",
    play: "Say the password like you've said it before. Hesitation is the only thing the doorman screens for.",
    lesson: "Tone carries more access than credentials.",
  },
  {
    id: "s7",
    time: "9:45 PM",
    title: "Lobby drift: hotel bar absorbing three private parties",
    venue: "The Ellsworth lobby lounge",
    address: "Congress Ave at 6th St, 78701 — lounge left of reception",
    district: "Congress Ave",
    category: "High-Society Movement",
    source: "Valet queue volume + four overlapping check-ins",
    confidence: 91,
    dress: "Whatever the loudest party is wearing, one notch calmer",
    access: "Open",
    window: "Sit down 9:45–10:15 PM, before the parties spill",
    exitBy: "11:30 PM, while the room still has energy",
    position: "The sofa cluster between the elevators and the bar — every group crosses it",
    spend: "Sparkling water or one slow drink, ~$14",
    arrival: "Lobby is public 24/7; enter from Congress, not the garage",
    play: "Lobbies are legally public. Sit, order something slow, and let the groups merge around you.",
    lesson:
      "The lobby is the most underrated room in the city. You are never trespassing on a sofa.",
  },
  {
    id: "s8",
    time: "10:20 PM",
    title: "Group-merge window at the valet stand",
    venue: "Sidewalk between two Rainey venues",
    address: "Rainey St at River St, 78701 — the shared valet stand",
    district: "Rainey Street",
    category: "Unsavory but Legal",
    source: "Pattern model, 6 prior Fridays",
    confidence: 66,
    dress: "Match the group's formality exactly",
    access: "Soft door",
    window: "10:20–10:50 PM, when groups re-form between venues",
    exitBy: "Move on by midnight; door staff change shift and re-scan the room",
    position: "Stand on the street side of the valet stand, not the door side",
    spend: "$0 outside; whatever the next room costs",
    arrival: "Arrive on foot from Davis St so you appear to be coming from another party",
    play: "Groups re-form at the valet. Join a conversation outside, walk in mid-sentence.",
    lesson:
      "Nobody checks the middle of a group. Being mid-sentence is the oldest credential in the world.",
  },
  {
    id: "s9",
    time: "11:05 PM",
    title: "Tagged-location loophole surfaces tomorrow's guest list",
    venue: "Do this one from home",
    address: "Venue tag pages for Rainey, Congress and E 6th addresses above",
    district: "Citywide",
    category: "Social-Media Loopholes",
    source: "Venue tag page, close-friends spillover",
    confidence: 78,
    dress: "—",
    access: "Open",
    window: "11:05 PM–12:30 AM, while tonight's posts are still being tagged",
    exitBy: "Screenshot and close by 12:30 AM — stories expire in 24h",
    position: "Follow the venue tag page, not the accounts",
    spend: "Free",
    arrival: "No travel — this builds tomorrow's list",
    play: "Follow the venue tag, not the people. Tags surface strangers the algorithm hides from you.",
    lesson: "Watch places, not personalities. Places don't curate themselves.",
  },
];

export type RouteStop = {
  time: string;
  place: string;
  address: string;
  note: string;
};

/** The recommended single-night path through tonight's signals. */
export const TONIGHT_ROUTE: RouteStop[] = [
  {
    time: "6:12 PM",
    place: "Hotel Saint Vireo terrace",
    address: "88 Rainey St",
    note: "Enter during the pour, leave before seating. 55 minutes, one glass.",
  },
  {
    time: "7:30 PM",
    place: "Warehouse District pop-up teardown",
    address: "4th & Colorado",
    note: "10-minute rideshare from Rainey. Talk to the crew, not the brand.",
  },
  {
    time: "8:15 PM",
    place: "The Reserve mixer (if you have a member)",
    address: "400 Colorado St",
    note: "Two blocks on foot. Otherwise skip straight to the lobby at 9:45.",
  },
  {
    time: "9:45 PM",
    place: "The Ellsworth lobby lounge",
    address: "Congress at 6th",
    note: "Sofa cluster by the elevators. This is the night's highest-yield hour.",
  },
  {
    time: "11:05 PM",
    place: "Home, phone in hand",
    address: "—",
    note: "Work the venue tag pages and build tomorrow's list before the stories expire.",
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
