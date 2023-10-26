import Image from 'next/image'
import HeaderHome from '@/app/components/header_home'

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <div className="flex justify-center items-center min-h-screen ">
        <div className="shadow-lg p-4 flex ">
          <div className="flex flex-col justify-center p-1">
            <h5 className="mb-2 text-xl font-medium text-primary">
              Connectiedag!
            </h5>
            <p className="">
              Op 24 oktober 2023 is het weer de connectiedag!
              <br />We gaan leuke activiteiten aanmelden, dus meld je aan.
            </p>
            <p className="text-xs p-2">
              Locatie: Antes hoofdkantoor
            </p>
            <button className="text-[#fcfcfc] bg-primary py-1 rounded ">
              Meld je aan!
            </button>
          </div>
          <div className=" w-full h-full ">
            <img
              className="w-full h-full object-cover "
              src="/handdag.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
