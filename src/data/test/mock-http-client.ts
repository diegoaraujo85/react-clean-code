import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: AuthenticationParams
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.resolve(this.response)
  }
}
