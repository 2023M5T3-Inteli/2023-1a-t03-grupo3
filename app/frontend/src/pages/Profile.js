import { Sidebar } from "../components/Sidebar"
import { Title } from "../components/Title"

export const Profile = () => {
    return (
        <div className="flex min-h-screen max-w-screen w-full h-full">
            <Sidebar />

            <div className="w-4/5">
                <Title>Profile</Title>
            </div>
        </div>
    )
}