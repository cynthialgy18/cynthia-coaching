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

export const testimonials: Testimonial[] = [

  // ── LIFE COACHING CLIENTS ─────────────────────────────────────────────────

  {
    name: "Teng Run Run",
    role: "Fashion Entrepreneur",
    industry: "Fashion & Entrepreneurship",
    avatar: "T",
    type: "coaching",
    featured: true,
    quote: "I am really grateful that the universe has sent Cynthia my way. From our very first session, she put me at ease and created a safe, non-judgmental space that allowed me to open up and explore aspects of my life I had never delved into before. She guided me through a personalised journey of self-discovery — helping me identify my core values, strengths, and areas for growth. I am now navigating my life with a renewed sense of purpose, confidence, and resilience. I wholeheartedly recommend her to anyone seeking a dedicated, insightful, and empathetic life coach.",
  },

  {
    name: "K",
    role: "Commodities Industry",
    industry: "Commodities",
    avatar: "K",
    type: "coaching",
    featured: true,
    quote: "I met Cynthia to prepare for a high-profile and demanding job interview. She quickly understood what I needed to succeed and we spent the hour helping me overcome potential insecurities that could impact me throughout the process. As a coach, she is extremely in tune with your emotions and helps you overcome struggles at the workplace. Highly recommend Cynthia for 1-on-1 coaching! P.S. I got the job.",
  },

  {
    name: "Ben McDonald",
    role: "Partner, Executive Search",
    industry: "Hi-Tech / Semicap / EMS",
    avatar: "B",
    type: "coaching",
    source: "linkedin",
    featured: true,
    quote: "Cynthia has been coaching me for several months, and I've found her program and sessions to be both enlightening and thought-provoking. They have given me clarity across a range of situations, enabling me to approach challenges differently and uncover solutions I hadn't considered before. Her style is open and engaging, while also constructively challenging — helping you reach practical solutions for yourself. I would highly recommend Cynthia to anyone looking for a personal coach who can unlock new perspectives.",
  },

  {
    name: "Yvonne Sia",
    role: "Human Resources",
    industry: "Human Resources",
    avatar: "Y",
    type: "coaching",
    quote: "Cynthia is a powerful coach who supports me in challenging myself, making me more aware of my fixations and gives me a trustful space to discover and bloom into who I want to really become. Her firm yet nurturing coaching style gives me the faith, courage and clarity to leap forward in any challenging situations. I would recommend Cynthia as a coach to anyone who seeks breakthroughs in their life.",
  },

  {
    name: "Leaf Yap",
    role: "Personal Assistant to MD",
    industry: "Executive Support",
    avatar: "L",
    type: "coaching",
    quote: "I had the privilege to be coached by Cynthia many years back and am very fortunate to be coached by her again. As an ever-evolving coach working on herself and clients at the same time, the length and breadth of Cynthia's coaching is greatly augmented — with her ability to create new depths of awareness, causing a tremendous amount of clarity and renewed energy. Cynthia has become a more well-rounded coach who draws out more potential in her clients.",
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
    name: "Chris Sheng",
    role: "Recruitment Solutions Partner",
    industry: "Recruitment & HR",
    avatar: "C",
    type: "coaching",
    source: "linkedin",
    quote: "Cynthia is a true professional with a passion for helping others in their personal breakthrough journey. Her coaching style is both supportive and challenging, pushing me to think critically and develop new skills. I've unlocked some doors through Cynthia and appreciate the guidance and support. Thank you.",
  },

  {
    name: "Jiayin",
    role: "Project Manager",
    industry: "Project Management",
    avatar: "J",
    type: "coaching",
    quote: "I had 5 sessions of coaching with Cynthia. She was genuine and sincere — and she really championed my growth and got me to step into a bigger version of myself, even though I had no idea that's what I needed. With that, I got to see a brand new reality for myself. Even after the sessions ended, those experiences and new perspectives have continued to remind me that I am capable of growing and evolving. I highly recommend Cynthia if you are looking for real breakthroughs in your life.",
  },

  {
    name: "Sumei",
    role: "Lawyer",
    industry: "Legal",
    avatar: "S",
    type: "coaching",
    quote: "I engaged Cynthia for coaching on relationship issues. The sessions were intense, but very productive. Cynthia provided good insight and an alternative perspective about the issues I was facing. Through our sessions, I was able to make positive changes to my perspective and I now see relationships in a different light. She is kind but firm, forthright, and gives constructive feedback. She cares for her clients and wants them to be happy and healthy.",
  },

  // ── MENTOR COACHING CLIENTS ───────────────────────────────────────────────

  {
    name: "Raj Sriram",
    role: "Senior Consultant (ex-CEO, Swiss Private Bank)",
    industry: "Banking & Consulting",
    avatar: "R",
    type: "mentor",
    featured: true,
    quote: "After 28 years in banking — finishing as CEO of a Swiss private bank — I had the pleasure of having Cynthia as my mentor coach over three sessions. She is extremely easy to establish rapport with and made me feel at ease quickly. Her feedback was very incisive; she has a clear eye for detail with my recorded coaching sessions. She helped me sharpen my coaching, focus on open-ended queries, balance emotional and intellectual probes, and ensure a clear action plan. I would highly recommend Cynthia as a highly experienced, pleasant, and capable mentor coach.",
  },

  {
    name: "Kum Seng Tung",
    role: "Chief Financial Officer",
    industry: "Finance & Strategic Planning",
    avatar: "K",
    type: "mentor",
    source: "linkedin",
    featured: true,
    quote: "Cynthia's mentorship towards my coaching journey helped me expand my coaching range. Her direct yet empathetic approach creates a psychologically safe space that opens up our conversations into more insightful learnings and sharing of diverse views. She is good at validating what I do well and at the same time, identifying my blindspots. I am fortunate that our paths crossed, and I am a better coach thanks to her guidance.",
  },

  {
    name: "Jing Yuan Qiu",
    role: "B2C Sales & Growth Lead",
    industry: "Health & Wellness Advocacy",
    avatar: "J",
    type: "mentor",
    source: "linkedin",
    quote: "Cynthia is an exceptional mentor coach. After each session, I noticed when I returned to my own coaching, my presence and effectiveness improved immediately. In her mentoring, Cynthia holds space with depth and steadiness. She gives me time to process, and when something needs attention, she addresses it directly by making a stand for my growth.",
  },

  {
    name: "Richelle Samy",
    role: "Coach in Training",
    industry: "Learning & Leadership / Sport Performance",
    avatar: "R",
    type: "mentor",
    source: "linkedin",
    quote: "Cynthia was my mentor during my coaching journey. She has a unique coaching style — she is authentic, which fits her personality and inspired me to find my own style and move away from the textbooks. Cynthia is really good at challenging her mentees and pointing out what can be improved, which makes her a great mentor as she is genuinely invested in the growth of her clients.",
  },

  {
    name: "Sharon Kwek",
    role: "Director of Consulting, South APAC",
    industry: "Consulting",
    avatar: "S",
    type: "mentor",
    quote: "Cynthia is sharp and quick in identifying my blind spots, weaknesses and patterns. She would challenge my thinking and at the same time provide pointers beyond the said and obvious. I appreciate her honesty in giving feedback — all with the intention for me to improve. All sessions were comfortable, with the space I needed to learn and work on myself.",
  },

  {
    name: "Jasmeet Sandhu",
    role: "HR Professional",
    industry: "Human Resources",
    avatar: "J",
    type: "mentor",
    quote: "Cynthia's feedback helped me realise I can take on a more courageous and confident role as a developing coach — and not let my assumptions limit my capability. She helped me widen my questioning capacity and see the bigger picture. After applying her feedback, I had a coaching drill where the response was extremely positive — I was focused, asked clear questions, and helped my client move forward. Obtaining mentorship from a PCC coach has been invaluable.",
  },

  {
    name: "Jace Tan",
    role: "Data Engineer",
    industry: "Technology",
    avatar: "J",
    type: "mentor",
    quote: "Cynthia takes a no-BS but empathetic approach — she knew when to challenge me with her acute observations and when to show her nurturing and supportive side, providing me with exactly the guidance I needed. Appreciate the sessions we had!",
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
    name: "Richard Ang",
    role: "Senior HR Professional",
    industry: "Human Resources",
    avatar: "R",
    type: "mentor",
    quote: "Cynthia has a knack for challenging me to explore new perspectives and insights in every session — guiding me to identify and overcome my own limitations. This has opened new dimensions in my self-awareness. I highly recommend her to anyone who wants to improve their coaching skills and mindset.",
  },

  {
    name: "Vivek",
    role: "Consultant",
    industry: "Consulting",
    avatar: "V",
    type: "mentor",
    quote: "Cynthia's direct and frank approach helped me get the best out of my mentor coaching sessions. She created a space that helped me reflect on how I can improve while also identifying what I need to work on. I realised how some of my limitations were spilling over into my coaching — and confronted a few new ones. The sessions were a perfect balance of emotional introspection, tangible actions, and long-term reflection.",
  },

  {
    name: "Chan Shanshan",
    role: "Sales General Manager",
    industry: "Sales & Business Development",
    avatar: "C",
    type: "mentor",
    quote: "I enjoyed my mentor coaching sessions with Cynthia thoroughly — not only because she was always prepared with feedback, but also because her candid and jovial personality helped me put down my personal defence mechanisms. She threw provoking questions that opened up my mind with regards to my thought patterns and self-inflicted limitations, creating a very intellectual space to broaden my range as a coach.",
  },

  {
    name: "Muxing",
    role: "Naval Officer",
    industry: "Singapore Armed Forces",
    avatar: "M",
    type: "mentor",
    quote: "I went through an enjoyable and fruitful mentoring experience with Cynthia — starting from not knowing what to expect, to having a clearer direction towards my next step in coaching. As a mentor, Cynthia held space for me to think through the learning points from my drills, and continually held me accountable for what I needed to work on. I came out feeling more confident to meet future clients as a coach.",
  },

  {
    name: "Nakeisha",
    role: "Project Manager",
    industry: "Project Management",
    avatar: "N",
    type: "mentor",
    quote: "Although we only had three sessions together, Cynthia provided invaluable insights and guidance for improving my coaching skills. She consistently created a non-judgmental environment while picking apart areas for improvement. She made me feel like she was as invested in my growth as I was myself. She practised what she preached — exploring, challenging, and dreaming with the client. Thank you for your constructive feedback, helpful suggestions, and wise insights.",
  },

  {
    name: "Lauren Baey",
    role: "Aerial Yoga Instructor",
    industry: "Health & Wellness",
    avatar: "L",
    type: "mentor",
    quote: "Cynthia is sharp and has no qualms about being direct with me whenever she sees incongruences in my thought processes and speech. She is also able to read and name my body language, emotions, and behavioural patterns in a non-judgmental way. I never feel hurt by her radical honesty — I feel her genuine intention of naming these blind spots for my learning and evolution.",
  },

  {
    name: "Sandra Wang",
    role: "Brand & Marketing Consultant",
    industry: "Brand & Marketing",
    avatar: "S",
    type: "mentor",
    quote: "Cynthia was a great mentor coach. She was detailed in her feedback while providing valuable, constructive areas for improvement. She provided a kind and safe space for sharing and collaboration. I felt respected and listened to during every session. Cynthia helped me realise the areas of my own development I need to work on. I highly recommend working with her.",
  },

  {
    name: "Sara",
    role: "HR Professional",
    industry: "Human Resources",
    avatar: "S",
    type: "mentor",
    quote: "Cynthia has been great in helping me become a better coach. She's straightforward and challenges you to think of ways you can improve yourself. I appreciate her candor and energy, and would recommend her to anyone who has a real innate desire to improve themselves — both as a coach and as a person.",
  },

  {
    name: "Florence Tan",
    role: "HR Consultant",
    industry: "Human Resources",
    avatar: "F",
    type: "mentor",
    quote: "Cynthia knows how to deliver feedback in a way that is constructive, kind, and direct — without shying away from honesty about my blind spots. She's an active listener who creates space for me to think and reflect. I personally benefitted from her many years of coaching experience, learning to be more open-minded and look at situations from different perspectives.",
  },

  {
    name: "Noel Cheah",
    role: "Healthcare Professional",
    industry: "Healthcare",
    avatar: "N",
    type: "mentor",
    quote: "I have certainly benefitted from your sound insights and precise advice. Your feedback addressed both my gaps and where I have done well. You helped me especially in tightening and improving my questioning techniques — in casing and framing. You established a very professional and friendly relationship that builds trust and enables me to be very open in sharing my inner thoughts. Thank you for your patience and thoughtfulness.",
  },

];
