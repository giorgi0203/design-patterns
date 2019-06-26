import { RequestBuilder } from "./builder";
import { Request } from "./builder/request";

const builder = new RequestBuilder();

const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ name: "giorgi" }).build();
console.log({ request });
