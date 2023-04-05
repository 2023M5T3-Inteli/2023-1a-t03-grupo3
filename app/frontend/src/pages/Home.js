import { Sidebar } from '../components/Sidebar'
import { Card } from '../components/Card'
import filter from '../assets/filter.svg'
import search from '../assets/search.svg'
import { useEffect, useState } from 'react'
import axios from '../axios'

export const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            await axios.get("/projects").then(res => {
                setData(res.data)
            }).catch(err => {
                // setData("No Projects")
                console.log(err)
            })
        }
        getProjects()
    }, [])

    return (
        <div className="bg-[#F0F0F0] flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="bg-[#F0F0F0] w-4/5 flex flex-col items-cenetr px-4 py-8">
                <div className="relative">
                    <input type="text" placeholder="Search for Projects" className="py-2 pl-5 pr- border border-gray-400 rounded-full w-full" />
                    <div className="absolute inset-y-0 right-0 flex items-center ">
                        <button><img src={filter} className="mr-2" alt='filter'></img></button>

                        <button type="button" className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-r-full "> <img src={search}></img>
                        </button>

                    </div>
                </div>

                <p className='text-[#4A92FF] mb-4 mt-4 pt-6 font-bold text-lg'>Trending Projects</p>

                <div className='flex flex-col gap-6'>
                    {data && data.length >= 1 ? data.map((item, index) => {
                        return (
                            <Card {...item} key={index} />
                        )
                    }) : <p className='text-xl text-gray-500'>Loading...</p>}
                </div>
            </div>

        </div>
    )
}
