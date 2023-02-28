export const Card = ({ title, desc }) => {
    return (
        <div className="rounded-xl bg-white border-2 w-full">
            <div class="flex items-center">
                <div class="rounded-l-xl w-40 h-20 bg-purple-500 inline-block mr-2"></div>
                <div>
                    <p class="text-base block">{title}</p>
                    <p class="block">{desc}</p>
                </div>
            </div>
        </div>
    )
}

