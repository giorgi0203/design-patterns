import { IClonable, ISheep } from "./interfaces";

class Sheep implements ISheep, IClonable<Sheep> {
    public name: string;
    public weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
