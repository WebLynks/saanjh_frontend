import EventCardLandscape from "../components/EventCardLandscape";
import pearlBackgroundImgSrc from "../assets/images/pearl_background.png";
import HomeHero from "../sections/HomeHero";
import Services from "../sections/Services";
import Story from "../sections/Story";
import Team from "../sections/Team";
import Updates from "../sections/Updates";

function Home() {
  return (
    <>
      <HomeHero />
      <Story />
      <div
        data-aos="slide-up"
        className="grid grid-cols-12 font-sans-black text-3xl tracking-tighter text-white opacity-90 sm:text-4xl md:text-3xl xl:text-4xl"
      >
        <div className="col-span-12 flex h-32 items-center justify-center bg-mango p-4 md:col-span-3">
          Inclusivity
        </div>
        <div className="col-span-12 flex h-32 items-center justify-center bg-sunset p-4 md:col-span-3">
          Community
        </div>
        <div className="col-span-12 flex h-32 items-center justify-center bg-iris p-4 md:col-span-3">
          Intersectional
        </div>
        <div className="col-span-12 flex h-32 items-center justify-center bg-sapphire p-4 md:col-span-3">
          Compassion
        </div>
      </div>
      <Services />
      <div data-aos="slide-up">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${pearlBackgroundImgSrc})`,
          }}
        >
          <div className="px-[10dvw] pb-8 pt-16">
            <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
              Upcoming Event
            </div>
            <EventCardLandscape />
          </div>
        </div>
      </div>
      <Team />
      <Updates />
    </>
  );
}

export default Home;
