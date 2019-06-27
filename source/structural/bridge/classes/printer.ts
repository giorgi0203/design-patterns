import { IPrinter } from "../interfaces";
import { Ink } from "./ink";

export class Printer implements IPrinter {
    public ink: Ink;
    constructor(ink: Ink) {
        this.ink = ink;
    }
}
