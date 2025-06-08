import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <div data-aos="slide-up" className="px-[10dvw] py-16">
      <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
        Meet Our Team
      </div>
      <div className="flex flex-col gap-16 px-4 pt-10">
        <TeamCard
          name="Ruchi Bhutada"
          pronoun="She/Her"
          imageName="ruchi"
          position="Co-Founder (Counselling Psychologist, Narrative Practitioner, Mental Health Advocate)"
          description="Hello! I'm Ruchi, a counselling psychologist with an MSc from King's College London. Through Saanjh, I strive to create a safe, accepting space for mental wellness. I believe in mental hygiene and advocacy. Beyond work, I love reading, traveling, and spending time with animals!"
          bgColor="sapphire"
        />
        <TeamCard
          name="Abhramika Choudhuri"
          pronoun="She/They"
          imageName="abhramika"
          position="Co-Founder (Organizational Psychologist, MBA, Mental Health Advocate)"
          description="Hi! I'm Abhramika, with a Master's in Work and Organisational Psychology and an MBA. Passionate about mental health advocacy, I use Saanjh to build communities, foster connections, and create inclusive spaces."
          bgColor="mango"
        />
      </div>
    </div>
  );
}

export default Team;
