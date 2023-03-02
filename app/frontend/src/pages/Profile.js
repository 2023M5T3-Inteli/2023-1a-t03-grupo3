import { Sidebar } from "../components/Sidebar"
import { Title } from "../components/Title"
import albertoPicture from "../assets/alberto.svg"
import { Card } from "../components/Card"
import { EditButton } from "../components/EditButton"
import { Subtitle } from "../components/Subtitle"

export const Profile = () => {
    return (
        <div className="flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="w-4/5 bg-[#F0F0F0]">

                <div className="rounded-xl bg-white border-2 w-auto h-auto m-4 p-4">
                    <div className="rounded-l-xl w-40 inline-block"></div>

                    <Title>My profile</Title>

                    {/* profile picture, name and ocuppation */}
                    <div className="flex flex-row w-full m-4 justify-between mb-12">
                        <img alt="" src={albertoPicture} className="w-52 h-52" />

                        <div className=" flex flex-col justify-center items-end text-end px-8">
                            <p className='text-[3.0rem] font-bold'>Alberto Castilho</p>
                            <p className='text-[2.2rem] text-[#868686]'>Web Development Manager</p>

                        </div>
                    </div>

                    {/* profile informations */}
                    <div className='mx-6'>
                        <div>
                            <p> Email </p>
                            <input placeholder="alberto@delltechnologies.com" className="rounded-xl bg-[#F0F0F0] border-2 w-full h-full py-2 px-3" />
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="w-[46%]">
                                <p className="mt-6"> Linkedin </p>
                                <input placeholder="https://linkedin.com/in/alberto-castilho/" className="rounded-xl bg-[#F0F0F0] border-2 w-full py-2 px-3" />
                            </div>

                            <div className="w-[46%]">
                                <p className="mt-6"> Contact </p>
                                <input placeholder="+1-202-555-0181" className="rounded-xl bg-[#F0F0F0] border-2 w-full py-2 px-3" />
                            </div>
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="w-[46%]">
                                <p className="mt-6"> City and State </p>
                                <input placeholder="San Francisco, California" className="rounded-xl bg-[#F0F0F0] border-2 w-full py-2 px-3" />
                            </div>

                            <div className="w-[46%]">
                                <p className="mt-6"> Country </p>
                                <input placeholder="United States" className="rounded-xl bg-[#F0F0F0] border-2 w-full py-2 px-3" />
                            </div>
                        </div>
                    </div>

                    {/* skills and habilities */}
                    <div className="mx-6 mt-12">
                        <Subtitle>Skills and habilities</Subtitle>
                        <div className="flex justify-between w-full">
                            <div className="w-[46%]">
                                <p className="mt-2"> Soft skills </p>
                                <input placeholder="Write your soft skills (resilience, communication, team work...)" className="rounded-xl bg-[#F0F0F0] border-2 w-full h-24 py-2 px-3" />
                            </div>

                            <div className="w-[46%]">
                                <p className="mt-2"> Hard skills </p>
                                <input placeholder="Write your hard skills (programming, data analysis, design...)" className="rounded-xl bg-[#F0F0F0] border-2 w-full h-24 py- px-3" />
                            </div>
                        </div>

                        <div className="w-[46%]">
                            <p className="mt-6"> Other skills </p>
                            <input placeholder="Write skills that you got with with the projects" className="rounded-xl bg-[#F0F0F0] border-2 w-full h-24 py-2 px-3" />
                        </div>
                        
                    </div>

                    <div className="ml-6 mt-12">
                        <EditButton />
                    </div>

                    {/* profile projects informations */}
                    <div className="mt-12 mx-6">
                        <Subtitle>Current Projects</Subtitle>
                        <Card />
                        <Card />
                    </div>

                    <div className="mt-12 mx-6">
                        <Subtitle>Projects completed</Subtitle>
                        <Card />
                    </div>

                    <div className="mt-12 mx-6">
                        <Subtitle>Favorites</Subtitle>
                        <Card />
                        <Card />
                    </div>

                </div>
                
            </div>
        </div>
    )
}