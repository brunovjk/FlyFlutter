import SwitchButton from "@/components/SwitchButton";

const FFCHeader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="w-full text-lg md:text-5xl md:leading-none font-medium text-center">
        Play FlyFlutter
      </h1>
      <div className="w-full flex justify-end px-8">
        <SwitchButton />
      </div>
    </div>
  );
};

export default FFCHeader;
