import { Sidebar } from "../components/Sidebar";
import { UserRanked } from "../components/UserRanked";
import { Title } from "../components/Title";
// import { axios } from "Axios";
// import { useEffect, useState } from "react";

export const Ranking = () => {
  const users = [
    {
      name: "Sócrates",
      rating: 60,
    },
    {
      name: "Aristóteles",
      rating: 40,
    },
    {
      name: "Arrascaeta",
      rating: 50,
    },
    {
      name: "Gabigol",
      rating: 70,
    },
    {
      name: "Gerson",
      rating: 70,
    },
    {
      name: "Bruno Henrique",
      rating: 70,
    },
    {
      name: "Courtois",
      rating: 70,
    },
    {
      name: "De Bruyne",
      rating: 70,
    },
    {
      name: "Platão",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
    {
      name: "Giordano Bruno",
      rating: 70,
    },
  ];

  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   axios.get("/ranking").then((res) => {
  //     setList(res.data);
  //   });
  // }, []);

  // if(!list) return null;

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

          <div className="rounded-xl bg-white border-2 h-auto p-4 w-full flex flex-col">
            <div className="flex flex-row ml-28 mr-32 m-2 w-30 place-content-between">
              <p className="font-montserrat">Name</p>
              <p className="font-montserrat">Rating</p>
            </div>

            {users
              .sort((a, b) => (a.rating < b.rating ? 1 : -1)).slice(0,20)
              .map((item, index) => {
                return (
                  <UserRanked
                    id={item.id}
                    index={index}
                    name={item.name}
                    rating={item.rating}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
