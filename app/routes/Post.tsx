import type { Route } from "./+types/Post";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params?.postId;

  return { postId };
}

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div className="postContainer">
      <h1>this is post page !!!</h1>
      <p> post id = {loaderData?.postId} </p>
    </div>
  );
}
