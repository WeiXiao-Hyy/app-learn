import getCurrentUser from "@/app/action/getCurrentUser";
import MobileFooter from "./MobileFooter";
import { DesktopSidebar } from "./DesktopSidebar";

async function Sidebar({children}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!}/>
      <MobileFooter/>
      <main className="lg:pl-30 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;