import { Sidebar } from '../components/Sidebar'
import { Card } from '../components/Card'

export const Home = () => {
    const cards = [
        {
            title: "abc", desc: "qwrqewer"
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
        }, {
            title: "abc", desc: "qwrqewer"
        },
    ]

    return (
        <div className="flex min-h-screen max-w-screen w-full h-full border-red-400">
            <Sidebar />

            <div className="bg-[#E1E1E1] w-4/5 border-2 flex flex-col space-y-4 ml-8 mr-8 mt-4"  >
            <input type="text" placeholder="Search for Projects" class="bg-white-200 rounded-full py-2 px-4 text-gray-700 focus:outline-none"/>

            <p className='text-[#4A92FF] mb-2 pt-6 font-bold text-lg'>Trending Projects</p>
                {cards.map(item => {
                    return (
                        <Card title={item.title} desc={item.desc} />
                    )
                })}
            </div>
        </div>
    )
}