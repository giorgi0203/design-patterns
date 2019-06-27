import { IJedi, IJediAdapter } from "./intefaces";
import { Jedi } from "./jedi";
import { Soldier } from "./soldier";

class JediAdapter implements IJediAdapter {
    public jedi: IJedi;
    constructor(jedi: IJedi) {
        this.jedi = jedi;
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
