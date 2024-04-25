import React from "react";

const NotFound = () => {
  return (
    <main className="bg-m-blue h-screen w-full flex justify-center items-center">
      <div className="bg-white w-full sm:max-w-96 py-4 px-8 rounded-lg flex flex-col justify-center text-red-400">
        <h1 className="text-3xl text-center">404</h1>
        <h1 className="text-2xl text-center">Page Not Found </h1>
        <h1 className="text-xl underline text-center">Go To Home </h1>
      </div>
    </main>
  );
};

export default NotFound;
