import getUsers, {IUsersParams} from "../actions/getUsers";
import TestClient, {AddMemberProps} from "./TestClient";

interface UsersPageProps {
  searchParams: IUsersParams
};

type UsersProps = AddMemberProps;

const Home = async ({ searchParams }: UsersPageProps) => {

  const users = await getUsers(searchParams)

  return (
    <TestClient users={users as any} />
  )
}

export default Home;
