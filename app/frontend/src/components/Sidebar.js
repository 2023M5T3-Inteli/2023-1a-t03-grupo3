import { Link } from 'react-router-dom'
import { Text } from './Text'
import albertoPicture from '../assets/alberto.svg'
import { useEffect, useState } from 'react'
import globe_icon from '../assets/globe.svg'
import axios from "../axios";

export const Sidebar = () => {
    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setPage("/")
                break;
            case "/create-project":
                setPage("/create-project")
                break;
            case "/profile#projects":
                setPage("/profile#projects")
                break;
            case "/notifications":
                setPage("/notifications")
                break;
            case 'profile#favorite':
                setPage('profile#favorite')
                break;
            case "/ranking":
                setPage("/ranking")
                break;
            default:
                setPage("")
                break;
        }
    }, [])

    const [page, setPage] = useState("/")

    const [data, setData] = useState({})

    const profileInfo = async () => {
        try {
            await axios
                .get("/users/f900d5e0-ab8d-410d-8792-95a64698bb6f")
                .then(response => {
                    setData(response.data)
                    return response;
                })
                .catch((error) => {
                    return error;
                });

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        profileInfo()
    })

    return (
        <div className="flex flex-col w-1/5 bg-[#061826] p-4 text-[#f1f1f1]">
            <Link to="/profile" className='flex md:flex-col lg:flex-row w-full items-center mb-8justify-center'>
                <img alt="img" src={data.picture || albertoPicture} className="w-16 h-16 mr-4 rounded-full" />

                <div className='hidden md:block'>
                    <Text variant={"xl"}>{data.fullName ?? "Loading..."}</Text>
                    <Text variant={"md"} color={"c4c4c4"}>{data.occupation ?? "Loading..."}</Text>
                </div>
            </Link>

            <div className='flex flex-col mt-8'>
                <Link to={"/"} className={`text-xl mb-3 ${page === "/" ? "text-[#f1f1f1] font-semibold underline" : "text-[#c4c4c4] hover:underline"}`}>
                    Join a project
                </Link>

                <Link to={"/create-project"} className={`text-xl mb-3 ${page === "/create-project" ? "text-[#f1f1f1] font-semibold underline" : "text-[#c4c4c4] hover:underline"}`}>
                    Create a project
                </Link>

                <Link to={"/profile#projects"} className={`text-xl mb-3 ${page === "/profile#projects" ? "text-[#f1f1f1] font-semibold underline" : "text-[#c4c4c4] hover:underline"}`}>
                    My projects
                </Link>

                <Link to={"/notifications"} className={`text-xl mb-3 ${page === "/notifications" ? "text-[#f1f1f1] font-semibold underline" : "text-[#c4c4c4] hover:underline"}`}>
                    Notifications
                </Link>

                <Link to="/ranking" className={`text-xl mb-3 ${page === "/ranking" ? "text-[#f1f1f1] font-semibold underline" : "text-[#c4c4c4] hover:underline"}`}>
                    Ranking
                </Link>

                <Link to={"/profile#favorite"} className={`text-xl mb-3 ${page === "/profile#favorite" ? "text-[#f1f1f1] font-semibold underline" : "text-[#c4c4c4] hover:underline"}`}>
                    Favorites
                </Link>


                {/* <Link to={"/create-project"} className={`font-medium text-2xl mb-3 uppercase ${page === "/create-project" ? "text-[#f1f1f1] font-bold" : "text-[#c4c4c4] "}`}>
                    Create a project
                </Link>

                <Link to={"/profile"} className={`font-medium  text-xl mb-3 uppercase ${page === "/profile" ? "text-[#f1f1f1] font-bold" : "text-[#c4c4c4] "}`}>
                    My profile
                </Link>

                <Link to={"/notifications"} className={`font-medium text-2xl mb-3 uppercase ${page === "/notifications" ? "text-[#f1f1f1] font-bold" : "text-[#c4c4c4] "}`}>
                    Notifications
                </Link>

                <Link to="/ranking" className={`font-medium  text-xl mb-3 uppercase ${page === "/ranking" ? "text-[#f1f1f1] font-bold" : "text-[#c4c4c4] "}`}>
                    Ranking
                </Link>

                <Link to={"/profile#favorite"} className={`font-medium text-2xl mb-3 uppercase ${page === "/profile#favorite" ? "text-[#f1f1f1] font-bold" : "text-[#c4c4c4] "}`}>
                    Favorites
                </Link> */}
            </div>

            <div className='mt-auto'>
            <button className={"text-white flex flex-row"}> Idioma <img className='ml-2' alt="" src={globe_icon}></img> </button>
            </div>
        </div>
    )
}