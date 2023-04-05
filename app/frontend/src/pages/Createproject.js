import { Sidebar } from '../components/Sidebar'
import { Title } from '../components/Title'
import { Card } from '../components/Card';
import { Link } from "react-router-dom";
import axios from "../axios";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const Createproject = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const {
            title, description, quantity, question, role, category
        } = data

        const tags =
            data.tags.split(",").map((tag) => tag.trim())
            || [];

        const startDate = new Date(data.startDate).toISOString();
        const endDate = new Date(data.endDate).toISOString();


        await toast.promise(
            axios.post("/projects/create", {
                title, description, roles: [
                    { role: role, amount: quantity, applied: 0 }
                ], tags, questions: [
                    question
                ], startDate, endDate, category,
                userId: "f900d5e0-ab8d-410d-8792-95a64698bb6f"
            })
                .then(response => {
                    setTimeout(() => {
                        window.location = "/"
                    }, 3000)

                    return response;
                })
                .catch((error) => {
                    return error;
                }),
            {
                loading: "Creating project...",
                success: "Project created!",
                error: "Error creating project."
            })
    };

    return (
        <div className="h-full flex flex-col bg-[#FFFFFF] rounded-lg shadow-lg w-full">
            <div className="flex col min-h-screen max-w-screen w-full h-full">
                <Sidebar />

                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F0F0F0] w-4/5 flex flex-col justify-center items-center px-4 py-8">
                    <div className='w-full mb-1'>
                        <Title variant={3} color={"e2e2e2"}>Create new project</Title>
                    </div>

                    <div className="h-full ml-8 mr-8 flex flex-col bg-[#FFFFFF] rounded-lg pt-5 pb-5 pl-5 pr-5 shadow-lg w-full">
                        <div className="flex flex-col">
                            <p>Title</p>
                            <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Write the title of the project you are proposing" {
                                ...register("title", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 3,
                                        message: "Min length is 3",
                                    }
                                })
                            } />

                            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                        </div>

                        <div className="mt-5 flex flex-col">
                            <p>Description</p>
                            <textarea rows={8} type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Write the description of the project you are proposing" {
                                ...register("description", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 8,
                                        message: "Min length is 8",
                                    }
                                })
                            } />

                            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                        </div>
                        <div className="mt-5 flex flex-col">
                            <p className="mb-2">Duration</p>
                            <div className="flex flex-row items-center w-full">
                                <div className="flex-column w-1/2">
                                    <p>Start date</p>
                                    <input className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] mr-1" placeholder="Select the project beginning date" type="date" {
                                        ...register("startDate", {
                                            required: "This field is required",
                                        })
                                    } />

                                    {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
                                </div>

                                <div className="flex-column w-1/2">
                                    <p>End date</p>
                                    <input className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] ml-1" placeholder="Select the project ending date" type="date" {
                                        ...register("endDate", {
                                            required: "This field is required",
                                        })
                                    } />

                                    {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex flex-row">
                            <div className="flex flex-col w-full mr-1">
                                <p>Category</p>
                                <input type="text" className="rounded-xl  bg-white  border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="What category is your project included?" {...register("category", {
                                    required: "This field is required",
                                })} />

                                {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                            </div>
                            <div className="flex flex-col w-full ml-1">
                                <p>Attachments</p>
                                <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Attach files related to your project" {...register("attachments")} />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <p className="text-lg mb-6">Members</p>
                            <p>-Select the quantity of members per function</p>
                        </div>
                        <div className="mt-5 flex flex-row">
                            <div className="flex flex-col w-full mr-1">
                                <p>Quantity</p>
                                <input type="number" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Number of members" {...register("quantity", {
                                    required: "This field is required",
                                })} />
                            </div>
                            <div className="flex flex-col w-full ml-1">
                                <p>Role</p>
                                <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Role" {...register("role", {
                                    required: "This field is required",
                                })} />
                            </div>
                        </div>
                        <button className="rounded-full py-3 px-6 border-2 border-black-400 mt-5 pl-1 pr-1 pt-1 pb-1 w-1/5 shadow-lg">+ Add more members</button>
                        <div className="mt-5 flex flex-col">
                            <p>Tags</p>
                            <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Ex: python, communication, finance" {...register("tags", {
                                required: "This field is required",
                            })} />
                        </div>
                        <div className="mt-5 flex flex-col text-lg mb-6">
                            <p>Create questions for people to apply for your project</p>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <p>Question</p>
                            <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Ex.: Have you ever worked with Python?" {...register("question", {
                                required: "This field is required",
                            })} />

                            {errors.question && <p className="text-red-500">{errors.question.message}</p>}
                        </div>
                        <button className="rounded-full py-3 px-6 border-2 border-black-400 mt-5 pl-1 pr-1 pt-1 pb-1 w-1/5 shadow-lg mb-7">+ Add question</button>
                        <div className="flex flex-col items-center">
                            <button type="submit" className="py-3 px-6 border-2 border-black-400 font-medium mt-5 p-2 rounded-full w-1/5 shadow-lg text-[#4A92FF] bg-[#061826] hover:border-blue-400">Send to approval</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}