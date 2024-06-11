import React from 'react';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center bg-[#000000CC] transition-all ease-in-out duration-150 z-50">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="animate-spin w-12 h-12 rounded-full border-4 border-white border-t-4 border-t-blue-600"></div>
        <span className="text-white">Loading...</span>
      </div>
    </div>
  );
}