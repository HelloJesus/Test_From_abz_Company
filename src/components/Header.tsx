import logo from '../logo.svg';
import { Button } from './Button';
import { LocalLink } from './LocalLink';

export const Header = () => {
    return (
        <header className='w-full py-[13px] bg-white'>
        <div className='max-w-screen-xl m-auto flex justify-between align-center'>
          <div>
            <img src={logo} alt="Logo" width='104px' height='26px'/>
          </div>
          <div className='flex gap-2.5'>
            <LocalLink  text='Users' link='#users'/>
            <LocalLink  text='Sign Up' link='#signup'/>
          </div>
        </div>
      </header>
    )
}