import { Response, Request, NextFunction } from 'express';
class Controller {
  index (req: Request, res: Response) {
    res.json({
      name: process.env.npm_package_name,
      version: process.env.npm_package_version,
      description: process.env.npm_package_description
    });
  }
}
export default new Controller
