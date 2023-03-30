import { useEffect, useState } from "react";

import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { DeleteButton } from "../components/Deletebutton";
import { EditButton } from "../components/EditButton"

import { Calendar } from "../assets/calendar.jsx";
import { Book } from "../assets/book.jsx";
import { Users } from "../assets/users.jsx";
import { Arrow } from "../assets/arrow";

import send from "../assets/send.svg"
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Project = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const params = useParams();

    const [isOwner] = useState(true);

    const [project, setProject] = useState({
        category: "",
        createdAt: "",
        description: "",
        endDate: "",
        id: "",
        questions: [],
        startDate: "",
        status: "",
        tags: [],
        title: "",
    })

    useEffect(() => {
        let { id } = params;

        const getProject = async (id) => {
            await axios.get(`/projects/${id}`)
                .then(res => {
                    setProject(res.data)
                    console.log(res.data
                    )
                }).catch(err => {
                    console.log(err)
                    window.location.href = "/"
                })
        }

        getProject(id)
    }, []);

    const onSubmit = data => console.log(data)

    const deleteProject = async () => {
        await toast.promise(
            axios.delete(`/projects/delete/${project.id}`).then(res => {
                setTimeout(() => {
                    window.location.href = "/"
                }, 1750)
            }).catch(err => {
                console.log(err)
            }),
            {
                loading: "Deleting Project",
                success: "Project Deleted",
                error: "Error Deleting Project"
            }
        )
    }


    const [canEdit, setCanEdit] = useState(false);

    return isOwner ? (
        <form className="w-full min-h-screen h-full p-0 flex flex-col items-center pb-16" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-[#061826] w-full px-8 md:px-16 py-8 md:py-16 flex flex-col md:flex-row justify-center items-center md:justify-between">
                <Link to={"/"} className="absolute text-white top-0 left-0 ml-4 md:ml-8 mt-4 md:mt-8 rotate-90">
                    <Arrow color={"white"} width={36} />
                </Link>

                <div className="text-center w-full md:w-3/5">
                    <div className="mb-4">
                        {canEdit ? <input
                            className="bg-transparent text-white text-3xl font-semibold w-full text-center"
                            type="text"
                            placeholder={project.title}
                            {...register("title")}
                        />
                            : <Title variant={2}>{project.title ?? "Loading..."}</Title>}
                    </div>

                    {canEdit ? <textarea
                        className="bg-transparent text-white text-xl font-medium w-full text-center rounded-lg"
                        type="text"
                        placeholder={project.description}
                        rows={10}
                        {...register("description")}
                    /> : <Text color="f1f1f1" variant={"lg"}>{project.description ?? "Loading..."}</Text>}
                </div>

                <div className="bg-[#8A58DC] px-4 py-4 md:py-8 rounded-2xl shadow-lg md:absolute w-full md:w-1/4 flex flex-col justify-center md:right-0 mt-4 md:mr-16 md:top-0 md:mt-16">
                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-center">
                            <Title color={"#e2e2e2"} variant={3}>Project Status</Title>
                            <p className={`text-xl font-medium text-center ${project.status === "pending" ? "text-yellow-500" : project.status === "completed" ? "text-green-500" : "text-black"
                                }`}>{project.status ?? "Loading..."}</p>


                            {project.status === "pending" ? <p className="text-3xl mt-4 font-medium text-center">Open for applications!</p> : null}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Calendar width={32} />
                        <p className="ml-2 font-medium text-2xl flex mt-4 mb-5 md:my-16">
                            {
                                // subtract the dates to get the number of days
                                Math.floor(
                                    (new Date(project.endDate) - new Date(project.startDate)) / (1000 * 60 * 60 * 24)
                                )
                                ?? "Loading..."
                            } days
                        </p>
                    </div>

                    <div className="flex items-center">
                        <Book width={32} />
                        <p className="ml-2 font-medium text-2xl flex">
                            {project.category}
                        </p>
                    </div>

                    {project && project.tags ? (<div className="flex flex-col mt-4">
                        <Title color="#e2e2e2" variant={6}>Tags:</Title>
                        <div className="flex flex-wrap">
                            {project.tags.length > 0 && project.tags.map((tag, index) => {
                                return (
                                    <p className="bg-[#2e2e2e] text-white p-2 rounded-xl mr-2 mt-2" key={index}>
                                        {tag}
                                    </p>
                                )
                            })}
                        </div>
                    </div>) : null}
                </div>
            </div>

            <div className="w-full p-4 md:px-16 py-8 md:py-16 flex flex-col justify-between">
                {canEdit ? null : <div className="text-center w-full md:w-3/5">
                    <Text color="061826" variant={"xl"} bold>
                        {project.description ?? "Loading..."}
                    </Text>
                </div>}

                <div className="w-full md:w-3/5 flex flex-col px-4 mt-16">
                    <EditButton onClick={() => setCanEdit(!canEdit)} />
                    <DeleteButton onClick={deleteProject} />
                </div>
            </div>
        </form>
    ) : (
        <div className="w-full min-h-screen h-full p-0 flex flex-col items-center pb-16">
            <div className="bg-[#061826] w-full px-8 md:px-16 py-8 md:py-16 flex flex-col md:flex-row justify-center items-center md:justify-between">
                <Link to={"/"} className="absolute text-white top-0 left-0 ml-4 md:ml-8 mt-4 md:mt-8 rotate-90">
                    <Arrow color={"white"} width={36} />
                </Link>

                <div className="text-center w-full md:w-3/5">
                    <div className="mb-4">
                        <Title>{project.title ?? "Loading..."}</Title>
                    </div>

                    <Text color="f1f1f1" variant={"lg"}>{project.description ?? "Loading..."}</Text>
                </div>

                <div className="bg-[#8A58DC] px-4 py-4 md:py-8 rounded-2xl shadow-lg md:absolute w-full md:w-1/4 flex flex-col justify-center md:right-0 mt-4 md:mr-16 md:top-0 md:mt-16">
                    <div className="flex flex-col items-center">
                        <div className="mb-4 text-center">
                            <Title color={"#e2e2e2"} variant={3}>Project Status</Title>
                            <p className={`text-xl font-medium text-center ${project.status == "pending" ? "text-yellow-500" : project.status == "completed" ? "text-green-500" : "text-black"
                                }`}>{project.status ?? "Loading..."}</p>

                            {project.status === "pending" ? <p className="text-3xl mt-4 font-medium text-center">Open for applications!</p> : null}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Calendar width={32} />
                        <p className="ml-2 font-medium text-2xl flex mt-4 mb-5 md:my-16">
                            {
                                Math.floor(
                                    (new Date(project.endDate) - new Date(project.startDate)) / (1000 * 60 * 60 * 24)
                                )
                                ?? "Loading..."
                            } days
                        </p>
                    </div>

                    <div className="flex items-center">
                        <Book width={32} />
                        <p className="ml-2 font-medium text-2xl flex">
                            {project.category}
                        </p>
                    </div>

                    {project && project.tags ? (<div className="flex flex-col mt-4">
                        <Title color="#e2e2e2" variant={6}>Tags:</Title>
                        <div className="flex flex-wrap">
                            {project.tags.length > 0 && project.tags.map((tag, index) => {
                                return (
                                    <p className="bg-[#2e2e2e] text-white p-2 rounded-xl mr-2 mt-2" key={index}>
                                        {tag}
                                    </p>
                                )
                            })}
                        </div>
                    </div>) : null}

                    <div className="mt-8 md:mt-16 flex justify-center">
                        <button className="bg-[#061826] text-[#4A92FF] flex py-4 px-8 rounded-full font-semibold text-xl items-center" onClick={() => {
                            // scroll down to the application questions
                            window.scrollTo({
                                top: document.body.scrollHeight,
                                behavior: 'smooth'
                            })
                        }}>
                            <p className="mr-2">Apply</p><Arrow />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full p-4 md:px-16 py-8 md:py-16 flex justify-between">
                <div className="text-center w-full md:w-3/5">
                    <Text color="061826" variant={"xl"} bold>
                        {project.description ?? "Loading..."}
                    </Text>
                </div>
            </div>

            {/* Application questions */}
            <div className="w-full px-4 md:px-16 py-2 mt-8 md:w-full">
                <Title color="#e2e2e2" variant={2}>Application questions</Title>

                {/* Question */}
                <div className="w-full">
                    {project.questions.length > 0 && project.questions.map((question, index) => {
                        return (
                            <div className="mt-4" key={index}>
                                <Text variant={"lg"} color="e2e2e2" bold>{question}</Text>
                                <input className="block w-full text-sm border border-gray-200 rounded-lg cursor-pointer shadow-md bg-whitex focus:outline-none dark:placeholder-gray-400 p-2" type="text" placeholder="Your answer..." />
                            </div>
                        )
                    })}
                </div>

                <div className="mt-4">
                    <Text variant={"lg"} color="e2e2e2" bold>Attachments</Text>
                    <input className="block w-full text-sm border border-gray-200 rounded-lg cursor-pointer shadow-md bg-whitex focus:outline-none dark:placeholder-gray-400 p-2" id="multiple_files" type="file" multiple />
                </div>

                <div className="mt-4">
                    <Text variant={"lg"} color={"e2e2e2"} bold>
                        Would you like to receive a performance report at the end of the project?
                    </Text>
                    {/* create a checkbox for yes or no */}

                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded-full" />
                        <Text variant={"lg"} color={"e2e2e2"} bold>
                            Yes
                        </Text>

                        <input type="checkbox" className="mr-2 ml-4" />
                        <Text variant={"lg"} color={"e2e2e2"} bold>
                            No
                        </Text>
                    </div>

                    <div className="mt-4 flex">
                        <input type="checkbox" className="mr-2 rounded-full" />

                        <div className="flex flex-col">
                            <p className="font-semibold text-lg">Apply as shadow?</p>
                            <p className="text-gray-500">When you apply as Shadow, you will be able to follow the project and see the progress of the team.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="flex rounded-full p-4 justify-center items-center bg-[#061826] text-[#4A92FF]">
                        <img className="mr-2" src={send} width={24} alt="send" />
                        <Text variant={"lg"} color={"e2e2e2"} bold>
                            Submit application
                        </Text>
                    </button>
                </div>
            </div>
        </div>
    )
};
