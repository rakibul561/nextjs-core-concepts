"use client"

import { useRouter } from "next/navigation";

const HomePage = () => {
   

  const router = useRouter();

  const handleNavigation = () =>{
     router.push("/dashboard")
  }


  return (
    <div className="text-5xl text-center">
      <h1 className=" text-5xl text-center my-10"> WellCome to NextJs Home Page</h1>
      <button onClick={handleNavigation}>
        DashBoard
      </button>
    </div>
  );
};

export default HomePage;