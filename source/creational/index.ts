import droidProducer from "./abstract-factory";
import { RequestBuilder } from "./builder";
import { Request } from "./builder/request";
import BmwFactory from "./factory";

/**
 * builder
 */
// const builder = new RequestBuilder();

// const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ name: "giorgi" }).build();
// console.log({ request });

/**
 * abstract factory
 */
// const battleFactory = droidProducer("battle");
// const battleDrone = battleFactory();
// console.log(battleDrone.info());

/**
 * Bmw Factory
 */
// const factory = new BmwFactory();
// const car = factory.create("X5");
// console.log(car);

/**
 * singletons
 */
