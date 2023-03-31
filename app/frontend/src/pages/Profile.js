import { Sidebar } from "../components/Sidebar"
import { Title } from "../components/Title"
import albertoPicture from "../assets/alberto.svg"
import { Card } from "../components/Card"
import { EditButton } from "../components/EditButton"
import { Subtitle } from "../components/Subtitle"
import { useEffect, useState } from "react"
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "../axios";
import { useForm } from "react-hook-form"
import { SaveButton } from "../components/Savebutton"

export const Profile = () => {
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const [data, setData] = useState({})

    const profileInfo = async () => {
        try {
            await axios
                .get("/users/f900d5e0-ab8d-410d-8792-95a64698bb6f")
                .then(response => {
                    setData(response.data)
                    return response;
                })
                .catch((error) => {
                    return error;
                });

        } catch (error) {
            console.log(error);
        }
    };

    const profileInfoUpdate = async (formData) => {
        try {
            await axios
                .put("/users/update/f900d5e0-ab8d-410d-8792-95a64698bb6f", {
                    occupation: formData.occupation || data.occupation,
                    email: formData.email || data.email,
                    picture: formData.picture || data.picture,
                    linkedin: formData.linkedin || data.linkedin,
                    city: formData.city || data.city,
                    state: formData.state || data.state,
                    country: formData.country || data.country,
                    contact: formData.contact || data.contact,
                    hardSkills: formData.hardSkills || data.hardSkills,
                    softSkills: formData.softSkills || data.softSkills,
                    otherSkills: formData.otherSkills || data.otherSkills,
                })
                .then(response => {
                    toast.success("Your profile has been successfully updated! :)")

                    toggleButton(!inputState)
                    profileInfo()

                    return response;
                })
                .catch((error) => {
                    toast.error("Your profile has not been updated! Try again later :(")

                    return error;
                });

        } catch (error) {
            console.log(error);
        }
    };

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

        profileInfo();

    }, [])

    const [inputState, setInputState] = useState(true);

    const toggleButton = () => setInputState(!inputState)

    return (
        <div className="flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="w-4/5 bg-[#F0F0F0] flex flex-col items-center justify-center px-4 py-8">
                <div className="w-full mb-1">
                    <Title color={'#e2e2e2'} variant={3}>Profile</Title>
                </div>
                <div className="rounded-xl bg-white border-2 h-auto p-4 w-full flex flex-col">
                    <div className="rounded-l-xl w-40 inline-block"></div>


                    <form
                        className="w-full"
                        onSubmit={handleSubmit(profileInfoUpdate)}>


                        {/* profile picture, name and ocuppation */}
                        <div className="w-full m-4 justify-between mb-12 flex flex-col lg:flex-row">
                            <img alt="" src={data.picture || albertoPicture} className="w-52 h-52 rounded-full border-2 border-gray-700" />

                            <div className=" flex flex-col justify-center lg:text-end px-8">
                                <p className='text-[3.0rem] font-bold'>{data.fullName ?? "Loading..."}</p>

                                {
                                    inputState ? <p className='text-[2.2rem] text-[#868686]'>{data.occupation}</p> :
                                        <input
                                            placeholder={data.occupation}
                                            className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                            disabled={inputState}
                                            {...register("occupation")}
                                        />
                                }
                                {
                                    errors.occupation && (
                                        <p className="text-red-500 text-sm">{errors.occupation.message}</p>
                                    )
                                }

                            </div >
                        </div >

                        {/* profile informations */}
                        < div className='mx-6' >
                            <div>
                                <p> Email </p>
                                {
                                    inputState ? <input
                                        value={data.email}
                                        className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                        disabled={true}
                                    /> :
                                        <input
                                            placeholder={data.email}
                                            className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                            {...register("email")}
                                        />
                                }
                            </div>

                            <div className="flex justify-between w-full">
                                <div className="w-[46%]">
                                    <p className="mt-6"> Linkedin </p>
                                    {
                                        inputState ? <input
                                            value={data.linkedin}
                                            className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                            disabled={true}
                                        /> :
                                            <input
                                                placeholder={data.linkedin}
                                                className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                                {...register("linkedin")}
                                            />
                                    }
                                </div>

                                <div className="w-[46%]">
                                    <p className="mt-6"> Contact </p>
                                    {
                                        inputState ? <input
                                            value={data.contact}
                                            className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                            disabled={true}
                                        /> :
                                            <input
                                                placeholder={data.contact}
                                                className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                                {...register("contact")}
                                            />
                                    }
                                </div>
                            </div>

                            <div className="flex justify-between w-full">
                                <div className="w-[46%]">
                                    <p className="mt-6"> City and State </p>
                                    {
                                        inputState ? <input
                                            value={data.city}
                                            className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                            disabled={true}
                                        /> :
                                            <input
                                                placeholder={data.city}
                                                className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                                {...register("city")}

                                            />
                                    }
                                </div>

                                <div className="w-[46%]">
                                    <p className="mt-6"> Country </p>
                                    {
                                        inputState ? <input
                                            value={data.country}
                                            className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                            disabled={true}
                                        /> :
                                            <input
                                                placeholder={data.country}
                                                className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]"
                                                {...register("country")}
                                            />
                                    }
                                </div>
                            </div>
                        </div >

                        {/* skills and habilities */}
                        < div className="mx-6 mt-12" >
                            <Subtitle>Skills and habilities</Subtitle>
                            <div className="flex flex-col md:flex-row justify-between w-full">
                                <div className="w-full md:w-[46%]">
                                    <p className="mt-2"> Soft skills </p>
                                    {
                                        inputState ? <textarea placeholder="Write your soft skills (communication, teamwork, leadership...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} value={data.softSkills} disabled={true}
                                        /> :
                                            <textarea placeholder={data.softSkills} className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled={inputState}
                                                {...register("softSkills")}
                                            />

                                    }
                                </div>

                                <div className="w-full md:w-[46%]">
                                    <p className="mt-2"> Hard skills </p>
                                    {
                                        inputState ? <textarea placeholder="Write your hard skills (programming languages, frameworks, tools...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} value={data.hardSkills} disabled={true}
                                        /> :
                                            <textarea placeholder={data.hardSkills} className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled={inputState}
                                                {...register("hardSkills")}
                                            />

                                    }
                                </div>
                            </div>

                            <div className="w-full md:w-[46%]">
                                <p className="mt-6"> Other skills </p>
                                {
                                    inputState ? <textarea placeholder="Write your other skills (languages, hobbies, etc...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} value={data.otherSkills} disabled={true}
                                    /> :
                                        <textarea placeholder={data.otherSkills} className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled={inputState}
                                            {...register("otherSkills")}
                                        />

                                }
                            </div>
                        </div >

                        <div className="ml-6 mt-12">
                            {
                                inputState ? <EditButton onClick={toggleButton} /> : <SaveButton type="submit" />
                            }
                        </div>
                    </form >

                    {/* profile projects informations */}
                    < div className="mt-12 mx-6" id="projects" >
                        <Subtitle>Current Projects</Subtitle>

                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                        <div className="mt-4">
                            <Card title={"Lorem ipsum"} desc={"Lorem ipsum solor dolor amet"} />
                        </div>
                    </div >

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

                </div >

            </div >
        </div >
    )
}