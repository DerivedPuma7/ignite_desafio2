import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isUserAdmin = this.verifyUserAdmin(user_id);

    if(isUserAdmin){
      const allUsers = this.usersRepository.list();
      return allUsers;
    }

    return[];
  }

  verifyUserAdmin(user_id: IRequest): boolean{
    const user = this.usersRepository.findById(user_id);

    if(user && user.admin){
      return true;
    }
    return false;
  }
}

export { ListAllUsersUseCase };
