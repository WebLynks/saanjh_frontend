import individualTherapyHeader from "/individual_therapy_header.png";
import individualTherapyRuchi from "../assets/images/IndividualTherapyRuchi.png";
import individualTherapyLine from "../assets/images/IndividualTherapyLine.png";
import flameUniversityLogo from "../assets/images/FLAME-University-Logo.png";
import kingsCollegeLogo from "../assets/images/king-s-college-london-logo.png";
import saanjhLogo from "../assets/images/saanjh_logo.png";

function IndividualTherapyPage() {
  return (
    <>
      <div className="pb-24 pt-36">
        <div
          className={`bg-none bg-contain bg-[42dvw_0px] bg-no-repeat px-[10dvw] md:bg-individual-therapy lg:bg-[45dvw_0px] lg:max-xl:px-[5dvw] xl:bg-[50dvw_0px] 2xl:bg-[55dvw_0px]`}
        >
          <div className="w-12/12 flex flex-col items-start justify-center gap-8 md:w-7/12">
            <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90">
              On Therapy
            </div>
            <div className="lg:text-lg xl:text-xl 2xl:text-2xl">
              The aim of therapy is to create a supportive space where you can
              navigate life's challenges and be authentically yourself
            </div>
            <div className="lg:text-lg xl:text-xl 2xl:text-2xl">
              <div className="flex items-start gap-4">
                <span className="mt-1.5 inline-block size-3 flex-shrink-0 rounded-full bg-sunset"></span>
                <span>Self-exploration</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1.5 inline-block size-3 flex-shrink-0 rounded-full bg-sunset"></span>
                <span>Identifying patterns</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1.5 inline-block size-3 flex-shrink-0 rounded-full bg-sunset"></span>
                <span>Learning coping strategies</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1.5 inline-block size-3 flex-shrink-0 rounded-full bg-sunset"></span>
                <span>Navigating through life’s challenges</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1.5 inline-block size-3 flex-shrink-0 rounded-full bg-sunset"></span>
                <span>Finding a non-judgmental and supportive space</span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mt-8 h-auto w-full object-contain md:hidden"
          src={individualTherapyHeader}
          alt="Individual Therapy Header"
        />
      </div>
      <div className="border-y">
        <div className="grid grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <img
              src={individualTherapyRuchi}
              alt="IndividualTherapyRuchi"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex h-full flex-col justify-center gap-4 px-[10dvw] py-16 md:px-[5dvw]">
              <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
                Meet Our Therapist
              </div>
              <div className="font-sans-black text-2xl italic tracking-tighter text-mango opacity-90 2xl:text-3xl">
                Ruchi Bhutada (she/her)
              </div>
              <div className="">
                As a therapist, my hope is to create a space where you are able
                to access the tools to navigate any challenges you may have. I
                do not believe that I am the expert of your life, therefore this
                process only works if we collaborate. I believe the therapeutic
                relationship to be the most important part of therapy, and
                therefore hope to create a space where you can be authentically
                yourself.
              </div>
              <img
                className="mt-8"
                src={individualTherapyLine}
                alt="IndividualTherapyLine"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 text-center font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        Qualifications
      </div>
      <div className="flex flex-col items-center justify-evenly gap-8 bg-sky-200 py-16 md:flex-row">
        <div className="flex w-10/12 flex-col items-center gap-4 md:w-8/12">
          <img
            className="w-2/5 md:w-1/2"
            src={kingsCollegeLogo}
            alt="King's College Logo"
          />
          <div className="w-full text-center font-sans-regular text-lg 2xl:text-xl">
            MSc Mental Health Studies
          </div>
        </div>
        <div className="flex w-10/12 flex-col items-center justify-center gap-4 md:w-8/12">
          <img
            className="w-2/5 md:w-2/3"
            src={flameUniversityLogo}
            alt="Flame University Logo"
          />
          <div className="w-full text-center font-sans-regular text-lg 2xl:text-xl">
            BA (Psychology) & PG Diploma in Interdisciplinary Studies and
            Research (Psychology)
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 font-sans-black text-3xl tracking-tighter text-white opacity-90 2xl:text-4xl">
        <div className="col-span-5 flex h-24 items-center justify-center bg-mango p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">1000+</div>
            <div className="text-base font-normal">of client hours</div>
          </div>
        </div>
        <div className="col-span-5 flex h-24 items-center justify-center bg-sunset p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">2+</div>
            <div className="text-base font-normal">years of exp.</div>
          </div>
        </div>
        <div className="col-span-5 flex h-24 items-center justify-center bg-white md:col-span-1">
          <img
            className="h-5/6 w-3/4 object-contain"
            src={saanjhLogo}
            alt="Saanjh Logo"
          />
        </div>
        <div className="col-span-5 flex h-24 items-center justify-center bg-iris p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">100+</div>
            <div className="text-base font-normal">clients</div>
          </div>
        </div>
        <div className="col-span-5 flex h-24 items-center justify-center bg-sapphire p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">1200+</div>
            <div className="text-base font-normal">sessions</div>
          </div>
        </div>
      </div>
      <div className="py-8 text-center font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        Certifications
      </div>
      <div className="flex flex-col gap-0 bg-pink-100 px-[10dvw] py-10">
        <div className="flex gap-8">
          <div className="mt-3 flex flex-col items-center justify-center">
            <div className="size-3 rounded-full bg-mango"></div>
            <div className="h-full w-0.5 bg-sunset"></div>
          </div>
          <div>
            <div className="mb-4 font-sans-black text-3xl tracking-tighter text-sunset opacity-90">
              2021
            </div>
            <div className="font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
              Suicide First Aid: Understanding Suicide Intervention,
            </div>
            <div className="pb-8">The City & Guilds of London Institute</div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="h-5 w-0.5 bg-sunset"></div>
            <div className="size-3 rounded-full bg-mango"></div>
            <div className="h-full w-0.5 bg-sunset"></div>
          </div>
          <div>
            <div className="mb-4 font-sans-black text-3xl tracking-tighter text-sunset opacity-90">
              2023
            </div>
            <div className="font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
              South Asian Diploma in Narrative Practices,
            </div>
            <div className="pb-8">Narrative Practices India</div>
            <div className="font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
              Mindfulness Based Symptom Management,
            </div>
            <div className="pb-8">Pause for Perspective</div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="h-5 w-0.5 bg-sunset"></div>
            <div className="size-3 rounded-full bg-mango"></div>
            <div className="h-full w-0.5 bg-sunset"></div>
          </div>
          <div>
            <div className="mb-4 font-sans-black text-3xl tracking-tighter text-sunset opacity-90">
              2024
            </div>
            <div className="font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
              Internal Family Systems Therapy,
            </div>
            <div className="pb-8">Thinking Heart USA</div>
            <div className="font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
              Queer Affirmative Counselling Practice,
            </div>
            <div className="pb-8">Pause for Perspective</div>
            <div className="pb-8 font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
              Neurodivergence/Disability Justice/MAD Studies
            </div>
          </div>
        </div>
        <div className="ms-[5px] h-0.5 w-full bg-sunset"></div>
      </div>
      <div className="py-8 text-center font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        Process
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="relative col-span-3 flex h-28 items-center justify-center bg-sunset md:col-span-1">
          <div className="absolute start-1 top-1 flex size-8 items-center justify-center bg-white font-sans-black tracking-tighter text-sunset opacity-90">
            1.
          </div>
          <div className="font-sans-black text-lg tracking-tighter text-white opacity-90 2xl:text-xl">
            Reach Out
          </div>
        </div>
        <div className="relative col-span-3 flex h-28 items-center justify-center bg-sunset md:col-span-1">
          <div className="absolute start-1 top-1 flex size-8 items-center justify-center bg-white font-sans-black tracking-tighter text-sunset opacity-90">
            2.
          </div>
          <div className="font-sans-black text-lg tracking-tighter text-white opacity-90 2xl:text-xl">
            Fill Intake Form
          </div>
        </div>
        <div className="relative col-span-3 flex h-28 items-center justify-center bg-sunset md:col-span-1">
          <div className="absolute start-1 top-1 flex size-8 items-center justify-center bg-white font-sans-black tracking-tighter text-sunset opacity-90">
            3.
          </div>
          <div className="font-sans-black text-lg tracking-tighter text-white opacity-90 2xl:text-xl">
            Schedule a Session
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualTherapyPage;
