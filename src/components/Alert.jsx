import React from 'react';

export default function Alert({ msg, setMsg }) {
  const closeAllert = () => {
    setMsg(null);
  };

  return (
    <div
      id="alert"
      className="fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center bg-[#000000CC] transition-all ease-linear duration-300 z-50"
    >
      <div className="bg-white h-fit flex flex-col items-center justify-center gap-y-7 rounded-[2px] px-12 pt-10 pb-8">
        <p className="font-bold text-brown text-xl text-center">{msg ? msg : 'Periksa koneksi anda'}</p>
        <button
          id="btn-allert"
          className="bg-blue-600 text-white rounded-[2px] px-7 py-2 hover:bg-blue-700 pointer-events-auto"
          type="button"
          onClick={() => {
            closeAllert();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}