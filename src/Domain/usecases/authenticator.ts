import { AccountModel } from "Domain/Models/account-model"

type AuthenticationParams = {
  password:string,
  email:string
}

export interface Authentication{
   auth(params:AuthenticationParams):Promise<AccountModel>
}