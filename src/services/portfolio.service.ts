import { Injectable, signal } from '@angular/core';

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  impact: string;
  tags: string[];
  type: 'architecture' | 'dev' | 'saas' | 'talk';
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  profile = signal({
    name: "Timothée Scherrer",
    role: "Senior Software Engineer & Tech Lead",
    location: "Lyon, France",
    summary: "Dynamic Senior Software Engineer & Technical Lead with 9+ years of experience designing scalable software solutions. Proven expertise in C#/.NET, Java/Spring Boot and Kafka. Experienced in leading development for high-traffic systems like Decathlon's loyalty program (100M+ users). Passionate about mentoring and agile methodologies.",
    socials: {
      linkedin: "linkedin.com/in/timothée-scherrer",
      github: "https://github.com/tscherrer05/",
      email: "timot.scherrer@gmail.com"
    }
  });

  experiences = signal<Experience[]>([
    {
      role: "Senior Software Engineer & Tech Lead",
      company: "Decathlon Digital",
      period: "03/2025 – Present",
      location: "Lyon",
      description: [
        "Leading the Sport team within Customer Growth, managing products for millions of users worldwide.",
        "Refactored centralized streaming data pipelines to simplify maintenance and reduce costs.",
        "Designed high-traffic Kafka producers and automated E2E tests for streaming data.",
        "Implemented JWT verification with symmetric signing for secure data ingestion.",
        "Technologies: Java, Spring Boot, Kafka, Kubernetes, GitHub Actions, PHP, Symfony."
      ],
      tech: ["Java", "Spring Boot", "Kafka", "K8s", "PHP"]
    },
    {
      role: "Back-end Development Trainer",
      company: "Kiraah Learning",
      period: "11/2024 – 03/2025",
      location: "Lyon",
      description: [
        "Mentored junior developers in a rigorous training program.",
        "Designed curriculum and pedagogical content including videos and practical exercises.",
        "Provided individual mentorship and organized masterclasses."
      ],
      tech: ["Mentoring", "Pedagogy", "Backend"]
    },
    {
      role: "Software Engineer II",
      company: "Decathlon Digital",
      period: "10/2022 – 02/2025",
      location: "Lyon",
      description: [
        "Core developer for Decathlon Membership (100M+ users).",
        "Developed highly resilient HTTP APIs and Kafka applications.",
        "Conducted architectural audits for distributed systems (10k calls/minute).",
        "Optimized data aggregation processes for performance.",
        "Provided Level 3 support for complex technical issues."
      ],
      tech: ["Java", "Spring Boot", "Kafka", "GitHub Actions"]
    },
    {
      role: "Functional Analyst & Developer",
      company: "Deeplink Medical",
      period: "03/2020 – 10/2022",
      location: "Lyon",
      description: [
        "Developed features for ITIS, a teleradiology management solution (120 facilities).",
        "Implemented features using TDD and Hexagonal Architecture principles.",
        "Improved global application performance by 20%.",
        "Worked on Azure DevOps CI/CD pipelines."
      ],
      tech: ["C#", ".NET MVC", "SQL", "TypeScript", "TDD"]
    },
    {
      role: "Technical Lead",
      company: "SOLUTEC",
      period: "01/2018 – 01/2020",
      location: "Lyon",
      description: [
        "Led a team of 3 developers on an internal ERP product.",
        "Optimized development processes and facilitated Scrum events.",
        "Promoted engineering best practices (SOLID, TDD)."
      ],
      tech: ["C#", "ASP.NET", "SQL", "Scrum"]
    }
  ]);

  projects = signal<Project[]>([
    {
      title: "GraphRM",
      subtitle: "Cybersecurity Audit SaaS",
      date: "Jan 2026",
      description: "Developed a SaaS platform that generates beautiful graphs for cybersecurity audits in minutes. Built entirely solo.",
      impact: "Automated complex visualization tasks for security professionals.",
      tags: ["Vue.js 3", ".NET 10", "PostgreSQL 16", "SaaS"],
      type: "saas"
    },
    {
      title: "Event Driven Pipeline Refactor",
      subtitle: "Decathlon Digital",
      date: "Dec 2025",
      description: "Simplified the purchase-stream by refactoring the purchase-enricher to use a CloudEvent Avro wrapping the Purchase data. Created a purchase-normalizer to build the CloudEvent.",
      impact: "Reduced number of applications by 2. Simplification of development and maintenance. Deployed with 0 issues.",
      tags: ["Kafka", "Avro", "CloudEvents", "Refactoring"],
      type: "architecture"
    },
    {
      title: "Build a Kafka application listening to a high-traffic webhook",
      subtitle: "Decathlon Digital",
      date: "Apr 2025",
      description: "Designed a technical solution to ingest data from a loyalty engine provider via a high-traffic webhook. Implemented symmetric signing for JWT verification to ensure security.",
      impact: "Captured all webhook data into datalake for analysis. Laid foundation for new team features.",
      tags: ["Java", "Security", "JWT", "Architecture"],
      type: "architecture"
    },
    {
      title: "Rate Limiting an overloaded Kafka consumer",
      subtitle: "Decathlon Digital",
      date: "Nov 2025",
      description: "Designed a solution using Redis and the Claim Check pattern to handle massive spikes from Fitbit webhooks. Cached user keys to discard redundant messages within a short TTL.",
      impact: "Divided notification volume by 3. Eliminated lag alerts on the consumer.",
      tags: ["Redis", "Kafka", "Optimization", "Patterns"],
      type: "architecture"
    },
    {
      title: "Clean Architecture & TDD Talk",
      subtitle: "Decathlon Digital",
      date: "Jun 2023",
      description: "Delivered a technical presentation to 75 engineers demonstrating Outside-In TDD and Clean Architecture on a Spring Boot microservice. Underwent professional communication training prior to the event.",
      impact: "Promoted engineering excellence and shared actionable patterns for decoupling business logic.",
      tags: ["Public Speaking", "TDD", "Clean Architecture", "Live Coding"],
      type: "talk"
    },
    {
      title: "Monolith to Microservices",
      subtitle: "Decathlon Digital",
      date: "Dec 2025",
      description: "Wrote an ADR for refactoring a massive PHP API monolith receiving billions of calls to Java microservices using the Strangler Fig pattern.",
      impact: "Enabled gradual migration without downtime.",
      tags: ["System Design", "Strangler Pattern", "Migration"],
      type: "architecture"
    }
  ]);

  skills = signal([
    { category: "Backend", items: ["Java", "Spring Boot", "C# / .NET", "Kafka", "PHP", "Symfony"] },
    { category: "Frontend", items: ["TypeScript", "JavaScript", "Vue.js", "Angular", "Bootstrap", "Tailwind"] },
    { category: "Architecture", items: ["Microservices", "Event-Driven", "DDD", "Hexagonal", "TDD", "System Design"] },
    { category: "DevOps & Tools", items: ["Kubernetes", "Docker", "GitHub Actions", "Azure DevOps", "DataDog", "Splunk"] },
    { category: "Database", items: ["PostgreSQL", "SQL Server", "Redis"] },
    { category: "Languages", items: ["French (Native)", "English (C2)"] }
  ]);
}