import { ResendEmailService } from "./ResendService";

export function useEmail(): ResendEmailService {
  return new ResendEmailService();
}
