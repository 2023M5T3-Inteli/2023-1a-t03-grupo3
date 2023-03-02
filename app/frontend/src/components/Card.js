export const Card = ({ title, desc }) => {
    return (
        <div className="rounded-xl bg-white border-2 w-full mb-3.5">
            <div class="flex items-center">
            <div class="rounded-l-xl w-40 h-24 bg-purple-500 inline-block mr-2"></div>
                <div>
                    <p class="text-base block">{title}</p>
                    <p class="block">{desc}</p>
                </div>
            </div>
        </div>
    )
}

