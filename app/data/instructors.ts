export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  specializations: string[];
  experience: string;
  previousCompanies: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  courses: string[];
  achievements: string[];
}

export const instructors: Instructor[] = [
  {
    id: "arjun",
    name: "Arjun Mehta",
    role: "Lead Instructor — Data Engineering & Big Data",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun&backgroundColor=ffdfbf",
    bio: "10+ years building large-scale data platforms. Former Principal Data Engineer at Swiggy where he architected the data infrastructure processing 5B+ daily events. Previously at Ola and Informatica. Expert in Spark, Kafka, Airflow, and cloud data architecture. Built pipelines that process over 2 PB of data monthly.",
    specializations: ["Apache Spark", "Kafka", "Airflow", "Cloud Data Engineering", "Distributed Systems"],
    experience: "10+ years",
    previousCompanies: ["Swiggy", "Ola", "Informatica"],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    courses: ["Data Engineering Bootcamp", "PySpark & Apache Spark", "Kafka & Streaming Systems", "Apache Airflow Fundamentals", "Cloud Data Engineering"],
    achievements: [
      "Architected Swiggy's data platform handling 5B+ daily events on Kafka + Spark",
      "Speaker at DataEngConf Bangalore 2023 & 2024",
      "Open-source contributor to Apache Airflow — 2K+ GitHub stars",
      "Trained 4,000+ data engineers across 3 cohorts",
    ],
  },
  {
    id: "rahul",
    name: "Rahul Sharma",
    role: "Lead Instructor — SQL, ETL & Data Warehousing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul&backgroundColor=b6e3f4",
    bio: "9 years as a data engineer and analytics engineer at Amazon and Meesho. Designed the analytics data warehouse at Meesho that serves 150+ BI dashboards. Specialist in SQL at scale, dbt, dimensional modelling, and ETL pipeline design. Deep expertise in Snowflake, BigQuery, and Redshift.",
    specializations: ["SQL", "dbt", "Data Warehousing", "ETL Pipelines", "Snowflake", "BigQuery"],
    experience: "9+ years",
    previousCompanies: ["Amazon", "Meesho", "Freshworks"],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    courses: ["SQL Developer Masterclass", "ETL & Data Pipeline Engineering", "Data Warehousing & Modelling"],
    achievements: [
      "Designed Meesho analytics warehouse — 150+ dashboards, 10TB+ data",
      "Co-author of 'dbt Best Practices' guide (12K+ readers)",
      "Amazon data infrastructure team — petabyte-scale pipelines",
      "Trained 6,000+ engineers in SQL and data modelling",
    ],
  },
  {
    id: "priya",
    name: "Priya Nair",
    role: "Lead Instructor — Analytics, Python & Linux",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=c0aede",
    bio: "7 years in data analytics and data engineering at Razorpay and PhonePe. Led the analytics engineering team at PhonePe responsible for all growth and payments analytics. Expert in Python data stack (Pandas, NumPy, Matplotlib), Linux systems for data, and building analyst-facing data products that serve business decisions.",
    specializations: ["Python", "Pandas", "Data Analytics", "Linux", "Analytics Engineering"],
    experience: "7+ years",
    previousCompanies: ["PhonePe", "Razorpay", "Practo"],
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    courses: ["Data Analytics with Python", "Linux for Data Engineers"],
    achievements: [
      "Led PhonePe analytics engineering team — 50M+ user growth analytics",
      "Speaker at PyCon India 2022 & 2023 on data engineering with Python",
      "Women in Data Leadership Award — Analytics India Magazine 2023",
      "Python data engineering YouTube channel — 35K+ subscribers",
    ],
  },
];
