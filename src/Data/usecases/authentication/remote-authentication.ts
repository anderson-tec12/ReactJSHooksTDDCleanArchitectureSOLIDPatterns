import { AuthenticationParams } from "../../../Domain/usecases/authenticator";
import { HttpPostClient } from "../../protocols/http/http-post-client";

export class RemoteAutehntication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
  }
}
