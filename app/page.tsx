import Container from "@/app/components/Container";
import RoomCard from "./components/rooms/RoomCard";
import EmptyState from "@/app/components/EmptyState";

import getRooms, { 
  IRoomsParams
} from "@/app/actions/getRooms";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import PropertiesClient from "./properties/PropertiesClient";
import UserMenu from "./components/sidebar/UserMenu";

interface HomeProps {
  searchParams: IRoomsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const rooms = await getRooms(searchParams);
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState />
        <UserMenu/>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient
        rooms={rooms}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default Home;
