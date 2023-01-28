import { API_URL } from "../config";

export async function contact(body: { name: string; email: string; message }) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 200 || !response.ok) {
    throw new Error(await response.text());
  }
}
