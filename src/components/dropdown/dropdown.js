import {FaAngleDown} from "react-icons/fa"
import { StyledDropdown } from "./dropdownelements";

const Dropdown = ({toggle}) => {
    return (
        <StyledDropdown>
            <FaAngleDown className="dropdown" onClick={toggle}/>
        </StyledDropdown>
    );
};

export default Dropdown;