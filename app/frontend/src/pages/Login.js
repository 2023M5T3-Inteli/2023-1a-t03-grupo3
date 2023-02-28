import imagem_login  from '../assets/imagem_login.png'


export const Login = () =>{
    return(
        <div class="flex">
		    
            <div class="flex-col w-1/2 min-h-screen bg-[#d9d9d9]">
                <div class="flex items-center">
                    <img src={imagem_login} className="w-8 h-8 mr-4"/>
                </div>
            </div>
		   
           
           
            <div class="flex col w-1/2 min-h-screen bg-black text-[#f1f1f1] justify-center mb-8 ">
			    <h2 class="text-white font-bold text-6xl ">Dell Conect</h2>
                <div class="flex flex-col">
                    <div class="w-1/2 pr-2 pt-24">
                        <label> Enter your Dell Email:</label>
                        <input type="text" class="w-full border-2 border-white rounded py-2 px-32 bg-black text-white focus:outline-none focus:border-purple-500" placeholder="Nome"></input>
                    </div>
                    <div class="w-1/2 pr-2 pt-8">
                    <label> Enter your password:</label>
                        <input type="email" class="w-full border-2 border-white rounded py-2 px-32 bg-black text-white focus:outline-none focus:border-purple-500" placeholder="E-mail"></input>
                    </div>
                    <div class="pt-8">
                        <button class="bg-white text-black font-bold py-2 px-4 rounded mr-2">Login</button>
                        <button class="bg-white text-black font-bold py-2 px-4 rounded">Login with Dell SSO</button>
                    </div>
                </div>
                
                    
		    </div>
	    </div>
        // <div classname="bg-black">
        //     <href className="flex flex-col w-2/4  min-h-screen  bg-[#d9d9d9] py-64 text-[#f1f1f1] "> </href>
        // </div>
       
     )
}