import * as http from '@/data/protocols/http'

export class HttpPostClientSpy<T, R> implements http.HttpPostClient<T, R> {
  url?: string
  body?: T
  response: http.HttpResponse<R> = {
    statusCode: http.HttpStatusCode.ok
  }

  async post (params: http.HttpPostParams<T>): Promise<http.HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.resolve(this.response)
  }
}
