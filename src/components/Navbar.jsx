import {useState} from 'react';
import { AiOutlineHome, AiTwotoneCalendar, AiFillProject, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineClass } from 'react-icons/md';
import { GoCommentDiscussion } from 'react-icons/go';
import { HiOutlineSearch} from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineManageAccounts } from 'react-icons/md';
export const navLinks = [
    {
        title:'Home',
        path: '/',
        logo:<AiOutlineHome size={30} className="fill-white" />
    },
    {
        title:'Team',
        path: 'team',
        logo:<AiOutlineTeam size={30}className="fill-white" />,
    },
    {
        title:'Project',
        path: 'project',
        logo:<AiFillProject size={30} className="fill-white" />
    },
    {
        title:'Jadwal',
        path: 'jadwal',
        logo:<AiTwotoneCalendar size={30} className="fill-white" />
    },
    {
        title:'Calendar',
        logo:<AiTwotoneCalendar size={30} className="fill-white" />
    },
    {
        title:'Class',
        logo:<MdOutlineClass size={30} className="fill-white" />,
        gap: 'true',
    },
    {
        title:'Forum',
        logo:<GoCommentDiscussion size={30} className="fill-white" />
    },
    {
        title:'Logout',
        logo:<BiLogOut size={30} className="fill-white" />
    }
];


const Navbar = () => {
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);


    return (
        <nav className="hidden md:block">
            <div className="w-full flex absolute">
                <div className="w-1/2 p-6 flex text-2xl font-semibold">
                        <h1 onClick={() => setOpen(!open)} className={`cursor-pointer duration-200 font-bold text-xl mx-10`}>R</h1>
                        <h1 className="text-white">Home</h1>
                </div>

                <div className="hidden sm:w-1/2 sm:flex justify-end p-6">
                    <div className="bg-gray-100 h-10 rounded-md p-3 flex items-center">
                    <input type="text" className="bg-transparent outline-none h-8 rounded-xl"  />
                    <HiOutlineSearch size={15} />
                    </div>

                    <div className="ml-10 mt-2">
                    <MdOutlineManageAccounts size={28} className="fill-white" />
                    </div>
                </div>
            </div>

            {/* sidebar */}
            <div>
                {/* <BiSolidLeftArrow onClick={() => setOpen(!open)} size={20} className={`absolute cursor-pointer -right-3 top-9 w-7 ${!open && 'rotate-180'}`} /> */}

             <div className="flex gap-x-4 items-center mt-10">
                <h1 className={`${!open && 'scale-0'} text-black origin-left font-medium text-xl duration-200`}>Designer</h1>
            </div>
            <ul className="pt-6">
                {navLinks.map((menu, index) => (
                    <a href={`${menu.path}`}>
                    <li key={index} className={`text-gray-900 text-sm h-14 w-fit flex items-center gap-x-4 cursor-pointer p-4 hover:bg-blue-400 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                        <div>{menu.logo}</div>
                        <h1 className={`mt-2 font-medium mx-1 text-base duration-200 text-white`}>{menu.title}</h1>
                    </li>
                    </a>
                ))}
            </ul>

            </div>
        </nav>
    )
}

export default Navbar