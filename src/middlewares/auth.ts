import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'PenaltiFoiPIX';

export const authMiddleware = 
        (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authotization');
    const token = authHeader?.startsWith('Bearer') ?
                            authHeader.substring(7) :
                            authHeader;
                        
    if (!token ) {
        return res.status(401).json({mensagem: "Token Inválido"})

      
    }
    try {
        jwt.verify(token, JWT_SECRET);
        next();
    } catch ( error) {
        return res.status(403).json({ mensagem: "Não autorizado"})
    }
}