import { Sidebar } from '../components/Sidebar'
import { Card } from '../components/Card'

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

            <div className=" w-4/5 flex flex-col space-y-4 ml-8 mr-8 mt-4"  >
            <div>
             <input class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-md text-sm focus:outline-none" type="search" name="search" placeholder="Pesquisar"/>
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