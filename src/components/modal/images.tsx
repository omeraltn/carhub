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
          src={getImage(car, false, undefined, 800)}
          className="size-full rounded-md object-cover"
          alt={`${car.make} ${car.model} main view`}
          width={800}
          height={600}
          loading="lazy"
        />
      </div>
      <div className="flex gap-3 -my-8 mb-3">
        <div className="rounded flex-1  relative bg-primary-blue-100/50 flex pt-4 h-30">
          <img
            src={getImage(car, false, "29", 200)}
            className="size-full object-contain mx-auto"
            alt={`${car.make} ${car.model} front angle view`}
            width={200}
            height={150}
            loading="lazy"
          />
        </div>
        <div className="rounded flex-1  relative bg-primary-blue-100/50 flex pt-4 h-30">
          <img
            src={getImage(car, false, "05", 200)}
            className="size-full object-contain mx-auto"
            alt={`${car.make} ${car.model} rear angle view`}
            width={200}
            height={150}
            loading="lazy"
          />
        </div>
        <div className="rounded flex-1  relative bg-primary-blue-100/50 flex pt-4 h-30">
          <img
            src={getImage(car, false, "13", 200)}
            className="size-full object-contain mx-auto"
            alt={`${car.make} ${car.model} side view`}
            width={200}
            height={150}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
