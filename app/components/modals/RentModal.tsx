'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from "react";

import useRentModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';


const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
 
  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      imageSrc: '',
      title: '',
      description: '',
    }
  });

  const imageSrc = watch('imageSrc');

  
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/rooms', data)
    .then(() => {
      toast.success('Room created!');
      router.refresh();
      reset();
      rentModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Create new room"
      />
      <div 
        className="
          grid 
          grid-cols-1 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
       <Input
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Create new room!"
      actionLabel='Create'
      onSubmit={handleSubmit(onSubmit)}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
}

export default RentModal;
