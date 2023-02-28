import imagem_login from '../assets/login.svg'


export const Login = () => {
    return (
        <div class="flex">
<<<<<<< Updated upstream

            <div class="flex flex-col w-1/2 min-h-screen bg-[#d9d9d9] items-center justify-center">
                <img src={imagem_login} alt={"Login"} className="w-3/4 mr-4" />
            </div>



            <div class="flex flex-col items-center justify-center w-1/2 min-h-screen bg-black text-[#f1f1f1] mb-8 ">
                <h2 class="text-white font-bold text-6xl ">Dell Conect</h2>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-1/2 pr-2 pt-8">
                        <label> Enter your Dell Email:</label>
=======
		    
            <div class="flex-col w-1/2 min-h-screen bg-[#d9d9d9]">
                <div class="flex items-center">
                    <img src={imagem_login} alt="imagem de capa" className="min-w-screen min-h-screen"/>
                </div>
            </div>
		   
           
           
            <div class="flex col w-1/2 min-h-screen bg-black text-[#454545] mb-8 ">
                
                <div class="flex flex-col items-top mb-24 ">
			        <h2 class=" flex flex-col text-white font-bold text-6xl">Dell Conect</h2>
                    <p class="flex flex-col text-white" >Log into your account</p>
                </div>
                
                <div class="flex flex-col mb-24">
                   
                    <div class="flex flex-col w-1/2 pr-2 pt-24 object-bottom">
                        <label class="text-white"> Enter your Dell Email:</label>
>>>>>>> Stashed changes
                        <input type="text" class="w-full border-2 border-white rounded py-2 px-32 bg-black text-white focus:outline-none focus:border-purple-500" placeholder="Nome"></input>
                    </div>
                    
                    <div class="w-1/2 pr-2 pt-8">
<<<<<<< Updated upstream
                        <label> Enter your password:</label>
=======
                    <label class="text-white"> Enter your password:</label>
>>>>>>> Stashed changes
                        <input type="email" class="w-full border-2 border-white rounded py-2 px-32 bg-black text-white focus:outline-none focus:border-purple-500" placeholder="E-mail"></input>
                    </div>
                    
                    <div class="flex flex-col pt-8 ">
                        <button class="bg-[#8A58DC] text-white font-bold py-2 px-4 rounded mr-2">Login</button>
                        <div class="pt-8">
                            <p class="text-white" > -------------------------------------------------------or----------------------------------------------------------------------</p>
                        </div>
                        <button class="bg-[#f8f8f8] text-[#454545] font-bold py-2 px-4 rounded">Login with Dell SSO</button>
                    </div>
                
                </div>


            </div>
        </div>
        // <div classname="bg-black">
        //     <href className="flex flex-col w-2/4  min-h-screen  bg-[#d9d9d9] py-64 text-[#f1f1f1] "> </href>
        // </div>

    )
}