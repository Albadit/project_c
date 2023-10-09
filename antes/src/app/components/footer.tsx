import Facebook from '@/app/components/icon/facebook';
import Linkedin from '@/app/components/icon/linkedin';
import Twitter from '@/app/components/icon/twitter';
import Youtube from '@/app/components/icon/youtube';
import Instagram from '@/app/components/icon/instagram';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Over ons ', href: '#' },
  { name: 'Contact', href: '#' },
]

const socialMedia = [
  { name: 'Facebook', icon: <Facebook className="h-full"/>, href: '#' },
  { name: 'Linkedin', icon: <Linkedin className="h-full"/>, href: '#' },
  { name: 'Twitter', icon: <Twitter className="h-full"/>, href: '#' },
  { name: 'Youtube', icon: <Youtube className="h-full"/>, href: '#' },
  { name: 'Instagram', icon: <Instagram className="h-full"/>, href: '#' },
]

export default function Footer() {
  const year = (new Date().getFullYear())

  return (
    <footer className='flex justify-center justify-items-center bg:background shadow-cbs'>
      <nav className='flex flex-col gap-5 p-5 max-w-[1040px] w-full'>
        <div>
          <p className='text-extra'>&copy;{year} Antes</p>
          
        </div>
        <hr className='text-extra'/>
        <div className='flex flex-col sm:flex-row gap-5 justify-between'>
          <ul className='flex gap-x-10'>
          {navigation.map((item) => (
            <li>
              <a key={item.name} href={item.href} className="text-base font-font1 leading-6 text-extra">
                {item.name}
              </a>
            </li>
          ))}
          </ul>
          <ul className='flex items-center gap-x-4'>
          {socialMedia.map((item) => (
            <li>
              <a key={item.name} href={item.href} className="h-[22px] text-base font-font1 leading-6 fill-extra">
                {item.icon}
              </a>
            </li>
          ))}
          </ul>
        </div>
      </nav>
    </footer>
  )
}
