import { Link } from "react-router-dom";
import albertoPicture from "../assets/alberto.png";

export const UserRanked = ({ name, rating, index, id }) => {

  return (
    <Link to={`/user/${id}`} className="flex flex-row">
      <p className="font-montserrat font-semibold w-20 text-center m-4">
        {index + 1}°
      </p>

      <div
        className={`rounded-xl mb-3  font-montserrat shadow-md flex flex-row w-full mr-20 hover:scale-105 transition duration-300 ${
          index < 1
            ? "bg-[#EFB959]"
            : index < 2
            ? "bg-[#B8B8B8]"
            : index < 3
            ? "bg-[#D47D43]"
            : "bg-[#D9D9D9]"
        }`} 
      >
        <img src={albertoPicture} className="w-8 h-8 m-3"></img>
        <span className="m-4 tracking-wide">{name}</span>
        <span className="m-4 ml-auto mr-12">{rating}</span>
      </div>
      
    </Link>
  );
};
