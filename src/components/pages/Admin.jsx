import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import React, { useState, useEffect} from 'react'
import { getAllBasic, deleteBasic, editBasic } from '../../Service/api';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const user = {
  name: 'Admin',
  email: 'Admin@example.com',
  imageUrl: 
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '/', current: false},
  { name: 'Membership', href: '/admin', current: true },
  { name: 'Programs', href: '/trainingdata', current: false },
  { name: 'Instructors', href: '/instructorData', current: false },

]
const userNavigation = [
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Admin() {

 
    const [basicPlan, setbasicPlan] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      getBasic();
    }, []);
    
    const getBasic = async () => {
      const response = await getAllBasic();
      console.log(response)
      setbasicPlan(response.data);
      console.log(basicPlan)
    }
    
    const deleteBasicId = async (id) =>{
      await deleteBasic(id)
      //rerender the Record after deletion
      const response = await getAllBasic()
      setbasicPlan(response.data)
    }
   
  return (
    <>
     <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img  
                        className="h-10 w-32 pl-10"
                        src="https://i0.wp.com/www.fightbookmma.com/wp-content/uploads/2022/07/fight-scout-logo.png?fit=1670%2C657&ssl=1" 
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:pt-20  md:px-8">
          <Link className='w-32 mb-5 text-gray-200 font-semibold bg-amber-600 rounded-lg float-right text-decoration-none p-2 text-center hover:scale-105 duration-300'
          to={'/createPlan'}>Create New</Link>    
            <div  className='w-full flex flex-col md:px-10 py-8 h-screen align-left'>
              <div className='w-full flex flex-col min-h-[50vh] justify-center items-center'>
                <h1 className='text-[#262424] font-bold text-3xl font-sans'>Basic Plan</h1>
                  <table class='w-full text-center overflow-hidden overflow-y-scroll mt-8'>
                    <thead class="border-b bg-gray-600 grid-cols-7 ">
                      <tr>
                        <th className='text-sm text-left  text-gray-200 md:px-6 md:py-4 sm:pl-2'>Program</th>
                        <th className='text-sm text-left  text-gray-200 px-6 py-4'>Monthly</th>
                        <th className='text-sm text-left  text-gray-200 px-6 py-4'>Quarterly</th>
                        <th className='text-sm text-left  text-gray-200 px-3 py-4'>Half-Yearly</th>
                        <th className='text-sm text-left  text-gray-200 px-5 py-4'>Yearly</th>
                        <th className='text-sm text-left  text-gray-200 px-8 py-4'>Inclusion</th>
                        <th className='text-sm text-left  text-gray-200 px-6 py-4'>Action</th>
                      </tr>
                    </thead>
                  </table>       
                <tbody className='sm:text-sm'>
                {basicPlan.map((data) =>(
                    <tr className='bg-white border-b grid grid-cols-7 md:pl-5 sm:pl-2 pt-4 border'>                       
                      <td className='text-left py-4 font-semibold text-md text-gray-900'>{data.name}</td>
                      <td className='text-left md:px-3  py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{data.monthly}</td>
                      <td className='text-left md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{data.quarterly}</td>
                      <td className=' text-left md:px-7 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{data.halfyearly}</td>
                      <td className='text-left md:pl-7 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{data.yearly}</td>
                      <td className='text-left md:ml-15 py-4 whitespace-wrap text-sm font-medium text-gray-900'>{data.inclusion}</td>
                      <td className='text-left flex md:px-10 flex-col gap-y-1 mb-3'>
                      <Link className='sm:px-2 md:px-3 h-8 pt-1 text-white text-sm font font-semibold bg-gray-500 rounded-lg text-decoration-none hover:scale-105 duration-300' to={`/edit/${data.id}`}>Edit</Link>
                      <button className='md:px-3 h-8  text-white text-sm font font-semibold bg-amber-600 rounded-lg hover:scale-105 duration-300' onClick={()=> deleteBasicId(data.id)}>Delete</button>
                    </td>                
                  </tr>
                  ))
                  }
                </tbody> 
              </div>     
            </div>  
          </div>
        </main>
      </div>
      </>
      )
      }























    
