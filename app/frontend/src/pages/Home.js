import { Sidebar } from '../components/Sidebar'
import { Card } from '../components/Card'
import filter from '../assets/filter.svg'
import search from '../assets/search.svg'


export const Home = () => {
    const cards = [
        {
            title: "abc", desc: "qwrqewer"
        }, {
            title: "abb", desc: "qwrqewer"
        }, {
            title: "abc", desc: "qwrqewer"
        }, {
            title: "abc", desc: "qwrqewer"
        }, {
            title: "abc", desc: "qwrqewer"
        }, {
            title: "abc", desc: "qwrqewer"
        }, {
            title: "abc", desc: "qwrqewer"
        },
    ]

    return (
        <div className="bg-[#E1E1E1] flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="bg-[#E1E1E1] w-4/5 flex flex-col space-y-4 ml-8 mr-8 mt-4"  >
                    <div class="relative">
                        <input type="text" placeholder="Search for Projects" class="py-2 pl-5 pr- border border-gray-400 rounded-full w-full" />
                        <div class="absolute inset-y-0 right-0 flex items-center ">
                            <button onclick="openModal()"><img src={filter} className="mr-2"></img></button>

                            <button type="button" class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-r-full "> <img src={search}></img>
                            </button>

                        </div>

                    </div>





                    <p className='text-[#4A92FF] mb-2 pt-6 font-bold text-lg'>Trending Projects</p>

                    {cards.map(item => {
                        return (
                            <Card title={item.title} desc={item.desc}
                            />

                        )
                    })}
                </div>
           
        </div>
    )
}
