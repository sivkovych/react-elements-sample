import ITopLevelItemProperties from "../item/top-level/ITopLevelItemProperties";
import IUser from "../user/IUser";

export default interface IFormState {
    formKey: string;
    status: string;
    user?: IUser;
    items: ITopLevelItemProperties[];
    completed: number[];
    options?: object;
}
