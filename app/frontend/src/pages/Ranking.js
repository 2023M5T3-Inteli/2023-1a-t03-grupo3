import { Sidebar } from "../components/Sidebar";
import { UserRanked } from "../components/UserRanked";

export const Ranking = () => {
  const users = [
    {
      name: "Amet Mattis Vulputate",
      rating: 60,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 40,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 50,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 70,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 70,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 70,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 70,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 70,
    },
    {
      name: "Amet Mattis Vulputate",
      rating: 70,
    },
  ];

  return (
    <div className="flex min-h-screen max-w-screen w-full h-full">
      <Sidebar />

      <div className="w-4/5 flex flex-col">
        <div className="text-3xl font-montserrat font-semibold mt-8 m-8 ml-24">
          Ranking
        </div>

        <div className="flex flex-row ml-28 mr-32 m-2 w-30 place-content-between">
          <p className="font-montserrat">Name</p>
          <p className="font-montserrat">Rating</p>
        </div>

        {users
          .sort((a, b) => (a.rating < b.rating ? 1 : -1))
          .map((item, index) => {
            return (
              <UserRanked index={index} name={item.name} rating={item.rating} />
            );
          })}
      </div>
    </div>
  );
};
