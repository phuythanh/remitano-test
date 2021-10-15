import jwt from 'jsonwebtoken';
import jwtdecode from 'jwt-decode';
export const createFakeToken = (email: string, id: number) => {
  const privateKey = 'aedfswerwerwerwe42353rtfgsdfv';
  return jwt.sign({ id, email }, privateKey, {
    expiresIn: 10000,
  });
};

interface IJwtToken {
  id: number;
  exp: number;
  email: string;
}

export const decodedToken = (token: string): IJwtToken => {
  if (!token) return null;
  return jwtdecode<IJwtToken>(token);
};

export const validateToken = (token: string) => {
  const result = decodedToken(token);
  if (result && result.exp >= new Date().getTime() / 1000) {
    return true;
  }
  return false;
};
