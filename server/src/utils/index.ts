import { IServerResponse } from "../types/server.types";

export const createResponse = (data: any): IServerResponse => {
  return {
    success: true,
    data,
  };
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
