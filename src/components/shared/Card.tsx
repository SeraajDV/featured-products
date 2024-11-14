import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { cn } from "../../utils/cn";
import Modal from "../ui/Modal";

type CardProps = {
  image: string;
  name: string;
  category: string;
  previousPrice: string;
  currentPrice: string;
  colors: string[];
  rating: number;
};

export default function Card({
  image,
  name,
  category,
  previousPrice,
  currentPrice,
  colors,
}: CardProps) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <div>
        <img src={image} alt={name} className="object-fit w-[200px]" />
        <h2 onClick={() => setModal(true)} className="cursor-pointer font-bold">
          {name}
        </h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm font-bold">
          <span className="text-gray-500 line-through">{previousPrice} </span>
          {currentPrice}
        </p>
        {colors ? (
          <div className="mt-3 flex gap-1">
            {colors.map((color, i) => (
              <div key={i} className={cn("h-4 w-4 rounded-full", color)}></div>
            ))}
          </div>
        ) : null}
        <div className="mt-2 flex">
          {[...Array(5)].map((_, i) => (
            <AiOutlineStar key={i} className={cn("text-black")} />
          ))}
        </div>
      </div>
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <div className="flex gap-3 p-3">
          <img src={image} alt={name} className="object-fit w-[200px]" />
          <div>
            <h2 className="font-bold">{name}</h2>
            <p className="text-sm text-gray-500">{category}</p>
            <p className="text-sm font-bold">
              <span className="text-gray-500 line-through">
                {previousPrice}{" "}
              </span>
              {currentPrice}
            </p>
            {colors ? (
              <div className="mt-3 flex gap-1">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className={cn("h-4 w-4 rounded-full", color)}
                  ></div>
                ))}
              </div>
            ) : null}
            <div className="mt-2 flex">
              {[...Array(5)].map((_, i) => (
                <AiOutlineStar key={i} className={cn("text-black")} />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
