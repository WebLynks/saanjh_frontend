import corporateTransparentImage from "../assets/images/corporate_transparent.png";

function Story() {
  return (
    <>
      <div
        data-aos="slide-up"
        className="grid grid-cols-6 gap-4 bg-purple-100 px-[10dvw] py-16"
      >
        <div className="col-span-6 md:col-span-3">
          <div className="space-y-8">
            <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
              Story of Saanjh
            </div>
            <div className="font-sans-black text-2xl tracking-tighter text-gray-900 opacity-90 2xl:text-3xl">
              Evening or dusk. The time when the sun starts to set and the sky
              is filled with a myriad of colours
            </div>
            <p className="text-l">
              Saanjh is a mental health service provider, born from the desire
              to make mental health care intersectional and accessible. We chose
              the name Saanjh because of the visual nature of the word, and the
              beautiful and poetic connotations around sunsets. For us it
              denotes a soft but beautiful and powerful environment. It also
              signifies that endings can be beautiful, and the perfect place to
              create new beginnings.
            </p>
            <p className="">
              Saanjh was created with the intention to build a space that
              promotes mental health advocacy, and recognises that our mental
              health journeys are collective. We want to highlight and address
              topics within the mental health space that often fall through the
              cracks.
            </p>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center md:col-span-3">
          <img
            src={corporateTransparentImage}
            alt="Story"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default Story;
