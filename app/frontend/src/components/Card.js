import { Link } from 'react-router-dom'
export const Card = ({ title, desc }) => {
    return (

        <Link className="rounded-xl bg-white w-full hover:shadow-lg" to="/Project">
            <div class="flex items-center">
                <div class="rounded-l-xl w-40 h-20 bg-purple-500 inline-block mr-2"></div>
                <div>

                    <p class="text-base block">{title}</p>
                    <p class="block">{desc}</p>
                </div>
            </div>
        </Link>
    )
}

