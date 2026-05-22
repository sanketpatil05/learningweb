export interface Session {
  id: string;
  slug: string;
  title: string;
  courseId: string;
  courseName: string;
  instructor: string;
  instructorAvatar: string;
  date: string;
  duration: string;
  thumbnail: string;
  summary: string;
  description: string;
  topics: string[];
  resources: Resource[];
  tags: string[];
  videoUrl: string;
  sessionNumber: number;
}

export interface Resource {
  title: string;
  type: "pdf" | "code" | "link" | "slides";
  url: string;
}

export const sessions: Session[] = [
  {
    id: "1",
    slug: "building-etl-pipelines-airflow",
    title: "Building ETL Pipelines with Apache Airflow",
    courseId: "1",
    courseName: "Data Engineering Bootcamp",
    instructor: "Arjun Mehta",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    date: "2025-01-20",
    duration: "2h 30m",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    summary: "Design and deploy a production-grade ETL pipeline using Apache Airflow DAGs, operators, sensors, and real S3-to-Snowflake data movement.",
    description: "In this session we build a complete ETL pipeline from scratch using Apache Airflow. Starting from a raw CSV dump in S3, we ingest, validate, transform, and load data into Snowflake. We cover idempotent DAG design, backfill strategies, XCom communication, and production alerting. Real enterprise pipeline patterns throughout.",
    topics: [
      "DAG design for idempotent pipelines",
      "PythonOperator vs TaskFlow API",
      "S3 sensor for file-arrival triggers",
      "Snowflake operator for bulk loading",
      "XComs for inter-task data passing",
      "On-failure callbacks and SLA alerts",
    ],
    resources: [
      { title: "DAG Code on GitHub", type: "code", url: "#" },
      { title: "Pipeline Design Slides", type: "slides", url: "#" },
      { title: "Airflow Best Practices PDF", type: "pdf", url: "#" },
    ],
    tags: ["Airflow", "ETL", "Snowflake", "S3", "Pipeline"],
    videoUrl: "https://www.youtube.com/embed/K9AnJ9_ZAXE",
    sessionNumber: 7,
  },
  {
    id: "2",
    slug: "pyspark-transformations-deep-dive",
    title: "PySpark Data Transformations Deep Dive",
    courseId: "3",
    courseName: "PySpark & Apache Spark",
    instructor: "Arjun Mehta",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    date: "2025-01-17",
    duration: "2h 15m",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    summary: "Master PySpark DataFrame transformations: complex joins, window functions, UDFs, and query plan optimisation with the Catalyst engine.",
    description: "A deep technical session on PySpark transformations used in production data engineering. We work through complex multi-table joins, implement window functions for running calculations, write and optimise Pandas UDFs, and use the Spark UI to diagnose and fix performance bottlenecks. Real dataset from a telecom company used throughout.",
    topics: [
      "Broadcast vs sort-merge joins",
      "Window functions: ranking, lag/lead, cumulative sums",
      "Pandas UDFs for vectorised operations",
      "Reading Spark query plans (EXPLAIN)",
      "Handling data skew with salting",
      "Delta Lake merge for upsert patterns",
    ],
    resources: [
      { title: "Spark Job Notebooks", type: "code", url: "#" },
      { title: "Query Plan Reference", type: "pdf", url: "#" },
      { title: "Spark UI Walkthrough", type: "slides", url: "#" },
    ],
    tags: ["PySpark", "Spark", "DataFrames", "Performance", "Delta Lake"],
    videoUrl: "https://www.youtube.com/embed/QaoJNXW6SQo",
    sessionNumber: 5,
  },
  {
    id: "3",
    slug: "advanced-sql-window-functions",
    title: "Advanced SQL Window Functions & Analytics",
    courseId: "2",
    courseName: "SQL Developer Masterclass",
    instructor: "Rahul Sharma",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
    date: "2025-01-14",
    duration: "1h 55m",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
    summary: "Master SQL window functions: PARTITION BY, ORDER BY, ROWS/RANGE frames, LAG/LEAD, running totals, and cohort analysis patterns.",
    description: "Window functions are the single most powerful feature for analytics SQL. In this session we systematically cover every window function with real e-commerce data: ranking customers, calculating retention, building cohort tables, computing month-over-month growth, and detecting anomalies — all without a single subquery loop.",
    topics: [
      "PARTITION BY vs GROUP BY — key differences",
      "ROW_NUMBER, RANK, DENSE_RANK use cases",
      "LAG/LEAD for period-over-period analysis",
      "Running totals and moving averages with ROWS/RANGE",
      "FIRST_VALUE, LAST_VALUE, NTH_VALUE",
      "Cohort retention analysis from scratch",
    ],
    resources: [
      { title: "Window Functions Cheatsheet", type: "pdf", url: "#" },
      { title: "Practice SQL Queries", type: "code", url: "#" },
    ],
    tags: ["SQL", "Window Functions", "Analytics", "PostgreSQL", "BigQuery"],
    videoUrl: "https://www.youtube.com/embed/H6OTMoXjNiY",
    sessionNumber: 8,
  },
  {
    id: "4",
    slug: "kafka-streaming-architecture",
    title: "Kafka Streaming Architecture Explained",
    courseId: "8",
    courseName: "Kafka & Streaming Systems",
    instructor: "Arjun Mehta",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    date: "2025-01-11",
    duration: "2h 20m",
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    summary: "End-to-end Kafka architecture: brokers, topics, partitions, consumer groups, exactly-once delivery, and a real-time fraud detection pipeline.",
    description: "A comprehensive walkthrough of Apache Kafka architecture for data engineers. We build a real-time fraud detection system — from a Python producer sending transactions to a Kafka topic, through a Faust stream processor detecting anomalies, to a Postgres sink via Kafka Connect. Exactly-once semantics and schema evolution covered.",
    topics: [
      "Kafka internals: log segments, offsets, retention",
      "Partition strategy for throughput vs ordering",
      "Consumer group rebalancing",
      "Producer acks: 0, 1, all — trade-offs",
      "Exactly-once semantics implementation",
      "Schema Registry with Avro serialisation",
    ],
    resources: [
      { title: "Kafka Producer/Consumer Code", type: "code", url: "#" },
      { title: "Architecture Diagram", type: "slides", url: "#" },
      { title: "Confluent Platform Docs", type: "link", url: "#" },
    ],
    tags: ["Kafka", "Streaming", "Real-time", "Event-driven", "Faust"],
    videoUrl: "https://www.youtube.com/embed/PzPXRmVHMxI",
    sessionNumber: 4,
  },
  {
    id: "5",
    slug: "snowflake-data-warehouse-design",
    title: "Designing a Cloud Data Warehouse on Snowflake",
    courseId: "10",
    courseName: "Data Warehousing & Modelling",
    instructor: "Rahul Sharma",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
    date: "2025-01-08",
    duration: "2h 05m",
    thumbnail: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80",
    summary: "Design a production Snowflake warehouse: multi-layer architecture, Kimball star schema, dbt models, and cost optimisation with clustering.",
    description: "We design a complete data warehouse for a fictional e-commerce company on Snowflake. Start from raw transactional data, build a staging layer, transform into a Kimball star schema with dbt, set up clustering keys for query performance, and implement row-access policies for data governance. Realistic enterprise project.",
    topics: [
      "Bronze / Silver / Gold medallion architecture",
      "Kimball star schema design from transactional data",
      "dbt model structure: staging, intermediate, mart",
      "Snowflake clustering keys and automatic clustering",
      "Virtual warehouse sizing and auto-suspend",
      "Row-access policies and dynamic data masking",
    ],
    resources: [
      { title: "dbt Project Files", type: "code", url: "#" },
      { title: "Schema Design Slides", type: "slides", url: "#" },
      { title: "Snowflake Cost Guide", type: "pdf", url: "#" },
    ],
    tags: ["Snowflake", "dbt", "Data Warehouse", "Dimensional Modelling", "SQL"],
    videoUrl: "https://www.youtube.com/embed/G6D5hm7WfmE",
    sessionNumber: 6,
  },
  {
    id: "6",
    slug: "delta-lake-lakehouse-architecture",
    title: "Delta Lake & Lakehouse Architecture",
    courseId: "3",
    courseName: "PySpark & Apache Spark",
    instructor: "Arjun Mehta",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    date: "2025-01-05",
    duration: "1h 50m",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    summary: "Delta Lake ACID transactions, time travel, MERGE/UPSERT, Z-ordering, and building a production lakehouse on Databricks.",
    description: "Deep dive into Delta Lake — the open-source storage layer that brings ACID transactions to data lakes. We implement time travel for auditing, MERGE statements for SCD Type 2, Z-ordering for query acceleration, and build a full Databricks lakehouse pipeline from raw ingestion to gold analytics table.",
    topics: [
      "Delta Lake transaction log mechanics",
      "Time travel: VERSION AS OF / TIMESTAMP AS OF",
      "MERGE for SCD Type 1 and Type 2",
      "OPTIMIZE and Z-ORDER for query pruning",
      "Schema enforcement vs schema evolution",
      "Structured Streaming with Delta tables",
    ],
    resources: [
      { title: "Delta Lake Notebooks", type: "code", url: "#" },
      { title: "Lakehouse Architecture PDF", type: "pdf", url: "#" },
    ],
    tags: ["Delta Lake", "Databricks", "Lakehouse", "PySpark", "ACID"],
    videoUrl: "https://www.youtube.com/embed/BMO90DI82Dc",
    sessionNumber: 9,
  },
  {
    id: "7",
    slug: "linux-shell-scripting-data-engineers",
    title: "Linux Shell Scripting for Data Engineers",
    courseId: "5",
    courseName: "Linux for Data Engineers",
    instructor: "Priya Nair",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    date: "2025-01-02",
    duration: "2h 10m",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    summary: "Bash scripting for data pipelines: automating file ingestion, log parsing with awk/sed, cron scheduling, and SSH remote execution.",
    description: "Practical Linux shell scripting specifically for data engineering tasks. We write production scripts for automated file ingestion from SFTP, log parsing with awk and sed, bulk file operations, cron-scheduled data checks, and remote server management via SSH. Every example is drawn from real data engineering scenarios.",
    topics: [
      "Bash arrays, loops, functions for data tasks",
      "awk for structured log and CSV processing",
      "sed for stream editing and transformation",
      "find and xargs for bulk file operations",
      "Cron expressions and scheduling patterns",
      "SSH remote execution and key-based auth",
    ],
    resources: [
      { title: "Shell Scripts Repo", type: "code", url: "#" },
      { title: "AWK/SED Reference", type: "pdf", url: "#" },
    ],
    tags: ["Linux", "Bash", "Shell Scripting", "Automation", "Cron"],
    videoUrl: "https://www.youtube.com/embed/oxuRxtrO2Ag",
    sessionNumber: 5,
  },
  {
    id: "8",
    slug: "python-pandas-data-engineering",
    title: "Pandas for Data Engineering Workflows",
    courseId: "4",
    courseName: "Data Analytics with Python",
    instructor: "Priya Nair",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    date: "2024-12-29",
    duration: "1h 45m",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    summary: "Production-grade Pandas: memory optimisation, chunked reading, merge strategies, time-series resampling, and preparing data for Spark.",
    description: "Pandas used in data engineering is very different from data science notebooks. This session covers memory-efficient data loading with chunked readers, dtype optimisation to cut memory by 70%, merge strategies for large datasets, time-series resampling for analytics, and converting Pandas workflows to PySpark for scale.",
    topics: [
      "read_csv chunking for large files",
      "dtype optimisation: category, int32, float32",
      "merge vs join vs concat — choosing correctly",
      "Time-series resample and rolling aggregations",
      "apply vs vectorised operations — performance",
      "Pandas → PySpark migration patterns",
    ],
    resources: [
      { title: "Pandas Optimisation Notebook", type: "code", url: "#" },
      { title: "Memory Profile Report", type: "pdf", url: "#" },
    ],
    tags: ["Pandas", "Python", "Data Engineering", "Performance", "ETL"],
    videoUrl: "https://www.youtube.com/embed/vmEHCJofslg",
    sessionNumber: 6,
  },
];
