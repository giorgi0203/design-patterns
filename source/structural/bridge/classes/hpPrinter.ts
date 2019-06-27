import { Ink } from "./ink";
import { Printer } from "./printer";
export class HPprinter extends Printer {
    constructor(ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}
