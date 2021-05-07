import { Request, Response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";


const routes = Router();

routes.post("/settings", async (request: Request, response: Response) => {
  const { username, chat } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({ username, chat });

  await settingsRepository.save(settings);

  return response.json(settings);
})

export { routes };
