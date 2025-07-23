export interface TeamMember {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  description: string;
  mobile?: string;
  role?: "coach" | "team-leader" | "member";
  languages?: string[];
  family?: string;
  specialization?: string[];
  motto?: string;
  achievements?: string[];
  interests?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "harish-kumar-c",
    name: "Harish Kumar C",
    title: "Senior Business Associate",
    company: "LIC of India",
    location: "India",
    role: "coach",
    mobile: "[Please provide mobile number]",
    description: "Meet Harish Kumar C, our esteemed coach and Senior Business Associate at LIC of India. With his extensive experience in the insurance industry and leadership development, he guides Team Samriddhi through the ABLE program journey. His mentorship and expertise help shape future business leaders.",
    specialization: ["Insurance", "Business Development", "Leadership Coaching", "Team Mentoring"],
    achievements: ["Senior Business Associate - LIC of India", "ABLE Program Coach"],
    interests: ["Leadership development", "Team mentoring", "Business strategy"]
  },
  {
    id: "vikas-bc",
    name: "Vikas B C",
    title: "Associate Financial Planner",
    company: "Wealth Builders - Investment Service",
    location: "Harapanahalli",
    role: "team-leader",
    mobile: "[Please provide mobile number]",
    motto: "Learn, Unlearn, Relearn, Repeat",
    description: "Meet Vikas B C, our Team Leader and Associate Financial Planner at Wealth Builders - Investment Service, based in Harapanahalli. With a record-breaking 86 units of blood collected in a donation camp—Vikas has made history in his town! A true believer in the mantra Learn, Unlearn, Relearn, Repeat, he leads by example and respects others' time while investing his own in learning new things.",
    family: "Living with his inspiring mother, a Tax Practitioner for 26 years",
    specialization: ["Wealth Management", "Investment Services", "Financial Planning", "Team Leadership"],
    achievements: ["Record-breaking 86 units of blood collected in donation camp", "Team Samriddhi Leader"],
    interests: ["Learning new things", "Social service", "Team leadership"]
  },
  {
    id: "ramakrishna",
    name: "Alugupalli Venkata Ramakrishna",
    title: "Proprietor",
    company: "Sri Venkateswara Associates",
    location: "Vijayawada",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Follow Consistency, Achieve Success",
    description: "Say hello to Alugupalli Venkata Ramakrishna, the energetic Proprietor of Sri Venkateswara Associates, Vijayawada. Awarded the Best Business Award by Bajaj Finserv, he lives by Follow Consistency, Achieve Success. With a team of 42 professionals, he supports people across India with comprehensive financial services.",
    languages: ["English", "Telugu"],
    family: "Wife Srilatha and two children—Harsha and Thanvi Sri",
    specialization: ["Doctor Loans", "CA Loans", "Business Loans", "Personal Loans", "Home Loans", "Vehicle Loans", "Insurance Services"],
    achievements: ["Best Business Award by Bajaj Finserv", "Team of 42 professionals"],
    interests: ["Driving"]
  },
  {
    id: "jefin-jose",
    name: "Ar. Jefin Jose",
    title: "Founder",
    company: "Nordit Architects",
    location: "Kollam, Kerala",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Practice makes a man perfect",
    description: "Presenting Ar. Jefin Jose, Founder of Nordit Architects in Kollam, Kerala—recognized among the top architects in Kerala by IIA 2023–25! Guided by Practice makes a man perfect, he's an architecture enthusiast who blends aesthetic brilliance with practical functionality.",
    family: "Working alongside his wife and fellow architect, Sherin Elsa",
    specialization: ["Architecture", "Design", "Full-service Architecture"],
    achievements: ["Top architects in Kerala by IIA 2023–25"],
    interests: ["Design", "Music", "Travel"]
  },
  {
    id: "chethan-suryanarayana",
    name: "Chethan Suryanarayana",
    title: "Founder and Certified Financial Planner",
    company: "Implied Financial Services LLP",
    location: "Shivamogga",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Work Hard, Dream Big",
    description: "Here's Chethan Suryanarayana, Founder and Certified Financial Planner at Implied Financial Services LLP, based in Shivamogga. With over 1200 happy customers, he truly lives his motto: Work Hard, Dream Big. Always calm, always positive—Chethan brings a client-first mindset to his services.",
    languages: ["English", "Kannada"],
    family: "Wife Mangala Bhat and son Advaith",
    specialization: ["Mutual Funds", "PMS", "AIFs", "Financial Planning"],
    achievements: ["Over 1200 happy customers"],
    interests: ["Sports", "Adventure rides", "Daily affirmations"]
  },
  {
    id: "veerayya-prasadimath",
    name: "Jc Veerayya Prasadimath",
    title: "MD Club Advisor",
    company: "SBI Life Insurance",
    location: "Haveri",
    role: "member",
    mobile: "[Please provide mobile number]",
    description: "Introducing Jc Veerayya Prasadimath, a proud MD Club Advisor for SBI Life Insurance, from Haveri. With a heart for social service and a flair for clear communication, he's a people-first professional, passionate about making lives secure.",
    family: "Lives with his mother, wife, and two children",
    specialization: ["Life Insurance Policies"],
    interests: ["Social service", "Clear communication"]
  },
  {
    id: "akruth-k",
    name: "Akruth K",
    title: "Civil Engineer",
    company: "CE+",
    location: "Shivamogga",
    role: "member",
    mobile: "[Please provide mobile number]",
    description: "Introducing Akruth K, a dynamic Civil Engineer from Shivamogga, leading the way at CE+. Whether he's drafting blueprints or cycling through the countryside, his drive and discipline shine through. With a love for thoughtful planning and a keen eye for detail, Akruth stands out by offering smart structural solutions rooted in both creativity and engineering excellence.",
    languages: ["Kannada", "English", "Hindi"],
    specialization: ["Civil Engineering", "Design", "Construction", "Structural Solutions"],
    interests: ["Cycling", "Thoughtful planning", "Design"]
  },
  {
    id: "shinu-manikoth",
    name: "Shinu Manikoth",
    title: "Director of Operations",
    company: "Heveahill Technologies",
    location: "Kannur, Kerala",
    role: "member",
    mobile: "[Please provide mobile number]",
    description: "Meet Shinu Manikoth, Director of Operations at Heveahill Technologies, from Kannur, Kerala. Known for designing impactful training modules like 'Interpersonal Relationships' for JCI India, he blends passion and purpose. Fluent in multiple languages, Shinu channels his inner Superman, waking early and embracing teamwork.",
    languages: ["Malayalam", "English", "Hindi", "Kannada", "Tamil"],
    family: "Wife Vimi and daughter Namratha",
    specialization: ["Training Modules", "Operations Management", "Interpersonal Relationships Training"],
    interests: ["Cooking", "Farming", "Carpentry", "Early rising", "Teamwork"]
  },
  {
    id: "vijay-kolleti",
    name: "Vijay Durga Prasad Kolleti",
    title: "Managing Director",
    company: "Vijay Interiors",
    location: "Vijayawada",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "The time is always right to do what is right",
    description: "Say hi to Vijay Durga Prasad Kolleti, M.D. of Vijay Interiors, from Vijayawada. His quote: 'The time is always right to do what is right.' Rooted in a strong family with his parents and brothers, Vijay's interior work is known for exceptional material finish and precision.",
    languages: ["Telugu"],
    family: "Strong family with parents and brothers",
    specialization: ["Interior Design", "Material Finishing", "Quality Craftsmanship"],
    interests: ["Cricket", "Quality craftsmanship"]
  },
  {
    id: "kiran-kumar",
    name: "Kiran Kumar",
    title: "Financial Planner",
    company: "Vibe IN",
    location: "Shimoga",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Being good and doing good",
    description: "Here's Kiran Kumar, a passionate Financial Planner at Vibe IN, based in Shimoga. Recently achieving MDRT recognition, Kiran believes in 'Being good and doing good.' With a positive mindset and customer-first communication, he serves clients with trust and clarity.",
    languages: ["English", "Kannada", "Hindi"],
    family: "Wife Sunitha, and kids Punarv and Sharvika",
    specialization: ["Insurance", "Mutual Funds", "Financial Planning"],
    achievements: ["MDRT recognition"],
    interests: ["Agriculture", "Positive mindset"]
  },
  {
    id: "sanket-bijja",
    name: "Sanket Vitthal Bijja",
    title: "Architect",
    company: "Aum Space Studio",
    location: "Solapur",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Don't wait for the perfect moment—take the moment and make it perfect",
    description: "Meet Sanket Vitthal Bijja, the creative mind at Aum Space Studio, an architect from Solapur. He draws strength from his close-knit family and finds joy in design, sketching, and creative exploration. Sanket's USP? Adaptability and design thinking that goes beyond the blueprint.",
    languages: ["English", "Marathi", "Telugu", "Hindi"],
    specialization: ["Architecture", "Design Thinking", "Aesthetic Design", "Functionality"],
    interests: ["Design", "Sketching", "Creative exploration"]
  },
  {
    id: "shilpa-mulki",
    name: "JFM Shilpa Mulki",
    title: "Project Manager",
    company: "A1 Logics",
    location: "Mangalore",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Impossible itself says I'm possible!",
    description: "Say hello to JFM Shilpa Mulki, Project Manager at A1 Logics, hailing from Mangalore. From managing 6 successful client conferences since 2018 to now, she's proof that 'Impossible itself says I'm possible!' Beyond the screen, Shilpa is a music lover and bookworm, with a warm and supportive family by her side.",
    languages: ["Tulu", "Kannada", "Hindi", "English"],
    specialization: ["Web Solutions", "ERP", "Conference Management", "Project Management"],
    achievements: ["6 successful client conferences since 2018"],
    interests: ["Music", "Reading books", "Learning"]
  },
  {
    id: "gowri-shankar",
    name: "Gowri Shankar V",
    title: "Software Developer",
    company: "Eagleminds Technologies",
    location: "Tirupattur, Tamil Nadu",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "Trying until you succeed",
    description: "Introducing Gowri Shankar V, Software Developer at Eagleminds Technologies, based in Tirupattur, Tamil Nadu. With over 250 businesses served, he believes in 'Trying until you succeed.' He brings positivity and consistent support to every client interaction, keeping learning as his superpower.",
    languages: ["Tamil"],
    family: "Wife and two daughters",
    specialization: ["Software Development", "Client Support", "Technology Solutions"],
    achievements: ["Over 250 businesses served"],
    interests: ["Networking", "Tech trends", "Continuous learning"]
  },
  {
    id: "vinay-reddy",
    name: "Vinay Reddy Mahasamudram",
    title: "Founder",
    company: "V Holidays",
    location: "Tirupati",
    role: "member",
    mobile: "[Please provide mobile number]",
    motto: "I don't just book trips—I craft stories",
    description: "Meet Vinay Reddy Mahasamudram, the visionary behind V Holidays in Tirupati. With a mission to turn travel dreams into lasting stories, he's recently rebranded his agency for more curated experiences. From spiritual tours to global adventures, Vinay adds thoughtful touches to every journey.",
    languages: ["Telugu", "Hindi", "English"],
    specialization: ["Travel Planning", "Spiritual Tours", "Global Adventures", "Curated Experiences"],
    interests: ["Travel", "Culture", "Storytelling"]
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export const getTeamMembersByLocation = (location: string): TeamMember[] => {
  return teamMembers.filter(member => 
    member.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getTeamMembersBySpecialization = (specialization: string): TeamMember[] => {
  return teamMembers.filter(member => 
    member.specialization?.some(spec => 
      spec.toLowerCase().includes(specialization.toLowerCase())
    )
  );
};