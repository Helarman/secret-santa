'use client';

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface MenuItemProps {
  link?: string;
  label: string;
  icon?: IconType;

}

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  label,
  icon: Icon,
}) => {

  const router = useRouter();


  return (
    <li>

      <a href={link} className="pl-10 text-lg py-3 my-3 flex flex-row dark:text-white text-gray-700 hover:border-indigo-500 hover:border-l-8">
        {Icon && (

          <Icon
            size={24}
            className="mr-4"
          />
        )}
        {label}

      </a>

    </li>
  );
}

export default MenuItem;