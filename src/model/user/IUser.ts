import UserRole from "./UserRole";

export default interface IUser {
    id: number;
    name: string;
    role: UserRole;
}
