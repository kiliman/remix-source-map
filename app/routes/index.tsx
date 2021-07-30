import {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
  ActionFunction,
  Link,
  Form,
} from "remix";
import { useRouteData } from "remix";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Source Map",
    description: "Welcome to remix!",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" };
};
export let action: ActionFunction = async () => {
  throw new Error("Oops from action");
};

export default function Index() {
  let data = useRouteData();

  const handleClick = () => {
    throw new Error("Client side excpeption");
  };
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <p>Update error stack trace with source-map</p>
      <h3>Loader Exceptions</h3>
      <p>
        <a href="/page2">Page 2: Document Loader</a>
      </p>
      <p>
        <Link to="/page2">Page 2: Client Site Loader</Link>
      </p>
      <h3>Action Exceptions</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        <form method="post">
          <button type="submit">Submit Page</button>
        </form>
        <Form method="post">
          <button type="submit">Submit Client</button>
        </Form>
      </div>
      <h3>Client Side Exceptions</h3>
      <button onClick={handleClick}>Throw Exception</button>
      <p>
        View on <a href="https://github.com/kiliman/remix-source-map">GitHub</a>
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
