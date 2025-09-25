import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "../tailwind.css";
import "flowbite/dist/flowbite.css";
import AdminNavbar from "@/components/AdminNavbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin-signin");
  }

  return (
    <div className="p-6">
      <AdminNavbar />
      {children}
    </div>
  );
}
