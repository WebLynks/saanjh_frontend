import Events from "../sections/Events";
import pearlBackgroundImgSrc from "../assets/images/pearl_background.png";
import EventCardLandscape from "../components/EventCardLandscape";
import sharingCircleImgSrc from "../assets/images/sharing_circle.png";
import sharingGroupImgSrc from "../assets/images/sharing_group.png";

function Event() {
  return (
    <>
      <div className="flex flex-col justify-between gap-[10px] pt-24 font-extrabold">
        <div className="flex items-center justify-start bg-gradient-to-b from-mango from-40% via-iris via-80% to-sapphire to-100% bg-clip-text text-transparent">
          <div className="text-[20dvw] leading-[25dvw] tracking-tighter xl:text-[18dvw] xl:leading-[23dvw]">
            Saanjh
          </div>
        </div>
        <div className="-mt-[5dvw] flex items-start justify-end bg-gradient-to-b from-mango from-40% via-iris via-80% to-sapphire to-100% bg-clip-text text-transparent">
          <div className="text-[20dvw] leading-[25dvw] tracking-tighter xl:text-[18dvw] xl:leading-[23dvw]">
            Events
          </div>
        </div>
      </div>
      <div>
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
      <div className="space-y-16 px-[10dvw] py-16">
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          Group Sessions
        </div>
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="w-full space-y-8 md:w-7/12">
            <div className="font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 2xl:text-3xl">
              Sharing Circle
            </div>
            <div>
              A sharing circle is a space co-created by the participants with
              the intention of witnessing people’s stories to find connection
              and resonance. These are usually on a pre-decided topic and is
              complete across one session. The idea is to just hold space for
              people to share their stories so that they feel heard, and respond
              to aspects of the stories that connected with us to create mutual
              resonance.
            </div>
          </div>
          <img
            className="w-full md:w-5/12"
            src={sharingCircleImgSrc}
            alt="Sharing Circle"
          />
        </div>
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="w-full space-y-8 md:w-7/12">
            <div className="font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 2xl:text-3xl">
              Sharing Group
            </div>
            <div>
              A support group is a space for people going through similar
              concerns to share their experience and support one another.
              Typically, a support group runs across multiple meetings, and is a
              space where people can share resources and even advice/suggestions
              if necessary.
            </div>
          </div>
          <img
            className="w-full md:w-5/12"
            src={sharingGroupImgSrc}
            alt="Sharing Group"
          />
        </div>
      </div>
      <Events heading="Past Events" />
    </>
  );
}

export default Event;
