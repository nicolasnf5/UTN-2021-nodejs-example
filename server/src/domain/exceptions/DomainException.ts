export class DomainException extends Error {
  public constructor(message: string = '') {
    super(message);
    Error.captureStackTrace(this);
  }
}
