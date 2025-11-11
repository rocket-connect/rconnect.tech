'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from './textarea';
import { Button } from './button';
import { useCallback, useRef, useState, FormEvent } from 'react';
import * as api from '../../lib/api';

export default function ContactForm() {
  const [, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const validateInputs = (name: string, email: string, message: string): boolean => {
    if (!name || !email || !message) {
      setError('All fields are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!validateInputs(name, email, message)) {
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await api.contact({ name, email, message });
      setSuccess('Message sent successfully!');
    } catch (error) {
      setError('Error sending message, try reaching out on social media.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center gap-4 border border-[#E6E6FF] bg-[#F1F6FA] p-4 dark:border-[#546C87] dark:bg-[#1F344A] dark:text-[#EEEEFB] lg:max-w-2xl lg:rounded-lg lg:p-8">
      <div className="mb-4 rounded-lg border-2 border-[#24BEE1] bg-[#E6F7FB] p-4 text-center dark:bg-[#1A2F3F]">
        <p className="text-lg font-semibold text-[#24BEE1]">
          Please reach out to us on social media or connect with our team online!
        </p>
        <p className="mt-2 text-sm text-foreground-main dark:text-foreground-invert">
          The contact form is currently unavailable.
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="pointer-events-none flex w-full flex-col items-center gap-4 opacity-50"
      >
        <Input name="name" disabled placeholder="Your name" />
        <Input name="email" type="email" disabled placeholder="Your email" />
        <Textarea name="message" disabled placeholder="Your message" />
        {error && <div className="font-bold text-red-500">{error}</div>}
        {success && <div className="font-bold text-[#24BEE1]">{success}</div>}
        <Button type="submit" disabled>
          Send your message
        </Button>
      </form>
    </div>
  );
}
