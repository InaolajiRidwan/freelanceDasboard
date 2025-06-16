// Profile Information
export const profileInformation = {
  name: "Inaolaji Afiyah",
  role: "Frontend Developer",
  location: "Lagos, Nigeria",
  email: "jane.doe@example.com",
  avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  phone: "+234 7061 366 051",
  bio: "Passionate frontend developer with a strong focus on building responsive, high-performance web interfaces using React and Tailwind CSS. Skilled in crafting seamless animations, intuitive UX/UI designs, and modular, reusable component-based architectures. Adept at transforming complex requirements into clean, maintainable code while leveraging modern tools like Framer Motion, Vite, and Chakra UI. Experienced in collaborating with cross-functional teams, optimizing applications for speed and accessibility, and integrating third-party APIs to build data-driven, interactive user experiences. Continuously learning and exploring new technologies in the frontend ecosystem to stay current and deliver innovative solutions. Committed to delivering pixel-perfect results, clean code practices, and delightful user interactions across all devices.",
  social: {
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
  },
};

// Conversations
export const profileConversations = [
  {
    id: 1,
    sender: "Client A",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    subject: "New project inquiry",
    message:
      "Hi Jane, I’d like to discuss a new React project I’m planning for my startup. The idea is to build a responsive dashboard with authentication, charting, and user roles. Are you available for a quick call this week to go over the requirements in more detail?",
    date: "2025-06-10",
    read: false,
  },
  {
    id: 2,
    sender: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    subject: "Weekly update",
    message:
      "Hey Jane, please review the new UI updates before Friday. We’ve implemented the sidebar navigation, added toast notifications, and fixed the mobile responsiveness issues. Let us know if anything still feels off before we close this sprint.",
    date: "2025-06-08",
    read: true,
  },
  {
    id: 3,
    sender: "Design Lead - Sarah",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    subject: "Figma design feedback",
    message:
      "Hi! I’ve updated the portfolio mockup with the latest style guide changes. Pay attention to the new card spacing, button hover states, and typography hierarchy. I’d love your feedback on how it looks on smaller screens too.",
    date: "2025-06-07",
    read: false,
  },
  {
    id: 4,
    sender: "Client B",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    subject: "Invoice request",
    message:
      "Hi Jane, could you please resend the invoice for the last milestone we completed in May? Our finance team is requesting a breakdown for documentation. Also, let me know if you’ve already started on the next feature batch.",
    date: "2025-06-06",
    read: true,
  },
  {
    id: 5,
    sender: "QA - Janet",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    subject: "Bug report summary",
    message:
      "Here’s the summary of issues found during testing: The mobile navbar overlaps content on scroll, the dark mode toggle doesn’t persist, and the contact form occasionally fails validation. Please prioritize these for the next patch.",
    date: "2025-06-04",
    read: false,
  },
];

// Projects Summary
export const profileProjectsSummary = [
  {
    id: 1,
    name: "Crypto Dashboard",
    status: "In Progress",
    deadline: "2025-07-01",
    progress: 65,
    team: ["Jane Doe", "Alex Smith"],
  },
  {
    id: 2,
    name: "Portfolio Website",
    status: "Completed",
    deadline: "2025-05-20",
    progress: 100,
    team: ["Jane Doe"],
  },

  {
    id: 3,
    name: "E-commerce Admin Panel",
    status: "In Progress",
    deadline: "2025-08-15",
    progress: 40,
    team: ["Alex Smith", "Chris Evans"],
  },
  {
    id: 4,
    name: "Mobile App UI Kit",
    status: "Pending",
    deadline: "2025-09-10",
    progress: 0,
    team: ["Jane Doe", "Sam Lee"],
  },
  {
    id: 5,
    name: "Blog CMS System",
    status: "Completed",
    deadline: "2025-06-05",
    progress: 100,
    team: ["Chris Evans"],
  },
];

// View Projects (Detailed)
export const profileViewProjects = [
  {
    id: 1,
    name: "Crypto Dashboard",
    description:
      "A real-time dashboard for viewing crypto and stock data using React and APIs.",
    technologies: ["React", "Tailwind CSS", "Chart.js", "CoinGecko API"],
    link: "https://yourcryptoapp.vercel.app",
    github: "https://github.com/janedoe/crypto-dashboard",
    dueDate: "2024-12-20",
    participants: 3,
    image: "../../src/assets/cryptodash.avif",
  },
  {
    id: 2,
    name: "Developer Portfolio",
    description: "Personal portfolio built with Next.js and Chakra UI.",
    technologies: ["Next.js", "Chakra UI", "Framer Motion"],
    link: "https://janedoe.dev",
    github: "https://github.com/janedoe/portfolio",
    dueDate: "2024-11-10",
    participants: 1,
    image: "../../src/assets/portfolioImage.avif",
  },
  {
    id: 3,
    name: "E-commerce Storefront",
    description:
      "An e-commerce frontend application with cart, filtering, and product search.",
    technologies: ["React", "Redux", "Chakra UI"],
    link: "https://ecomstore.vercel.app",
    github: "https://github.com/janedoe/ecommerce-storefront",
    dueDate: "2025-01-05",
    participants: 4,
    image: "../../src/assets/ecommerce.avif",
  },
  {
    id: 4,
    name: "Task Manager",
    description:
      "A simple task manager app that allows users to create, edit, and track tasks.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://taskmanagerapp.vercel.app",
    github: "https://github.com/janedoe/task-manager",
    dueDate: "2025-02-14",
    participants: 2,
    image: "../../src/assets/task.avif",
  },
  {
    id: 5,
    name: "Blog CMS",
    description:
      "A content management system for managing and publishing blog posts.",
    technologies: ["Next.js", "Sanity.io", "Chakra UI"],
    link: "https://blogcms.vercel.app",
    github: "https://github.com/janedoe/blog-cms",
    dueDate: "2025-01-30",
    participants: 3,
    image: "../../src/assets/blog.avif",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "A fitness tracking app to log workouts and monitor progress.",
    technologies: ["React Native", "Expo", "Firebase"],
    link: "https://expo.dev/@janedoe/fittrack",
    github: "https://github.com/janedoe/fitness-tracker",
    dueDate: "2025-03-10",
    participants: 2,
    image: "../../src/assets/fitness.avif",
  },
  {
    id: 7,
    name: "Movie Search App",
    description:
      "Search for movies and view detailed information using OMDb API.",
    technologies: ["React", "OMDb API", "Styled Components"],
    link: "https://moviesearchapp.vercel.app",
    github: "https://github.com/janedoe/movie-search",
    dueDate: "2024-12-05",
    participants: 1,
    image: "../../src/assets/movie.avif",
  },
  {
    id: 8,
    name: "Freelancer Dashboard",
    description:
      "A portfolio dashboard for freelancers to manage projects and earnings.",
    technologies: ["React", "Chakra UI", "Recharts"],
    link: "https://freelancerdashboard.vercel.app",
    github: "https://github.com/janedoe/freelancer-dashboard",
    dueDate: "2025-04-01",
    participants: 2,
    image: "../../src/assets/freelance.png",
  },
  {
    id: 9,
    name: "Weather Forecast App",
    description:
      "Displays weather forecast using OpenWeatherMap API with responsive design.",
    technologies: ["React", "Axios", "Tailwind CSS"],
    link: "https://weatherapp.vercel.app",
    github: "https://github.com/janedoe/weather-app",
    dueDate: "2025-01-18",
    participants: 2,
    image: "../../src/assets/weather.avif",
  },
  {
    id: 10,
    name: "Recipe Book",
    description:
      "Search and save recipes with nutrition info using Edamam API.",
    technologies: ["React", "React Router", "Material UI"],
    link: "https://recipebook.vercel.app",
    github: "https://github.com/janedoe/recipe-book",
    dueDate: "2025-02-22",
    participants: 1,
    image: "../../src/assets/recipe.avif",
  },
  {
    id: 11,
    name: "Chat App",
    description:
      "A real-time chat application with authentication and user presence features.",
    technologies: ["React", "Socket.IO", "Firebase Auth"],
    link: "https://chatapp.vercel.app",
    github: "https://github.com/janedoe/chat-app",
    dueDate: "2025-03-05",
    participants: 3,
    image: "../../src/assets/chat.jpg",
  },
  {
    id: 12,
    name: "Invoice Generator",
    description:
      "Create and export professional invoices with dynamic line items and calculations.",
    technologies: ["Vue.js", "Bootstrap", "jsPDF"],
    link: "https://invoicegen.vercel.app",
    github: "https://github.com/janedoe/invoice-generator",
    dueDate: "2024-12-28",
    participants: 2,
    image: "../../src/assets/invoice.png",
  },
  {
    id: 13,
    name: "",
    description: "",
    technologies: [],
    link: "",
    github: "",
    dueDate: "",
    participants: 0,
    image: null,
  },
];

// Orders Overview
export const profileOrdersOverview = [
  {
    id: 1,
    item: "Figma Design Subscription",
    amount: "$45.00",
    status: "Paid",
    date: "2025-06-01",
  },
  {
    id: 2,
    item: "Domain Renewal - janedoe.dev",
    amount: "$12.99",
    status: "Pending",
    date: "2025-06-10",
  },
  {
    id: 3,
    item: "Hosting - Vercel Pro Plan",
    amount: "$20.00",
    status: "Paid",
    date: "2025-05-28",
  },
  {
    id: 4,
    item: "Client Payment - Crypto Dashboard",
    amount: "$750.00",
    status: "Received",
    date: "2025-06-05",
  },
];

//Feedback

export const clientFeedbacks = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    role: "Product Manager at Finlytics",
    feedback:
      "Working with you on the crypto dashboard was a breeze! Your responsiveness and attention to UI details made all the difference.",
    rating: 5,
    date: "2025-02-10",
    review: "Excellent collaboration and code quality.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    clientName: "Michael Odu",
    role: "Startup Founder",
    feedback:
      "The landing page you built for us helped improve our conversion rates significantly. Clean code, on-time delivery—what more can we ask for!",
    rating: 4,
    date: "2025-01-22",
    review: "Great job! Delivery was fast and smooth.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 3,
    clientName: "Adaeze Nwankwo",
    role: "Digital Marketing Consultant",
    feedback:
      "Thank you for your excellent support. The freelancer dashboard looks sleek, responsive, and client-friendly. You're a solid front-end pro!",
    rating: 5,
    date: "2025-03-14",
    review: "Highly recommended. Impressive UI work.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    clientName: "James Lee",
    role: "Creative Director at Studio88",
    feedback:
      "You implemented the design system exactly as requested. The animations and transitions gave our portfolio that extra flair. Great job!",
    rating: 4,
    date: "2025-04-01",
    review: "Well executed animations and clean structure.",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 5,
    clientName: "Fatima Bello",
    role: "UI/UX Designer",
    feedback:
      "Loved collaborating with you. You perfectly translated the Figma files into clean, responsive code.",
    rating: 5,
    date: "2025-02-28",
    review: "Pixel-perfect results and good communication.",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 6,
    clientName: "David Okon",
    role: "Tech Lead at SoftSync",
    feedback:
      "Impressive skills! Your understanding of component reuse and state management saved us tons of time.",
    rating: 5,
    date: "2025-03-07",
    review: "Efficient and modular React implementation.",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 7,
    clientName: "Emily Roberts",
    role: "Freelance Writer",
    feedback:
      "The blog CMS you developed is easy to use and visually appealing. I love the interface!",
    rating: 4,
    date: "2025-01-15",
    review: "Simple UI, works like a charm!",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    clientName: "Chinedu Okafor",
    role: "Entrepreneur",
    feedback:
      "Thanks for helping us launch the MVP in time. The progressive web app feels fast and modern.",
    rating: 5,
    date: "2025-04-10",
    review: "Top-tier frontend performance.",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    id: 9,
    clientName: "Laura Kim",
    role: "Content Strategist",
    feedback:
      "Appreciated your clear code and accessibility practices. Our audience can now browse on any device with ease.",
    rating: 4,
    date: "2025-03-20",
    review: "Accessible and mobile-friendly work.",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: 10,
    clientName: "Tunde Salami",
    role: "DevOps Engineer",
    feedback:
      "You made integration with our backend APIs seamless. Well-structured components and smart loading states.",
    rating: 5,
    date: "2025-02-05",
    review: "Professional approach to API consumption.",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

//Earning summary

export const earningSummary = {
  totalEarnings: 28500,
  currency: "USD",
  monthlyEarnings: [
    { month: "January", amount: 2200 },
    { month: "February", amount: 1950 },
    { month: "March", amount: 3200 },
    { month: "April", amount: 4000 },
    { month: "May", amount: 3700 },
    { month: "June", amount: 2800 },
  ],
  projectEarnings: [
    { project: "Crypto Dashboard", amount: 3200 },
    { project: "Developer Portfolio", amount: 1500 },
    { project: "E-commerce Storefront", amount: 4200 },
    { project: "Task Manager", amount: 2400 },
    { project: "Blog CMS", amount: 3300 },
    { project: "Fitness Tracker", amount: 1800 },
    { project: "Freelancer Dashboard", amount: 3500 },
  ],
  paymentMethods: [
    { method: "PayPal", amount: 9500 },
    { method: "Stripe", amount: 7800 },
    { method: "Bank Transfer", amount: 7200 },
  ],
  recentTransactions: [
    {
      id: 1,
      client: "Finlytics Inc.",
      project: "Crypto Dashboard",
      date: "2025-06-01",
      amount: 1500,
      status: "Completed",
    },
    {
      id: 2,
      client: "Adaeze Nwankwo",
      project: "Freelancer Dashboard",
      date: "2025-05-20",
      amount: 2000,
      status: "Completed",
    },
  ],
};
