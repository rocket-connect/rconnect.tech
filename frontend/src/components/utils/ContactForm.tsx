import React, { useCallback, useState } from "react";
import * as api from "../../api";

export function ContactForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const send = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
        const body = {
          // @ts-ignore
          email: e.target.elements.name.value as string,
          // @ts-ignore
          name: e.target.elements.email.value as string,
          // @ts-ignore
          message: e.target.elements.message.value as string,
        };

        await api.contact(body);
        setSent(true);
      } catch (error) {
        const e = error as Error;
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [setError, setLoading]
  );

  if (error) {
    return (
      <div className="flex flex-col justify-center align-center">
        <p className="text-rocket-connect-lightgrey italic lg:text-2xl">
          - An error occurred. Please contact us via email.
        </p>
      </div>
    );
  }

  return (
    <form className="m-0 p-0" onSubmit={send}>
      <div className="flex flex-col">
        <label className="mb-5 text-white font-bold lg:text-2xl" htmlFor="name">
          Name
        </label>
        <input
          className="bg-rocket-connect-lightgrey p-3 lg:text-2xl w-full xl:w-4/6 h-12 text-rocket-connect-darkblue"
          type="text"
          name="name"
          id="name"
          disabled={loading || sent}
          required={true}
        />
        <label
          className="my-5 text-white font-bold lg:text-2xl"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-rocket-connect-lightgrey p-3 lg:text-2xl w-full xl:w-4/6 h-12 text-rocket-connect-darkblue"
          type="email"
          name="email"
          id="email"
          disabled={loading || sent}
          required={true}
        />
        <label
          className="my-5 text-white font-bold lg:text-2xl"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="bg-rocket-connect-lightgrey p-3 lg:text-2xl w-full xl:w-4/6 text-rocket-connect-darkblue"
          name="message"
          id="message"
          cols={30}
          rows={6}
          disabled={loading || sent}
        />
        <button
          type="submit"
          disabled={loading || sent}
          className="mt-5 italic bg-rocket-connect-lightgrey p-3 submit w-full xl:w-1/5 py-2 underline decoration-rocket-connect-lightblue underline-offset-8"
        >
          {loading ? "Sending..." : "Send"}
          {Boolean(sent && !loading) && "Sent!"}
        </button>
      </div>
    </form>
  );
}
