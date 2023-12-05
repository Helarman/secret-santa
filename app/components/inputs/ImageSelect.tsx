'use client';

import { useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface ImageSelectProps {
  value: number;
  onChange: (value: number) => void;
}

const ImageSelect: React.FC<ImageSelectProps> = ({
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    if (value === 15) {
      onChange(1)
    }
    else {
      onChange(value + 1);
    }
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      onChange(15);
    }
    else {
      onChange(value - 1);
    }
  }, [onChange, value]);
  return (


    <div className="w-full">
      <div className="w-full">
        <div className="flex justify-center w-full">
          <div className="w-full mx-auto block">
            <img
              alt="..."
              src={`/images/cards/card-${value}.png`}
              className="h-auto mx-auto"
            />
          </div>

        </div>
        <div className="flex justify-between mt-6">
          <div className="w-5/12">
            <button
              onClick={onReduce}
              className="
                flex
                justify-center
                inline-block 
                outline-none 
                focus:outline-none 
                relative
                p-3
                text-indigo-500
                border-indigo-500
                border-2
                hover:text-white
                hover:bg-indigo-500
                w-full
              "
            >
              <FaArrowLeft className="w-10 h-10" />
            </button>
          </div>
          <div className="w-5/12">
            <button onClick={onAdd}
              className="
                flex
                justify-center
                w-full
                inline-block 
                outline-none 
                focus:outline-none 
                relative
                p-3
                text-indigo-500
                border-indigo-500
                border-2
                hover:text-white
                hover:bg-indigo-500
              "
            >
              <FaArrowRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ImageSelect;