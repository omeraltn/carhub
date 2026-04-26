import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { Car } from "../../types";
import Loader from "../loader";
import Error from "../error";
import Container from "../container";
import { p } from "motion/react-client";
import Card from "../card";

const List: FC = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [isLoading, setIsloading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsloading(true);
    fetchCars()
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsloading(false));
  }, []);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );
  return (
    <>
      <div className="padding-x max-width mb-10 ">
        <div className="home-cars-wrapper">
          {cars.length === 0 ? (
            <Container>Aradığınız araç bulunumadı.</Container>
          ) : (
            cars?.map((car) => <Card car={car} key={car.id} />)
          )}
        </div>
      </div>
    </>
  );
};

export default List;
