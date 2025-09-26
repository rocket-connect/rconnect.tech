import React from 'react';
import Link from 'next/link';
import { Container } from '../shared/Container';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  lumaEmbed: string;
  blogLink: string;
}

interface UpcomingEventsProps {
  content: {
    title: string;
    subtitle: string;
    events: Event[];
  };
}

export const UpcomingEventsSection = ({ content }: UpcomingEventsProps) => {
  return (
    <div className="w-full border-t border-[#E6E6FF] bg-gradient-to-b from-[#FCFCFF] to-white py-8 dark:border-[#1F344A] dark:from-[#1F344A] dark:to-background-invert">
      <Container className="gap-6">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-foreground-main dark:text-foreground-invert lg:text-3xl">
            {content.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {content.subtitle}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
          {content.events.map((event) => (
            <div
              key={event.id}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Event Details */}
              <div className="flex flex-1 flex-col border-b border-slate-200 p-4 dark:border-slate-700 lg:p-6">
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-slate-100 lg:text-xl">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#24BEE1]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#24BEE1]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#24BEE1]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {event.description}
                  </p>

                  <div className="mt-auto flex gap-2 pt-3">
                    <Link href={event.blogLink}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 text-xs text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Luma Embed - Reduced height and better styling */}
              <div className="p-4 lg:p-6">
                <div className="overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-800">
                  <iframe
                    src={event.lumaEmbed}
                    width="100%"
                    height="350"
                    frameBorder="0"
                    className="w-full rounded-lg"
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      minHeight: '350px',
                    }}
                    allow="fullscreen; payment"
                    aria-hidden="false"
                    tabIndex={0}
                    title={`Register for ${event.title}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 border-t border-slate-200 pt-4 text-center dark:border-slate-700">
          <p className="my-4 text-base text-slate-600 dark:text-slate-400">
            Want to organize an event with us?
          </p>
          <Link href="/contact">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
