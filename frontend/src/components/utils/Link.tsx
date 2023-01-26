import React from "react";

export type LinkColor = "white" | "lightgrey" | "darkblue" | "yellow";

export function Link(
  props: React.PropsWithChildren<{
    content: string;
    href: string;
    lightGrey?: boolean;
    color: LinkColor;
  }>
) {
  let textColor = `text-rocket-connect-${props.color}`;

  if (props.color === "white") {
    textColor = "text-white";
  }

  return (
    <a
      className={`${textColor} italic underline decoration-rocket-connect-lightblue underline-offset-8`}
      href={props.href}
    >
      {props.content}
    </a>
  );
}
