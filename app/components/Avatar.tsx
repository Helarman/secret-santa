'use client';

import Image from "next/image";
import { useCallback, useState } from "react";

interface AvatarProps {
  src: string | null | undefined;
  size: number;
  hover?: boolean
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  size,
  hover,
  children
}) => {
  const [isShow, setIsShow] = useState(false);
  return (

    <Image
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="rounded-full"
      height={size}
      width={size}
      alt="Avatar"
      src={src || '/images/placeholder.jpg'}
    />

  );
}

export default Avatar;