import React, { useState } from "react";
import LocationPin from "./icons/location_pin";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className=" bg-secondary/75 text-[#ffffff] active:bg-secondary
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Maak een event aan
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#ffffff] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-[#d1d5db] rounded-t ">
                  <h3 className="text-3xl font=semibold">Event Info</h3>
                  <button
                    className="bg-transparent border-0 text-[#000000] float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-[black] opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-center overflow-hidden">
                  <form className="bg-[#e5e7eb30]  shadow-md rounded px-8 pt-6 pb-8 w-full">
                  <div className="py-2 items-start">
                      <label className="flex text-[#000000] text-sm font-bold mb-1">
                          Titel
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 text-[#000000]" />
                    </div>
                    <div className="py-2 items-start">
                      <label className="items-center flex box-border text-[#000000] text-sm font-bold mb-1">
                        Beschrijving
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 text-[#000000]"  />
                    </div>
                    <div >
                    <label className="flex text-[#000000] text-sm font-bold mb-1">
                      Begin van het event
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-1 text-[#000000]"
                      id="event"
                      type="datetime-local"
                      name="eventdate"
                    />
                    </div>
                    <div className="py-2">
                    <label className="block text-[#000000] text-sm font-bold mb-1">
                      Einde van het event
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-1 text-[#000000]"
                      id="event"
                      type="datetime-local"
                      name="eventdate"
                    />
                    </div>
                    <div className="py-2">
                      <label className="flex text-[#000000]text-sm font-bold mb-1">
                         Locatie 
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 text-black" />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#000000] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Sluiten
                  </button>
                  <button
                    className="text-[#000000] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Bevestig
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;


