import { Sidebar } from "../components/Sidebar";
import { UserRanked } from "../components/UserRanked";
import { Title } from "../components/Title";
import { useEffect, useState } from "react";
import axios from "../axios";

export const Ranking = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      await axios.get("/ranking").then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
    }

    getProjects()
  }, [])

  console.log(data)

  return (
    <div className=" bg-[#F0F0F0] flex min-h-screen max-w-screen w-full h-full">
      <Sidebar />

      <div className="bg-[#F0F0F0] px-4 py-8 w-4/5">
        <div className="flex flex-col">
          <div className="w-full mb-1">
            <Title color={"#e2e2e2"} variant={3}>
              Ranking
            </Title>
          </div>

          <div className="rounded-xl bg-white border-2 h-auto w-full flex flex-col px-4">
            <div className="flex flex-row justify-between w-full my-2 px-10">
              <p className="font-montserrat font-semibold">Name</p>
              <p className="font-montserrat font-semibold">Rating</p>
            </div>

            {data ? data.map((item, index) => {
              return (
                <UserRanked
                  index={index}
                  {...item}
                />
              );
            }) : <p className='text-xl text-gray-500'>No one to render...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
