import { IBmw } from "./intefaces";

export class Bmw implements IBmw {
    public model: string;
    public price: number;
    public maxSpeed: number;

    constructor(model: "X5" | "X6", price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

}
