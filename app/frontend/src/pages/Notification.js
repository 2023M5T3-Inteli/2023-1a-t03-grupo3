import { Sidebar } from "../components/Sidebar";
import { CardNotification } from "../components/CardNotification";
import { useState } from "react";
import bell from "../assets/bell.svg";
import filter from "../assets/filter.svg";
import { NotificationModal } from "../components/NotificationModal";

export const Notification = () => {
  var notificationContent = [
    {
      desc: "Amet Mattis Vulputate",
      type: "request",
      aproval: "",
    },

    {
      desc: "Amet Mattis Vulputate",
      type: "answer",
      aproval: false,
    },

    {
      desc: "Amet Mattis Vulputate",
      type: "answer",
      aproval: true,
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex min-h-screen max-w-screen w-auto h-full border-red-400">
      <NotificationModal 
            isOpen={openModal} 
            setClose={() =>setOpenModal(!openModal)} 
            />
      <Sidebar />
      <div className="flex flex-col w-full max-w-screen border border-red-500 bg-[#f8f8f8]">
            <div className="mt-8 m-8 font-semibold text-3xl flex flex-row justify-between h-12 itens-center align-center">
                <p>Notifications</p>
                <div className="flex flex-row justify-between w-16">
                    <img 
                    className={"hover:cursor-pointer"}
                    src={filter}
                    width={20}
                    heigh={20}
                    onClick={() => setOpenModal(true)}
                    alt="f"
                    
                    />
                    <img 
                    src={bell} 
                    width={30} 
                    heigh={30} 
                    alt="b" 
                    />
                </div>
            </div>
            <div className="mt-8 m-8">
                {notificationContent.map((item) => {
                    return (
                    <CardNotification
                        desc={item.desc}
                        aproval={item.aproval}
                        type={item.type}
                    />
                    );
                })}
          </div>
        </div>
    </div>
  );
};
