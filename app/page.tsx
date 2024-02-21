import Counter from "./counter";
export const metadata = {
  title: "App Router",
};

export default function Page() {
  return <h1>App Router<Counter label="=test"/></h1>;
}
