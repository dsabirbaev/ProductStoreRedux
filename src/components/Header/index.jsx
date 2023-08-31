
import { NavLink, Link } from "react-router-dom";
import {Button} from "flowbite-react";
import "./style.scss";


const index = () => {
    return (
        <header>
            <div className="container">
                <nav className="h-[80px] bg-teal-200 flex items-center justify-between px-2">
                    <Link to="/" className="font-bold text-[25px]">LOGO</Link>
                    <ul className="flex items-center gap-x-20 tetx-[18px] font-semibold">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                    </ul>
                    <Button color="success"><NavLink to="/login">Login</NavLink></Button>
                    
                </nav>
            </div>
        </header>
    );
};

export default index;