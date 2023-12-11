'use client';

import { IconType } from "react-icons";

type ButtonType = 'primary' | 'secondary' | 'warning' | 'success' | 'danger';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  rounded?: boolean;
  type: ButtonType;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  rounded,
  type,
  icon: Icon,
}) => {

  const backgrounds = {
    primary: "bg-indigo-500",
    secondary: "bg-gray-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    success: "bg-green-500",
  };

  const background = backgrounds[type];

  const hovers = {
    primary: "hover:bg-indigo-500 hover:text-white",
    secondary: "hover:bg-gray-500 hover:text-white",
    warning: "hover:bg-amber-500 hover:text-white",
    danger: "hover:bg-red-500 hover:text-white",
    success: "hover:bg-green-500 hover:text-white",
  };

  const hover = hovers[type];

  const borders = {
    primary: "border-indigo-500",
    secondary: "border-gray-500",
    warning: "border-amber-500",
    danger: "border-red-500",
    success: "border-green-500",
  };

  const border = borders[type];

  const colors = {
    primary: "text-indigo-500",
    secondary: "text-gray-500",
    warning: "text-amber-500",
    danger: "text-red-500",
    success: "text-green-500",
  };

  const color = colors[type];
  


  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        
        transition
        w-full
        ${rounded ? 'rounded-full' : ''}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
        border-2 
        ${border}
        ${hover}
        ${outline ? 'bg-transparent' : background}
        ${outline ? hover : 'hover:opacity-80'}
        ${outline ? color : 'text-white'}
      `}
    >
      {Icon && (
        <Icon
        size={24}
        className="
          absolute
          left-4
          top-3
        "
        />
      )}
      {label} 
    </button>
  );
}

export default Button;