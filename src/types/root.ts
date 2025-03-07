import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Icon } from "iconsax-react";
import { ComponentClass, FunctionComponent } from "react";

export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
}

export type OverrideIcon = 
| (OverridableComponent<SvgIconTypeMap<{},'svg'>> & {
    muiName: string;
})

| ComponentClass<any>
| FunctionComponent<any>
| Icon

export interface GenericCardProps {
    title?: string;
    primary?: string | number | undefined;
    secondary?: string;
    content?: string;
    image?: string;
    dateTime?: string;
    iconPrimary?: OverrideIcon;
    color?: string;
    size?: string;
}