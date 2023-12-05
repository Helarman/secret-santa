import axios from 'axios';
import { toast } from 'react-hot-toast';

type OnDeleteProps = string;

const RoomDelete: React.FC<OnDeleteProps> = (id) => {

    axios.delete(`/api/rooms/${id}`)
        .then(() => {
            toast.success('Room deleted!');
            window.location.reload();
        })
        .catch(() => {
            toast.error('Error');
        })
    return null;
}

export default RoomDelete;