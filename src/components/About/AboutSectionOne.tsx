import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden rounded-lg shadow-lg dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image2.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Discover Rabovel:  Shaping the Future of Digital Trading in Nigeria. 
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Founded with the goal of revolutionizing the trading landscape in 
                  Nigeria, Rabovel is committed to providing innovative solutions like options 
                  and futures trading. Our vision is to empower investors with cutting-edge tools 
                  and resources, making trading accessible and efficient for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;