import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BASE_URL } from "../config/env";

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

export default function CollectivesPage() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/therapists/`)
      .then((res) => res.json())
      .then((data) => setTherapists(data))
      .catch((err) => console.error("Error fetching therapists:", err));
  }, []);

  const [videos, setVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/youtube/`)
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Failed to fetch YouTube videos:", err));
  }, []);

  return (
    <div className="text-gray-900">
      {/* Hero */}
      <div className="mt-16 flex h-[50vh] w-full items-center justify-center bg-[url('/individual_therapy_header.png')] bg-cover bg-center md:mt-0">
        <h1 className="font-sans-black text-5xl text-white drop-shadow-lg">
          Discover Our Collectives
        </h1>
      </div>

      {/* What Therapy Means To Us */}
      <div className="mx-auto grid max-w-7xl gap-10 px-0 pb-8 pt-20 md:grid-cols-2">
        <div>
          <img
            src="src/assets/images/therapy_visual.png"
            alt="Therapy visual"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 font-sans-black text-5xl">
            What Therapy Means To Us
          </h2>
          <p className="font-sans-regular text-lg leading-relaxed">
            At Saanjh, therapy is not just about addressing problems — it's a
            journey of discovering your truest self. We believe that healing
            starts when you're truly heard, seen, and supported.
            <br></br>
            Our therapists are here to offer more than just tools — they bring
            empathy, cultural sensitivity, and a deep commitment to walking
            alongside you in your unique path. Whether you're navigating grief,
            trauma, identity, or simply seeking clarity, this space is yours to
            explore safely and authentically.
            <br></br>
            Therapy, for us, is a collaborative process — a partnership where
            growth happens gently, trust is built intentionally, and every step
            forward is celebrated.
          </p>
        </div>
      </div>

      {/* Explore Our Videos */}
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-12">
        <h2 className="mb-8 font-sans-black text-5xl">Explore Our Videos</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <div key={index} className="w-full">
              <div
                className="aspect-video overflow-hidden rounded-lg"
                dangerouslySetInnerHTML={{ __html: video.iframe_code }}
              />
              {video.title && (
            <p className="mt-1 font-sans text-xl text-gray-900 leading-snug">
              {video.title}
            </p>              
          )}
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Therapists */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <h2 className="mb-10 text-left font-sans-black text-5xl">
          Meet Our Therapists
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {therapists.map((therapist) => (
            <Link
              to={`/services/collectives/${therapist.slug}`}
              key={therapist.slug}
              className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-sans-black text-2xl text-gray-900">
                  {therapist.name}
                </h3>
                <p className="line-clamp-4 font-sans-regular text-md leading-relaxed text-gray-600">
                  {therapist.description.split(" ").slice(0, 90).join(" ")}...
                </p>
              <div className="mt-2 font-sans-black text-sm text-mango">
                {therapist.years_of_experience ? `${therapist.years_of_experience} Years of Experience` : ""}
              </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
