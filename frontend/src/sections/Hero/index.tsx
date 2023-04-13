import FFCEvents from "./FFCEvents";
import FFCDisplay from "./FFCDisplay";
import FFCGame from "./FFCGame";
import FFCHeader from "./FFCHeader";

const Hero = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-10 md:grid-rows-6 gap-4 bg-blue-100 px-4 pt-12 md:px-12 md:pt-24">
      <div className="row-span-1">
        <FFCHeader />
      </div>

      <div className="row-span-8 md:row-span-4 grid md:flex items-center justify-around">
        <FFCGame />
        <FFCDisplay />
      </div>

      <div className="row-span-1">
        <FFCEvents />
      </div>
    </div>
  );
};

export default Hero;
