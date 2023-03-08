import { useEffect, useState } from "react";

import { Text } from "../components/Text";
import { Title } from "../components/Title";

import { Calendar } from "../assets/calendar.jsx";
import { Book } from "../assets/book.jsx";
import { Users } from "../assets/users.jsx";
import { Arrow } from "../assets/arrow";

export const Project = () => {

    useEffect(() => {
        let project = {
            title: "Lorem ipsum",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
            collaborators: [
                {
                    type: "analyst",
                    amount: 5,
                    enrolled: 1,
                },
                {
                    type: "full-stack",
                    amount: 5,
                    enrolled: 3,
                },
                {
                    type: "ux designer",
                    amount: 2,
                    enrolled: 0,
                },
                ],
            durationInWeeks: 7,
            subject: "Programming",
        }
        
        setTitle(project.title);
        setDescription(project.description);
        setCollaboratorsAmount(
            project.collaborators.reduce((acc, curr) => acc + curr.amount, 0)
        );
        setEnrolledColaboratos(
            project.collaborators.reduce((acc, curr) => acc + curr.enrolled, 0)
        );
        setCollaborators(project.collaborators);
        setDuration(project.durationInWeeks);
        setSubject(project.subject);

        setPercentile((enrolledCollaborators / collaboratorsAmount) * 100)

        console.log(percentile)
    }, []);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [collaboratorsAmount, setCollaboratorsAmount] = useState(0);
    const [collaborators, setCollaborators] = useState([]);
    const [enrolledCollaborators, setEnrolledColaboratos] = useState(0);
    const [duration, setDuration] = useState(0);
    const [subject, setSubject] = useState("");
    const [percentile, setPercentile] = useState(0)

    const [project, setProject] = useState({})

    return (
        <div className="w-full min-h-screen h-full p-0 flex flex-col items-center">
            <div className="bg-[#061826] w-full px-8 md:px-16 py-8 md:py-16 flex flex-col md:flex-row justify-center items-center md:justify-between">
                <div className="text-center w-full md:w-3/5">
                    <div className="mb-4">
                        <Title>{title}</Title>
                    </div>

                    <Text variant={"lg"}>{description}</Text>
                </div>

                <div className="bg-[#8A58DC] px-4 py-4 md:py-8 rounded-2xl shadow-lg md:absolute w-full md:w-1/4 flex flex-col justify-center md:right-0 mt-4 md:mr-16 md:top-0 md:mt-16">
                    <div className="flex items-center">
                        <Users width={32} />
                        <div className="ml-2">
                            <p className="font-medium text-3xl">
                                {collaboratorsAmount || "?"} collaborators
                            </p>
                            <div className="font-medium text-2xl flex">
                                {collaborators.map((collaborator, index) => {
                                    return (
                                        <p className="text-lg" key={index}>
                                            {collaborator.amount || "?"}{" "}
                                            {collaborator.type || "?"}
                                            {index !==
                                                collaborators.length - 1
                                                ? ","
                                                : ""}{" "}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Calendar width={32} />
                        <p className="ml-2 font-medium text-2xl flex my-8 md:my-16">
                            {duration || "?"} weeks
                        </p>
                    </div>

                    <div className="flex items-center">
                        <Book width={32} />
                        <p className="ml-2 font-medium text-2xl flex">
                            {subject}
                        </p>
                    </div>

                    <div className="mt-8 md:mt-24 flex justify-center">
                        <button className="bg-[#061826] text-[#f1f1f1] flex py-4 px-8 rounded-full font-semibold text-xl items-center">
                            <p className="mr-4">Apply now</p> <Arrow />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full px-16 py-16 flex justify-between">
                <div className="text-center w-3/5">
                    <Text color="#061826" variant={"xl"} bold>
                        {description}
                    </Text>

                    <div className={"my-8"}>
                        <Text color={"e2e2e2"}>
                            {enrolledCollaborators || "0"} of{" "}
                            {collaboratorsAmount || "?"} have already enrolled
                            to the project!
                        </Text>

                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className={"h-2.5 rounded-full"}
                                style={{
                                    width: `${
                                        enrolledCollaborators / collaboratorsAmount * 100
                                    }%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    {percentile < 100 ? <Title color={"#e2e2e2"} variant={3}>Open for subscriptions!</Title> : null}
                </div>
            </div>
                
            <div className="w-full md:w-11/12 border-2 border-red-500">123</div>
        </div>
    );
};
