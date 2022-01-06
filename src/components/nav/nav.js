import {FaAngleUp} from "react-icons/fa"
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
import { StyledNav } from "./navElements";
import { NavbarData } from "./navbarData";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const Navigation = ({toggle, isOpen}) => {

    const location = useLocation();

    return (
        <StyledNav isOpen={isOpen}>
            {NavbarData.map((item, index) => {
                if(location.pathname === item.path){
                    let prev;
                    let next;
                    if(item.path !== '/' && item.path !== '/kit4'){
                        prev = NavbarData[index - 1];
                        next = NavbarData[index + 1];
                    } else if (item.path === '/'){
                        prev = NavbarData[index];
                        next = NavbarData[index + 1];
                    } else if (item.path === '/kit4'){
                        prev = NavbarData[index - 1];
                        next = NavbarData[index];
                    };

                    return (
                        <div key={index} className="display">
                            <div className="left">
                                <Link to={prev.path}>
                                    <FaAngleLeft/>
                                </Link>
                            </div>
                            <div className="led">
                                <h2>{item.title}:</h2>
                                <h3>{item.name}</h3>
                            </div>
                            <div className="right">
                                <Link to={next.path}>
                                    <FaAngleRight/>
                                </Link>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            })}

            <FaAngleUp className="up" onClick={toggle}/>
        </StyledNav>
    );
};

export default Navigation;