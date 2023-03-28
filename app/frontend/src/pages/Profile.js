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

export const Profile = () => {
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const [data, setData] = useState({})

    const profileInfoUpdate = async (data) => {
        const { fullName, email, occupation, picture, linkedin, city, state, country, hardSkills, softSkills, otherSkills, score } = data;

        try {
            const res = await axios
                .put("/profile", {
                    fullName,
                    email,
                    occupation,
                    picture,
                    linkedin,
                    city,
                    state,
                    country,
                    hardSkills,
                    softSkills,
                    otherSkills,
                    score,
                })
                .then(response => {
                    toast.success("Your profile has been successfully updated! :)")

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

        const profileInfo = async () => {
            try {
                await axios
                .get("/users/eb94c26f-5c2e-4444-bfe2-b8e3ffd7bfaa")
                    .then(response => {
                        setData(response.data)
                        console.log(data)
                        return response;
                    })
                    .catch((error) => {
                        return error;
                    });

            } catch (error) {
                console.log(error);
            }
        };

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
                            <img alt="" src={data.picture || albertoPicture} className="w-52 h-52" />

                            <div className=" flex flex-col justify-center lg:text-end px-8">
                                <p className='text-[3.0rem] font-bold'>{data.fullName ?? "Loading..."}</p>

                                {inputState ? <p className='text-[2.2rem] text-[#868686]'>{data.occupation}</p> : <input placeholder="Your Dell email" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled={inputState} value={data.occupation}
                                    {...register("occupation", {
                                        required: "Role is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })} />}

                            </div>
                        </div>

                        {/* profile informations */}
                        <div className='mx-6'>
                            <div>
                                <p> Email </p>
                                <input placeholder="Your Dell email" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled={inputState} value={data.email ?? "Loading..."}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })} />
                            </div>

                            <div className="flex justify-between w-full">
                                <div className="w-[46%]">
                                    <p className="mt-6"> Linkedin </p>
                                    <input placeholder="Your linkedin profile link" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" value={data.linkedin ?? ""} disabled={inputState}
                                        {...register("linkedin")} />
                                </div>

                                <div className="w-[46%]">
                                    <p className="mt-6"> Contact </p>
                                    <input placeholder="Your contact" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled={inputState} value={data.contact ?? ""}
                                        {...register("contact")} />
                                </div>
                            </div>

                            <div className="flex justify-between w-full">
                                <div className="w-[46%]">
                                    <p className="mt-6"> City and State </p>
                                    <input placeholder="Your city/state" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled={inputState} value={data.city && data.state ? `${data.city ?? ""} / ${data.state ?? ""}` : null}
                                        {...register("city and state")} />
                                </div>

                                <div className="w-[46%]">
                                    <p className="mt-6"> Country </p>
                                    <input placeholder="Your linkedin profile link" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" disabled={inputState} value={data.country ?? ""}
                                        {...register("country")} />
                                </div>
                            </div>
                        </div>

                        {/* skills and habilities */}
                        <div className="mx-6 mt-12">
                            <Subtitle>Skills and habilities</Subtitle>
                            <div className="flex flex-col md:flex-row justify-between w-full">
                                <div className="w-full md:w-[46%]">
                                    <p className="mt-2"> Soft skills </p>
                                    <textarea placeholder="Write your soft skills (resilience, communication, team work...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled={inputState} value={data.softSkills ?? ""}
                                        {...register("softSkills")} />
                                </div>

                                <div className="w-full md:w-[46%]">
                                    <p className="mt-2"> Hard skills </p>
                                    <textarea placeholder="Write your hard skills (programming, data analysis, design...)" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled={inputState} value={data.hardSkills ?? ""}
                                        {...register("hardSkills")} />
                                </div>
                            </div>

                            <div className="w-full md:w-[46%]">
                                <p className="mt-6"> Other skills </p>
                                <textarea placeholder="Write skills that you got with with the projects" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0]" rows={4} disabled={inputState} value={data.otherSkills ?? ""}
                                    {...register("otherSkills")} />
                            </div>
                        </div>
                    </form>

                    <div className="ml-6 mt-12">
                        <EditButton onClick={toggleButton} />
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