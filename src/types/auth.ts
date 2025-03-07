export type JWTContextType = {
    // hasPermission: (module: string, access?: string | null) => boolean;
    SetPassword: (data: any) => Promise<void>;
}