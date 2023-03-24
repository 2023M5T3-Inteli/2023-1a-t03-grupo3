import { Link } from "react-router-dom";
import imagem_login from "../assets/login.svg";
import { useForm } from "react-hook-form";

import axios from "../axios";

export const Login = () => {
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        let token;

        try {
            const res = await axios
                .post("/auth/signin", {
                    email,
                    password,
                })
                .then(response => {
                    console.log(response.data)
                    token = response.data.token;

                    document.cookie = `token=${token}`;

                    // redirect to home page
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1000)

                    return response;
                })
                .catch((error) => {
                    return error;
                });

            const { status, data } = res;
            console.log(status, data, token)

            res.status === 201 && data.message === "Signin successful" ? console.log("Valid") : alert("Invalid credentials");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex max-h-screen">
            <div className="flex-col w-1/2 min-h-screen bg-[#d9d9d9] flex items-center justify-center">
                <div className="flex items-center w-4/5">
                    <img
                        src={imagem_login}
                        alt="imagem de capa"
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="flex flex-col w-1/2 min-h-screen bg-[#061826] text-[#061826] p-4 items-center justify-center">
                <h1 className="text-white font-bold text-6xl mt-12">
                    Dell Conect
                </h1>
                <p className="flex flex-col text-white mt-4">
                    Log into your account
                </p>

                <form
                    className="flex flex-col w-3/4 pr-2 mt-16 object-bottom "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full">
                        <label className="text-white">
                            Enter your Dell Email:
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-white rounded py-2 bg-[#f1f1f1] p-2 text-black focus:outline-none focus:border-purple-500"
                            placeholder="email@delltechnologies.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="w-full pr-2 pt-8">
                        <label className="text-white">
                            Enter your password:
                        </label>
                        <input
                            className="w-full border-2 border-white rounded py-2 bg-[#f1f1f1] p-2 text-black focus:outline-none focus:border-purple-500"
                            placeholder="***********"
                            type={"password"}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 5,
                                    message:
                                        "Password must have at least 8 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col mt-8 items-center w-full">
                        <button
                            type="submit"
                            className="bg-[#8A58DC] text-white font-bold py-2 w-full rounded"
                        >
                            Login
                        </button>

                        <div className="flex py-5 items-center w-full">
                            <div className="flex-grow border-0.5 w-64 border-gray-300 h-0.5 bg-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-300 text-sm">
                                or
                            </span>
                            <div className="flex-grow border-0.5 w-64 border-gray-300 h-0.5 bg-gray-300"></div>
                        </div>

                        <button className="bg-[#f8f8f8] text-[#454545] font-bold py-2 w-full rounded ml-10 mr-10">
                            Login with Dell SSO
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
