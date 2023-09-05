export class InfrastructureException extends Error {
  name = 'InfrastructureException';
  public defaultError: Error;

  public constructor(message: string = '', e: Error) {
    super(message)
    this.defaultError = e;
    Error.captureStackTrace(e);
  }
}
