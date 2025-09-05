import {Router} from "express";
import { AlunoController } from "../controllers/alunoController";
import { authMiddleware } from "../middlewares/auth";

const alunoRouter = Router();
const alunoController = new AlunoController();

alunoRouter.use(authMiddleware);

/**
 * @swagger
 * components:
 *  schemas:
 *      Aluno:
 *          type: object
 *          required:
 *              - nome
 *              - ra
 *          properties:
 *              nome:
 *                  type: string
 *                  description: Nome do aluno
 *              ra:
 *                  type: string
 *                  description: Registro unico de aluno
 */

/**
 * @swagger
 * /aluno:
 *  get:
 *      summary: Lista todos os alunos
 *      tag: [Aluno]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Lista de alunos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/Aluno'
 */

alunoRouter.get("/", (req, res) => alunoController.get(req, res));

/**
 * @swagger
 * /aluno:
 *  post:
 *      summary: Cadastrar um aluno
 *      tag: [Aluno]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Aluno'
 *      responses:
 *          201:
 *              description: Aluno criado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Aluno'
 */
alunoRouter.post("/", (req, res) => alunoController.post(req, res));
alunoRouter.put("/:ra", (req, res) => alunoController.put(req, res));

export default alunoRouter;