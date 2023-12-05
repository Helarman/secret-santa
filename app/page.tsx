import getRooms, {
  IRoomsParams
} from "@/app/actions/getRooms";
import getCurrentUser from "@/app/actions/getCurrentUser";
import OwnedRooms from "./rooms/owned/OwnedRooms";
import YourRooms from "./rooms/your/YourRooms";

interface HomeProps {
  searchParams: IRoomsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const rooms = await getRooms(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <>
      <OwnedRooms

        rooms={rooms}
        currentUser={currentUser}
      />
      <YourRooms
        rooms={rooms}
        currentUser={currentUser}
      />
    </>
  )
}

export default Home;
