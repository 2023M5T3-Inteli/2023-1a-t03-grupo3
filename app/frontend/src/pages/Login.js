import { Link } from 'react-router-dom'
import imagem_login from '../assets/login.svg'

export const Login = () => {
    return (
        <div class="flex max-h-screen">

            <div class="flex-col w-1/2 min-h-screen bg-[#d9d9d9] flex items-center justify-center">
                <div class="flex items-center w-4/5">
                    <img src={imagem_login} alt="imagem de capa" className="w-full h-full" />
                </div>
            </div>

            <div class="flex flex-col w-1/2 min-h-screen bg-[#061826] text-[#061826] p-4 items-center justify-center">
                <h1 class="text-white font-bold text-6xl mt-12">Dell Conect</h1>
                <p class="flex flex-col text-white mt-4" >Log into your account</p>

                <div class="flex flex-col w-3/4 pr-2 mt-16 object-bottom ">
                    <label class="text-white">Enter your Dell Email:</label>
                    <input type="text" class="w-full border-2 border-white rounded py-2 bg-[#f1f1f1] p-2 text-black focus:outline-none focus:border-purple-500" placeholder="email@delltechnologies.com"></input>
                </div>

                <div class="w-3/4 pr-2 pt-8">
                    <label class="text-white">Enter your password:</label>
                    <input class="w-full border-2 border-white rounded py-2 bg-[#f1f1f1] p-2 text-black focus:outline-none focus:border-purple-500" placeholder="***********" type={"password"}></input>
                </div>

                <div class="flex flex-col mt-8 items-center w-3/4">
                    <Link to={"/"} class="bg-[#8A58DC] text-white font-bold py-2 w-full rounded">Login</Link>

                    <div class="flex py-5 items-center w-full">
                        <div class="flex-grow border-0.5 w-64 border-gray-300 h-0.5 bg-gray-300"></div>
                        <span class="flex-shrink mx-4 text-gray-300 text-sm">or</span>
                        <div class="flex-grow border-0.5 w-64 border-gray-300 h-0.5 bg-gray-300"></div>
                    </div>

                    <button class="bg-[#f8f8f8] text-[#454545] font-bold py-2 w-full rounded ml-10 mr-10">Login with Dell SSO</button>
                </div>
            </div>
        </div>
    )
}