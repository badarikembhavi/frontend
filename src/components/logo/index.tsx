import { Link } from "react-router-dom";
import {To} from 'history';

import { ButtonBase } from "@mui/material";
import { SxProps } from "@mui/material";

import LogoIcon from "./LogoIcon";
import Logo from "./LogoMain";
import { APP_DEFAULT_PATH } from "../../config";

interface Props {
    reverse?: boolean;
    isIcon?: boolean;
    sx?: SxProps;
    to?: To
}

const LogoSection = ({reverse, isIcon, sx, to}: Props) => (
    <ButtonBase disableRipple component={Link} to={!to ? APP_DEFAULT_PATH: to} sx={sx}>
        {isIcon ? <LogoIcon/>: <Logo reverse={reverse}/>}
    </ButtonBase>
)
export default LogoSection;