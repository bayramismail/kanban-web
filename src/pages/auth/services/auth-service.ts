import { Api } from "../../../api/api";
import { LoginModel } from "./../models/login.model";
import { RegisterModel } from "./../models/register.model";

class Auth extends Api {
  constructor() {
    super();
  }
  async login(loginModel: LoginModel) {
    return await this.service.post("auth/login", loginModel);
  }
  async register(registerModel: RegisterModel) {
    return await this.service.post("auth/register", registerModel);
  }
}

export const AuthService = new Auth();
