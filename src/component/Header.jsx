import Profile from '../assets/images/profile.png'
const Header = () => {
  return (
    <header className='flex container mx-auto justify-between items-center border-b-2 p-4'>
        <h3 className='text-3xl font-semibold'>Knowledge Cafe</h3>
      <div className='w-12'>
        <img src={Profile} alt="" />
      </div>
    </header>
  )
}

export default Header;
