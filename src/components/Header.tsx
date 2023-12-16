import logo from '../logo.svg';
import { Button } from './Button';

export const Header = () => {
    return (
        <header className='w-full py-[13px]'>
        <div className='max-w-screen-xl m-auto flex justify-between align-center'>
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className='flex gap-2.5'>
            <button className='w-25 py-1 bg-primary hover:bg-primary-hover transition rounded-4xl'>Users</button>
            <Button type='yellow' text='Sign Up' />
          </div>
        </div>
      </header>
    )
}