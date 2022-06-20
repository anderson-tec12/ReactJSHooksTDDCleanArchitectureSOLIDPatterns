
// import { HttpPostClientSpy } from "Data/test/mock-http-client"
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutehntication } from "./remote-authentication"



describe('RemoteAutehntication',  () => {
  test('Should call HttpPostClient with correct URL', async () => {
   

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAutehntication(url, httpPostClientSpy)

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})