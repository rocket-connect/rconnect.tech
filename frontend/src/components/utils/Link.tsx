import React from "react";

export type LinkColor =
  | "white"
  | "lightgrey"
  | "darkblue"
  | "yellow"
  | "z-word-dark";

export function Link(
  props: React.PropsWithChildren<{
    content: string;
    href: string | "email";
    lightGrey?: boolean;
    color: LinkColor;
  }>
) {
  let textColor = `text-rocket-connect-${props.color}`;
  let underlineColor = `decoration-rocket-connect-lightblue`;

  if (props.color === "white") {
    textColor = "text-white";
  }

  if (props.color === "z-word-dark") {
    textColor = "text-z-word-dark";
    underlineColor = "decoration-z-word-dark";
  }

  let href = props.href;

  if (href === "email") {
    href = "mailto:launch@rocketconnect.co.uk";
  }

  return (
    <a
      className={`${textColor} italic underline ${underlineColor} underline-offset-8`}
      href={href}
    >
      {props.content}
    </a>
  );
}
