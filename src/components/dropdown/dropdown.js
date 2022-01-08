import {FaAngleDown} from "react-icons/fa"
import { StyledDropdown } from "./dropdownelements";

const Dropdown = ({toggle}) => {
    return (
        <StyledDropdown>
            <div className="wrapper">
                <FaAngleDown className="dropdown" onClick={toggle}/>
            </div>
        </StyledDropdown>
    );
};

export default Dropdown;