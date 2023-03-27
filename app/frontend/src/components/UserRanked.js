import { useEffect } from "react";
import { Link } from "react-router-dom";
import picture from "../assets/alberto.svg";
import { User } from "../assets/user";

export const UserRanked = ({ picture,fullName, score, index, id }) => {

  return (
    <Link to={`/profile/${id}`} className="flex flex-row items-center">
      <p className="font-montserrat font-semibold text-lg text-center m-4">
        {index + 1}°
      </p>

      <div
        className={`rounded-xl mb-3 font-montserrat shadow-md flex flex-row items-center justify-center px-4 py-2 w-full transition duration-300 ${index < 1
          ? "bg-[#EFB959]"
          : index < 2
            ? "bg-[#B8B8B8]"
            : index < 3
              ? "bg-[#D47D43]"
              : "bg-[#D9D9D9]"
          }`}
      >
        {picture ? <img src={picture} alt="picture" className="w-10 h-10 m-3"></img> : <User width={32} color={"rgba(0,0,0,0.7)"} />}
        <p className="m-4 tracking-wide text-xl">{fullName}</p>
        <p className="m-4 ml-auto mr-12 text-xl">{score}</p>
      </div>

    </Link>
  );
};
