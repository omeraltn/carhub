import type { Car } from "../types";

const colors = [
  "imagin-black",
  "imagin-grey",
  "imagin-white",
  "imagin-blue",
  "imagin-yellow",
  "imagin-red",
  "imagin-orange",
  "imagin-green",
];

const getImage = (
  car: Car,
  randomColor?: boolean,
  angle?: string,
  width?: number,
): string => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.set("customer", "hrjavascript-mastery");
  url.searchParams.set("make", car.make);
  url.searchParams.set("modelFamily", car.model);
  url.searchParams.set("modelYear", car.year);
  url.searchParams.set("zoomType", "fullscreen");
  url.searchParams.set("paintId", "imagin-white");

  // Optimize image size: request appropriately sized images instead of default large sizes
  // Default to 400px width for cards, or use provided width
  const imageWidth = width || 400;
  url.searchParams.set("width", imageWidth.toString());

  // Request WebP format for modern browsers to reduce file size
  url.searchParams.set("format", "webp");

  if (randomColor) {
    const index = Math.floor(Math.random() * colors.length);
    url.searchParams.set("paintId", colors[index]);
  }

  if (angle) {
    url.searchParams.set("angle", angle);
  }

  return url.href;
};

export default getImage;
