import { B1 } from "./b1";
import { IDroidFactory, IDroidProducer } from "./interfaces";
import { Rx24 } from "./rx24";

const droidProducer: IDroidProducer = (kind: string): IDroidFactory => {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
};

const battleDroidFactory: IDroidFactory = () => {
    return new B1();
};

const pilotDroidFactory: IDroidFactory = () => {
    return new Rx24();
};

export default droidProducer;
