'use client'

import { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import { SafeUser } from "../types";
import toast from "react-hot-toast";
import UserCard from "../components/UserCard";

export interface AddMemberProps {
    users?: SafeUser[]
}
const AddMember: React.FC<AddMemberProps> = ({ users }) => {

    const params = useSearchParams();
    const router = useRouter();

    const {
        register,
        watch,
        handleSubmit,
        formState: {
            errors,
        },
        reset,
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


        const url = qs.stringifyUrl({
            url: '/testpage',
            query: updatedQuery,
        }, { skipNull: true });


        router.push(url);
    },
        [
            userName,
            router,
            params
        ]);

    const onAddMember = (id: any) => {
        toast.success(id)
    }
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <Container>
            <div className="flex flex-col bg-white  p-5 ">
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

                    {hasMounted && users && users.map(({ id, name, image, }) => (
                        <li key={id}>
                            <UserCard name={name} image={image} />
                        </li>

                    ))}
                </ul>
            </div >
        </Container>

    )
}

export default AddMember;
