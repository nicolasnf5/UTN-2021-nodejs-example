import uuidValidate from 'uuid-validate';

export class DeleteUserCommand {
  private readonly id: string;

  public constructor(
    id: string,
  ) {
    if (!id) {
      throw new Error('id is required');
    }

    if (!uuidValidate(id)) {
      throw new Error('uuid must be a valid uuid');
    }

    this.id = id;
  }

  getId() {
    return this.id;
  }
}
