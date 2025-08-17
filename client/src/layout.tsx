 

import  { type ReactNode } from 'react';
import NavbarComponent from './components/navbar';

 const Layout =({children}:{children:ReactNode}) =>{
     return(
         <>
         <div className=''>
         </div>
         <main className=' flex flex-col w-screen h-screen '>
            <NavbarComponent/>
            <div className=' mt-16'>{children}</div>
            </main>
         </>
     )
 }
 
 export default Layout;