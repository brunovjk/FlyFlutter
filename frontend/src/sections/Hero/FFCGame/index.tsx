import { useState } from "react";
import { Tab } from "@headlessui/react";
import GlassPaper from "@/components/GlassPaper";
import Play from "./Play";
import Rules from "./Rules";
import History from "./History";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FFCGame({
  balances,
  handleBalances,
  setRequestId,
  setTaskId,
  setBetId,
  setHouseHand,
  setWinner,
  setWaitingBet,
}: {
  balances: any;
  handleBalances: any;
  setRequestId: any;
  setTaskId: any;
  setBetId: any;
  setHouseHand: any;
  setWinner: any;
  setWaitingBet: any;
}) {
  const [selectedTab, setSelectedTab] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Play",
      component: (
        <Play
          balances={balances}
          handleBalances={handleBalances}
          setRequestId={setRequestId}
          setTaskId={setTaskId}
          setBetId={setBetId}
          setHouseHand={setHouseHand}
          setWinner={setWinner}
          setWaitingBet={setWaitingBet}
        />
      ),
    },
    { id: 1, name: "Rules", component: <Rules /> },
    { id: 2, name: "History", component: <History /> },
  ];

  return (
    <GlassPaper className="w-full h-full max-w-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
              onClick={() => setSelectedTab(category.id)}
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories.map((category) => (
            <Tab.Panel
              key={category.id}
              className={classNames(
                "grid justify-center items-center gap-4 rounded-xl p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {selectedTab === category.id && category.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </GlassPaper>
  );
}
