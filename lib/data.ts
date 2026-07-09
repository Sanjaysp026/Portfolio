export const site = {
  name: "Sanjay Saravanan",
  title: "Data & Statistical Analyst | Dashboard Developer | Website Developer | Research Consultant",
  tagline:
    "Transforming data into meaningful insights through Statistics, Analytics, and Business Intelligence.",
  email: "sansanjaysp026@gmail.com",
  phone: "+91 99402 89678",
  photo: "/profile.png",
  availability: "Open to new projects",
  socials: {
    linkedin: "https://linkedin.com/in/sanjaysp026",
    github: "https://github.com/sanjaysp026",
    whatsapp: "https://wa.me/919940289678",
  },
};

export type Service = {
  icon: "chart-column" | "layout-dashboard" | "chart-scatter" | "brush" | "book-open" | "brain-circuit" | "globe" | "cog";
  title: string;
  description: string;
  items: string[];
  tools?: string[];
};

export const services: Service[] = [
  {
    icon: "chart-column",
    title: "Statistical Analysis",
    description:
      "Helping researchers, students, and organizations make data-driven decisions using statistical techniques.",
    items: [
      "Descriptive Statistics",
      "Hypothesis Testing",
      "Regression Analysis",
      "ANOVA",
      "Chi-Square Test",
      "Correlation Analysis",
      "Survival Analysis",
      "Logistic Regression",
      "Time Series Analysis",
      "Non-Parametric Tests",
      "Sample Size Calculation",
      "Experimental Design",
    ],
  },
  {
    icon: "layout-dashboard",
    title: "Dashboard Development",
    description: "Building interactive dashboards for research and business reporting.",
    items: [],
    tools: ["Power BI", "Microsoft Excel", "Google Sheets", "Looker","R Shiny"],
  },
  {
    icon: "chart-scatter",
    title: "Data Visualization",
    description: "Creating meaningful visualizations that communicate insights clearly.",
    items: [
      "Interactive Dashboards",
      "Business Reports",
      "Statistical Charts",
      "KPI Dashboards",
      "Research Visualizations",
    ],
  },
  {
    icon: "brush",
    title: "Data Cleaning & Preparation",
    description: "Preparing raw data into a validated, analysis-ready state.",
    items: [
      "Data Validation",
      "Data Cleaning",
      "Missing Value Treatment",
      "Data Transformation",
      "Data Formatting",
      "Data Integration",
    ],
  },
  {
    icon: "book-open",
    title: "Research Support",
    description: "Supporting the full research pipeline, from design to interpretation.",
    items: [
      "Questionnaire Design",
      "Survey Data Analysis",
      "Statistical Interpretation",
      "Research Methodology",
      "Chapter 4 Analysis",
      "Result Interpretation",
    ],
  },
  {
    icon: "brain-circuit",
    title: "Machine Learning",
    description: "Building predictive models using statistical and machine learning techniques.",
    items: ["Logistic Regression", "Decision Trees", "Classification Models", "Model Evaluation","Random Forests", "Support Vector Machines", "Clustering Algorithms"],
  },
  {
    icon: "globe",
    title: "Web Application Development",
    description: "Building data-driven web applications and analytics tools.",
    items: ["Portfolio Websites", "Analytics Portals", "Inventory Systems", "Reporting Applications"],
  },
  {
    icon: "cog",
    title: "Automation",
    description: "Automating repetitive tasks and reports.",
    items: [
      "Google Apps Script",
      "Google Sheets Automation",
      "Report Automation",
      "Workflow Optimization",
    ],
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", skills: ["R", "Python", "SQL", "HTML", "CSS", "JavaScript"] },
  { title: "Statistical Software", skills: ["SPSS", "SYSTAT", "Jamovi", "R"] },
  { title: "Dashboard & BI Tools", skills: ["Power BI", "Microsoft Excel", "Google Sheets","Looker","R Shiny"] },
  { title: "Databases", skills: ["MySQL", "SQLite"] },
  { title: "Development Tools", skills: ["Git", "GitHub", "VS Code", "Google Apps Script"] },
  {
    title: "Analytics",
    skills: [
      "Exploratory Data Analysis",
      "Statistical Modeling",
      "Predictive Analytics",
      "Business Intelligence",
      "Data Visualization",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Retail Mobile Operations Dashboard",
    description:
      "A modern enterprise dashboard mockup for retail mobile operations with real-time KPI monitoring.",
    image: "/project-1.jpeg",
    tags: ["Power BI", "Dashboard Design", "KPI Reporting"],
  },
  {
    title: "Machine Learning Model Evaluation for Classification",
    description:
      "Developed and evaluated multiple machine learning classification models to identify the most robust predictive solution. Compared training and testing performance using Accuracy and Cohen's Kappa, highlighting model reliability and overfitting behavior.",
    image: "/project-2.jpeg",
    tags: ["Machine Learning", "Classification Models", "Model Evaluation"],
  },
  {
    title: "Correlation Matrix Infographic",
    description:
      "A polished correlation matrix infographic with clear insights and modern presentation.",
    image: "/project-3.jpeg",
    tags: ["Correlation Analysis", "Data Visualization", "Infographic Design"],
  },
  {
    title: "Hypothesis Testing & Chi-Square Analysis Report",
    description:
      "A polished statistical report highlighting hypothesis testing and chi-square analysis.",
    image: "/project-4.jpeg",
    tags: ["Hypothesis Testing", "Chi-Square Test", "Statistical Reporting"],
  },
];

export const exploring: string[] = [
  "Advanced Python for Data Science",
  "AI & LLM Applications",
  "Cloud Deployment",
  "FastAPI",
  "React",
  "Docker",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#exploring", label: "Exploring" },
  { href: "#contact", label: "Contact" },
];
