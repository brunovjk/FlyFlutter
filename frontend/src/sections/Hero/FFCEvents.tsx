import React from "react";

type EventCardProps = {
  title: string;
  text: string;
  id?: string;
};

function EventCard({ title, text, id }: EventCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xs md:text-base font-light text-center">{title}</p>

      <p className="text-xs md:text-2xl font-medium text-center">
        {id ? id : text}
      </p>
    </div>
  );
}

const FFCEvents = () => {
  return (
    <div className="h-full flex items-center justify-around">
      <EventCard title="Requested QRNG" text="Request ID" />
      <EventCard title="Requested QRNG" text="Request ID" />
      <EventCard title="Requested QRNG" text="Request ID" />
      <EventCard title="Requested QRNG" text="Request ID" />
      <EventCard title="Requested QRNG" text="Request ID" />
    </div>
  );
};

export default FFCEvents;
