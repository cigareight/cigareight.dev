import { useState } from 'react';
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { BsNewspaper } from 'react-icons/bs';


const Test = () => {
    const [active, setActive] = useState(0);


    const menu  = [
        {name:'Home', icon:<AiOutlineHome size={30} />, dis:'translate-x-0'},
        {name:'Blog', icon:<BsNewspaper size={30} />, dis:'translate-x-16'},
        {name:'hai', icon:<AiOutlinePlusCircle size={30} />, dis:'translate-x-32'},
        {name:'Setting', icon:<BsNewspaper size={30} />, dis:'translate-x-48'},
        {name:'Account', icon:<AiOutlineHome size={30} />, dis:'translate-x-64'},
    ];


    return (
        <>
        <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
            <ul className="flex relative">
                    {menu.map((menu, i) => (
                                <li key={i} className="w-16">
                                    {active}
                                    <a className="flex flex-col text-center pt-6" onClick={() => setActive(i)}>
                                        <div className={`cursor-pointer duration-300 ${i = active && "mt-6 text-white"}`}>
                                            {menu.icon}
                                        </div>
                                        <span className={`${active === i ? "translate-y-4 duration-500 opacity-100" : "opacity-0 translate-y-10"}`}>{menu.name}</span>
                                    </a>
                                </li>
                    ))}
                {/* <span className={`bg-rose-800 duration-300 ${menu[active]} border-4 border-gray-900 h-18 w-18 absolute -top-5 rounded-full`}>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow"></span>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow"></span>

               

                </span> */}
            </ul>
        </div>
        </>
    )
}

export default Test;