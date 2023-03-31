import { Link } from 'react-router-dom'
import { Text } from './Text'
import albertoPicture from '../assets/alberto.svg'
import { useEffect, useState } from 'react'

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

    return (
        <div className="flex flex-col w-1/5 bg-[#061826] p-4 text-[#f1f1f1]">
            <Link to="/profile" className='flex md:flex-col lg:flex-row w-full items-center mb-8justify-center'>
                <img alt="img" src={albertoPicture} className="w-16 h-16 mr-4" />

                <div className='hidden md:block'>
                    <Text variant={"xl"}>Alberto Castilho</Text>
                    <Text variant={"md"} color={"c4c4c4"}>Web Development Manager</Text>
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
                <p>Botao idioma</p>
            </div>
        </div>
    )
}