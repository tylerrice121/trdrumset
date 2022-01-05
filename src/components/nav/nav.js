import {FaAngleUp} from "react-icons/fa"
import { StyledNav } from "./navElements";


const Navigation = ({toggle, isOpen}) => {
    return (
        <StyledNav isOpen={isOpen} onClick={toggle}>
            <h1>HEY!</h1>
            <FaAngleUp className="up"/>
        </StyledNav>
    );
};

export default Navigation;