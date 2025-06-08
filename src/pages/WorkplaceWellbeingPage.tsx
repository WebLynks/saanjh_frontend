import saanpSidhi from "../assets/images/SaanpSidhi.png";
import saanpSidhiPhone from "../assets/images/SaanpSidhiPhone.webp";
import saanjhLogo from "../assets/images/saanjh_logo.png";
import bluebgwithcircles from "../assets/images/bluebgwithcircles.png";

function WorkplaceWellbeingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-sapphire px-[10dvw] pb-20 pt-28 font-sans-black tracking-tighter text-white opacity-90 md:pb-24 md:pt-32 lg:pb-36 lg:pt-44">
        <div className="">
          <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Welcome To
          </div>
          <div className="flex flex-wrap justify-between gap-2 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            <div className="flex justify-start">Workplace</div>{" "}
            <div className="flex grow justify-end">Wellbeing</div>
          </div>
          <div className="flex justify-end text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Workshop
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-sky-200 px-[10dvw] pb-8 pt-16">
        <div className="mb-8 w-full break-words text-center text-lg md:w-9/12 lg:w-8/12 xl:w-7/12">
          Companies that take steps in the right direction to address workplace
          well-being are found to have:
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 bg-sky-200 pb-16">
        <div className="flex w-full items-center justify-between gap-4 bg-sapphire pb-1 pe-4 ps-1 pt-1 font-sans-black tracking-tighter text-gray-900 opacity-90">
          <div className="">
            <div className="flex size-20 items-center justify-center bg-white text-2xl text-sapphire 2xl:text-3xl">
              1.
            </div>
          </div>
          <div className="grow text-center text-xl text-white sm:text-2xl 2xl:text-3xl">
            17% more likelihood of high performance
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-4 bg-sapphire pb-1 pe-4 ps-1 pt-1 font-sans-black tracking-tighter text-gray-900 opacity-90">
          <div className="">
            <div className="flex size-20 items-center justify-center bg-white text-2xl text-sapphire 2xl:text-3xl">
              2.
            </div>
          </div>
          <div className="grow text-center text-xl text-white sm:text-2xl 2xl:text-3xl">
            29% increase in high collaborative behaviours
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-4 bg-sapphire pb-1 pe-4 ps-1 pt-1 font-sans-black tracking-tighter text-gray-900 opacity-90">
          <div className="">
            <div className="flex size-20 items-center justify-center bg-white text-2xl text-sapphire 2xl:text-3xl">
              3.
            </div>
          </div>
          <div className="grow text-center text-xl text-white sm:text-2xl 2xl:text-3xl">
            20% increase in better decision making by employees
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 font-sans-black tracking-tighter text-gray-900 opacity-90">
        <div className="text-5xl 2xl:text-6xl">Our Process</div>
        <div className="text-2xl 2xl:text-3xl">Your Path To Harmony</div>
        <img
          className="hidden h-auto w-full object-contain sm:block"
          src={saanpSidhi}
          alt="Process Image"
        />
        <img
          className="h-auto w-full object-contain sm:hidden"
          src={saanpSidhiPhone}
          alt="Process Image"
        />
      </div>
      <div className="flex items-center justify-start gap-6 overflow-x-auto bg-sapphire p-4 font-sans-black tracking-tighter text-white opacity-90 md:justify-center md:gap-10">
        <div className="flex shrink-0 items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Trusting</div>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Empathetic Workplaces</div>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Supportive Environment</div>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-4">
          <div className="size-5 rounded-full bg-white outline outline-1 outline-offset-2 outline-white"></div>
          <div>Psychological Safety</div>
        </div>
      </div>
      <div className="space-y-4 px-[5dvw] py-16 text-center">
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          Why Workplace Wellbeing?
        </div>
        <div className="pb-4 font-sans-black text-2xl tracking-tighter text-sapphire opacity-90 2xl:text-3xl">
          Workplace wellbeing goes beyond just basic stress-management.
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="mx-[5dvw] py-8 sm:mx-0 sm:px-[5dvw]">
            With how much time is spent at work by individuals, it is important
            that organizations develop tools and strategies for workplace
            wellbeing.
          </div>
          <div className="mx-[5dvw] border-t-4 border-dashed border-sapphire py-8 sm:mx-0 sm:border-s-4 sm:border-t-0 sm:px-[5dvw]">
            Workplace wellbeing has to focus on employees as individuals and
            prioritize their overall wellbeing through empathetic, sensitive,
            and inclusive tools
          </div>
        </div>
      </div>
      <div className="flex h-24 flex-wrap items-center justify-center p-4">
        <img
          src={saanjhLogo}
          alt="Saanjh Logo"
          className="h-full w-auto object-contain"
        />
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          At Saanjh
        </div>
      </div>
      <div className="relative h-96 w-full bg-sapphire">
        <img
          src={bluebgwithcircles}
          alt="Blue Background"
          className="size-full object-fill"
        />
        <div className="absolute left-1/2 top-1/2 flex w-3/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center text-white">
          <div>
            At Saanjh, we are focused on creating Workplace Wellbeing solutions
            that are aligned with the needs and concerns of your organization.
            We listen to the needs and concerns of your employees to able to
            curate workshops and provide actionable plans that provide the right
            tools to navigate these concerns and create a supportive and
            productive workplace
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkplaceWellbeingPage;
