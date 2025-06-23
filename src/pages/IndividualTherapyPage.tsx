import individualTherapyHeader from "/individual_therapy_header.png";
import individualTherapyLine from "../assets/images/IndividualTherapyLine.png";
import saanjhLogo from "../assets/images/saanjh_logo.png";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/env";

interface Certification {
  name: string;
  year: number;
  institution: string;
}

interface Qualification {
  name: string;
  college_logo: string;
}

interface Therapist {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  certifications: Certification[];
  qualifications: Qualification[];
  years_of_experience: number;
  client_hours: number;
  num_clients: number;
  num_sessions: number;
}

function IndividualTherapyPage() {
  const { slug } = useParams();
  const [therapist, setTherapist] = useState<Therapist | null>(null);

  useEffect(() => {
    if (slug) {
      fetch(`${BASE_URL}/api/therapists/${slug}/`)
        .then((res) => res.json())
        .then((data) => setTherapist(data))
        .catch((err) => console.error("Error fetching therapist:", err));
    }
  }, [slug]);

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
            <img src={therapist?.image} alt={therapist?.name} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex h-full flex-col justify-center gap-4 px-[10dvw] py-16 md:px-[5dvw]">
              <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
                Meet Our Therapist
              </div>
              <div className="font-sans-black text-2xl italic tracking-tighter text-mango opacity-90 2xl:text-3xl">
                <h1>{therapist?.name}</h1>
              </div>
              <div className="">
                <p>{therapist?.description}</p>
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
      {therapist?.qualifications && therapist.qualifications.length > 0 && (
        <div className="flex flex-col items-center gap-12 bg-sky-200 px-4 py-12 sm:px-8 md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-12">
          {therapist.qualifications.map((qualification, index) => (
            <div
              key={index}
              className="flex w-full max-w-sm flex-col items-center gap-4 md:w-5/12 lg:w-1/3"
            >
              <img
                className="w-4/5 max-w-[280px] object-contain"
                src={qualification.college_logo}
                alt={`${qualification.name} Logo`}
              />
              <div className="text-center font-sans-regular text-base sm:text-lg md:text-xl">
                {qualification.name}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-5 font-sans-black text-3xl tracking-tighter text-white opacity-90 2xl:text-4xl">
        <div className="col-span-5 flex h-24 items-center justify-center bg-mango p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">{therapist?.client_hours}+</div>
            <div className="text-base font-normal">of client hours</div>
          </div>
        </div>
        <div className="col-span-5 flex h-24 items-center justify-center bg-sunset p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">{therapist?.years_of_experience}+</div>
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
            <div className="">{therapist?.num_clients}+</div>
            <div className="text-base font-normal">clients</div>
          </div>
        </div>
        <div className="col-span-5 flex h-24 items-center justify-center bg-sapphire p-4 md:col-span-1">
          <div className="flex flex-col items-center md:items-start">
            <div className="">{therapist?.num_sessions}+</div>
            <div className="text-base font-normal">sessions</div>
          </div>
        </div>
      </div>
      <div className="py-8 text-center font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        Certifications
      </div>

      <div className="flex flex-col gap-0 bg-pink-100 px-[10dvw] py-10">
        {Object.entries(
          (therapist?.certifications ?? []).reduce(
            (acc: Record<number, Certification[]>, cert) => {
              if (!acc[cert.year]) acc[cert.year] = [];
              acc[cert.year].push(cert);
              return acc;
            },
            {},
          ),
        ).map(([year, certs], index) => (
          <div key={year} className="flex gap-6">
            {/* Timeline bar + dot */}
            <div className="flex flex-col items-center">
              {index !== 0 && <div className="h-5 w-0.5 bg-sunset" />}
              <div className="size-3 rounded-full bg-mango" />
              <div className="flex-1 w-0.5 bg-sunset" />
            </div>

            {/* Content */}
            <div className="pb-8">
              <div className="mb-4 font-sans-black text-3xl tracking-tighter text-sunset opacity-90">
                {year}
              </div>
              {certs.map((cert, i) => (
                <div key={i} className="mb-6">
                  <div className="font-sans-black text-lg tracking-tighter text-sunset opacity-90 2xl:text-xl">
                    {cert.name},
                  </div>
                  {cert.institution && (
                    <div className="text-sm text-gray-700">
                      {cert.institution}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
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
