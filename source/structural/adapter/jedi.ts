import { IJedi } from "./intefaces";

export class Jedi implements IJedi {
    public level: number;
    constructor(level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}
