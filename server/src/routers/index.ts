import { Application } from "express";
import { cryptoRouter } from "./api/crypto.router";

export class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use("/api/v1/crypto", cryptoRouter);
  }
}
