// import { HttpPostClientSpy } from "Data/test/mock-http-client"
import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAutehntication } from "./remote-authentication";
import { faker } from "@faker-js/faker";
import { mockAuthentication } from "../../../Domain/Test/mock.authentication";

type SutTypes = {
  sut: RemoteAutehntication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAutehntication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAutehntication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = faker.internet.url();
    const { httpPostClientSpy, sut } = makeSut(url);

    await sut.auth(mockAuthentication());

    expect(httpPostClientSpy.url).toBe(url);
  });

  test("Should call HttpPostClient with correct Body", async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const authenticationParams = mockAuthentication();

    await sut.auth(authenticationParams);

    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
});
