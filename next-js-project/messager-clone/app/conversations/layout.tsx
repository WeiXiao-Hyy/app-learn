import getConversations from "../action/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="lg:pl-20 h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
