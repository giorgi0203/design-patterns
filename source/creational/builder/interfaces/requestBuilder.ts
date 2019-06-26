import { IRequest } from ".";
export interface IRequestBuilder {
    request: IRequest;
    forUrl: (url: string) => IRequestBuilder;
    useMethod: (method: string) => IRequestBuilder;
    payload: (payload: {}) => IRequestBuilder;
    build: () => IRequest;
}
