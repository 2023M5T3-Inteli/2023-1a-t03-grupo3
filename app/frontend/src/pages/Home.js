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
        <div className="flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="w-4/5 border-2 border-yellow-400 flex flex-col">
                <p>conteudo</p>
                {cards.map(item => {
                    return (
                        <Card title={item.title} desc={item.desc} />
                    )
                })}
            </div>
        </div>
    )
}