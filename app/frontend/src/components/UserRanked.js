import { useEffect } from "react";
import { Link } from "react-router-dom";
import albertoPicture from "../assets/alberto.png";
import { User } from "../assets/user";

export const UserRanked = ({ fullName, score, index, id }) => {

  return (
    <Link to={`/profile/${id}`} className="flex flex-row">
      <p className="font-montserrat font-semibold text-center m-4">
        {index + 1}°
      </p>

      <div
        className={`rounded-xl mb-3 font-montserrat shadow-md flex flex-row items-center justify-center px-4 w-full hover:scale-105 transition duration-300 ${index < 1
          ? "bg-[#EFB959]"
          : index < 2
            ? "bg-[#B8B8B8]"
            : index < 3
              ? "bg-[#D47D43]"
              : "bg-[#D9D9D9]"
          }`}
      >
        {picture ? <img src={picture} className="w-8 h-8 m-3"></img> : <User width={32} color={"rgba(0,0,0,0.7)"} />}
        <span className="m-4 tracking-wide">{fullName}</span>
        <span className="m-4 ml-auto mr-12">{score}</span>
      </div>

    </Link>
  );
};
