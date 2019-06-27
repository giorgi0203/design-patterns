import { IJedi } from "./jedi";

export interface IJediAdapter {
    jedi: IJedi;
    attack(): number;
}
