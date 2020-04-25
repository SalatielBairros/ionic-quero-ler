
export class AuthenticationModel {
  email: string;
  password: string;

  public validate(): boolean {
    return !!this.email.trim() && !!this.password.trim();
  }

  public getToken(): string {
    return btoa(`${this.email}:${this.password}`);
  }
}
