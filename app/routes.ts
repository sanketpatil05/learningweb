import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("courses", "routes/courses.tsx"),
  route("courses/:courseSlug", "routes/course-detail.tsx"),
  route("sessions", "routes/sessions.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("about", "routes/about.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact", "routes/contact.tsx"),
  route("sessions/:sessionSlug", "routes/session-detail.tsx"),
] satisfies RouteConfig;
