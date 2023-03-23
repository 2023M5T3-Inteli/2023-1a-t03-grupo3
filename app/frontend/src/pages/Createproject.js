import { Sidebar } from '../components/Sidebar'
import { Title } from '../components/Title'

export const Createproject = () => {

    function deletePost(){
        axios.delete('/delete/:id').then((res)=>{
            alert('Project delete')
        });
    }

    return (
        <div className="flex col min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="bg-[#F0F0F0] w-4/5 flex flex-col justify-center items-center px-4 py-8">
                <div className='w-full mb-1'>
                    <Title variant={3} color={"e2e2e2"}>Create new project</Title>
                </div>

                <div className="h-full ml-8 mr-8 flex flex-col bg-[#FFFFFF] rounded-lg pt-5 pb-5 pl-5 pr-5 shadow-lg w-full">
                    <div className="flex flex-col">
                        <p>Title</p>
                        <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Write the title of the project you are proposing"></input>
                    </div>

                    <div className="mt-5 flex flex-col">
                        <p>Description</p>
                        <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Write the description of the project you are proposing"></input>
                    </div>
                    <div className="mt-5 flex flex-col">
                        <p className="mb-2">Duration</p>
                        <div className="flex flex-row items-center w-full">
                            <div className="flex-column w-1/2">
                                <p>Start date</p>
                                <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] mr-1" placeholder="Select the project beginning date"></input>
                            </div>

                            <div className="flex-column w-1/2">
                                <p>End date</p>
                                <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] ml-1" placeholder="Select the project ending date"></input>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-row">
                        <div className="flex flex-col w-full mr-1">
                            <p>Category</p>
                            <input type="text" className="rounded-xl  bg-white  border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="What category is your project included?"></input>
                        </div>
                        <div className="flex flex-col w-full ml-1">
                            <p>Attachments</p>
                            <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Attach files related to your project"></input>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col">
                        <p className="text-lg mb-6">Members</p>
                        <p>-Select the quantity of members per function</p>
                    </div>
                    <div className="mt-5 flex flex-row">
                        <div className="flex flex-col w-full mr-1">
                            <p>Quantity</p>
                            <input type="number" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Number"></input>
                        </div>
                        <div className="flex flex-col w-full ml-1">
                            <p>Role</p>
                            <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Role"></input>
                        </div>
                    </div>
                    <button className="rounded-full py-3 px-6 border-2 border-black-400 mt-5 pl-1 pr-1 pt-1 pb-1 w-1/5 shadow-lg">+ Add more members</button>
                    <div className="mt-5 flex flex-col">
                        <p>Tags</p>
                        <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Ex: python, communication, finance"></input>
                    </div>
                    <div className="mt-5 flex flex-col text-lg mb-6">
                        <p>Create questions for people to apply for your project</p>
                    </div>
                    <div className="mt-5 flex flex-col">
                        <p>Question</p>
                        <input type="text" className="rounded-xl bg-white border-2 w-full py-2 px-3 disabled:bg-[#f0f0f0] shadow-md p-2" placeholder="Ex.: Have you ever worked with Python?"></input>
                    </div>
                    <button className="rounded-full py-3 px-6 border-2 border-black-400 mt-5 pl-1 pr-1 pt-1 pb-1 w-1/5 shadow-lg mb-7">+ Add question</button>
                    <div className="flex flex-col items-center">
                        <button className="py-3 px-6 border-2 border-black-400 font-medium mt-5 p-2 rounded-full w-1/5 shadow-lg text-[#4A92FF] bg-[#061826] hover:border-blue-400">Send to approval</button>
                    </div>
                </div>
            </div>
        </div>
    )
}