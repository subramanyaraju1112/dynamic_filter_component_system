import { type Employee } from "@/types/employee";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface Props {
  data: Employee[];
  onSort?: (key: keyof Employee) => void;
}

export function DataTable({ data, onSort }: Props) {
  if (!data.length) return <p>No results found.</p>;

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => onSort?.("name")} sx={{ cursor: "pointer", fontWeight: 600 }}>Name</TableCell>
            <TableCell onClick={() => onSort?.("department")} sx={{ cursor: "pointer", fontWeight: 600 }}>Department</TableCell>
            <TableCell onClick={() => onSort?.("salary")} sx={{ cursor: "pointer", fontWeight: 600 }}>Salary</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id} hover>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.department}</TableCell>
              <TableCell>₹ {e.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}