import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers

    const allUsers = this.listAllUsersUseCase.execute({user_id});

    return response.status(200).json(allUsers);
  }
}

export { ListAllUsersController };
