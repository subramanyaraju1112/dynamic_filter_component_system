import { applyFilters } from "@/utils/filterEngine/applyFilters";
import { useFilter } from "@/features/filters/hooks/useFilter";
import { useTableSort } from "@/features/table/useTableSort";
import { DataTable } from "@/features/table/DataTable";
import { FilterBuilder } from "@/features/filters/components/FilterBuilder";
import {
  Container,
  Paper,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { exportCSV } from "@/utils/helpers";
import employees from "@/data/employees.json";
import type { Employee } from "@/types/employee";

export default function Home() {
  const { filters, addFilter, updateFilter, removeFilter, clearFilters } =
    useFilter();

  const { sort, toggleSort } = useTableSort<Employee>();

  const filtered = sort(applyFilters(employees, filters));

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontWeight={600}>
              Employees
            </Typography>

            <Button variant="outlined" onClick={() => exportCSV(filtered)}>
              Export CSV
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Total: {employees.length} • Filtered: {filtered.length}
          </Typography>

          <Divider />

          <FilterBuilder
            filters={filters}
            addFilter={addFilter}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />

          <Divider />

          <DataTable data={filtered} onSort={toggleSort} />
        </Stack>
      </Paper>
    </Container>
  );
}
