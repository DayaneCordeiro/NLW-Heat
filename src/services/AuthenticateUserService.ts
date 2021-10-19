/**
 * Receber code (string)
 * Recuperar o acces_token no github
 * Verificar se o user existe no DB
 * ----- SIM = Gera um token
 * ----- NÃO = Cria no DB, gera um token
 * Retornar o token com as infos do user
 */

class AuthenticateUserService {
  async execute(code: string) {
    //
  }
}

export { AuthenticateUserService };
