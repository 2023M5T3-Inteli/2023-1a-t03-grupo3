import { Sidebar } from "../components/Sidebar";
import { CardNotification } from "../components/CardNotification";
import { useEffect, useState } from "react";
import bell from "../assets/bell.svg";
import filter from "../assets/filter.svg";
import { NotificationModal } from "../components/NotificationModal";
import { Title } from '../components/Title';
import axios from "../axios"
import { useParams } from "react-router-dom";


export const Notification = () => {
  let [notificationContent, setNotificationContent] = useState([]);

  const params = useParams();

  const getNotifications = async () => {
    await axios.get(`/notifications/getAll/f900d5e0-ab8d-410d-8792-95a64698bb6f`).then(res => {
      setNotificationContent(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getNotifications()
  }, [])

  return (
    <div className="flex min-h-screen max-w-screen w-auto h-full">
      {/* <NotificationModal 
            isOpen={openModal} 
            setClose={() =>setOpenModal(!openModal)} 
            />
          */}
      <Sidebar />
      <div className=" w-4/5 flex flex-col max-w-screen bg-[#F0F0F0] px-4 py-4">
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
          {notificationContent.length === 0 ? <p className="text-xl text-gray-500">
            No notifications
          </p> : notificationContent.length > 0 ? notificationContent.map((item) => {
            return (
              <CardNotification
                key={item.id}
                desc={item.description}
                type={item.type}
              />
            );
          }) : <p className='text-xl text-gray-500'>Loading...</p>}
        </div>
      </div>
    </div>
  );
};
