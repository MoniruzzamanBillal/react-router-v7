import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About.tsx"),
  route("post/:postId", "routes/Post.tsx"),
] satisfies RouteConfig;
