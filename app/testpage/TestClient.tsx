'use client'

import { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import {
    FieldValues,
    useForm
} from 'react-hook-form';
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import { SafeUser } from "../types";

export interface AddMemberProps{
    users?: SafeUser[]
}
const AddMember: React.FC<AddMemberProps> = ({users}) => {

    const params = useSearchParams();
    const router = useRouter();

    const {
        register,
        watch,
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


    const onSubmit = useCallback(async () => {


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


    return (
        <div className="uppercase">
            {userName}
            <Container>
                <Input
                    id="userName"
                    label="Search user"
                    register={register}
                    errors={errors}

                />
                <Button label='Search' type='primary' onClick={onSubmit} />

                <ul>
                    {users && users.map(({ id, name, image, }) => (
                        <li className="mt-5" key={id}><p>{name}</p></li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}

export default AddMember;
