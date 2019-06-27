import { IDroidFactory } from "./droidFactory";

export type IDroidProducer = (kind: string) => IDroidFactory;
