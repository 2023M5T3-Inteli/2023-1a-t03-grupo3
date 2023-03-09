import imagem_login from '../assets/login.svg'


export const Login = () => {
    return (
        <div class="flex">
		    
            <div class="flex-col w-1/2 min-h-screen bg-[#d9d9d9]">
                <div class="flex items-center">
                    <img src={imagem_login} alt="imagem de capa" className="min-w-screen min-h-screen"/>
                </div>
            </div>
		   
           
           
            <div class="flex col w-1/2 min-h-screen bg-black text-[#061826] mb-8 ">
             
            

                <div class="flex space-y-1 flex-col mb-24 object-bottom items-center ">
                   
                <h1 class=" flex flex-col text-white font-bold text-6xl mt-12">Dell Conect</h1>
                    <p class="flex flex-col text-white my-8" >Log into your account</p>

                    <div class="flex flex-col w-3/4 pr-2 pt-12 object-bottom ">
                        <label class="text-white">Enter your Dell Email:</label>
                        <input type="text" class="w-full border-2 border-white rounded py-2  bg-[#ffffff] text-black focus:outline-none focus:border-purple-500" placeholder="email@delltechnologies.com"></input>
                    </div>
                    
                    <div class="w-3/4 pr-2 pt-8">
                    <label class="text-white"> Enter your password:</label>
                        <input type="email" class=" w-full border-2 border-white rounded py-2 px-48 bg-[#ffffff] text-[#000000] focus:outline-none focus:border-purple-500 mr-8" placeholder="***********"></input>
                    </div>
                    
                    <div class="flex flex-col pt-8 items-center">
                        <button class="bg-[#8A58DC] text-white font-bold py-2 w-4/5 rounded ml-10 mr-10">Login</button>
                        
                        <div class="flex py-5 items-center w-full">
                            <div class="flex-grow border-0.5 w-64 border-gray-400 h-0.5 bg-gray-400"></div>
                                <span class="flex-shrink mx-4 text-gray-400">Or</span>
                            <div class="flex-grow border-0.5 w-64 border-gray-400 h-0.5 bg-gray-400"></div>
                        </div> 

                        <button class="bg-[#f8f8f8] text-[#454545] font-bold py-2 w-4/5 rounded ml-10 mr-10">Login with Dell SSO</button>
                    
                    </div>
                
                </div>


            </div>
        </div>
        // <div classname="bg-black">
        //     <href className="flex flex-col w-2/4  min-h-screen  bg-[#d9d9d9] py-64 text-[#f1f1f1] "> </href>
        // </div>

    )
}