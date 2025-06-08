import useImage from "../hooks/useImage";

type TeamCardProps = {
  name?: string;
  pronoun?: string;
  position?: string;
  description?: string;
  imageName?: string;
  bgColor?: string;
};

function TeamCard({
  name,
  pronoun,
  position,
  description,
  imageName = "",
  bgColor,
}: TeamCardProps) {
  const { loading, image, error } = useImage(imageName);

  return (
    <div className="flex flex-col items-start justify-normal gap-12 sm:flex-row sm:items-center">
      <div
        className={`size-40 rounded-xl bg-${bgColor} flex shrink-0 items-end justify-center`}
      >
        {loading ? (
          `loading...`
        ) : error ? null : (
          <img className="aspect-square size-[90%]" src={image} alt={name} />
        )}
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <div className="font-sans-black tracking-tighter text-orange-600 opacity-90">
          <div className="text-2xl 2xl:text-3xl">{`${name} (${pronoun})`}</div>
          <div className="font-sans-regular text-lg 2xl:text-xl">
            {position}
          </div>
        </div>
        <div className="">{description}</div>
      </div>
    </div>
  );
}

export default TeamCard;
