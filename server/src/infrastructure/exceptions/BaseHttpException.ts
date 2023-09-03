export class BaseHttpException extends Error {
  private status: number;
  public constructor(message: string = '', status: number = 500) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this);
  }
}
