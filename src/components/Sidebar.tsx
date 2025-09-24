import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="w-52 h-64 border-r border-gray-300 flex flex-col justify-between p-5">
            {/* Top - Sidebar Name */}
            <h2 className="text-xl font-bold text-center">My App</h2>

            {/* Bottom - Nav Links */}
            <nav className="flex flex-col gap-4">
              
                <Link href="/profile" className=" hover:text-blue-500">Profile</Link>
                <Link href="/settings" className=" hover:text-blue-500">Settings</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
