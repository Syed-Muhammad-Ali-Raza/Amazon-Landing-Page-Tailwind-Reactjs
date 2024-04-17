import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const HeaderBottom = () => {
    const [showSidebar, setshowSidebar] = useState(false);
    const toggleSidebar = () => {
        setshowSidebar(!showSidebar);
    }
    return (
        <div className='headerBottom bg-[#232f3e] text-white px-2 py-2 '>
            <div className='flex  gap-5 '>
                <div className=' hover:border-2 border-white text-sm'>
                    <span onClick={toggleSidebar}>
                        <MenuIcon />
                    </span>
                    All
                </div>
                <div className=' hover:border-2 border-white text-sm' >
                    Today's Deals
                </div>
                <div className=' hover:border-2 border-white text-sm' >
                    Customer Service
                </div>
                <div className=' hover:border-2 border-white text-sm' >
                    Registry
                </div>
                <div className=' hover:border-2 border-white text-sm' >
                    Gift Cards
                </div>
                <div className=' hover:border-2 border-white text-sm' >
                    Sell
                </div>
            </div>



            {

                showSidebar && (
                    <>
                        \
                        <ClearIcon
                            className='absolute top-2  text-gray-400 rounded-lg bg-black right-[54rem] cursor-pointer'
                            onClick={toggleSidebar}
                        />


                        <div className='sidebar-container h-[100vh] w-[30%] bg-white z-1 top-0 left-0  absolute overflow-auto'>

                            <div className='sidebar-header flex   bg-[#232f3e] gap-4 px-3 item-center py-3 '>
                                <Avatar></Avatar>
                                <p className='font-xl font-bold '>Hello , Sign in</p>
                            </div>
                            <div className='sidebar-content px-4 py-2 text-black ' >
                                
                                <div className='first'>
                                <h3 className='mx-7 font-bold text-xl'>Digital Content & Devices</h3>
                                <ul className='mt-4 mx-7 text-gray-600'>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                        Amazon Music
                                    </li>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                        Kindle E-reader and Books

                                    </li>

                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                        Amazon AppStore

                                    </li>                
                            </ul>

                                </div>
                                <div className='Second'>
                                <h3 className='mx-7 font-bold text-xl'>Shop by Department</h3>
                                <ul className='mt-4 mx-7 text-gray-600'>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                        Electronic
                                    </li>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                       Computers

                                    </li>

                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                      Smart Home

                                    </li>   
                               
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                     Arts & Crafts

                                    </li> 
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                     See More

                                    </li> 

                            </ul>

                                </div>
                                <div className='third'>
                                <h3 className='mx-7 font-bold text-xl'>  
                                 Programs & Features
</h3>
                                <ul className='mt-4 mx-7 text-gray-600'>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    Gift Cards
                                    </li>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    Shop By Interest

                                    </li>

                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    Amazon Live

                                    </li>   
                               
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    International Shopping

                                    </li> 
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    See all

                                    </li> 

                            </ul>

                                </div>
                                <div className='third'>
                                <h3 className='mx-7 font-bold text-xl'>  
                                Help & Settings
                                </h3>
                                <ul className='mt-4 mx-7 text-gray-600  '>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    Your Account
                                    </li>
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    English

                                    </li>

                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    United States

                                    </li>   
                               
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    Customer Service


                                    </li> 
                                    <li className='py-2 hover:bg-slate-300  cursor-pointer'>
                                    Sign in

                                    </li> 

                            </ul>

                                </div>











                             









                            </div>

                            
                        </div>
                    </>

                )
            }
        </div>
    )
}

export default HeaderBottom
