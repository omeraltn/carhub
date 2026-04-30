import type { FC } from "react";
import type { Car } from "../../types";
import formatData from "../../utils/formatData";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  return (
    <div className="flex flex-col gap-4">
      {formatData(car).map((key, value) => (
        <div
          className="flex justify-between items-center py-3 px-4 glass-dark rounded-xl border border-white/10 overflow-hidden"
          key={value}
        >
          <span className="capitalize text-grey-light">{key[0]}</span>
          <span className="capitalize text-grey-light font-semibold">
            {key[1] ? key[1] : "-"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Info;
