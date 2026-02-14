import { type Employee } from "@/types/employee";

export function TableRow({ e }: { e: Employee }) {
  return (
    <tr>
      <td>{e.name}</td>
      <td>{e.department}</td>
      <td>{e.salary}</td>
    </tr>
  );
}