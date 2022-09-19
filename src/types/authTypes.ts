export interface IUserCreate{
    email:string,
    password:string,
    confirmPassword:string
}

export interface IUserCreateDB{
    email:string,
    password:string,
}

export interface IUserLogin{
    email:string,
    password:string,
}