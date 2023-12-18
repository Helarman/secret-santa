'use client'

import { useCallback, useEffect, useState } from "react";
import Container from "@/app/components/Container";
import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import { SafeUser } from "@/app/types";
import toast from "react-hot-toast";
import UserCard from "@/app/components/UserCard";
import { FaUserPlus } from "react-icons/fa6";
import axios from "axios";
import { FaSearch, FaAngleUp } from "react-icons/fa";

export interface AddMemberProps {
    users?: SafeUser[]
    roomId?: string
    roomName?: string
    onClick: () => void
}
const AddMember: React.FC<AddMemberProps> = ({
    users,
    roomId,
    roomName,
    onClick
}) => {

    const params = useSearchParams();
    const router = useRouter();

    const [searchStarted, setSearchStarted] = useState(false)

    const {
        register,
        watch,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            userName: '',
        }
    });

    const userName = watch('userName');


    const onSubmit: SubmitHandler<FieldValues> = useCallback(async () => {


        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            name: userName
        };

        setSearchStarted(true)

        const url = qs.stringifyUrl({
            url: `/rooms/${roomId}`,
            query: updatedQuery,
        }, { skipNull: true });


        router.push(url);
    },
        [
            userName,
            router,
            params
        ]);

    const onAddMember = (userName: string, userId: string) => {
        axios.post('/api/notifications', {
            title: `You are invited to the room ${roomName}!`,
            type: 'invite',
            roomId: roomId,
            userId: userId,
        })
            .then(() => {
                toast((t) => (
                    <>
                        <div className="flex items-center">

                            <FaUserPlus size={18} />
                        </div>

                        <div className="flex-1 flex-row pl-3 py-3">
                            Invite to {userName}
                        </div>
                    </>
                ));
            })

            .catch(() => {
                toast.error('Error.');
            })
    }

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (

        <div
            id="addUsers"
            className="
                flex 
                flex-col 
                bg-white 
                dark:bg-[#1E2746] 
                dark:text-white  
                p-5 
            "
        >
            <div
                className="
              text-gray-700
              dark:text-white
              text-xl 
              font-semibold 
              flex 
              flex-row
              items-center 
              justify-between
              text-left
              gap-2
              pt-5 
              pb-5
            "
            >
                <div className="flex flex-row items-center ">
                    <FaSearch className="w-11" />
                    <h1>
                        Search for users to invite a room
                    </h1>
                </div>
                <button className="w-11 hover:opacity-75" onClick={onClick} >
                    <FaAngleUp />
                </button>
            </div>
            <div className="mb-5 flex md:flex-row flex-col">
                <div className="w-full">
                    <Input
                        id="userName"
                        label="Search user"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="md:w-2/12 w-full">
                    <Button label='Search' type='primary' onClick={handleSubmit(onSubmit)} />
                </div>
            </div>

            <ul>
                {searchStarted ?
                    hasMounted && users && users.map(({ id, name, image, }) => (
                        <li key={id}>
                            <UserCard name={name} image={image} onClick={() => onAddMember(name as string, id as string)} />
                        </li>

                    ))

                    :

                    <div
                        className="
                            text-gray-500
                            dark:text-gray-300
                            text-md
                            font-semibold 
                            text-left
                            pl-11
                            pb-5
                            "
                    >
                        <div className="flex flex-row items-center ">
                            <h1>
                                Start a search or change filters . . .
                            </h1>
                        </div>
                    </div>
                }
            </ul>
        </div >

    )
}

export default AddMember;
