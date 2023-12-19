'use client';

import toast from "react-hot-toast";
import { SafeUser } from "@/app/types";
import { FaUserPlus } from "react-icons/fa";
import { FaGift, FaCheck } from "react-icons/fa6";

import Avatar from "../Avatar";
import Button from "../Button";
import axios from "axios";
import { useState } from "react";

interface ResultProps {
  roomId: string;
  giverId: string;
  recipientId: string;
}

type PicksProps = number;

interface RoomInfoProps {
  id: string;
  user: SafeUser;
  currentUser: SafeUser;
  members?: SafeUser[];
  description: string;
  title: string;
  finished: boolean;
  onClick: () => void
}


const RoomInfo: React.FC<RoomInfoProps> = ({
  id,
  user,
  members,
  title,
  description,
  currentUser,
  finished,
  onClick,
}) => {

  const onStart = () => {
    if (finished) {
      toast.error('Alredy started');
      return;
    }

    if (members && members?.length % 2 != 0) {
      toast.error('Odd numbers of members ');
      return;
    }

    if (!members) {
      toast.error('No members');
      return;
    }

    const membersIds = members.map(items => items.id)

    do {

      var picks: any = {};

      var recipients = JSON.parse(JSON.stringify(membersIds));
      
      for (var i in membersIds) {

        var giver = membersIds[i];
        var recipient = null;

        do {

          if (recipients.length === 1 && recipients[0] === giver) {
            break;
          }

          var j = Math.floor(Math.random() * recipients.length);

          if (giver !== recipients[j]) {
            recipient = recipients[j];
            recipients.splice(j, 1);
          }
        } while (recipient === null);

        if (recipient !== null) {
          picks[giver] = recipient;
        }
      }

    } while (picks.length < membersIds.length);

    for (var giver in picks) {
      axios.post('/api/givings', {
        roomId: id,
        giverId: giver,
        recipientId: picks[giver]
      })
    }

    axios.put(`/api/rooms/${id}`)
      .then(() => {
        toast((t) => (
          <>
            <div className="flex items-center">
              <FaGift size={18} />
            </div>

            <div className="flex-1 flex-row pl-3 py-3">
              Started
            </div>
          </>
        ));
        window.location.reload();
      })
      .catch(() => {
        toast.error('Unable to update room data');
      })

  }

  const [playOption, setPlayOprion] = useState(0)

  let isAdmin = false;

  if (currentUser.id === user.id) {
    isAdmin = true
  }

  return (
    <div
      id="top"
      className="
        flex 
        flex-col 
        bg-white
        dark:bg-[#1E2746] 
        dark:text-white  w-full 
        text-right
      "
    >
      <div
        className="
          p-5 
          gap-8  
          flex 
          flex-col 
          mb-auto
        "
      >
        <div
          className="
            flex 
            flex-col
            gap-2
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
              justify-end
              text-right
              gap-2
            "
          >

            <div className="text-right">
              Room by {user?.name}
            </div>
            <Avatar src={user?.image} size={44} />

          </div>
        </div>
        <hr />

        <div
          className="
            text-gray-700
            dark:text-white
            text-xl 
            font-semibold 
            font-light
          "
        >
          {title}
        </div>
        <hr />

        <div
          className="
            text-lg 
            font-light 
            text-neutral-500
            dark:text-white
          "
        >
          {description}
        </div>

        <hr />

        <div
          className="
            flex 
            flex-col
            gap-2
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
              items-start 
              justify-end
              text-right
              gap-2
            "
          >
            <a
              onClick={onClick}
              href={`/rooms/${id}#addUsers`}
              title="Add member"
              className={`
                ${isAdmin ? '' : 'hidden'}
                hover:opacity-75 
                opacity-100
                w-16 
                h-16 
                bg-gray-700 
                text-white 
                flex 
                justify-center 
                items-center 
                rounded-full
              `}
            >
              <FaUserPlus className="w-6 h-6 " />
            </a>

            {members && members.map(({ id, name, image }) => (
              <div key={id}>
                <Avatar src={image} size={64} hover title={name ? name : ''} />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div  
        className={`
          ${isAdmin ? '' : 'hidden'}
          ${!finished ? '' : 'hidden'}
          flex 
          flex-col 
          justify-end 
          gap-2 
          p-5
        `}
      >
        <div className="flex flex-row justify-end items-center">
          <span
            className="
              text-lg 
              font-light 
              text-neutral-500
              dark:text-white
              pr-3
            "
          >
            Standard. Even number of members is required.
          </span>
            <div
              onClick={() => setPlayOprion(0)}
              className={`
              ${playOption === 0 ? 'bg-indigo-500' : ' '} 
              ${playOption === 0 ? 'border-indigo-500' : 'border-gray-300'}
              ${playOption === 0 ? 'text-white' : 'text-gray-300'}
              border-2
              flex
              justify-center
              h-7
              w-7
              items-center
            `}
            >
              <FaCheck />
            </div>
          </div>

          <div
            className="
            flex 
            flex-row 
            justify-end 
            items-center`
          "
          >
            <span
              className="
              text-lg 
              font-light 
              text-neutral-500
              dark:text-white
              pr-3
            "
            >
              Odd members. One of the members gives two gifts.
            </span>
            <div
              onClick={() => setPlayOprion(1)}
              className={`
              ${playOption === 1 ? 'bg-indigo-500' : ' '} 
              ${playOption === 1 ? 'border-indigo-500' : 'border-gray-300'}
              ${playOption === 1 ? 'text-white' : 'text-gray-300'}
              border-2
              flex
              justify-center
              h-7
              w-7
              items-center
            `}
            >
              <FaCheck />
            </div>
          </div>
          <div className="flex flex-row justify-end items-center">
            <span
              className="
              pr-3
              text-lg 
              font-light 
              text-neutral-500
              dark:text-white
            "
            >
              Odd members. One will not receive a gift.
            </span>
            <div
              onClick={() => setPlayOprion(2)}
              className={`
              ${playOption === 2 ? 'bg-indigo-500' : ' '} 
              ${playOption === 2 ? 'border-indigo-500' : 'border-gray-300'}
              ${playOption === 2 ? 'text-white' : 'text-gray-300'}
              border-2
              flex
              justify-center
              h-7
              w-7
              items-center
            `}
            >
              <FaCheck />
            </div>
          </div>
        </div>

      <div
        className={`
          ${isAdmin ? '' : 'hidden'} 
          block
          w-full 
          flex-row
          flex
          px-5
          pb-10
        `}
      >

        <Button onClick={onStart} label={finished ? 'Alredy started' : 'Start'} disabled={finished} type='primary' />
      </div>
    </div >
  );
}

export default RoomInfo;