import { Link } from 'react-router-dom'
import albertoPicture from '../assets/alberto.png'

export const Sidebar = () => {
    return (
        <div className="flex flex-col w-1/5 bg-[#061826] py-4 px-2 text-[#f1f1f1]">
            <Link to="/profile" className='flex flex-row w-full items-center justify-center mb-8'>
                <img alt="" src={albertoPicture} className="w-8 h-8 mr-4" />

                <div>
                    <p className='text-[0.75rem]'>Alberto Castilho</p>
                    <p className='text-[0.5rem]'>Web Development Manager</p>
                </div>
            </Link>

            <div className='flex flex-col'>
                <Link className='text-[#e1e1e1] mb-1 font-bold uppercase' to="/home">JOIN A PROJECT</Link>
                <Link className='text-[#e1e1e1] mb-1 font-semibold uppercase'>CREATE NEW PROJECT</Link>
                <Link className='text-[#e1e1e1] mb-1 font-semibold uppercase'>MY PROJECTS</Link>
                <Link className='text-[#e1e1e1] mb-1 font-semibold uppercase'>NOTIFICATIONS</Link>
                <Link to="/ranking" className='text-[#e1e1e1] mb-1 font-semibold uppercase'>RANKING</Link>
                <Link className='text-[#e1e1e1] mb-1 font-semibold uppercase'>FAVORITES</Link>
                <Link className='text-[#e1e1e1] font-semibold uppercase'>LANGUAGE</Link>
            </div>

            <div className='mt-auto'>
                <p>Botao idioma</p>
            </div>
        </div>
    )
}