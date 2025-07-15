import type { PropsWithChildren } from "react";

export default function PostsList({ children }: PropsWithChildren) {
  return (
    <ul className="list bg-base-100 shadow-md">
      {children}
    </ul>
  )
}
