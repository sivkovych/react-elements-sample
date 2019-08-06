import ITopLevelItemProperties from "../item/top-level/ITopLevelItemProperties";
import IUser from "../user/IUser";
import UserRole from "../user/UserRole";

export interface IFormState {
    formKey: string;
    status: string;
    user?: IUser;
    items: ITopLevelItemProperties[];
    completed: number[];
    options?: object;
}
