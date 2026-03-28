import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { AiChatPanel } from "@/components/chat/AiChatPanel";

export const metadata = {
  title: "Crickonix",
  description: "Cricket Analytics Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="h-screen flex-1 overflow-hidden">
            <Topbar />
            <main className="h-[calc(100vh-57px)] overflow-y-auto p-4">{children}</main>
          </div>
        </div>
        <AiChatPanel />
      </body>
    </html>
  );
}
