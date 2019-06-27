import { IBmw } from "./bmw";

export interface IFactory {
    create: (type: string) => IBmw;
}
