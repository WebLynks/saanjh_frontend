import ruchiImage from "../assets/images/ruchi.png";
import abhramikaImage from "../assets/images/abhramika.png";
import FounderCard, { Founder } from "../components/FounderCard";
import orangebgwithcircles from "../assets/images/orangebgwithcircles.png";

const founders: Founder[] = [
  {
    name: "Ruchi Bhutada",
    imageName: "ruchi",
    detail:
      "In-house therapist, book addict, animal lover, and aspiring world traveler",
    bgColor: "mango",
    moreDetail:
      "Ruchi Bhutada (she/her): Hello! I am Ruchi and my pronouns are she/her. I have a MSc in Mental Health Studies from King's College London. Currently I am practicing as a counselling psychologist in India. I am a firm believer of mental health advocacy as well as mental hygiene, which involves people taking care of their mental health regardless of any “issues”. With Saanjh, I hope to create a space where people can find safety, relatability, comfort, and build acceptance and mental wellness.",
  },
  {
    name: "Abhramika Choudhuri",
    imageName: "abhramika",
    detail:
      "Mental wellbeing advocate, bibliophile, dancer, and always looking to learn",
    bgColor: "sapphire",
    moreDetail:
      "Abhramika Choudhuri (she/they): Hi! I am Abhramika! I have completed my Master's in Work and Organisational Psychology from Erasmus University, Rotterdam and my MBA from BITSoM. I am deeply passionate about mental health advocacy. I aspire to aid in the creation of inclusive and empathetic work environments through conversations and community. For me Saanjh is a platform through which I can build these communities and connections and create a safer and more accessible world. In my free time I love to read, sing, play the ukulele, and dance.",
  },
  {
    name: "Harshdeep Singh",
    imageName: "harshdeep",
    detail: "Next-door product guy, part time writer, full time curious",
    bgColor: "iris",
    moreDetail:
      "Harshdeep Singh (he/him): Hi, My name is Harshdeep and I'm your typical self-stereotyped Engineer turned MBA. What am I doing here you ask? Well I happened to be at the right place, at the right time, with the right people (just MBA things), but more importantly, I like to tinker with inspiring problem solving ideas. Saanjh is a safe space, born out of the virtuousness and passion to be the platform for the community, of the community and by the community and I drive business engagements for our Workplace products. On days when I find time for myself, I scavenge the deeper darkest corners of YouTube to learn something new.",
  },
];

function AboutUsPage() {
  return (
    <div>
      <div className="flex items-center justify-center px-[20dvw] pb-20 pt-28 md:pb-24 md:pt-32 lg:pb-28 lg:pt-40">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="font-sans-black text-5xl font-semibold tracking-tighter text-sunset md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            About Us
          </h1>
          <p className="text-center lg:text-lg xl:text-xl 2xl:text-2xl">
            We at Saanjh aim to create a safe space and community through open
            conversations about everything mental health and well-being. We wish
            to achieve this by working with both individuals and groups.
          </p>
        </div>
      </div>

      <div className="bg-sunset text-white">
        <div className="px-[10dvw] py-12">
          <div className="flex flex-col gap-8 md:flex-row md:gap-0">
            <div className="w-12/12 flex grow justify-start md:w-4/12 md:grow-0">
              <div className="tracking-tighte flex flex-col items-start justify-center font-sans-black text-5xl text-white lg:text-7xl">
                <div>Our</div> <div>Founders</div>
              </div>
            </div>
            <div className="w-12/12 flex md:w-8/12">
              <div className="flex w-2/12 flex-col items-center font-sans-black text-lg tracking-tighter opacity-90 md:w-2/12 md:text-xl 2xl:text-2xl">
                <div>Ruchi</div>
                <div>Bhutada</div>
              </div>
              <div className="-mb-12 flex w-4/12 grow md:w-4/12">
                <img className="object-cover" src={ruchiImage} alt="Ruchi" />
              </div>
              <div className="-mb-12 -ms-7 flex w-4/12 grow md:w-4/12">
                <img
                  className="object-cover"
                  src={abhramikaImage}
                  alt="Abhramika"
                />
              </div>
              <div className="flex w-2/12 flex-col items-center font-sans-black text-lg tracking-tighter opacity-90 md:w-2/12 md:text-xl 2xl:text-2xl">
                <div>Abhramika</div>
                <div>Choudhuri</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10dvw] py-16 sm:max-md:px-[15dvw]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-20">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>

      <div className="bg-pink-100 px-[10dvw] py-16">
        <div className="flex flex-col gap-16 md:flex-row md:gap-32">
          <div className="flex flex-col justify-center font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 lg:text-7xl">
            <div>Our</div>
            <div>Mission</div>
          </div>
          <div className="">
            At Saanjh, we understand that mental health goes beyond just the
            individual. We aim to inform our services by the larger context of
            an individual, the intersections of their identity, and provide
            access to a space where people can be authentically themselves.
            Creating community is central to our work as we believe community
            support to be indispensable to mental health care. We also believe
            in the power of stories; every individual has a story to share that
            would enrich the world. We aim to provide a platform for people to
            share their stories to be witnessed and for others to find
            resonance.
          </div>
        </div>
      </div>

      <div className="relative flex font-sans-black text-sm tracking-tighter text-white opacity-90 sm:text-lg md:text-xl lg:text-2xl">
        <div className="flex h-96 w-1/4 items-start justify-center text-clip bg-mango px-2 py-16">
          Inclusivity
        </div>
        <div className="flex h-96 w-1/4 items-start justify-center bg-sunset px-2 py-16">
          Community
        </div>
        <div className="flex h-96 w-1/4 items-start justify-center text-clip bg-iris px-2 py-16">
          Intersectional
        </div>
        <div className="flex h-96 w-1/4 items-start justify-center bg-sapphire px-2 py-16">
          Compassion
        </div>
        <div className="absolute bottom-0 z-20 w-full text-9xl -tracking-[.50rem] opacity-50 sm:text-[8.5rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] 2xl:text-[17rem]">
          Our Values
        </div>
      </div>

      <div className="relative h-96 w-full bg-sunset">
        <img
          src={orangebgwithcircles}
          alt="Orange Background"
          className="size-full object-fill"
        />
        <div className="absolute left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center text-white md:w-3/5">
          <div>
            At the core of this initiative is the belief that mental health is
            not just about coping with mental illnesses but also about
            maintaining mental wellbeing. We believe that mental health is
            collective and should be approached wholistically.
          </div>
          <div>
            Mental health is not just personal but also a political space, and
            therefore inclusion of human diversity and understanding the
            intersections of their identity is important to providing care.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
