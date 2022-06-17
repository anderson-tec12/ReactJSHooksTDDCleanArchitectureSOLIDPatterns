import { HttpPostClient } from "Data/protocols/http/http-post-client"
import { RemoteAutehntication } from "./remote-authentication"



describe('RemoteAutehntication',  () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient{
      url?:string
      
      async post(url: string): Promise<void> {
        this.url = url
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAutehntication(url, httpPostClientSpy)

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})