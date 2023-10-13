import Facebook from '@/app/components/icons/facebook';
import Linkedin from '@/app/components/icons/linkedin';
import Twitter from '@/app/components/icons/twitter';
import Youtube from '@/app/components/icons/youtube';
import Instagram from '@/app/components/icons/instagram';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Over ons ', href: '#' },
  { name: 'Contact', href: '#' },
]

const iconSize = "h-[22px]"
const socialMedia = [
  { name: 'Facebook', icon: <Facebook className={`${iconSize}`}/>, href: '#' },
  { name: 'Linkedin', icon: <Linkedin className={`${iconSize}`}/>, href: '#' },
  { name: 'Twitter', icon: <Twitter className={`${iconSize}`}/>, href: '#' },
  { name: 'Youtube', icon: <Youtube className={`${iconSize}`}/>, href: '#' },
  { name: 'Instagram', icon: <Instagram className={`${iconSize}`}/>, href: '#' },
]

const year = (new Date().getFullYear())

export default function Footer() {
  return (
    <footer className='flex justify-center justify-items-center bg:background shadow-cbs'>
      <nav className='flex flex-col gap-5 p-5 max-w-[1040px] w-full text-base font-font1 text-extra fill-extra'>
        <p className='text-extra'>&copy;{year} Antes</p>
        <hr className='text-extra/50'/>
        <div className='flex flex-col sm:flex-row gap-5 justify-between'>
          <ul className='flex gap-x-10'>
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
          </ul>
          <ul className='flex items-center gap-x-4'>
          {socialMedia.map((item) => (
            <li key={item.name}>
              <a href={item.href} aria-label={item.name}>
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
