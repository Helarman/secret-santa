'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';

import useRentModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";
import Input from '../inputs/Input';
import Heading from '../Heading';
import ImageSelect from '../inputs/ImageSelect';
import Textarea from '../inputs/Textarea';


const RentModal = () => {


  const router = useRouter();
  const rentModal = useRentModal();


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
      imgNum: 1,
      title: '',
      description: '',
    }
  });

  const imgNum = watch('imgNum');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    axios.post('/api/rooms', data)
      .then(() => {
        toast.success('Room created!');
        router.refresh();
        reset();
        rentModal.onClose();
      })
      .catch(() => {
        toast.error('Error.');
      })
  }


  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title='Create new room'
      />
      <div
        className="
          flex
          md:flex-row
          flex-col
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        <div className='w-full md:w-8/12 flex flex-col justify-between'>
          <div>
            <Input
              id="title"
              label="Title"
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="md:mt-0 mt-3">
            <Textarea
              id="description"
              label="Description"
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="md:mt-0 mt-3">
            <Input
              id="title"
              label="Members"
              register={register}
              errors={errors}
              
            />
          </div>
        </div>
        <div className='w-full md:w-4/12 flex flex-col justify-between '>
          <ImageSelect
            onChange={(value) => setCustomValue('imgNum', value)}
            value={imgNum}
          />
        </div>
      </div>
    </div>
  )


  return (
    <Modal
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
