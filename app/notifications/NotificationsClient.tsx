'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Notification, {NotificationProps} from "../components/Notification";
import Container from "../components/Container";
import Heading from "../components/Heading";

interface NotificationsClientProps{
    notifications: NotificationProps[]
}
const NotificationsClient: React.FC<NotificationsClientProps> = ({
    notifications
}) => {
    const router = useRouter()
    return (
        <>

            <Container>
                <Heading
                    title="Your Notifications"
                />
                <div className=" mt-10">
                    {notifications && notifications.map(({id, title, type, roomId, createdAt, userId}) => (
                        <div key={id}>
                        <Notification id={id} title={title} date={createdAt as string} type={type} roomId={roomId} userId={userId}/>
                        </div>
                    ))}

                </div>
            </Container>
        </>
    )
}

export default NotificationsClient;