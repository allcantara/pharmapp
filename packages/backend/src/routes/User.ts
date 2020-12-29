import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { showUserController } from "../useCases/ShowUser";
import { indexUserController } from "../useCases/IndexUser";
import { updateUserController } from "../useCases/UpdateUser";
import { deleteUserController } from "../useCases/DeleteUser";

const UserRoutes = Router();

UserRoutes.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

UserRoutes.get("/users/:id", (request, response) => {
  return showUserController.handle(request, response);
});

UserRoutes.get("/users", (request, response) => {
  return indexUserController.handle(request, response);
});

UserRoutes.put("/users/:id", (request, response) => {
  return updateUserController.handle(request, response);
});

UserRoutes.delete("/users/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});

export { UserRoutes };
