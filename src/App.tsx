import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { useAppDispatch, useAppSelector } from './ReduxToolkit/hooks';
import { createUsers } from './ReduxToolkit/usersReducer';
import { User } from './components/User';
import { Form } from './components/Form';
import { createToken } from './ReduxToolkit/adminReducer';
import { LocalLink } from './components/LocalLink';

function App() {
  const [countUsers, setCountUsers] = useState<number>(6)
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const users = useAppSelector(state => state.users)
  const admin = useAppSelector(state => state.admin)
  const dispatch = useAppDispatch()

  const setCountUsersHandler = () => {
    setCountUsers(countUsers + 6)
    setPage(page + 1)
  }

  useEffect(() => {
    setIsLoading(true)
      const getData = async () => {
        const api = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
        let data = await api.json()
        dispatch(createUsers(data))
        setIsLoading(false)
      }
      setTimeout(() => {
        getData()
      }, 100)

    if (!admin.token) {
      const getToken = async () => {
        const api = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
        let data = await api.json()
        dispatch(createToken(data))
      }
      getToken()
    }

  }, [page])

  return (
    <div className='font-nunito'>
      {isLoading === true && 'Loading...'
      }
      <Header />
      <main className='max-w-screen-xl m-auto'>
        <div className='min-h-[500px] md:h-[650px] w-full p-4 bg-bgMainHeader flex align-center justify-center'>
          <div className='flex flex-col items-center justify-center max-w-[380px] text-center'>
            <h1 className='text-white mb-[21px] text-4xl'>Test assignment for front-end developer</h1>
            <p className='text-white mb-8'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <LocalLink  text='Sign Up' link='#signup'/>
          </div>
        </div>
        <div className='mt-35 text-center  px-4 sx:px-8' id='users'>
          <h1 className='text-4xl mb-12.5'>Working with GET request</h1>
          <div className='grid grid-cols-1 sx:grid-cols-2 md:grid-cols-3 gap-5 sx:gap-4 md:gap-[29px] mb-12.5'>
            {(users && users.users && users.users.map((user, index) => {
              return (
                <User key={index}
                  photo={user.photo}
                  name={user.name}
                  position={user.position}
                  email={user.email}
                  phone={user.phone}
                />
              )
            }))
            }
            {isLoading === true && Array(6).fill(0).map((item, index) => {
              return (
                <div key={index} className='p-5 bg-white flex flex-col rounded-xl items-center justify-center'>
                  <div className='loader'></div>
                </div>
              )
            })
            }

          </div>
          {
            users && countUsers < users.total_users
              ? <Button type='yellow' text='Show more' func={setCountUsersHandler} />
              : ''
          }
        </div>
        <div className='mt-35 text-center m-auto' id='signup'>
          <h1 className='text-4xl mb-12.5'>Working with POST request</h1>
          <Form token={admin.token} />
        </div>
      </main>
    </div>
  )
}

export default App;
