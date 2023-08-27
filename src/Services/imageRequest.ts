import placeholder_image from "../assets/placeholdr_image.png";

export const imageRequest = (url: string): string => {
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";
  try {
    const imageURL = new URL(`${baseImageUrl}${imageSize}${url}`);
    if (!imageURL.href.includes("w200null")) {
      return imageURL.href;
    } else {
      return placeholder_image;
    }
  } catch (error) {
    console.error("Error constructing image URL:", error);
    return "";
  }
};
