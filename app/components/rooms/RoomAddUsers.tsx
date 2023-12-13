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
                            Invite to {userName} <br />({roomName})
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
                    <FaAngleUp/>
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

                    <div>
                        Start search
                    </div>
                }
            </ul>



            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar eget arcu a convallis. Cras eu ex lectus. Ut finibus viverra pharetra. Donec enim elit, interdum quis lectus sed, accumsan imperdiet sem. Ut dictum lacus vel velit feugiat venenatis. Ut hendrerit in nunc a semper. Donec pretium dictum tortor id pretium. Integer pharetra iaculis leo, ut pretium urna sodales nec. Duis commodo aliquam neque. Etiam eu eros vitae turpis bibendum imperdiet vel vitae felis. Maecenas condimentum placerat neque, at molestie lectus interdum ut. Etiam vel ornare velit, et pellentesque orci. Aenean mattis velit non tortor efficitur, ac tincidunt dui dapibus. Ut placerat sem libero, ut malesuada libero feugiat sed.

            Aliquam vel ultrices eros, nec scelerisque elit. Morbi massa magna, fermentum non est eget, malesuada imperdiet nulla. Curabitur quis elit est. Aenean condimentum ut nunc at aliquet. Pellentesque sit amet elit velit. Sed sed justo lacus. In tempus tempus accumsan. Aenean nibh sem, fermentum nec cursus sit amet, cursus et nibh. Maecenas dignissim, nunc id mattis consequat, odio nunc ornare libero, nec convallis mi lacus in risus. Morbi pretium aliquet erat eget porta.

            Vestibulum euismod posuere lectus id imperdiet. Ut dapibus arcu vitae lectus mollis consectetur. Nullam vel placerat orci, id egestas ex. Nam non urna pellentesque, aliquet justo quis, tincidunt mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse rhoncus diam arcu, sed porta nisi laoreet eget. Nunc fermentum justo orci, sollicitudin pharetra urna bibendum nec. Proin sagittis nulla et enim condimentum lobortis. Cras in quam ac sapien dapibus ullamcorper. Maecenas quis orci maximus, porttitor dolor in, iaculis lorem. Fusce arcu massa, rhoncus non nulla ac, pellentesque aliquet risus. In nibh urna, porttitor id suscipit sit amet, interdum vel urna. Aenean ut molestie ex. Nunc interdum ultrices nisl sit amet mollis.

            Fusce sodales tellus lectus, accumsan varius felis semper at. Ut et cursus quam, ac fermentum lacus. Cras consequat facilisis leo, eu sollicitudin augue fermentum blandit. Sed eu magna euismod, porta nisl volutpat, suscipit massa. Morbi rutrum, odio vitae laoreet porta, erat sapien consectetur dolor, quis pharetra quam neque non turpis. Aliquam sed massa et lorem congue rutrum sit amet sed ex. Fusce faucibus eros enim, eget porttitor nibh convallis non. In pretium vulputate condimentum.

            Fusce sed finibus urna. Nulla vitae nunc magna. Integer vulputate eget neque id molestie. Vivamus at sapien ornare, euismod erat consequat, suscipit dolor. Phasellus vel nisl id lectus convallis mollis non vel magna. Integer sit amet blandit sapien. Cras et dignissim nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce urna turpis, luctus eget venenatis eget, venenatis et enim. Cras consectetur odio mauris, eget pulvinar erat cursus et. Nulla ac sollicitudin neque, quis placerat justo.

            Phasellus egestas risus a tempus vestibulum. Proin blandit leo vitae dolor tempus, quis scelerisque augue vehicula. Sed suscipit cursus dolor, a posuere arcu pharetra eget. Mauris iaculis diam non semper pulvinar. Fusce viverra rutrum urna non bibendum. Integer ac justo urna. Morbi tincidunt erat nec nunc viverra, ac malesuada tortor ornare.

            Fusce egestas elementum aliquam. Aenean ultrices accumsan metus, sit amet bibendum sapien suscipit sed. Nullam lacinia, velit sed fringilla interdum, libero velit venenatis mauris, ut efficitur libero augue nec magna. Etiam at sagittis arcu, ut porta odio. Morbi sed felis euismod, maximus lorem sit amet, molestie eros. Donec nec velit a purus rhoncus rutrum vitae ut ligula. Praesent mattis enim ac est pulvinar congue.

            Proin ac aliquet diam. In facilisis, mauris vitae consectetur mollis, tellus est luctus nunc, non vestibulum elit felis a diam. Proin id vulputate orci. Donec non lectus lorem. Vestibulum scelerisque metus vel varius fermentum. Sed sem diam, euismod in neque interdum, tincidunt pulvinar tellus. Duis magna odio, bibendum a dolor at, vehicula eleifend nunc. Proin posuere hendrerit velit quis varius. Proin nec sem convallis, tempus quam at, luctus enim. Suspendisse a ante pulvinar, dictum ante bibendum, tempor neque. Quisque lacus nunc, bibendum ut sem non, congue convallis mi. Sed consectetur eros eu consequat vestibulum.

            Integer a ipsum quis lacus ullamcorper facilisis malesuada vitae quam. Quisque vel luctus ante. Aliquam eget vulputate erat. Nunc sit amet tempor nisl, ut consequat nisl. Donec sit amet odio eget purus viverra scelerisque. Quisque nec lacus non metus elementum pulvinar. Maecenas finibus diam vel ante vestibulum cursus. Aenean interdum at enim et maximus. Phasellus luctus est vel varius viverra. Sed a pharetra sem, eget facilisis eros. Nulla facilisi. Cras vitae enim at mi hendrerit dignissim lobortis et magna. Sed eu libero vel enim viverra suscipit et sed est. Nulla commodo leo tempus consequat molestie. Curabitur in dui eu lorem malesuada pellentesque sed id massa. Pellentesque sed fermentum diam.

            Mauris at purus tincidunt, condimentum sem nec, porta lacus. Aenean posuere gravida urna at ullamcorper. Suspendisse dapibus vehicula massa, at consequat tellus venenatis vitae. Curabitur volutpat neque eget sagittis feugiat. Integer enim velit, hendrerit vitae risus vel, sagittis mollis elit. Donec dui nisi, aliquet eget faucibus id, convallis in urna. Sed sed risus non lacus molestie blandit. Vestibulum non consequat lacus. Donec mattis dui purus, at molestie nunc auctor in. Vestibulum eleifend congue ex id dictum.

            Aliquam lacus nunc, lobortis hendrerit odio ac, vulputate interdum erat. Nunc tristique ligula eget nisi tempus, sit amet varius turpis consequat. Sed ac eleifend purus. Sed maximus interdum dolor sit amet tempus. Nam bibendum nulla lacus, a consequat nunc tempor ut. Vivamus sapien nunc, congue eu nisl rhoncus, porttitor faucibus metus. Aliquam luctus sapien et nulla iaculis pellentesque. Pellentesque sed pulvinar nisi. Etiam porttitor turpis id viverra vulputate.

            Aenean pellentesque at urna non feugiat. Nulla rhoncus ipsum ac turpis imperdiet suscipit. Aenean finibus nunc sed viverra consectetur. Nullam sit amet dolor id nibh vulputate mollis sed sed urna. Aenean porta neque ac vehicula gravida. Phasellus ultricies sem et imperdiet sodales. Nullam nec elit in tortor mattis lobortis at vel odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum tortor elementum mi aliquam consectetur. Mauris tempor rhoncus pharetra. Ut at iaculis nisl. Integer vitae auctor tortor, vitae dapibus lacus. Suspendisse sit amet nisl nulla. Donec non neque eu dolor sodales finibus non vitae mi. Aliquam erat volutpat.

            Fusce volutpat aliquam enim. In blandit eros at nibh blandit luctus. Aliquam erat volutpat. Donec lobortis lorem odio, a porttitor dui mattis nec. Sed nec feugiat libero. Sed eu dolor bibendum, vulputate turpis ut, lobortis augue. Suspendisse eget varius libero.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel leo sed ex tempus vulputate. Aenean volutpat dui sed tellus pellentesque, cursus rutrum justo fermentum. Pellentesque mattis efficitur enim eu ultrices. Fusce pulvinar arcu vel est ultrices, at pretium nisl lacinia. Praesent semper metus eu nunc consequat dignissim. Fusce eu justo volutpat, consectetur erat id, finibus mi. Phasellus ullamcorper diam ipsum. Mauris fermentum orci est, vel scelerisque sapien sagittis ut. Nunc ultrices, sem in pellentesque ullamcorper, metus lectus euismod urna, id tristique sapien lectus sit amet risus. Suspendisse pharetra convallis massa non condimentum. In luctus justo vitae sapien gravida dignissim. Curabitur tincidunt, nulla sed eleifend vehicula, metus quam imperdiet tellus, eu imperdiet leo erat id massa. Curabitur est nibh, congue a nisi sit amet, pulvinar porttitor odio. Nulla at tristique mi.

            Pellentesque eu neque dolor. Ut fermentum faucibus tempor. Nam cursus ante sed nunc rhoncus, et vulputate velit suscipit. Praesent accumsan lacus eget nibh vestibulum, ac suscipit odio volutpat. Ut ut lacus bibendum, egestas lacus vel, pharetra velit. Sed pellentesque lacinia neque. Maecenas ut ex mollis, condimentum elit sit amet, lacinia ex. Maecenas ac nisi volutpat, malesuada arcu eu, maximus justo.
            <a
                onClick={onClick}
                className="p-3 border-2 w-2/12"
            >
                hide
            </a>
        </div >

    )
}

export default AddMember;
