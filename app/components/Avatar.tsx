'use client';

import Image from "next/image";
import { useCallback, useState } from "react";

interface AvatarProps {
  src: string| null | undefined
  title?: string
  size: number;
  hover?: boolean
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  size,
  title
}) => {
  return (

    <Image
      title={title}
      className="rounded-full"
      height={size}
      width={size}
      alt="Avatar"
      src={src || '/images/placeholder.jpg'}
    />

  );
}

export default Avatar;