import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About.tsx"),
  route("post/:postId", "routes/Post.tsx"),

  //   Nested Route
  layout("routes/DashBoard.tsx", [
    route("finance", "routes/Finance.tsx"),
    route("personalInfo", "routes/PersonalInfo.tsx"),
  ]),
] satisfies RouteConfig;
