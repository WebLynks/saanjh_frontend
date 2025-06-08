import { useState } from "react";
import useImage from "../hooks/useImage";

export type Founder = {
  name: string;
  detail: string;
  imageName: string;
  bgColor: string;
  moreDetail: string;
};

function FounderCard({
  name,
  detail,
  imageName,
  bgColor,
  moreDetail,
}: Founder) {
  const [showModal, setShowModal] = useState(false);
  const { loading, image } = useImage(imageName);

  return (
    <div className="col-span-3 md:col-span-1">
      <div className="h-[30rem] rounded-b-2xl shadow-lg sm:max-md:h-[40rem] md:max-lg:h-[32rem] lg:h-[34rem] xl:h-[42rem]">
        <div
          className={`relative flex h-[16rem] justify-center rounded-t-2xl sm:max-md:h-[26rem] bg-${bgColor} bg-opacity-75 md:max-lg:h-[14rem] xl:h-[26rem]`}
        >
          {loading ? (
            `loading...`
          ) : (
            <img
              src={image}
              alt={name}
              className="absolute bottom-0 h-[18rem] w-11/12 object-fill sm:max-md:h-[28rem] md:max-lg:h-[16rem] xl:h-[28rem]"
            />
          )}
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-center gap-4 px-2 py-4 text-center md:h-[18rem] xl:h-[16rem]">
          <div className="font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 2xl:text-xl">
            {name}
          </div>
          <hr className={`w-2/5 border-2 border-${bgColor}`} />
          <div className="text-center">{detail}</div>
          <div
            className={`cursor-pointer rounded-xl bg-${bgColor} px-4 py-2 text-white shadow-lg`}
            onClick={() => setShowModal(true)}
          >
            Know More
          </div>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex justify-end">
                  <button
                    className="hover:font-bold"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="">{moreDetail}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FounderCard;
