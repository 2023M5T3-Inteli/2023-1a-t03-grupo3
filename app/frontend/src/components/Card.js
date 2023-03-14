import { Link } from 'react-router-dom'
import project from "../assets/project.svg"
import { Title } from "./Title"
import { Text } from './Text'

export const Card = ({ title, desc }) => {
    return (
        <Link className="rounded-xl bg-white w-full hover:scale-[1.01] transition duration-200 shadow-lg flex items-center" to="/Project">
            <img class="h-auto rounded-l-xl mr-4" alt="project" src={project} />

            <div className='h-full p-2'>
                <Title variant={6} color='e2e2e2'>{title}</Title>
                <Text variant={"sm"} color={"e2e2e2"}>{desc}</Text>
            </div>
        </Link>
    )
}

