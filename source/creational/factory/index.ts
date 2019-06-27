import { Bmw } from "./bmw";
import { IBmw, IFactory } from "./intefaces";

class BmwFactory implements IFactory {

    public create(type: "X5" | "X6"): IBmw {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        }
        if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

export default BmwFactory;
