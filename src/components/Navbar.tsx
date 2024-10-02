import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex gap-5 justify-center items-center my-5'>
            <Link to="/">
                <p className='text-slate-500 font-bold mx-5 cursor-pointer'>Home</p>
            </Link>
            <Link to="/about">
                <p className='text-slate-500 font-bold mx-5 cursor-pointer'>About</p>
            </Link>
            <Link to="/user">
                <p className='text-slate-500 font-bold mx-5 cursor-pointer'>User</p>
            </Link>
        </div>
    )
}

export default Navbar