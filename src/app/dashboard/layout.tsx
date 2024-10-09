import Navbar from '@/modules/DashboardPage/components/Navbar/Navbar';
import Sidebar from '@/modules/DashboardPage/components/Sidebar/Sidebar';

interface ILayoutDashboardProps {
  children: React.ReactNode;
}

export default async function LayoutDashboard({
  children,
}: ILayoutDashboardProps) {
  return (
    <div className="w-screen h-screen  bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
}
