import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import AppSidebar from "@/app/(dashboard)/_components/AppSidebar";
import Header from "@/app/_components/Header";

interface DashboardPageProps {
  children: ReactNode;
}

const DashboardPage = ({ children }: DashboardPageProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
};

export default DashboardPage;
