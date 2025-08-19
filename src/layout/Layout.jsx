import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import icons from '../images/icons.png'

export default function Layout() {
    return (
        <section className='overflow-x-hidden flex gap-[2.604vw] relative'>
            <div className='w-[300px] pt-[2.604vw] flex flex-col items-center bg-[#0085F9] h-[100vh] max-h-[100%]'>
                <Header />
                <Navbar />
            </div>
            <Outlet />
            <img className='absolute bottom-0 w-[15.625vw]' src={icons} alt="" />
        </section>
    )
}
