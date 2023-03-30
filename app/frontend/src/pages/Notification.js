import { Sidebar } from "../components/Sidebar";
import { CardNotification } from "../components/CardNotification";
import { useState } from "react";
import bell from "../assets/bell.svg";
import filter from "../assets/filter.svg";
import { NotificationModal } from "../components/NotificationModal";
import { Title } from '../components/Title';
import axios from "../axios"
import { useParams } from "react-router-dom";


export const Notification = () => {
  // var notificationContent = [
  //   {
  //     desc: "Amet Mattis Vulputate",
  //     type: "request",
  //     aproval: "",
  //   },

  //   {
  //     desc: "Amet Mattis Vulputate",
  //     type: "answer",
  //     aproval: false,
  //   },

  //   {
  //     desc: "Amet Mattis Vulputate",
  //     type: "answer",
  //     aproval: true,
  //   },
  // ];

  // const params = useParams();

  // const [openModal, setOpenModal] = useState(false);

  // function createPost(isApproved){
  //   axios
  //     .post(`notification/${id}`, {
  //       aproved:isApproved,
  //       // receiver:true
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  return (
    <div className="flex min-h-screen max-w-screen w-auto h-full">
      {/* <NotificationModal 
            isOpen={openModal} 
            setClose={() =>setOpenModal(!openModal)} 
            />
      // <Sidebar /> */}
      <div className=" w-4/5 flex flex-col max-w-screen bg-[#F0F0F0] px-4 py-8">
        <div className="font-semibold text-3xl flex flex-row justify-between h-12 itens-center align-center">
          <div className="w-full mb-1">
            <Title color={'#e2e2e2'} variant={3}>Notifications</Title>
          </div>
          <div className="flex flex-row justify-between w-16">
            <img
              className={"hover:cursor-pointer"}
              src={filter}
              width={20}
              heigh={20}
              // onClick={() => setOpenModal(true)}
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
        <div className="rounded-xl bg-white border-2 h-full p-4 w-full flex flex-col">
          {/* {notificationContent.map((item) => {
                    return (
                    <CardNotification
                        desc={item.desc}
                        aproval={(item.aproval)}
                        type={item.type}
                    />
                    );
                })} */}
        </div>
      </div>
    </div>
  );
};
