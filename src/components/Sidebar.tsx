const Sidebar = () => {
    return (
        <div className="w-52 h-64 border-r border-gray-300 flex flex-col justify-between p-5">
            {/* Top - Sidebar Name */}
            <h2 className="text-xl font-bold text-center">My App</h2>

            {/* Bottom - Nav Links */}
            <nav className="flex flex-col gap-4">
                <a href="#" className=" hover:text-blue-500">Home</a>
                <a href="#" className=" hover:text-blue-500">Profile</a>
                <a href="#" className=" hover:text-blue-500">Settings</a>
            </nav>
        </div>
    );
};

export default Sidebar;
