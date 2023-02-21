import { IServerResponse } from "./../types/server.types";

export class CreateError extends Error {
  status: number;
  data: IServerResponse;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.data = {
      success: false,
      message,
    };
  }

  static badRequest(message: string) {
    return new CreateError(400, message);
  }

  static serverProblem(message: string) {
    return new CreateError(500, message);
  }
}
