import getRooms, {
    IRoomsParams
  } from "@/app/actions/getRooms";
  import getCurrentUser from "@/app/actions/getCurrentUser";
  import YourRooms from "./YourRooms";
  
  interface YourPageProps {
    searchParams: IRoomsParams
  };
  
  const Home = async ({ searchParams }: YourPageProps) => {
    const rooms = await getRooms(searchParams);
    const currentUser = await getCurrentUser();
  
    return (
      <>
        <YourRooms
          rooms={rooms}
          currentUser={currentUser}
        />
      </>
    )
  }
  
  export default Home;
  