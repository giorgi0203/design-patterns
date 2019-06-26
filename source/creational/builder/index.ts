import { IRequestBuilder } from "./interfaces";
import { Request } from "./request";

export class RequestBuilder implements IRequestBuilder {
    public request: Request;
    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    public build(): Request {
        return this.request;
    }

}

export default RequestBuilder;
