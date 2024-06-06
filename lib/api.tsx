export async function contact(body: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`/api/contact`, {
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
