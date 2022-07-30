import type { AxiosError } from "axios";

type SuccessResponse<T> = {
  type: "SUCCESS";
  data?: T;
};

type FailureResponse = {
  type: "FAILURE";
  error: AxiosError | unknown;
};

export type ResponseResultType<T = undefined> =
  | SuccessResponse<T>
  | FailureResponse;
