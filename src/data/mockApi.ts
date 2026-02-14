import employees from "./employees.json";
import { type Employee } from "@/types/employee";

export async function fetchEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees as Employee[]);
    }, 400);
  });
}
