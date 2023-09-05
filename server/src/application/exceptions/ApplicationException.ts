export class ApplicationException extends Error {
  name = 'ApplicationException';
  public constructor(message: string = '') {
    super(message);
    Error.captureStackTrace(this);
  }
}
