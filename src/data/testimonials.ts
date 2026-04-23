export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jasmeet Sandhu",
    role: "Coach in Training",
    avatar: "J",
    featured: true,
    quote: "I am really grateful that the universe has sent Cynthia my way. From our very first session, Cynthia put me at ease and created a safe and non-judgmental space that allowed me to open up and explore aspects of myself I had never examined before. She has helped me grow as a person and as a coach in ways I never imagined possible.",
  },
  {
    name: "Yvonne",
    role: "Coaching Client",
    avatar: "Y",
    quote: "Cynthia is a powerful coach who supports me in challenging myself, making me more aware of my fixations and gives me a trustful space to discover and bloom into who I want to really become. Her firm yet nurturing coaching style gives me the faith, courage and clarity to leap forward in any challenging situations. Everyone can benefit from a good coach like Cynthia.",
  },
  {
    name: "Larry Wong",
    role: "Consultant",
    avatar: "L",
    quote: "Cynthia is a kind and understanding coach who always puts her clients' best interests at heart. She provides a comfortable space for sharing and is able to get to the heart of the matter through her deep questioning. I would recommend her services to anyone who needs illumination for their issues.",
  },
  {
    name: "Sharon Kwek",
    role: "Director of Consulting, South APAC",
    avatar: "S",
    quote: "Cynthia is sharp and quick in identifying my blind spots, weaknesses and patterns. She would challenge my thinking and at the same time provide pointers beyond the said and obvious. I appreciate her honesty in giving feedback — all with the intention for me to improve. All sessions were comfortable, with the space I needed to learn and work on myself.",
  },
  {
    name: "Jace Tan",
    role: "Data Engineer",
    avatar: "J",
    quote: "Cynthia takes a no-BS but empathetic approach — she knew when to push me forward with her acute observations and when to show her nurturing and supportive side, providing me with exactly the guidance I needed. Appreciate the sessions we had!",
  },
  {
    name: "Lois Toh",
    role: "Senior Manager",
    avatar: "L",
    quote: "I enjoyed having Cynthia as my mentor coach, particularly in my preparation for my ACC exam. She is sharp in pointing out my blind spots that gave me real a-ha moments. I kept her reminders whenever I coached a client — and her mentorship supported my passing of the exam. Thank you, Cynthia!",
  },
  {
    name: "Vivek",
    role: "Consultant",
    avatar: "V",
    quote: "Cynthia's direct and frank approach helped me get the best out of our sessions. She created a space that helped me reflect on how I can improve while also identifying what I need to work on personally. The sessions were a perfect balance of emotional introspection, tangible actions, and long-term reflection.",
  },
  {
    name: "Richard Ang",
    role: "Senior HR Professional",
    avatar: "R",
    quote: "An amazing mentor coach who will challenge you to rediscover yourself. Cynthia has a knack for challenging me to explore new perspectives and insights in every session — guiding me to identify and overcome my own limitations. This has opened new dimensions in my self-awareness.",
  },
];
