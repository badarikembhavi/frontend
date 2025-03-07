import { ReactNode } from "react";
import { GenericCardProps } from "./root";
import { ChipProps } from "@mui/material";

export type NavItemType = {
    breadcrumbs?: boolean;
    caption?: ReactNode | string;
    children?: NavItemType[];
    elements?: NavItemType[];
    chip?: ChipProps;
    color?: 'primary' | 'secondary' | 'default' | undefined;
    disabled?: boolean;
    external?: boolean;
    icon?: GenericCardProps['iconPrimary'] | string;
    id?: string;
    module?: string[];
    target?: boolean;
    title?: ReactNode | string;
    type?: string;
    url?: string | undefined;
    breadcrumbItems?:{
        title?: string;
        url?: string;
    }[]
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type MenuProps = {
    openItem: string[];
    openComponent: string;
    selectedID: string | null;
    drawerOpen: boolean;
    componentdrawerOpen: boolean;
    menu: NavItemType;
    error: null;
}