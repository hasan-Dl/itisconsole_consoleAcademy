import console from '../../images/Console_icon.png'
import profile from '../../images/profile.png'

export default function Header() {
  return (
    <header className='flex flex-col items-center gap-y-[1.042vw]'>
      <img src={console} className='object-cover' alt="" />
      <div className='flex items-center gap-[1.042vw] py-[1.042vw]'>
        <img
          src={profile}
          className='w-[2.448vw] h-[2.448vw] rounded-[100%] border-[0.052vw] border-[#FFFF] bg-[#9548F3]'
          alt=""
        />
        <div className='flex flex-col gap-y-[0.156vw]'>
          <h1 className='text-[#FFFFFF] text-[0.97vw] Source'>Masrur</h1>
          <p className='Montserrat text-[#E2E2E2] text-[0.76vw]'>masrur@email.com</p>
        </div>
      </div>
    </header>
  )
}
