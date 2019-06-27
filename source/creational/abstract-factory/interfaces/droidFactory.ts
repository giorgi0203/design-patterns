import { IDroid } from "./droid";

export type IDroidFactory<T extends IDroid> = () => T;
