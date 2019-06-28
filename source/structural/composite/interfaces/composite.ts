import { IEquipment } from "./equipment";

export interface IComposite {
    equipments: IEquipment[];
    add: (item: IEquipment) => void;
    getPrice: () => number;
}
