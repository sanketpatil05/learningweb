export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "Getting Started",
    question: "Who are these courses designed for?",
    answer: "Our courses are designed for two audiences: working professionals (software developers, BI analysts, database admins) looking to transition into data engineering roles, and freshers/students who want to build a career in data. If you understand basic programming and have some SQL exposure, you can start with the SQL Masterclass or Data Analytics with Python. If you already have 1-2 years of engineering experience, jump straight into the Data Engineering Bootcamp.",
  },
  {
    id: "2",
    category: "Getting Started",
    question: "Do I need prior coding experience for Data Engineering?",
    answer: "Yes, some Python familiarity is recommended for the pipeline-heavy courses (PySpark, Airflow, ETL Engineering). However, our SQL Masterclass and Linux for Data Engineers courses are accessible to complete beginners. We offer a free prerequisite checklist for each course so you know exactly what to learn before enrolling. If you're starting from zero, begin with SQL + Python basics, then move to the Bootcamp.",
  },
  {
    id: "3",
    category: "Getting Started",
    question: "Is SQL enough to start a Data Analytics career?",
    answer: "SQL is the single most important skill for data analytics, and yes — strong SQL skills alone can land you analyst and SQL developer roles at many companies. Our SQL Masterclass covers everything from basics to advanced window functions, CTEs, and query optimisation. However, combining SQL with Python (Pandas) and a BI tool like Tableau or Looker significantly increases your earning potential and role options.",
  },
  {
    id: "4",
    category: "Course Format",
    question: "Are sessions live or recorded?",
    answer: "We run live sessions twice a week — Tuesdays at 8 PM IST and Saturdays at 10 AM IST. Every session is recorded and uploaded to your account within 2 hours of the live class ending. You have lifetime access to all recordings. Live sessions include interactive Q&A, whiteboarding, and live coding — so attending live is strongly recommended, though not mandatory.",
  },
  {
    id: "5",
    category: "Course Format",
    question: "How long does each course take to complete?",
    answer: "Course durations: Data Engineering Bootcamp (60 hrs), Cloud Data Engineering (50 hrs), PySpark & Apache Spark (48 hrs), Data Analytics with Python (44 hrs), SQL Developer Masterclass (40 hrs), ETL Pipeline Engineering (36 hrs), Kafka & Streaming Systems (38 hrs), Apache Airflow (32 hrs), Data Warehousing (34 hrs), Linux for Data Engineers (28 hrs). At 2 live sessions per week, most courses complete in 3–5 months.",
  },
  {
    id: "6",
    category: "Course Format",
    question: "Will we learn PySpark and Apache Spark in depth?",
    answer: "Yes — PySpark & Apache Spark is one of our flagship courses. We cover the full Spark architecture (DAG execution, Catalyst optimiser, shuffle internals), DataFrame API, Spark SQL, UDFs, performance tuning (partitioning, broadcast joins, skew handling), Delta Lake integration, and production deployment on Databricks and AWS EMR. This is not a survey course — it's a deep, practical Spark engineering course.",
  },
  {
    id: "7",
    category: "Course Format",
    question: "Is Linux mandatory for Data Engineering?",
    answer: "In practice, yes. Almost all data engineering work — running Spark jobs, connecting to remote servers, debugging pipeline failures, managing cron jobs — happens in Linux environments. While you don't need to be a sysadmin, knowing shell scripting, file system operations, SSH, and process management is essential. Our Linux for Data Engineers course covers exactly the Linux skills data engineers use daily, nothing more.",
  },
  {
    id: "8",
    category: "Mentorship",
    question: "What does 1:1 mentorship look like?",
    answer: "1:1 mentorship sessions are 45-minute video calls with your assigned instructor. You can use them for: architecture review of your pipeline project, career guidance and resume feedback, interview preparation for specific company roles, or working through any topic you're struggling with. Pro plan members get 2 sessions per month; Premium members get unlimited sessions (typically 4–6 per month based on availability).",
  },
  {
    id: "9",
    category: "Mentorship",
    question: "Can I switch instructors if needed?",
    answer: "Yes. We have three instructors across different specialisations. If you're on the Bootcamp track and want more depth on streaming systems, we can reassign you to Arjun. If you want more focus on analytics and SQL, Rahul is your match. Switches are processed within 3–5 business days — just email our support team.",
  },
  {
    id: "10",
    category: "Pricing & Payment",
    question: "Do you offer EMI or instalment options?",
    answer: "Yes. We offer no-cost EMI through HDFC, ICICI, Axis, SBI, and Kotak credit cards for 3, 6, and 9-month terms. We also accept UPI, net banking, and debit cards. For the Premium Mentorship plan, we offer a one-time payment with a 20% discount equivalent to 2.4 months free. Contact us to discuss annual billing options.",
  },
  {
    id: "11",
    category: "Pricing & Payment",
    question: "Is there a refund policy?",
    answer: "Yes — 7-day money-back guarantee, no questions asked. Attend the first live session, access the content, and if it's not what you expected, email us within 7 days for a full refund. After 7 days, we offer a credit toward another course or a plan downgrade. We've had fewer than 2% refund requests historically — we're confident in the quality.",
  },
  {
    id: "12",
    category: "Career",
    question: "Do you provide data engineering interview preparation?",
    answer: "Premium Mentorship members get dedicated data engineering interview prep: resume and LinkedIn optimisation, referrals to our 50+ data company hiring network (including Swiggy, PhonePe, Flipkart, CRED, Meesho, and others), SQL interview practice with real company questions, system design for data engineers, and mock technical interviews with recorded feedback. We have an 84% placement rate within 6 months for Premium completers.",
  },
  {
    id: "13",
    category: "Career",
    question: "What salary can I expect after completing the courses?",
    answer: "Results vary by background and effort. Our data shows: freshers entering data roles typically land at ₹6–14 LPA; professionals transitioning from IT/dev roles reach ₹18–32 LPA; experienced engineers who add cloud and Spark skills reach ₹32–55+ LPA at top product companies. Our highest placement in the last year was a Senior Data Engineer role at ₹58 LPA. We publish anonymised placement data quarterly.",
  },
  {
    id: "14",
    category: "Technical",
    question: "What tools and hardware do I need?",
    answer: "A laptop with at least 8 GB RAM (16 GB recommended for Spark local mode) and a reliable internet connection. We'll walk you through installing Python, PySpark, Docker, and DBeaver in the first session. For cloud labs we use free-tier AWS and GCP accounts — no paid cloud spend required for most exercises. A Linux or macOS environment is preferred; Windows users can use WSL2.",
  },
  {
    id: "15",
    category: "Technical",
    question: "What if I miss a session?",
    answer: "Every session is recorded and uploaded within 2 hours. Missing a class doesn't affect your progress — the recordings, session notes, and all code are available in your student portal and our shared GitHub repo. For live Q&As, you can submit questions in advance via Discord and they'll be answered on-stream. If you need a topic explained one-on-one, Pro and Premium members can book a 1:1.",
  },
];
