import { useState, type FC } from "react";
import type { Car } from "../../types";
import Info from "./info";
import getPrice from "../../utils/getPrice";
import getImage from "../../utils/getImage";
import Button from "../button";
import Modal from "../modal";

interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="car-card group cursor-pointer">
        {/* Marka */}
        <h2 className="car-card-content-title">
          {car.make} {car.model}
        </h2>
        {/* Fiyat */}
        <div className="flex mt-6 text-[19px]">
          <span className="font-semibold">₺</span>
          <span className="text-[32px]">{getPrice(car)}</span>
          <span className="font-semibold self-end">/gün</span>
        </div>
        {/* Resim */}
        <img
          src={getImage(car, true)}
          className="size-full object-contain min-h-50"
          alt={`${car.make} ${car.model}`}
          width={400}
          height={300}
          loading="lazy"
        />
        {/* detaylar */}
        <div className="w-full">
          <div className="group-hover:hidden ">
            <Info car={car} />
          </div>
          <div className="hidden group-hover:block">
            <Button
              text="Daha fazla"
              designs="w-full mt-[0.5]"
              fn={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
    </>
  );
};

export default Card;
