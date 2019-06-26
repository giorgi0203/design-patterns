import { Request } from "./request";
import { RequestBuilder } from "./requestBuilder";

const builder = new RequestBuilder();

const request: Request = builder.forUrl("google.com").useMethod("GET").payload({ name: "giorgi" }).build();
console.log({ request });
