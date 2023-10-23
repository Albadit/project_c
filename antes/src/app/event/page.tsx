import Image from 'next/image'
import HeaderHome from '@/app/components/header_home'

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-2 mx-auto rounded-lg shadow-lg">
          <div className="p-1 w-2/3 flex flex-col justify-center text-center">
            <h5 className="mb-2 text-xl font-medium text-red-600">
              Connectiedag!
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Op 24 oktober 2023 is het weer de connectiedag!
              <br />We gaan leuke activiteiten aanmelden, dus meld je aan.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Locatie: Antes hoofdkantoor
            </p>
          </div>
          <div className="p-3 w-full h-full rounded-t-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/handdag.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
