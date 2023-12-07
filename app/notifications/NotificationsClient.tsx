'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Notification from "../components/Notification";
import Container from "../components/Container";
import Heading from "../components/Heading";

const NotificationsClient = () => {
    const router = useRouter()

    const onSubmit = () => {

        axios.post('/api/notifications', {
            title: '123',
            type: '123',
            link: '123'
        })
            .then(() => {
                toast.success('Invite send!');
                router.refresh();

            })
            .catch(() => {
                toast.error('Error.');
            })
    }


    return (
        <>

            <Container>
                <Heading
                    title="Your Notifications"
                />
                <div className=" mt-10">
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2023-12-07 02:00:00" link="" type='gift' />
                    <Notification title="You are invited to the room Room Name from Alexander Ivanov!" date="2023-12-07 02:00:00" link="" type='invite' />
                    <Notification title="Name Lastname joined the room Room Name" date="2023-12-07 02:00:00" link="" type='join' />
                    <Notification title="Name Lastname left the room Room Name" date="2023-12-07 02:00:00" link="" type='leave' />
                    <Notification title="You have been banned" date="2023-12-07 02:00:00" link="" type='system' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <Notification title="Determination of Santa Clauses is completed! You give a gift to Name Lastname!" date="2022-12-07 02:00:00" link="" type='disabled' />
                    <button className="border-2 px-4 py-1 hover:opacity-75" onClick={onSubmit}>test</button>
                </div>
            </Container>
        </>
    )
}

export default NotificationsClient;