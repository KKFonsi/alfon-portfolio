import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "transity",
    title: "Transity",
    category: "Android Ride-Hailing Application",
    shortDescription:
      "A role-based Android ride-hailing application for customers, drivers, and administrators.",
    description:
      "Transity is a role-based ride-hailing application designed for customers, drivers, and administrators. It supports the full ride-booking process, from selecting a destination and finding a driver to trip completion, payment handling, and administrative management.",
    problem:
      "Ride-hailing systems involve multiple users, real-time booking states, location handling, payment-related rules, and administrative workflows. The project aimed to combine these processes into one structured Android application while keeping the experience understandable for customers, drivers, and administrators.",
    role: "I worked on the application structure, Android interfaces, booking flow, driver operations, backend integration, database behavior, role-based access, Mapbox location features, and administrative functions. I also handled debugging, UI refinements, testing, and integration between the Android application and Node.js backend.",
    currentStatus:
      "The major customer, driver, and administrator flows are implemented. The project is considered complete as a school project, with later work focused mainly on UI refinement, testing, and presentation.",
    primaryPlatform: "Android",
    technologies: [
      "Kotlin",
      "Java",
      "Android",
      "XML Layouts",
      "Node.js",
      "Express",
      "MySQL",
      "Retrofit",
      "Mapbox",
      "Socket.IO",
      "MVVM",
    ],
    status: "Completed School Project",
    href: "/projects/transity",
    featured: true,
    caseStudy: true,
    features: [
      {
        title: "Customer Booking",
        description:
          "Customers can select destinations, request rides, review booking details, track trip status, and complete payment-related steps.",
      },
      {
        title: "Driver Operations",
        description:
          "Drivers can go online, review available requests, accept bookings, navigate pickup and trip stages, and complete rides.",
      },
      {
        title: "Role-Based Accounts",
        description:
          "Customer, Driver, and Admin accounts use different interfaces, permissions, and workflows.",
      },
      {
        title: "Live Location and Routes",
        description:
          "Mapbox is used for maps, device location, destination selection, route display, and driver or customer trip states.",
      },
      {
        title: "Wallet and Commission",
        description:
          "Driver wallet balances, top-ups, and commission deductions are handled through backend business rules.",
      },
      {
        title: "Discounts and Promotions",
        description:
          "The application supports promo codes, approved student, senior, or PWD discounts, and earned vouchers.",
      },
      {
        title: "Admin Management",
        description:
          "Administrators can manage users, driver applications, support tickets, promotions, and discount requests.",
      },
    ],
    challenges: [
      {
        title: "Managing Multiple Booking States",
        problem:
          "The customer and driver applications needed to stay consistent through searching, acceptance, pickup, trip progress, payment, cancellation, and completion.",
        solution:
          "The booking process was divided into explicit states with dedicated interface behavior and backend status updates, reducing unclear transitions and keeping both user roles synchronized.",
      },
      {
        title: "Location and Route Consistency",
        problem:
          "Driver and customer locations, route drawing, route clearing, and destination updates could become inconsistent across booking stages.",
        solution:
          "Location handling was centralized around the active booking state, with routes refreshed or cleared at the correct transitions.",
      },
      {
        title: "Complex Role-Based Interface",
        problem:
          "Customers, drivers, and administrators required different navigation, screens, permissions, and workflows.",
        solution:
          "Authentication results and account roles were used to direct users into role-specific interfaces while sharing reusable API and data structures.",
      },
      {
        title: "Dialog and Modal Stability",
        problem:
          "Several application dialogs previously caused layout or state-related crashes.",
        solution:
          "Shared dialog presentation behavior was introduced to standardize modal creation and reduce repeated unstable logic.",
      },
      {
        title: "Backend and Database Integration",
        problem:
          "Some booking and administrative features depended on database fields and API payloads remaining synchronized.",
        solution:
          "API routes, SQL behavior, Retrofit models, and Android state handling were reviewed together so mismatches could be corrected without changing unrelated flows.",
      },
    ],
    images: [
      {
        alt: "Visual placeholder for the Transity customer booking flow.",
        caption: "Customer booking flow",
        placeholderLabel: "Customer booking flow",
      },
      {
        alt: "Visual placeholder for the Transity driver trip interface.",
        caption: "Driver trip interface",
        placeholderLabel: "Driver trip interface",
      },
    ],
    links: [],
  },
  {
    slug: "kitatrack",
    title: "KitaTrack",
    category: "Android Personal Finance Application",
    shortDescription:
      "An offline-first Android personal finance tracker focused on budgeting and safe-to-spend clarity.",
    description:
      "KitaTrack is an offline-first personal finance tracker designed to make income, expenses, obligations, and available money easier to understand. Its main focus is giving users a clear safe-to-spend amount rather than only displaying a raw account balance.",
    problem:
      "Traditional expense records can show transaction history without clearly explaining how much money is actually available after budgets, debts, subscriptions, savings goals, and reserved amounts are considered.",
    role: "I worked on the application concept, Android architecture, interface design, financial rules, transaction flows, Room data storage, planning features, reports, backup and import behavior, and usability improvements.",
    currentStatus:
      "The main finance tracking and planning features are implemented. Development is continuing through interface refinement, widget improvements, data validation, and additional usability testing.",
    primaryPlatform: "Android",
    technologies: [
      "Kotlin",
      "Android",
      "XML Layouts",
      "Room",
      "MVVM",
      "Repository Pattern",
      "LiveData",
      "Flow",
      "JSON",
      "CSV",
    ],
    status: "In Development",
    href: "/projects/kitatrack",
    featured: true,
    caseStudy: true,
    features: [
      {
        title: "Income and Expense Tracking",
        description:
          "Users can record income and expenses using categorized transactions and review them through history and summaries.",
      },
      {
        title: "Safe-to-Spend Balance",
        description:
          "The dashboard distinguishes the main balance from money reserved for budgets, debts, subscriptions, and savings.",
      },
      {
        title: "Budget Management",
        description:
          "Users can create budgets, monitor spending progress, and review budget status.",
      },
      {
        title: "Savings Goals",
        description:
          "Piggy Bank goals support planned contributions, progress tracking, and completion handling.",
      },
      {
        title: "Debt Tracking",
        description:
          "Users can record debts, payments, due information, and remaining balances.",
      },
      {
        title: "Subscription Planning",
        description:
          "Recurring subscriptions can be organized by priority and considered during financial allocation.",
      },
      {
        title: "Reports and Summaries",
        description:
          "The application presents transaction summaries, financial activity analysis, and charts or monthly insights.",
      },
      {
        title: "Backup and Import",
        description:
          "Users can export and restore application data through JSON and export transaction information through CSV.",
      },
    ],
    challenges: [
      {
        title: "Defining Safe-to-Spend",
        problem:
          "A visible account balance does not necessarily represent money that is free to spend.",
        solution:
          "The application separates available, reserved, planned, and obligated amounts so the dashboard can present a more practical safe-to-spend value.",
      },
      {
        title: "Financial Allocation Priority",
        problem:
          "Multiple obligations could compete for the same available money.",
        solution:
          "A defined priority order was established for debts, essential subscriptions, savings, and lower-priority subscriptions.",
      },
      {
        title: "Offline Data Reliability",
        problem:
          "The application needed to remain functional without depending on a remote backend.",
        solution:
          "Room, repositories, and observable Android data flows were used to keep finance data locally available and consistently reflected in the interface.",
      },
      {
        title: "Complex Planning Interfaces",
        problem:
          "Budgets, savings goals, debts, and subscriptions each required different forms, progress states, and actions.",
        solution:
          "Shared visual patterns and bottom-sheet-based forms were used while preserving the business rules unique to each plan type.",
      },
      {
        title: "Backup Data Accuracy",
        problem:
          "Imported financial values and categories must match the application's expected JSON structure.",
        solution:
          "Backup structures and validation rules were reviewed so imported values could be mapped correctly without silently altering financial totals.",
      },
    ],
    images: [
      {
        alt: "Visual placeholder for the KitaTrack finance dashboard.",
        caption: "Finance dashboard",
        placeholderLabel: "Finance dashboard",
      },
      {
        alt: "Visual placeholder for the KitaTrack budget planning screen.",
        caption: "Budget planning screen",
        placeholderLabel: "Budget planning screen",
      },
    ],
    links: [],
  },
  {
    slug: "reviewvault",
    title: "ReviewVault",
    category: "Web-Based Reviewer and Exam Simulator",
    shortDescription:
      "A reviewer repository and exam simulator for organizing questions and measuring study performance.",
    description:
      "ReviewVault is a browser-based reviewer repository and exam simulator that helps users organize study materials, import questions, take timed exams, review answers, and monitor performance.",
    problem:
      "Study questions are often scattered across documents, spreadsheets, and separate quiz tools. ReviewVault combines question organization, exam simulation, scoring, answer review, and progress tracking in one local application.",
    role: "I worked on the project concept, interface structure, data model, React components, local storage workflows, import behavior, exam-taking logic, scoring, result review, exam history, and score-trend planning.",
    currentStatus:
      "The project includes question organization, import, exam taking, scoring, results, and answer review. Exam history and score trends are the next major areas of development.",
    primaryPlatform: "Web",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Local Storage",
      "Session Storage",
      "CSV",
      "JSON",
    ],
    status: "In Development",
    href: "/projects/reviewvault",
    featured: true,
    caseStudy: true,
    features: [
      {
        title: "Subject and Topic Organization",
        description:
          "Users can create subjects and topics to organize questions and examinations.",
      },
      {
        title: "Exam and Question Management",
        description:
          "Exams and questions can be created, edited, filtered, and grouped by subject, topic, and difficulty.",
      },
      {
        title: "CSV and JSON Import",
        description:
          "Question sets can be imported with preview, duplicate handling, and automatic creation of missing related records.",
      },
      {
        title: "Timed Exam Simulation",
        description:
          "Users can take timed exams, navigate between questions, and confirm submission.",
      },
      {
        title: "Automatic Scoring",
        description:
          "Submitted attempts are scored using stored question data and summarized through correct, incorrect, skipped, and time statistics.",
      },
      {
        title: "Answer Review",
        description:
          "Users can inspect each response, compare it with the correct answer, and read explanations.",
      },
      {
        title: "Exam History and Trends",
        description:
          "The project is designed to preserve past attempts and present performance over time.",
      },
    ],
    challenges: [
      {
        title: "Keeping Data Consistent Without a Backend",
        problem:
          "Subjects, topics, exams, questions, and attempts needed to remain connected while using browser storage.",
        solution:
          "A centralized data context and structured local storage helpers were used to manage relationships and cascading changes.",
      },
      {
        title: "Importing Flexible Question Sets",
        problem:
          "Imported CSV and JSON files could contain missing subjects, topics, exams, or duplicate questions.",
        solution:
          "The import process validates and previews incoming rows, creates missing related records, and skips duplicates when appropriate.",
      },
      {
        title: "Preserving Exam Attempts",
        problem:
          "An exam attempt must survive route changes between the exam page, results page, and answer review page.",
        solution:
          "Pending attempt and current result data are stored temporarily in session storage and rebuilt from the current question bank when needed.",
      },
      {
        title: "Scoring and Topic Performance",
        problem:
          "The application needed to calculate overall results while also showing performance by topic.",
        solution:
          "Pure scoring utilities calculate answer status, totals, percentages, and topic-level performance separately from interface components.",
      },
    ],
    images: [
      {
        alt: "Visual placeholder for the ReviewVault exam results screen.",
        caption: "Exam results screen",
        placeholderLabel: "Exam results screen",
      },
      {
        alt: "Visual placeholder for the ReviewVault question review interface.",
        caption: "Question review interface",
        placeholderLabel: "Question review interface",
      },
    ],
    links: [],
  },
  {
    slug: "campus-creatives",
    title: "Campus Creatives",
    category: "Community Art and Talent Showcase System",
    shortDescription:
      "A community platform designed to showcase student creators and campus talent.",
    description:
      "Campus Creatives is a proposed community platform for student creators to publish portfolio work, gain recognition, participate in campus activities, and connect with colleges, organizations, and audiences.",
    problem:
      "Creative work shared through general social media can quickly become buried, making it difficult for student creators to build a visible portfolio or receive sustained recognition from their campus community.",
    role: "I contributed to the project concept, user research, feature planning, survey analysis, information architecture, navigation flow, interface requirements, meeting documentation, and UI sketch preparation.",
    currentStatus:
      "The concept, target users, major features, research findings, information architecture, and UI sketch requirements have been defined. The project is currently in the interface sketch and design stage.",
    primaryPlatform: "Design Concept",
    technologies: [
      "Figma",
      "UI/UX Design",
      "Human-Computer Interaction",
      "Information Architecture",
      "Responsive Web Design",
      "User Research",
      "Survey Analysis",
    ],
    status: "Design and Planning Phase",
    href: "/projects/campus-creatives",
    featured: true,
    caseStudy: true,
    features: [
      {
        title: "Creator Portfolios",
        description:
          "Student creators can organize and present creative projects through dedicated portfolio pages.",
      },
      {
        title: "College and Organization Pages",
        description:
          "Colleges and organizations can highlight members, events, and creative activities.",
      },
      {
        title: "Submission and Curation",
        description:
          "Creative works can pass through a submission and review process before being featured.",
      },
      {
        title: "Campus Highlights",
        description:
          "Selected projects and creators can receive broader campus visibility.",
      },
      {
        title: "Events and Contests",
        description:
          "The platform can support creative events, contests, and participation opportunities.",
      },
      {
        title: "Search and Filters",
        description:
          "Visitors can discover creators and projects by category, organization, college, or creative field.",
      },
      {
        title: "Recognition and Portfolio Links",
        description:
          "Creators can earn recognition badges and share portfolio links in resumes or applications.",
      },
    ],
    challenges: [
      {
        title: "Avoiding Social Media Duplication",
        problem:
          "The platform should not simply recreate a general-purpose social network.",
        solution:
          "The concept focuses on structured portfolios, campus discovery, recognition, submissions, and creative events rather than general social posting.",
      },
      {
        title: "Defining Different User Needs",
        problem:
          "Individual creators, colleges, organizations, viewers, and curators need different features.",
        solution:
          "User needs were grouped into clear roles and mapped into separate content areas and navigation flows.",
      },
      {
        title: "Turning Survey Findings Into Interface Priorities",
        problem:
          "Survey results needed to influence the interface without overgeneralizing from a small sample.",
        solution:
          "The survey was used as supporting evidence while broader HCI principles and project requirements guided the final interface priorities.",
      },
      {
        title: "Keeping the Information Architecture Understandable",
        problem:
          "Portfolios, highlights, events, submissions, organizations, and search could create a complicated navigation structure.",
        solution:
          "The content was grouped into a limited number of primary destinations and documented in a concise UI sketch reference.",
      },
    ],
    images: [
      {
        alt: "Visual placeholder for the Campus Creatives creator portfolio concept.",
        caption: "Creator portfolio concept",
        placeholderLabel: "Creator portfolio concept",
      },
      {
        alt: "Visual placeholder for the Campus Creatives campus discovery concept.",
        caption: "Campus discovery concept",
        placeholderLabel: "Campus discovery concept",
      },
    ],
    links: [],
  },
  {
    slug: "anivault",
    title: "AniVault",
    category: "Web Application",
    shortDescription:
      "A PHP-based anime discovery, review, and personal-list application.",
    description:
      "AniVault allows users to browse anime, filter by genre, read reviews, manage a personal list, add ratings and notes, and interact with a database-driven recommendation chatbot.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
    status: "Completed Academic Project",
    featured: false,
    caseStudy: false,
    links: [],
  },
];
