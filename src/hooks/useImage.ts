import { useEffect, useState } from "react";
import images from "../assets/images";

type UseImageReturn = {
  loading: boolean;
  error: Error | null;
  image: string | undefined;
};

const useImage = (fileName: string): UseImageReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const imagePath = images[fileName];
        if (imagePath) {
          setImage(imagePath);
        } else {
          throw new Error("Image not found");
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return { loading, error, image };
};

export default useImage;
