import type { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
    </>
  );
};

export default Container;
