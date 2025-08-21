import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BASE_URL } from "../config/env";
import handshake from "../assets/images/handshake-medium-light-skin-tone-svgrepo-com.svg";
import smile from "../assets/images/smile-svgrepo-com.svg";
import network from "../assets/images/network-server-svgrepo-com.svg";
import bulb from "../assets/images/bulb-electric-energy-svgrepo-com.svg";
import ppt from "../assets/images/presentation-stand-svgrepo-com.svg";
// import hero from "../assets/images/swastik-chakraborty--HM-iX3a5go-unsplash.webp";
// import hiking from "../assets/images/nicolas-weldingh-salLQNuOllw-unsplash.webp";
import ourcollectives from "../assets/images/our_collectives.jpeg";
// For animation, install and import AOS for scroll-based reveal effects
import saanjh_logo_notext from "../assets/images/saanjh_logo.png";
import ourcollectives_hero from "../assets/images/ourcollectives_hero.webp";
import "aos/dist/aos.css";
import AOS from "aos";

interface Therapist {
  name: string;
  image: string;
  slug: string;
  description: string;
  years_of_experience: string;
}
interface YouTubeVideo {
  title: string;
  iframe_code: string;
  description: string;
  created_at: string;
}

// Abstract image assets (Unsplash or SVGs)

export default function OurCollectivesPage() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  useEffect(() => {
    AOS.init({ once: true, duration: 750, easing: "ease-out-cubic" });
  }, []);
  useEffect(() => {
    fetch(`${BASE_URL}/api/therapists/`)
      .then((res) => res.json())
      .then(setTherapists)
      .catch((err) => console.error("Error fetching therapists:", err));
  }, []);
  useEffect(() => {
    fetch(`${BASE_URL}/api/youtube/`)
      .then((res) => res.json())
      .then(setVideos)
      .catch((err) => console.error("Failed to fetch YouTube videos:", err));
  }, []);

  return (
    <div className="overflow-x-hidden bg-white font-sans text-gray-900">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden">
        <img
          src={ourcollectives_hero}
          alt="Abstract hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* for gradient of black viggnette bg-gradient-to-tr from-black/65 via-white/5 to-black/35 */}
        <div className="absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-24 text-center">
          <h1
            className="mb-4 text-5xl font-black text-white drop-shadow-lg md:text-8xl"
            data-aos="fade-down"
          >
            Meet Saanjh Collective
          </h1>
          <div
            className="mx-auto mb-6 h-1 w-16 rounded-full bg-mango"
            data-aos="fade-down"
            data-aos-delay="150"
          />
          <p
            className="mb-7 max-w-2xl text-lg text-white md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            A space for collaboration and community - for therapists, by therapists
          </p>
          <a
            href="mailto:saanjhwellness@gmail.com"
            className="rounded-full border border-white/30 bg-white/20 px-8 py-3 text-lg font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30"
            data-aos="zoom-in"
            data-aos-delay="350"
          >
            Join the Collective
          </a>
        </div>
      </section>

      {/* VISION / MISSION / VALUES AS FEATURE CARDS */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-5 md:pt-10 pb-20  md:grid-cols-3">
        <div
          className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-xl"
          data-aos="fade-up"
        >
          <div className="bg-mango-100 mb-4 flex h-14 w-14 items-center justify-center rounded-full">
            <svg viewBox="0 0 70 70" fill="none" className="h-16 w-16">
              <circle cx="35" cy="18" r="9" fill="#FDBA3D" />
              <ellipse cx="35" cy="50" rx="18" ry="8" fill="#FFD592" />
              <path
                d="M22 44 Q35 36 48 44"
                stroke="#FDBA3D"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M28 30 C25 39, 18 38, 22 50"
                stroke="#FDBA3D"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M42 30 C45 39, 52 38, 48 50"
                stroke="#FDBA3D"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-black tracking-tight text-mango">
            Vision
          </h2>
          <p className="text-center text-base text-gray-700">
            To create a space where therapists collaborate in a
            non-hierarchical, supportive, and intentional manner—growing and
            working together beyond the old status quo.
          </p>
        </div>
        <div
          className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-sunset-100 mb-4 flex h-14 w-14 items-center justify-center rounded-full">
            <svg viewBox="0 0 70 70" fill="none" className="h-16 w-16">
              <ellipse cx="22" cy="48" rx="8" ry="5" fill="#F38759" />
              <ellipse cx="48" cy="44" rx="8" ry="5" fill="#6D6FD3" />
              <circle cx="22" cy="18" r="8" fill="#F38759" />
              <rect
                x="18"
                y="25"
                width="7"
                height="19"
                rx="3.5"
                fill="#FDBA3D"
              />
              <circle cx="48" cy="18" r="8" fill="#6D6FD3" />
              <rect
                x="44"
                y="25"
                width="7"
                height="17"
                rx="3.5"
                fill="#9CA3F5"
              />
              <path
                d="M22 36 Q18 38 14 42"
                stroke="#F38759"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M48 36 Q57 38 60 44"
                stroke="#6D6FD3"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-black tracking-tight text-sunset">
            Mission
          </h2>
          <ol className="list-inside list-decimal space-y-1 text-left text-base text-gray-700">
            <li>
              Build a community supporting individual & collective therapist
              growth
            </li>
            <li>Make private practice more sustainable and less isolating</li>
          </ol>
        </div>
        <div
          className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-iris-100 mb-4 flex h-14 w-14 items-center justify-center rounded-full">
            <svg viewBox="0 0 70 70" fill="none" className="h-16 w-16">
              <circle cx="18" cy="32" r="7" fill="#6D6FD3" />
              <circle cx="52" cy="32" r="7" fill="#FDBA3D" />
              <circle cx="35" cy="52" r="8" fill="#F38759" />
              <path
                d="M25 40 Q35 45 45 40"
                stroke="#FFD592"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M18 39 Q18 51 35 52"
                stroke="#6D6FD3"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M52 39 Q52 51 35 52"
                stroke="#FDBA3D"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-black tracking-tight text-iris">
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: "Social justice", col: "bg-mango-100 text-mango" },
              { name: "Inclusivity", col: "bg-sunset-100 text-sunset" },
              { name: "Anti-oppressive", col: "bg-iris-100 text-iris" },
              { name: "Intersectionality", col: "bg-mango-50 text-mango" },
              { name: "Collaboration", col: "bg-iris-50 text-iris" },
              { name: "Reflexivity", col: "bg-sunset-50 text-sunset" },
              { name: "Accountability", col: "bg-mango-50 text-mango" },
            ].map((v, idx) => (
              <span
                className={`rounded-full px-4 py-1 text-sm font-bold tracking-wide shadow-sm ${v.col}`}
                key={v.name}
                data-aos="fade-in"
                data-aos-delay={300 + idx * 50}
              >
                {v.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS: ANIMATED FEATURES GRID */}
      <section className="mx-auto w-full max-w-7xl bg-white px-4 py-10">
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-stretch">
          <div className="grid flex-1 grid-cols-1 gap-7">
            {[
              {
                icon: (
                  <img
                    src={handshake}
                    alt="No revenue-share"
                    className="h-10 w-10"
                    style={{ filter: "drop-shadow(0 0 2px #FDBA3D)" }}
                  />
                ),
                title: "No revenue-share",
                desc: "Clients pay you directly—no intermediary.",
              },
              {
                icon: (
                  <img
                    src={smile}
                    alt="Collaborative events"
                    className="h-10 w-10"
                    style={{ filter: "drop-shadow(0 0 2px #FDBA3D)" }}
                  />
                ),
                title: "Collaborative events",
                desc: "Plan and run community programs with the whole group.",
              },
              {
                icon: (
                  <img
                    src={network}
                    alt="Referral network"
                    className="h-10 w-10"
                    style={{}}
                  />
                ),
                title: "Referral network",
                desc: "Visibility on site, social channels, and by word of mouth.",
              },
              {
                icon: (
                  <img
                    src={ppt}
                    alt="Supervision and Training"
                    className="h-10 w-10"
                    style={{}}
                  />
                ),
                title: "Supervision & trainings",
                desc: "Group/peer/indiv. supervision; become a supervisor, access new learning.",
              },
              {
                icon: (
                  <img
                    src={bulb}
                    alt="Continually evolving resources"
                    className="h-10 w-10"
                    style={{ filter: "drop-shadow(0 0 2px #FDBA3D)" }}
                  />
                ),
                title: "Continually evolving resources",
                desc: "Database and features adapt to your feedback and needs.",
              },
            ].map((item, idx) => (
              <div
                className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow transition-all duration-200 hover:shadow-lg"
                key={item.title}
                data-aos="fade-left"
                data-aos-delay={idx * 100}
              >
                <div>{item.icon}</div>
                <div>
                  <div className="mb-1 text-lg font-semibold text-sunset">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-700">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-center">
            <img
              src={ourcollectives}
              alt="Offerings Abstract"
              className="border-mango-100 animate__animated animate__fadeInRight w-full max-w-md rounded-3xl border-2 shadow"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </section>

      {/* STRUCTURE & MEMBERSHIP – INNOVATIVE TIMELINE */}
      <section className="w-full bg-white px-4 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <h2
            className="mb-12 text-center text-4xl font-black text-iris md:text-5xl"
            data-aos="fade-up"
          >
            Structure & How to Join
          </h2>
          <div className="flex w-full flex-col items-stretch gap-0 md:flex-row md:gap-8">
            {[
              {
                label: "1. Eligibility",
                icon: (
                  <span className="bg-iris-100 flex w-12 items-center justify-center rounded-full">
                    <span className="text-2xl font-extrabold text-sapphire">
                      
                    </span>
                  </span>
                ),
                desc: (
                  <>
                    <b>You're a counseling or clinical psychologist</b> with a
                    private practice based in India (online, offline, or
                    hybrid).
                  </>
                ),
              },
              {
                label: "2. Quick 3-step process",
                icon: (
                  <span className="bg-iris-100 flex w-12 items-center justify-center rounded-full">
                    <span className="text-2xl font-extrabold text-mango">
                      
                    </span>
                  </span>
                ),
                desc: (
                  <>
                    <span className="mb-1 block">
                      <b>Send</b> your updated CV
                    </span>
                    <span className="mb-1 block">
                      <b>Attend</b> a quick interview call
                    </span>
                    <span className="block">
                      <b>Begin onboarding</b> together
                    </span>
                  </>
                ),
              },
              {
                label: "3. Membership fee",
                icon: (
                  <span className="bg-iris-100 flex w-12 items-center justify-center rounded-full">
                    <span className="text-2xl font-extrabold text-iris"></span>
                  </span>
                ),
                desc: (
                  <>
                    Monthly/yearly, decided together. Funds go to supervision,
                    training, marketing, and community growth.
                  </>
                ),
              },
            ].map((step, idx) => (
              <div
                className="group mb-8 flex w-full flex-col items-center rounded-2xl border-t-4 border-mango border-opacity-0 bg-white px-6 py-10 text-center shadow-md transition-all hover:border-opacity-80 md:mb-0 md:w-1/3"
                key={step.label}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="mb-5">{step.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-sunset">
                  {step.label}
                </h3>
                <div className="text-base text-gray-700">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR THERAPISTS – FULL-WIDTH, ANIMATED GRID */}
      <section className="w-full bg-white px-4 py-5">
        <h2
          className="mb-12 text-center text-4xl font-black text-sunset md:text-5xl"
          data-aos="fade-up"
        >
          Meet Our Therapists
        </h2>
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 md:grid-cols-3">
          {therapists.map((therapist, idx) => (
            <Link
              to={`/services/collectives/${therapist.slug}`}
              key={therapist.slug}
              tabIndex={0}
              aria-label={`View therapist profile: ${therapist.name}`}
              className="border-iris-100 group relative block overflow-hidden rounded-3xl border-2 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-iris"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <div className="overflow-hidden">
                <img
                  src={
                    therapist.image ||
                    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                  }
                  alt={therapist.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-xl font-black text-mango group-hover:text-sunset">
                  {therapist.name}
                </h3>
                <div className="text-sm font-semibold text-iris">
                  {therapist.years_of_experience
                    ? `${therapist.years_of_experience} Years Experience`
                    : ""}
                </div>
                <p className="line-clamp-4 text-base text-gray-700">
                  {therapist.description.split(" ").slice(0, 40).join(" ")}...
                </p>
                <div className="mt-3 text-right">
                  <span className="bg-mango-100 group-hover:bg-mango-300 inline-block rounded-full px-5 py-1 text-xs font-bold text-mango transition">
                    View Profile
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY */}
      {videos.length > 0 && (
        <section className="w-full bg-white px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-12 text-center text-4xl font-black text-sapphire md:text-5xl"
              data-aos="fade-up"
            >
              Explore Our Videos
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              {videos.map((video, idx) => (
                <div
                  key={idx}
                  className="border-iris-50 overflow-hidden rounded-2xl border bg-white shadow-lg transition hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={idx * 90}
                >
                  <div className="aspect-video w-full">
                    <div
                      className="h-full w-full"
                      dangerouslySetInnerHTML={{ __html: video.iframe_code }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-xl font-black">{video.title}</h3>
                    <p className="text-base text-gray-700">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JOIN CTA FULL-BLEED BANNER */}
      <section className="from-mango-50 relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-tr via-pink-50 to-white px-4 pb-20">
        {/* Subtle floating shapes/gradients for modernity */}
        <div className="bg-mango-200/20 animate-pulse-slow pointer-events-none absolute left-0 top-[-60px] h-[320px] w-[320px] rounded-full blur-2xl" />
        <div className="bg-iris-200/30 animate-pulse-reverse pointer-events-none absolute bottom-[-60px] right-[-80px] h-[240px] w-[240px] rounded-full blur-2xl" />

        <div className="relative flex w-full max-w-5xl flex-col items-center gap-14 rounded-3xl border-none bg-white/95 p-12 shadow-xl backdrop-blur-md md:flex-row">
          {/* Large, eye-catching illustration */}
          <img
            src={saanjh_logo_notext}
            alt="Abstract Join"
            // use shadow-lg for shadow
            className="h-52 w-52 max-w-[280px] rounded-3xl border-4 border-white/50 object-cover"
            style={{
              // background: "linear-gradient(120deg, #ffdba8 0%, #ecbcdf 75%)",
            }}
          />

          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-4 text-4xl font-black tracking-tight text-sunset drop-shadow-sm">
              Want to join the Collective?
            </h3>
            <p className="mb-8 text-xl text-gray-700">
              Reach out and start the conversation.
            </p>
            <a
              href="mailto:saanjhwellness@gmail.com"
              className="border-mango-200/80 hover:bg-mango-400/80 hover:shadow-mango-200/50 focus:ring-mango-400 glassmorphism-btn rounded-full border bg-white/30 px-10 py-4 text-lg font-bold text-sunset shadow-2xl backdrop-blur-md transition-all duration-300 hover:text-iris focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(243,186,61,0.18), 0 1.5px 5px rgba(120, 53, 15, .05)",
                backdropFilter: "blur(13px)",
              }}
            >
              Email Us to Join
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
