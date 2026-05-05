export interface Testimonial {
  name: string;
  role: string;
  industry: string;
  quote: string;
  avatar: string;
  type: 'coaching' | 'mentor';
  source?: 'linkedin';
  featured?: boolean;
}

// ── Life Coaching Clients ────────────────────────────────────────────────────
// ── Mentor Coaching Clients ──────────────────────────────────────────────────

export const testimonials: Testimonial[] = [

  // ── FEATURED (Life Coaching) ──────────────────────────────────────────────
  {
    name: "Jasmeet Sandhu",
    role: "Coach in Training",
    industry: "Learning & Development",
    avatar: "J",
    type: "coaching",
    featured: true,
    quote: "I am really grateful that the universe has sent Cynthia my way. From our very first session, Cynthia put me at ease and created a safe and non-judgmental space that allowed me to open up and explore aspects of myself I had never examined before. She has helped me grow as a person and as a coach in ways I never imagined possible.",
  },

  // ── LIFE COACHING CLIENTS (5) ─────────────────────────────────────────────
  {
    name: "Ben McDonald",
    role: "Partner, Executive Search",
    industry: "Hi-Tech / Semicap / EMS",
    avatar: "B",
    type: "coaching",
    source: "linkedin",
    quote: "Cynthia has been coaching me for several months, and I've found her program and sessions to be both enlightening and thought-provoking. They have given me clarity across a range of situations, enabling me to approach challenges differently and uncover solutions I hadn't considered before. Her style is open and engaging, while also constructively challenging — helping you reach practical solutions for yourself. I would highly recommend Cynthia to anyone looking for a personal coach who can unlock new perspectives and support meaningful personal development.",
  },
  {
    name: "Sharon Kwek",
    role: "Director of Consulting, South APAC",
    industry: "Consulting",
    avatar: "S",
    type: "coaching",
    quote: "Cynthia is sharp and quick in identifying my blind spots, weaknesses and patterns. She would challenge my thinking and at the same time provide pointers beyond the said and obvious. I appreciate her honesty in giving feedback — all with the intention for me to improve. All sessions were comfortable, with the space I needed to learn and work on myself.",
  },
  {
    name: "Jace Tan",
    role: "Data Engineer",
    industry: "Technology",
    avatar: "J",
    type: "coaching",
    quote: "Cynthia takes a no-BS but empathetic approach — she knew when to push me forward with her acute observations and when to show her nurturing and supportive side, providing me with exactly the guidance I needed. Appreciate the sessions we had!",
  },
  {
    name: "Yvonne",
    role: "Business Development Manager",
    industry: "Sales & Business Development",
    avatar: "Y",
    type: "coaching",
    quote: "Cynthia is a powerful coach who supports me in challenging myself, making me more aware of my fixations and gives me a trustful space to discover and bloom into who I want to really become. Her firm yet nurturing coaching style gives me the faith, courage and clarity to leap forward in any challenging situations.",
  },
  {
    name: "Larry Wong",
    role: "Consultant",
    industry: "Consulting",
    avatar: "L",
    type: "coaching",
    quote: "Cynthia is a kind and understanding coach who always puts her clients' best interests at heart. She provides a comfortable space for sharing and is able to get to the heart of the matter through her deep questioning. I would recommend her to anyone who needs illumination for their issues.",
  },

  {
    name: "Vivek",
    role: "Consultant",
    industry: "Consulting",
    avatar: "V",
    type: "coaching",
    quote: "Cynthia's direct and frank approach helped me get the best out of our sessions. She created a space that helped me reflect on how I can improve while also identifying what I need to work on personally. The sessions were a perfect balance of emotional introspection, tangible actions, and long-term reflection.",
  },
  {
    name: "Chris Sheng",
    role: "Recruitment Solutions Partner",
    industry: "Recruitment & HR",
    avatar: "C",
    type: "coaching",
    source: "linkedin",
    quote: "Cynthia is a true professional with a passion for helping others in their personal breakthrough journey. Her coaching style is both supportive and challenging, pushing me to think critically and develop new skills. I've unlocked some doors through Cynthia and appreciate the guidance and support. Thank you.",
  },

  // ── MENTOR COACHING CLIENTS ───────────────────────────────────────────────
  {
    name: "Kum Seng Tung",
    role: "Chief Financial Officer",
    industry: "Finance & Strategic Planning",
    avatar: "K",
    type: "mentor",
    source: "linkedin",
    quote: "Cynthia's mentorship towards my coaching journey helped me expand my coaching range. Her direct yet empathetic approach creates a psychologically safe space that opens up our conversations into more insightful learnings and sharing of diverse views. She is good at validating what I do well and at the same time, identify my blindspots. I am fortunate that our paths crossed, and I am a better coach thanks to her guidance.",
  },
  {
    name: "Jing Yuan Qiu",
    role: "B2C Sales & Growth Lead",
    industry: "Health & Wellness Advocacy",
    avatar: "J",
    type: "mentor",
    source: "linkedin",
    quote: "Cynthia is an exceptional mentor coach. I worked with her across three mentor coaching sessions, and after each one, I noticed when I returned to my coaching sessions, my presence and my effectiveness improved in the very next session. In her mentoring, Cynthia holds space with depth and steadiness. She gives me time to process, and when something needs attention, she addresses it directly by making a stand for my growth.",
  },
  {
    name: "Richard Ang",
    role: "Senior HR Professional",
    industry: "Human Resources",
    avatar: "R",
    type: "mentor",
    quote: "An amazing mentor coach who will challenge you to rediscover yourself. Cynthia has a knack for challenging me to explore new perspectives and insights in every session — guiding me to identify and overcome my own limitations. This has opened new dimensions in my self-awareness.",
  },
  {
    name: "Lois Toh",
    role: "Senior Manager",
    industry: "Corporate Leadership",
    avatar: "L",
    type: "mentor",
    quote: "I enjoyed having Cynthia as my mentor coach, particularly in my preparation for my ACC exam. She is sharp in pointing out my blind spots that gave me real a-ha moments. I kept her reminders whenever I coached a client — and her mentorship supported my passing of the exam. Thank you, Cynthia!",
  },
  {
    name: "Richelle Samy",
    role: "Coach in Training",
    industry: "Learning & Leadership / Sport Performance",
    avatar: "R",
    type: "mentor",
    source: "linkedin",
    quote: "Cynthia was my mentor during my coaching journey. She was able to guide and advise me on what I was doing well and where there was room for improvement. She has a unique coaching style — she is authentic, which fits her personality and inspired me a lot as a coach to find my own style and move away from the textbooks. Cynthia is really good at challenging her mentees and pointing out what can be improved in their coaching, which makes her a great mentor as she is genuinely invested in the success of her clients.",
  },

];
