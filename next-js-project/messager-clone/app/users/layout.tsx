import getUsers from "../action/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UseList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <Sidebar >
      <UserList items={users}/>
      <div className="lg:pl-20 h-full">{children}</div>
    </Sidebar>
  );
}
