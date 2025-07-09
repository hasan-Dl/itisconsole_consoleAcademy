import { Link, useLocation } from "react-router-dom";
import icon_dashboard from '../../images/Dashboard.png';
import icon_expenses from '../../images/Exp.png';
import icon_revenue from '../../images/Rev.png';
import select from '../../images/select.png';
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);    

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const pages = [
        { label: "B2C", path: "/expenses/b2c" },
        { label: "B2B", path: "/expenses/b2b" },
        { label: "Другие", path: "/expenses/other" }
    ];

    return (
        <nav className="w-[100%]">
            <ul className="flex flex-col ml-[2.604vw] gap-y-[0.521vw] ">

                {/* Dashboard */}
                <li className={`pl-[1.563vw] w-[100%] flex items-center py-[0.521vw] gap-[0.781vw] ${location.pathname === "/dashboard" ? "bg-[#F3F4FF] rounded-l-[15.625vw]" : ""}`}>
                    <img src={icon_dashboard} alt="Dashboard" className={`h-[1.25vw] ${location.pathname === "/dashboard" ? "" : "invert brightness-0"}`} />
                    <Link
                        to="/dashboard"
                        className={`Montserrat font-medium ${location.pathname === "/dashboard" ? "text-[#0085F9]" : "text-[#FFFFFF]"}`}
                    >
                        Dashboard
                    </Link>
                </li>

                {/* Доходы */}
                <li
                    className="user_select pl-[1.563vw] flex items-center gap-[0.781vw] relative cursor-pointer"
                    onClick={handleClick}
                >
                    <img src={icon_expenses} alt="Доходы" className="h-[1.25vw] invert brightness-0" />
                    <span className="Montserrat text-[#FFFFFF] font-medium">Доходы</span>
                    <img
                        src={select}
                        alt=""
                        className={`transition-transform duration-[0.5s] 
                        ${open ? "rotate-180 opacity-100" : "rotate-0 opacity-0"}`}
                    />
                </li>

                {/* Подменю с анимацией */}
                <ul
                    className={`ml-[2.083vw] pl-[1.042vw] text-white border-l border-white overflow-hidden transition-all duration-[0.5s]  
                    ${open ? "max-h-[15.625vw] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    {pages.map(sub => (
                        <li
                            key={sub.path}
                            className={`pl-[1.042vw] py-[0.521vw] ${location.pathname.startsWith(sub.path)
                                ? "bg-[#F3F4FF] rounded-l-[15.625vw] text-[#0085F9]" : ""}`}
                        >
                            <Link to={sub.path} className="Montserrat text-[0.729vw] font-medium block">
                                {sub.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Расходы */}
                <li className={`pl-[1.563vw] flex items-center py-[0.521vw] gap-[0.781vw] ${location.pathname === "/revenue" ? "bg-[#F3F4FF] rounded-l-[15.625vw]" : ""}`}>
                    <img src={icon_revenue} alt="Расходы" className={`h-[1.25vw] ${location.pathname === "/revenue" ? "" : "invert brightness-0"}`} />
                    <Link
                        to="/revenue"
                        className={`Montserrat font-medium ${location.pathname === "/revenue" ? "text-[#0085F9]" : "text-[#FFFFFF]"}`}
                    >
                        Расходы
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
