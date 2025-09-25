'use client';

// START: Preserve spaces to avoid auto-sorting
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import 'leaflet-defaulticon-compatibility';
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '../shared/Container';

interface MapProp {
  content: any;
}

export default function Map({ content }: MapProp) {
  const iconMarkup = renderToStaticMarkup(
    <span className="relative flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-500"></span>
    </span>,
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  return (
    <div className="w-full py-8">
      <Container className="gap-8">
        <h2 className="mr-auto text-3xl font-bold text-foreground-main dark:text-foreground-invert">
          {content.title}
        </h2>
        <p className="max-w-xl text-foreground-main dark:text-foreground-invert">{content.info}</p>
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <MapContainer
              preferCanvas={true}
              center={[5, 80]}
              zoom={2.2}
              style={{ height: '500px', width: '600px' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {content.locations.map(
                (
                  location: {
                    lattitude: number;
                    longitude: number;
                    city: string;
                  },
                  index: string,
                ) => (
                  <Marker
                    key={'loc-' + index}
                    position={[location.lattitude, location.longitude]}
                    icon={customMarkerIcon}
                  >
                    <Popup>{location.city}</Popup>
                  </Marker>
                ),
              )}
            </MapContainer>
          </div>
          <div className="jusitfy-start flex h-full w-full flex-col items-center">
            <div className="flex h-fit w-full flex-col overflow-hidden rounded-xl border border-[#E6E6FF] bg-[#F1F6FA] dark:border-[#546C87] dark:bg-[#1F344A]">
              {content.locations.map(
                (
                  location: {
                    eventName: string;
                    lattitude: number;
                    longitude: number;
                    href: string;
                  },
                  index: string,
                ) => (
                  <a key={'evloc-' + index} href={location.href}>
                    <div className="flex w-full cursor-pointer flex-row items-center justify-between bg-background-main px-6 py-4 text-xl font-bold text-foreground-main hover:bg-hover-main dark:bg-background-invert dark:text-foreground-invert dark:hover:bg-hover-invert">
                      {location.eventName}
                      <ArrowRight className="-rotate-45 stroke-[#838793]" />
                    </div>
                  </a>
                ),
              )}
            </div>
            <p className="py-4 text-center text-[#838793]">
              <Link href={'/contact'} className="underline hover:opacity-70">
                Contact us now
              </Link>
            </p>
          </div>
        </div>
        <p className="ml-auto max-w-xl text-foreground-main dark:text-foreground-invert">
          {content.offering}
        </p>
      </Container>
    </div>
  );
}
