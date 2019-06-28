import { Pasta } from "./pasta";

export class PastaDecorator extends Pasta {
    public pasta: Pasta;
    constructor(pasta: Pasta) {
        super();
        this.pasta = pasta;
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}
