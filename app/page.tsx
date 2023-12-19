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
  const currentUser = await getCurrentUser();

  const ownedRooms = await getRooms({ userId: currentUser?.id });

  const rooms = await getRooms({ memberId: currentUser?.id });
  
  return (
    <>
      <OwnedRooms
        rooms={ownedRooms}
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
