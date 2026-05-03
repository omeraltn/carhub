import type { FC } from "react";
import type { Car } from "../../types";
import getImage from "../../utils/getImage";

interface Props {
  car: Car;
}

const Images: FC<Props> = ({ car }) => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="w-full">
        <img
          src={getImage(car, false)}
          className="size-full rounded-md object-cover"
          alt={`${car.model}`}
        />
      </div>
      <div className="flex gap-3 -my-8 mb-3">
        <div className="rounded flex-1  relative bg-primary-blue-100/50 flex pt-4 h-30">
          <img
            src={getImage(car, false, "29")}
            className="size-full object-contain mx-auto"
            alt={`${car.model} - Image 1`}
          />
        </div>
        <div className="rounded flex-1  relative bg-primary-blue-100/50 flex pt-4 h-30">
          <img
            src={getImage(car, false, "05")}
            className="size-full object-contain mx-auto"
            alt={`${car.model} - Image 2`}
          />
        </div>
        <div className="rounded flex-1  relative bg-primary-blue-100/50 flex pt-4 h-30">
          <img
            src={getImage(car, false, "13")}
            className="size-full object-contain mx-auto"
            alt={`${car.model} - Image 3`}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
