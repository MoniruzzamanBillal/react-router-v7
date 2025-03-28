import type { Route } from "./+types/Post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params?.postId;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return await res.json();
}

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div className="postContainer">
      <h1>this is post page !!!</h1>
      <p> post id = {loaderData?.id} </p>
      <p> post id = {loaderData?.title} </p>
      <p> post id = {loaderData?.body} </p>
    </div>
  );
}
