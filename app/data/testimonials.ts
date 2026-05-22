export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company: string;
  companyLogo?: string;
  content: string;
  rating: number;
  course: string;
  outcome: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aditya Kumar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aditya",
    role: "Data Engineer",
    company: "Swiggy",
    content: "The Data Engineering Bootcamp changed everything for me. Arjun doesn't just teach you tools — he teaches you how to think about pipelines. The Airflow + Snowflake project we built in class was almost identical to what I do at Swiggy every day. Got the offer within 8 weeks of finishing.",
    rating: 5,
    course: "Data Engineering Bootcamp",
    outcome: "Joined Swiggy Data Platform — ₹32 LPA",
  },
  {
    id: "2",
    name: "Sneha Reddy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
    role: "Analytics Engineer",
    company: "Razorpay",
    content: "The SQL Masterclass is phenomenal. I'd been writing SQL for 2 years but never understood window functions properly until this course. The cohort analysis session alone was worth the entire fee. Now I own the entire dbt codebase at Razorpay's analytics team.",
    rating: 5,
    course: "SQL Developer Masterclass",
    outcome: "Analytics Engineer @ Razorpay — ₹26 LPA",
  },
  {
    id: "3",
    name: "Vikram Patel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
    role: "Senior Data Engineer",
    company: "Meesho",
    content: "PySpark course was exactly what I needed to level up from a data analyst to a data engineer. The Delta Lake session and the performance tuning content are world-class. I used these exact techniques to reduce our Spark job runtime by 4x at Meesho.",
    rating: 5,
    course: "PySpark & Apache Spark",
    outcome: "Promoted to Senior DE — ₹42 LPA",
  },
  {
    id: "4",
    name: "Riya Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=riya",
    role: "Cloud Data Engineer",
    company: "Flipkart",
    content: "Cloud Data Engineering course is the best investment I've made in my career. The hands-on AWS and GCP labs were practical and real — not just screenshots. I can now design and deploy full cloud data stacks confidently. Flipkart hired me specifically for my cloud data skills.",
    rating: 5,
    course: "Cloud Data Engineering",
    outcome: "Joined Flipkart Cloud Platform — ₹38 LPA",
  },
  {
    id: "5",
    name: "Karan Singh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karan",
    role: "Data Engineer",
    company: "PhonePe",
    content: "The Kafka course blew my mind. Building the real-time fraud detection pipeline end-to-end in class was incredible. The instructor's explanation of exactly-once semantics and partition strategies is the clearest I've ever seen. Got placed at PhonePe's real-time data team directly.",
    rating: 5,
    course: "Kafka & Streaming Systems",
    outcome: "PhonePe Real-time Data Team — ₹35 LPA",
  },
  {
    id: "6",
    name: "Ananya Joshi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ananya",
    role: "SQL Developer",
    company: "CRED",
    content: "Coming from a non-tech background, the SQL Masterclass and Linux courses gave me the exact foundation I needed. The instructors are incredibly patient and the small batch size meant I actually got my questions answered. Transitioned from finance to data in 5 months.",
    rating: 5,
    course: "SQL Developer Masterclass",
    outcome: "Career switch to Data — ₹18 LPA",
  },
];
