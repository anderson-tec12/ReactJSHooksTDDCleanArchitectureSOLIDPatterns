
// import { HttpPostClientSpy } from "Data/test/mock-http-client"
import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAutehntication } from "./remote-authentication"
import { faker } from '@faker-js/faker';


type SutTypes = {
  sut:RemoteAutehntication,
  httpPostClientSpy:HttpPostClientSpy
}

const makeSut = (url:string = faker.internet.url()):SutTypes => {
  
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAutehntication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAutehntication',  () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const {httpPostClientSpy,sut} = makeSut(url)
   

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})