import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "transity",
    title: "Transity",
    category: "Academic Group Android Project",
    shortDescription:
      "An Android ride-hailing application with Customer, Driver, and Admin roles.",
    description:
      "Transity is an academic group Android ride-hailing application created for the completion of my Information Management course. It supports customer ride booking, driver applications and approvals, driver request handling, trip workflows, map and location integration, reverse-geocoded addresses, customer trip history, driver earnings and wallet handling, commission management, discounts, promotional features, admin user and driver management, and support-related administration.",
    problem:
      "The project needed to combine ride booking, role-based accounts, location-aware trip states, driver approval, payment-related handling, and administrative workflows into one understandable Android system for a school project.",
    roleSummary: "Project leader and technical coordinator",
    role: "I served as the project leader, application developer, backend contributor, UI contributor, project planner, tester, and technical coordinator. I helped guide the group's planning, coordination, implementation, testing, and refinement without claiming that every part of the group project was built by me alone.",
    currentStatus:
      "Completed as an academic group project for Information Management, with the main Customer, Driver, and Admin flows implemented and refined for presentation.",
    primaryPlatform: "Android",
    technologies: [
      "Java",
      "Kotlin",
      "Android XML",
      "Node.js",
      "Express",
      "MySQL",
      "Socket.IO",
      "Retrofit",
      "Mapbox",
      "Git",
      "GitHub",
    ],
    status: "Completed",
    href: "/projects/transity",
    featured: true,
    caseStudy: true,
    coverImage: {
      src: "/projects/transity/transity-cover.webp",
      width: 720,
      height: 1600,
      alt: "Transity Android ride-hailing welcome screen.",
      caption: "Transity welcome screen",
      placeholderLabel: "Transity welcome screen",
    },
    features: [
      {
        title: "Customer Ride Booking",
        description:
          "Customers can plan routes, select destinations, review trip details, apply vouchers or promotions, and start ride requests.",
      },
      {
        title: "Driver Approval and Dispatch",
        description:
          "Driver application and approval flows support controlled driver onboarding before drivers handle active ride requests.",
      },
      {
        title: "Trip and Location Handling",
        description:
          "Mapbox, device location, route context, reverse-geocoded addresses, and trip states support pickup and ride workflows.",
      },
      {
        title: "Earnings, Wallets, and Commissions",
        description:
          "Driver earnings, wallet balances, and commission handling are represented in the driver and backend workflows.",
      },
      {
        title: "Discounts and Promotions",
        description:
          "Promotional and discount-related features support vouchers, fare adjustments, and administration.",
      },
      {
        title: "Admin Management",
        description:
          "Admin tools cover users, drivers, approvals, promotions, and support or ticket-related administration.",
      },
    ],
    challenges: [
      {
        title: "Coordinating Group Scope",
        problem:
          "The project covered customer, driver, and admin roles, each with separate screens and business rules.",
        solution:
          "I helped coordinate requirements, divide work into manageable flows, and review integration points so the group could keep the system coherent.",
      },
      {
        title: "Synchronizing Booking States",
        problem:
          "Customer booking, driver request handling, trip status, wallet, and commission behavior needed to remain consistent.",
        solution:
          "The project used explicit trip states and API-driven updates so Android screens and backend records could stay aligned.",
      },
      {
        title: "Location-Aware Interfaces",
        problem:
          "Route planning, address display, map context, and driver location needed to be usable without overwhelming the user.",
        solution:
          "Map and trip information were presented through focused role-specific interfaces for customer and driver flows.",
      },
    ],
    images: [
      {
        src: "/projects/transity/customer-booking-flow.webp",
        width: 720,
        height: 1600,
        alt: "Transity customer booking screen with destination, vehicle, estimated distance, ETA, and fare.",
        caption: "Customer route planning and booking flow",
        placeholderLabel: "Customer booking flow",
      },
      {
        src: "/projects/transity/driver-trip-interface.webp",
        width: 720,
        height: 1600,
        alt: "Transity driver dashboard showing map, wallet balance, commission rate, and online dispatch state.",
        caption: "Driver command and dispatch interface",
        placeholderLabel: "Driver trip interface",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/KKFonsi/Transity",
        type: "github",
      },
      {
        label: "Download Transity",
        href: "https://transity-download-site.netlify.app/",
        type: "website",
      },
    ],
  },
  {
    slug: "kitatrack",
    title: "KitaTrack",
    category: "Personal Android Project",
    shortDescription:
      "An offline-first Android personal finance app focused on safe-to-spend money.",
    description:
      "KitaTrack is my personal offline-first Android finance application. It helps users understand their available or safe-to-spend money through income and expense tracking, reserved funds, budgets, piggy banks or savings goals, debt tracking, subscription tracking, monthly summaries, transaction history, reminders, CSV export, JSON backup and import, an Android home-screen widget, Room database storage, and MVVM-based organization.",
    problem:
      "A simple balance does not always explain how much money is safe to spend after planned budgets, debts, bills, savings goals, and reserved funds are considered.",
    roleSummary: "Personal project owner and developer",
    role: "KitaTrack is my personal project. I planned the finance model, directed the Android implementation, tested offline behavior, reviewed generated code, refined the interface, and corrected feature behavior as the app grew.",
    currentStatus:
      "Completed as a personal Android project for its current public build. Further improvements may continue, but the Reports tab has been removed and is not listed as a current navigation feature.",
    primaryPlatform: "Android",
    technologies: ["Kotlin", "Android XML", "Room", "MVVM", "Git", "GitHub"],
    status: "Completed",
    href: "/projects/kitatrack",
    featured: true,
    caseStudy: true,
    coverImage: {
      src: "/projects/kitatrack/add-income.webp",
      width: 720,
      height: 1600,
      alt: "KitaTrack Add Income screen with amount entry and income source choices.",
      caption: "Add Income screen",
      placeholderLabel: "Add Income screen",
    },
    features: [
      {
        title: "Safe-to-Spend Overview",
        description:
          "The dashboard separates practical available money from reserved funds, obligations, and planned amounts.",
      },
      {
        title: "Income and Expense Tracking",
        description:
          "Users can record transactions, categorize activity, and review transaction history.",
      },
      {
        title: "Budgets and Reserved Funds",
        description:
          "Budgets, debt reserves, piggy banks, and savings goals help users plan where money should go.",
      },
      {
        title: "Debts and Subscriptions",
        description:
          "Debt and subscription tracking support recurring obligations and financial planning.",
      },
      {
        title: "Summaries and Reminders",
        description:
          "Monthly summaries, reminders, and dashboard insights help users understand current financial activity.",
      },
      {
        title: "Local Data and Exports",
        description:
          "Room powers local offline storage, with CSV export plus JSON backup and import for data portability.",
      },
    ],
    challenges: [
      {
        title: "Explaining Safe-to-Spend",
        problem:
          "Users need to know what they can actually spend, not just their total recorded balance.",
        solution:
          "KitaTrack separates income, expenses, planned budgets, debt reserves, subscriptions, and savings goals before presenting safe-to-spend money.",
      },
      {
        title: "Offline-First Data Reliability",
        problem:
          "The app needed to remain useful without a remote backend or account system.",
        solution:
          "Room and MVVM-based organization keep finance data local, structured, and available offline.",
      },
      {
        title: "Keeping Planning Screens Practical",
        problem:
          "Budgets, savings goals, debts, and subscriptions can become too complex if every feature looks different.",
        solution:
          "Shared interaction patterns and consistent Android XML screens keep planning actions familiar across the app.",
      },
    ],
    images: [
      {
        src: "/projects/kitatrack/safe-to-spend-dashboard.webp",
        width: 720,
        height: 1600,
        alt: "KitaTrack dashboard showing safe-to-spend money, monthly summary, debt reserve, and piggy bank cards.",
        caption: "Safe-to-spend dashboard with sample zeroed financial data",
        placeholderLabel: "Safe-to-spend dashboard",
      },
      {
        src: "/projects/kitatrack/budget-planning-screen.webp",
        width: 720,
        height: 1600,
        alt: "KitaTrack budget planning screen with budget name, limit amount, period, category, and active setting.",
        caption: "Budget planning screen",
        placeholderLabel: "Budget planning screen",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/KKFonsi/KitaTrack",
        type: "github",
      },
      {
        label: "Download KitaTrack",
        href: "https://kitatrack-download-site.netlify.app/",
        type: "website",
      },
    ],
  },
  {
    slug: "campus-creatives",
    title: "PUP: Campus Creatives",
    category: "Academic UI/UX Project",
    shortDescription:
      "A UI/UX-focused showcase concept for creative work in the PUP community.",
    description:
      "PUP: Campus Creatives is a UI/UX-focused prototype and interface implementation for a dedicated digital showcase within the Polytechnic University of the Philippines community. It is intended to organize student and creator portfolios, artwork and project discovery, college directories, creator profiles, spotlight content, exhibitions, moderated picks, search and filtering, and public, student, and moderator interface flows in a more structured way than relying only on general social-media feeds.",
    problem:
      "Creative work shared only through general social-media feeds can be scattered, difficult to discover, and hard to organize by college, creator, portfolio, or exhibition context.",
    roleSummary: "UI/UX and interface contributor",
    role: "I contributed to the UI/UX direction, interface planning, information architecture, navigation design, responsive layout decisions, HCI and user-needs-based design choices, and implementation review for the prototype.",
    currentStatus:
      "Completed as an academic UI/UX project. The current deliverable is a UI/UX-focused prototype and interface implementation, not a complete production backend system.",
    primaryPlatform: "Web UI Prototype",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
    ],
    status: "Completed UI/UX Project",
    href: "/projects/campus-creatives",
    featured: true,
    caseStudy: true,
    coverImage: {
      src: "/projects/campus-creatives/campus-creatives-cover.webp",
      width: 1487,
      height: 900,
      alt: "PUP: Campus Creatives landing page UI concept.",
      caption: "Landing page UI concept",
      placeholderLabel: "Campus Creatives landing page",
    },
    features: [
      {
        title: "Creative Discovery",
        description:
          "The interface supports artwork and project browsing through search, filters, categories, colleges, and content types.",
      },
      {
        title: "Creator Profiles",
        description:
          "Creator profile concepts organize portfolios, recognition, submissions, events, and public profile flows.",
      },
      {
        title: "Moderated Showcase",
        description:
          "Spotlight content, exhibitions, campus highlights, and moderated picks guide users toward approved creative work.",
      },
      {
        title: "Role-Based Flows",
        description:
          "Public, student, and moderator interface flows were considered in the navigation and information architecture.",
      },
      {
        title: "Responsive UI",
        description:
          "The prototype emphasizes responsive layout decisions and clearer access to creative work across viewports.",
      },
      {
        title: "HCI-Based Decisions",
        description:
          "User needs, discoverability, and portfolio organization informed the prototype structure.",
      },
    ],
    challenges: [
      {
        title: "Clarifying Scope",
        problem:
          "The concept could be mistaken for a fully deployed production platform with a complete backend.",
        solution:
          "The portfolio now presents it as a completed UI/UX project and prototype/interface implementation.",
      },
      {
        title: "Improving Discovery",
        problem:
          "Social-media-style feeds do not provide enough structure for campus creative portfolios.",
        solution:
          "The design emphasizes directories, filters, creator profiles, spotlight areas, and organized showcase flows.",
      },
      {
        title: "Balancing User Roles",
        problem:
          "Public visitors, students, creators, and moderators need different interface priorities.",
        solution:
          "The information architecture separates discovery, portfolio, submission, and moderation-related actions.",
      },
    ],
    images: [
      {
        src: "/projects/campus-creatives/campus-discovery-concept.webp",
        width: 1487,
        height: 900,
        alt: "PUP: Campus Creatives explore interface with search, filters, and creative work cards.",
        caption: "Campus discovery interface concept",
        placeholderLabel: "Campus discovery concept",
      },
      {
        src: "/projects/campus-creatives/creator-portfolio-concept.webp",
        width: 1487,
        height: 900,
        alt: "PUP: Campus Creatives creator portfolio interface concept with profile details and portfolio cards.",
        caption: "Creator portfolio interface concept",
        placeholderLabel: "Creator portfolio concept",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/KKFonsi/campus-creatives-UI",
        type: "github",
      },
      {
        label: "Open UI Demo",
        href: "https://campus-creatives-ui-api-server.vercel.app/",
        type: "demo",
      },
    ],
  },
  {
    slug: "reviewvault",
    title: "ReviewVault",
    category: "Academic-Support Web Project",
    shortDescription:
      "An in-development reviewer and exam simulator for structured study practice.",
    description:
      "ReviewVault is an in-development personal or academic-support web project for organizing reviewer content and taking structured practice exams. Its current scope includes subject management, topic management, exam management, question-bank management, easy, medium, and hard exam organization, CSV and JSON exam import, import preview and validation, automatic creation of missing subjects or topics where supported, an exam-taking interface, timer, question navigation, exam submission, scoring and results, answer review, exam history, historical result snapshots, score trends, subject, exam, and topic performance, and generated insights based on exam history.",
    problem:
      "Review materials and practice questions can become scattered across files, making it harder to organize topics, run exams, review answers, and understand performance over time.",
    roleSummary: "Project planner and developer",
    role: "I direct the project requirements, data structure, interface decisions, generated implementation review, testing, debugging, and polish as the project continues to develop.",
    currentStatus:
      "In development. The main study, import, exam-taking, scoring, answer review, history, trend, performance, and generated insight workflows are being refined, with further development and final polish still ongoing.",
    primaryPlatform: "Web",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Local Storage",
      "Git",
      "GitHub",
    ],
    status: "In Development",
    href: "/projects/reviewvault",
    featured: true,
    caseStudy: true,
    coverImage: {
      src: "/projects/reviewvault/reviewvault-cover.webp",
      width: 1487,
      height: 900,
      alt: "ReviewVault landing page for a web-based reviewer and exam simulator.",
      caption: "ReviewVault landing page",
      placeholderLabel: "ReviewVault landing page",
    },
    features: [
      {
        title: "Study Structure",
        description:
          "Subjects, topics, exams, and question banks organize reviewer content into manageable areas.",
      },
      {
        title: "Difficulty Organization",
        description:
          "Questions and exams can be organized across easy, medium, and hard difficulty levels.",
      },
      {
        title: "CSV and JSON Import",
        description:
          "Exam import includes preview, validation, and automatic creation of missing subjects or topics where supported.",
      },
      {
        title: "Exam-Taking Interface",
        description:
          "Practice exams include timers, question navigation, submission, scoring, and result summaries.",
      },
      {
        title: "Answer Review",
        description:
          "Users can review submitted answers, compare against correct answers, and inspect explanations.",
      },
      {
        title: "History and Insights",
        description:
          "Exam history, historical snapshots, score trends, performance breakdowns, and generated insights support ongoing study review.",
      },
    ],
    challenges: [
      {
        title: "Keeping Local Data Coherent",
        problem:
          "Subjects, topics, exams, questions, attempts, and historical results must stay connected without a server-backed database.",
        solution:
          "Structured browser storage and clear data relationships keep the local study system usable while development continues.",
      },
      {
        title: "Validating Imported Exams",
        problem:
          "CSV and JSON files can contain missing subjects, missing topics, inconsistent difficulty values, or invalid question data.",
        solution:
          "Import preview and validation help catch issues before exam data is added to the active question bank.",
      },
      {
        title: "Presenting Performance Clearly",
        problem:
          "Exam results need to show more than a final score if users are trying to improve.",
        solution:
          "The project adds answer review, topic performance, history snapshots, score trends, and generated insights based on exam history.",
      },
    ],
    images: [
      {
        src: "/projects/reviewvault/exam-results-screen.webp",
        width: 1487,
        height: 900,
        alt: "ReviewVault exam results screen with score summary and performance by topic.",
        caption: "Exam results and topic performance",
        placeholderLabel: "Exam results screen",
      },
      {
        src: "/projects/reviewvault/question-review-interface.webp",
        width: 1487,
        height: 900,
        alt: "ReviewVault answer review interface showing question status, answer choices, and explanation.",
        caption: "Question review interface",
        placeholderLabel: "Question review interface",
      },
    ],
    links: [],
  },
];
