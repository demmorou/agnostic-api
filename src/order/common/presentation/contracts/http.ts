export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export type HttpRequest = {
  body: any;
  params: any;
  query: any;
  headers: any;
};

export default HttpRequest;

export const OkResponse = <T>(data: T) => ({
  statusCode: 200,
  data,
});

export const CreatedResponse = <T>(data: T) => ({
  statusCode: 201,
  data,
});
