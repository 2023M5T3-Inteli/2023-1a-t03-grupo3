import { Link } from 'react-router-dom'
import { Text } from './Text'
import albertoPicture from '../assets/alberto.png'

export const Sidebar = () => {
    return (
        <div className="flex flex-col w-1/5 bg-[#061826] p-4 text-[#f1f1f1]">
            <Link to="/profile" className='flex md:flex-col lg:flex-row w-full items-center mb-8'>
                <img alt="" src={albertoPicture} className="w-10 h-10 mr-4" />

                <div className='hidden md:block'>
                    <Text variant={"lg"}>Alberto Castilho</Text>
                    <Text variant={"sm"} color={"c4c4c4"}>Web Development Manager</Text>
                </div>
            </Link>

            <div className='flex flex-col'>
                <Link to={"/"} className='text-[#e1e1e1] mb-3 font-bold uppercase'>Join a project</Link>
                <Link to={"/createproject"} className='text-[#e1e1e1] mb-3 font-semibold uppercase'>CREATE NEW PROJECT</Link>
                <Link to={"/profile#projects"} className='text-[#e1e1e1] mb-3 font-semibold uppercase'>MY PROJECTS</Link>
                <Link to={"/notifications"} className='text-[#e1e1e1] mb-3 font-semibold uppercase'>NOTIFICATIONS</Link>
                <Link to="/ranking" className='text-[#e1e1e1] mb-3 font-semibold uppercase'>RANKING</Link>
                <Link to={"/profile#favorite"} className='text-[#e1e1e1] mb-3 font-semibold uppercase'>FAVORITES</Link>
                {/* <Link className='text-[#e1e1e1] font-semibold uppercase'>LANGUAGE</Link> */}
            </div>

            <div className='mt-auto'>
                <p>Botao idioma</p>
            </div>
        </div>
    )
}