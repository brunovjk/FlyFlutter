import React from "react";
import GlassPaper from "@/components/GlassPaper";
import { shortenBytes } from "@/utils/shorten";
import CircularLoading from "@/components/CircularLoading";

type EventCardProps = {
  title: string;
  text: string;
  value: string | JSX.Element;
};

function EventCard({ title, text, value }: EventCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xs md:text-base font-light text-center">{title}</p>

      <p className="text-xs md:text-2xl font-medium text-center">{text}</p>
      {typeof value === "string" ? (
        <p className="text-xs md:text-2xl font-medium text-center">{value}</p>
      ) : (
        <CircularLoading />
      )}
    </div>
  );
}

const FFCEvents = ({
  requestId,
  taskId,
  betId,
  houseHand,
  winner,
}: {
  requestId: string | undefined;
  taskId: string | undefined;
  betId: string | undefined;
  houseHand: string | undefined;
  winner: string | undefined;
}) => {
  return (
    <GlassPaper className="h-full flex items-center justify-around">
      <EventCard
        title="QRNG Requested"
        text="RequestId"
        value={requestId ? shortenBytes(requestId) : <CircularLoading />}
      />
      <EventCard
        title="Task Created"
        text="TaskId"
        value={taskId ? shortenBytes(taskId) : <CircularLoading />}
      />
      <EventCard
        title="Bet Placed"
        text="BetId"
        value={betId ? shortenBytes(betId) : <CircularLoading />}
      />
      <EventCard
        title="QRNG Received"
        text="House hand"
        value={houseHand ? houseHand : <CircularLoading />}
      />
      <EventCard
        title="Task Executed"
        text="Winner"
        value={winner ? winner : <CircularLoading />}
      />
    </GlassPaper>
  );
};

export default FFCEvents;
