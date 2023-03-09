import {useState} from 'react'
import {ToggleSwitch} from "../components/ToggleSwitch"
import x1 from "../assets/x1.svg"
export const NotificationModal = ({isOpen, setClose}) =>{
    const [isActive, setIsActive] = useState(false);

    if(isOpen){
        return(
            <div className={`flex h-full w-full fixed inset-0 justify-center items-center  bg-black/70`}>
                <div className={`flex flex-col inset-1/2 box-border h-1/2 w-2/5 rounded-xl font-semibold text-3xl bg-[#fff] `}>
                    <div  className={`flex h-1/4 relative justify-center  items-center`}>
                        <p>Show Only</p>
                        <img src={x1} 
                        className={`flex absolute top-3 right-3 hover:cursor-pointer`} 
                        onClick={setClose}/>
                    </div>
                    <hr className={`border-black border`}></hr>
                    <div className={`h-3/4 flex justify-center `}>
                        <div className={`flex flex-col justify-around itens-center`}>
                            <div className={`flex items-center`}>
                                { <ToggleSwitch />}
                                <p className={`flex ml-3`}>Subscriptions</p>
                            </div>
                            <div className={`flex items-center`}>
                                {<ToggleSwitch/>}
                                <p className={`flex ml-3`}>Aproved</p>
                            </div>
                            <div className={`flex items-center`}>
                                { <ToggleSwitch/> }
                                <p className={`flex ml-3`}>Rejected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null
}