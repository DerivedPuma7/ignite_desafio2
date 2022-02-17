import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if(!userAlreadyExists){
      const createdUser = this.usersRepository.create({ email, name });
      return createdUser;
    }

    throw new Error("Email já cadastrado");
  }
}

export { CreateUserUseCase };
