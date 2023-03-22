import { Sidebar } from "../components/Sidebar"
import { Title } from "../components/Title"
import albertoPicture from "../assets/alberto.svg"
import { Card } from "../components/Card"
import { EditButton } from "../components/EditButton"
import { Subtitle } from "../components/Subtitle"
import { useEffect } from "react"

export const Profile = () => {
    useEffect(() => {
        const isProjects = window.location.href.includes("#projects")
        const isFavorite = window.location.href.includes("#favorite")

        if (isProjects) {
            const projects = document.getElementById("projects")
            projects.scrollIntoView({ behavior: "smooth" })
        }

        if (isFavorite) {
            const favorite = document.getElementById("favorite")
            favorite.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    return (
        <div className="flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="w-4/5 bg-[#F0F0F0] flex flex-col items-center justify-center px-4 py-8">
                <div className="w-full mb-1">
                    <Title color={'#e2e2e2'} variant={3}>Profile</Title>
                </div>
                <div className="rounded-xl bg-white border-2 h-auto p-4 w-full flex flex-col">
                    <div className="rounded-l-xl w-40 inline-block"></div>


                    {/* profile picture, name and ocuppation */}
                    <div className="w-full m-4 justify-between mb-12 flex flex-col lg:flex-row">
                        <img alt="" src={albertoPicture} className="w-52 h-52" />

                        <div className=" flex flex-col justify-center lg:text-end px-8">
                            <p className='text-[3.0rem] font-bold'>Alberto Castilho</p>
                            <p className='text-[2.2rem] text-[#868686]'>Web Development Manager</p>

                        </div>
                    </div>

                    {/* profile informations */}
                    <div className='mx-6'>
                        <div>
                            <p> Email </p>
                            <input placeholder="Your Dell email" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled value={"alberto.castilho@dell.com"} />
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="w-[46%]">
                                <p className="mt-6"> Linkedin </p>
                                <input placeholder="Your linkedin profile link" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" value={"https://linkedin.com/in/alberto-castilho/"} disabled />
                            </div>

                            <div className="w-[46%]">
                                <p className="mt-6"> Contact </p>
                                <input placeholder="Your contact" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled value={"+1 555 555 555"} />
                            </div>
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="w-[46%]">
                                <p className="mt-6"> City and State </p>
                                <input placeholder="Your city/state" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled value={"San Francisco / CA"} />
                            </div>

                            <div className="w-[46%]">
                                <p className="mt-6"> Country </p>
                                <input placeholder="Your linkedin profile link" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled value={"United States"} />
                            </div>
                        </div>
                    </div>

                    {/* skills and habilities */}
                    <div className="mx-6 mt-12">
                        <Subtitle>Skills and habilities</Subtitle>
                        <div className="flex flex-col md:flex-row justify-between w-full">
                            <div className="w-full md:w-[46%]">
                                <p className="mt-2"> Soft skills </p>
                                <textarea placeholder="Write your soft skills (resilience, communication, team work...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled />
                            </div>

                            <div className="w-full md:w-[46%]">
                                <p className="mt-2"> Hard skills </p>
                                <textarea placeholder="Write your hard skills (programming, data analysis, design...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled />
                            </div>
                        </div>

                        <div className="w-full md:w-[46%]">
                            <p className="mt-6"> Other skills </p>
                            <textarea placeholder="Write skills that you got with with the projects" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled />
                        </div>

                    </div>

                    <div className="ml-6 mt-12">
                        <EditButton />
                    </div>

                    {/* profile projects informations */}
                    <div className="mt-12 mx-6" id="projects">
                        <Subtitle>Current Projects</Subtitle>

                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                    </div>

                    <div className="mt-12 mx-6">
                        <Subtitle>Projects completed</Subtitle>

                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                    </div>

                    <div className="mt-12 mx-6" id="favorite">
                        <Subtitle id="favorite">Favorites</Subtitle>

                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}