"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { useCallback, useRef, useState, FormEvent } from "react";
import * as api from "../../lib/api";

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const validateInputs = (
    name: string,
    email: string,
    message: string
  ): boolean => {
    if (!name || !email || !message) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!validateInputs(name, email, message)) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await api.contact({ name, email, message });
      setSuccess("Message sent successfully!");
    } catch (error) {
      setError("Error sending message, try reaching out on social media.");
    } finally {
      setLoading(false);
    }
  }, []);

  const isLoading = loading || Boolean(error) || Boolean(success);

  return (
    <div className="lg:max-w-2xl border border-[#E6E6FF] lg:rounded-lg bg-[#F1F6FA] dark:bg-[#1F344A] dark:border-[#546C87] dark:text-[#EEEEFB] p-4 lg:p-8 mx-auto flex flex-col gap-4 items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 items-center"
      >
        <Input name="name" disabled={isLoading} placeholder="Your name" />
        <Input
          name="email"
          type="email"
          disabled={isLoading}
          placeholder="Your email"
        />
        <Textarea
          name="message"
          disabled={isLoading}
          placeholder="Your message"
        />
        {error && <div className="font-bold text-red-500">{error}</div>}
        {success && <div className="font-bold text-[#24BEE1]">{success}</div>}
        <Button type="submit" disabled={isLoading}>
          Send your message
        </Button>
      </form>
    </div>
  );
}
