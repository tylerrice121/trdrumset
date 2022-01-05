import {FaAngleUp} from "react-icons/fa"
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
import { StyledNav } from "./navElements";


const Navigation = ({toggle, isOpen}) => {
    return (
        <StyledNav isOpen={isOpen} onClick={toggle}>
            <div className="display">
                <div className="left">
                    <FaAngleLeft/>
                </div>
                <div className="led">
                    <h2>kit 1:</h2>
                    <h3>Modern Pop</h3>
                </div>
                <div className="right">
                    <FaAngleRight/>
                </div>
            </div>
            <FaAngleUp className="up"/>
        </StyledNav>
    );
};

export default Navigation;