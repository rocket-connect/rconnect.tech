"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../shared/Container";

interface MapProp {
  content: any;
}

export default function Map({ content }: MapProp) {
  const iconMarkup = renderToStaticMarkup(
    <span className="relative flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
    </span>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  return (
    <div className="w-full py-16">
      <Container className="gap-8">
        <h2 className="text-3xl font-bold mr-auto">{content.title}</h2>
        <p className="max-w-xl">{content.info}</p>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
          <div className="rounded-xl overflow-hidden">
            <MapContainer
              preferCanvas={true}
              center={[5, 80]}
              zoom={2.2}
              style={{ height: "500px", width: "600px" }}
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
                  index: string
                ) => (
                  <Marker
                    key={"loc-" + index}
                    position={[location.lattitude, location.longitude]}
                    icon={customMarkerIcon}
                  >
                    <Popup>{location.city}</Popup>
                  </Marker>
                )
              )}
            </MapContainer>
          </div>
          <div className="w-full h-full flex flex-col items-center jusitfy-start">
            <div className="w-full flex flex-col border border-[#E6E6FF] rounded-xl bg-[#F1F6FA] dark:bg-[#1F344A] dark:border-[#546C87] h-fit overflow-hidden">
              {content.locations.map(
                (
                  location: {
                    eventName: string;
                    lattitude: number;
                    longitude: number;
                    href: string;
                  },
                  index: string
                ) => (
                  <a
                    key={"evloc-" + index}
                    href={location.href}
                    target="_blank"
                  >
                    <div className="w-full py-4 px-6 text-xl font-bold flex flex-row items-center justify-between hover:bg-[#EEEEFB] hover:bg-[#546C87] cursor-pointer">
                      {location.eventName}
                      <ArrowRight className="-rotate-45 stroke-[#838793]" />
                    </div>
                  </a>
                )
              )}
            </div>
            <p className="text-center text-[#838793] py-4">
              <Link href={"/contact"} className="underline hover:opacity-70">
                Contact us now
              </Link>
            </p>
          </div>
        </div>
        <p className="ml-auto max-w-xl">{content.offering}</p>
      </Container>
    </div>
  );
}
