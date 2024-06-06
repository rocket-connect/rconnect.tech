"use client";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { useCallback, useState } from "react";
import * as api from "../../lib/api";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(async () => {
    // Send the message
    try {
      await api.contact({ name, email, message });
    } catch (error) {
      console.log("Error sending message", error);
    }
  }, [name, email, message]);

  return (
    <div className="lg:max-w-2xl border border-[#E6E6FF] lg:rounded-lg bg-[#F1F6FA] dark:bg-[#1F344A] dark:border-[#546C87] p-4 lg:p-8 mx-auto flex flex-col gap-4 items-center">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <Button onClick={handleSubmit}>Send your message</Button>
    </div>
  );
}
