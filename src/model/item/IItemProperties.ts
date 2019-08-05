export default interface IItemProperties {
    id: number;
    title: string;
    onItemCompletion?: (id: number) => void;
}
