import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: AuthenticationParams

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.resolve()
  }
}
