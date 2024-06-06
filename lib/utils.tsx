import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatdate(date: string) {
  const format = new Date(date);

  const formattedDate = format.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}

export function categoryColor(category: string) {
  switch (category) {
    case "community":
      return "#0ea5e9";
    case "engineering":
      return "#f59e0b";
    case "customer stories":
      return "#f97316";
    case "company news":
      return "#a855f7";
    default:
      return "#0ea5e9";
  }
}
