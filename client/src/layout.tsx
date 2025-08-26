 

import  { type ReactNode } from 'react';
import NavbarComponent from './components/navbar';

 const Layout =({children}:{children:ReactNode}) =>{
     return(
         <>
         <div className=''>
         </div>
         <main className=' flex flex-col w-screen h-screen '>
            <NavbarComponent/>
            <div >{children}</div>
            </main>
         </>
     )
 }
 
 export default Layout;