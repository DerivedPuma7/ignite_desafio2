import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    
    if(!user){
      throw new Error("Mensagem do erro");
    }

    const isUserAdmin = this.verifyUserAdmin(user);

    if(!isUserAdmin){
      throw new Error("Mensagem do erro");
    }
    
    const allUsers = this.usersRepository.list();
    return allUsers;
  }

  verifyUserAdmin(user: User): boolean{
    if(user.admin){
      return true;
    }
    return false;
  }
}

export { ListAllUsersUseCase };
