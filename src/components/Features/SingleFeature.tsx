import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="wow fadeInUp" data-wow-delay=".20s">
        <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-ubuntu font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-inter font-medium text-black dark:text-white mx-auto leading-relaxed sm:text-lg md:text-xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
