import { CardContentProps, CardHeaderProps, CardProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Icon } from "iconsax-react";
import { ComponentClass, CSSProperties, FunctionComponent, ReactNode } from "react";

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

export interface MainCardProps extends Omit<CardProps, 'title' | 'content'> {
    cardTitle?: ReactNode | string;
    subHeader?: ReactNode | string;
    darkTitle?: boolean;
    content?: boolean;
    contentSX?: CardContentProps['sx'];
    divider?: boolean;
    dividerSX?: CSSProperties;
    secondary?: CardHeaderProps['action'];
    border?: boolean;
    shadow?: string;
  }