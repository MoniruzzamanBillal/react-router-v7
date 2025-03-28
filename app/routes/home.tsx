import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React router " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>this is home page !!!!</h1>
    </div>
  );
}
