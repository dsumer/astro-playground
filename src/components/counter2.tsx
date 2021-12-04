import { useState, PropsWithChildren } from "react";
import { Button } from "./button";

interface Props {
  count: number;
}

export function Counter2({
  children,
  count: initialCount,
}: PropsWithChildren<Props>) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div>
        <Button onClick={subtract}>-</Button>
        <pre>{count} 22er</pre>
        <Button onClick={add}>+</Button>
      </div>
      <div>{children}</div>
    </>
  );
}
