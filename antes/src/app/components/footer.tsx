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

const iconSize = "[22px]"
const socialMedia = [
  { name: 'Facebook', icon: <Facebook className={`h-${iconSize}`}/>, href: '#' },
  { name: 'Linkedin', icon: <Linkedin className={`h-${iconSize}`}/>, href: '#' },
  { name: 'Twitter', icon: <Twitter className={`h-${iconSize}`}/>, href: '#' },
  { name: 'Youtube', icon: <Youtube className={`h-${iconSize}`}/>, href: '#' },
  { name: 'Instagram', icon: <Instagram className={`h-${iconSize}`}/>, href: '#' },
]

const year = (new Date().getFullYear())

export default function Footer() {
  return (
    <footer className='flex justify-center justify-items-center bg:background shadow-cbs'>
      <nav className='flex flex-col gap-5 p-5 max-w-[1040px] w-full'>
        <p className='text-extra'>&copy;{year} Antes</p>
        <hr className='text-extra/50'/>
        <div className='flex flex-col sm:flex-row gap-5 justify-between'>
          <ul className='flex gap-x-10'>
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base font-font1 text-extra">
                {item.name}
              </a>
            </li>
          ))}
          </ul>
          <ul className='flex items-center gap-x-4'>
          {socialMedia.map((item) => (
            <li key={item.name}>
              <a href={item.href} aria-label={item.name} className="text-base font-font1 fill-extra">
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
