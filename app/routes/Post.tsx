import { Form, Link, useFetcher } from "react-router";
import type { Route } from "./+types/Post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params?.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.postId}`,
      {
        method: "DELETE",
      }
    );
    return { isDeleted: true };
  } catch (error) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();

  const isDeleted = fetcher?.data?.isDeleted;

  return (
    <div className="postContainer">
      {!isDeleted && (
        <div className="postBody">
          <h1>this is post page !!!</h1>
          <p> post id = {loaderData?.id} </p>
          <p> post id = {loaderData?.title} </p>
          <p> post id = {loaderData?.body} </p>
        </div>
      )}

      <Link to={"/about"}>
        <p>About route </p>
      </Link>

      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
}
