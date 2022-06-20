
// import { HttpPostClientSpy } from "Data/test/mock-http-client"
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutehntication } from "./remote-authentication"

type SutTypes = {
  sut:RemoteAutehntication,
  httpPostClientSpy:HttpPostClientSpy
}

const makeSut = (url:string = 'any_url'):SutTypes => {
  
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAutehntication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAutehntication',  () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const {httpPostClientSpy,sut} = makeSut(url)
   

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})