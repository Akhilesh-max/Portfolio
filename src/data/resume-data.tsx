import {
  GSoCLogo,
  OppiaLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Akhilesh Kumar Yadav",
  initials: "AK",
  location: "Varansi, India",
  locationLink: "https://www.google.com/maps/place/Varanasi",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully built multiple full stack projects. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and SQL. I have experience of working remotely with Oppia as part of Google Summer of Code'24",
  avatarUrl: "/Akhilesh.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "akacademic05@gmail.com",
    tel: "+91 9695793556",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akhilesh-max/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akhilesh-kr-yadav/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/aky241005",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Polaris School of Technology",
      degree: "Bachelor's Degree in Computer Science Engineering",
      start: "2023",
      end: "2027",
      CGPA: "8.8 (First Year)",
    },
  ],
  work: [
    {
      company: "Google Summer of Code'24 @Oppia",
      link: "https://summerofcode.withgoogle.com/programs/2024/projects/l4xcrYSx",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: GSoCLogo,
      start: "May, 2024",
      end: "Aug, 2024",
      description: `
        Built e2e test infrastructure with reusable utilities and set up the server using Python, Puppeteer, and Jasmine. Contributed 18,000+ lines of TypeScript and Python for e2e and acceptance tests for 70+ CUJs that I recognized on Oppia.org. Ensured CI/CD stability by resolving test flakes, fixed workflow issues, and reviewed 4,000+ lines of code. Technologies: TypeScript, Angular, Python, Puppeteer, Jasmine, Git/GitHub.
        `,
    },
    {
      company: "Oppia [open-source project]",
      link: "https://www.oppia.org",
      badges: ["Remote"],
      title: "Team Lead @dev workflow",
      logo: OppiaLogo,
      start: "Jan, 2024",
      end: "Present",
      description:
        "Led a team of 8 devs at Oppia.org, maintaining workflow stability and migrating to Docker. Merged 40+ PRs across frontend (Angular + TypeScript), backend (Python), tests, CI/CD, and GitHub actions. Reviewed code and participated in release testing. Technologies: TypeScript, Angular, Python, WebdriverIO, Puppeteer, Jasmine, Beam jobs, Karma, Git/GitHub",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js/Express.js",
    "SQL",
    "Java",
    "Python",
    "Automated Testing",
    "DataStructures/Algorithms",
    "Networking/Infrastructure"
  ],
  projects: [
    {
      title: "DoMinder",
      techStack: [
        "TypeScript",
        "AngularJs",
      ],
      description: "Developed a task management SPA with features for creating, removing, and completing tasks, using local storage for data persistence.",
      link: {
        href: "https://github.com/Akhilesh-max/DoMinder",
      },
    },
    {
      title: "Book Search Engine",
      techStack: ["JavaScript", "Node.js", "MongoDB", "React.js"],
      description:
        "Built a scalable book search engine with title searches, filters, and optimized performance using database indexing.",
      link: {
        href: "https://github.com/Akhilesh-max/Book-Search-Engine",
      },
    },
    {
      title: "Git Account Discoverer",
      techStack: ["JavaScript", "Github API",  "React.js"],
      description:
        "Built an app using GitHub API to search user profiles with real-time results, leveraging React.js and Unstate hook for state management.",
      link: {
        href: "https://github.com/Akhilesh-max/GitAccountDiscoverer1",
      },
    },
  ],
} as const;
