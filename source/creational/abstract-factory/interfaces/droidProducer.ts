import { IDroid } from "./droid";

export type IDroidProducer = (kind: string) => IDroid;
