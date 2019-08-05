import ITopLevelItemProperties from "../item/top-level/ITopLevelItemProperties";
import UserRole from "../UserRole";

export interface IFormState {
    formKey: string;
    status: string;
    user?: {
        id: number;
        name: string;
        role: UserRole;
    };
    items: ITopLevelItemProperties[];
    completed: number[];
    options?: object;
}
