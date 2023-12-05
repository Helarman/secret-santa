import getRooms, {
    IRoomsParams
  } from "@/app/actions/getRooms";
  import getCurrentUser from "@/app/actions/getCurrentUser";
  import OwnedRooms from "./OwnedRooms";
  
  interface OwnedRoomsProps {
    searchParams: IRoomsParams
  };
  
  const Home = async ({ searchParams }: OwnedRoomsProps) => {
    const rooms = await getRooms(searchParams);
    const currentUser = await getCurrentUser();
  
    return (
      <>
        <OwnedRooms
          rooms={rooms}
          currentUser={currentUser}
        />
      </>
    )
  }
  
  export default Home;
  