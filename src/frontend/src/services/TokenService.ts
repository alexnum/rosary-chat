export async function ValidateToken(token: string) : Promise<boolean> {
  //TODO Validate on backend
  return token == "123-456";
}
