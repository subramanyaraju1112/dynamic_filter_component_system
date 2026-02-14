import { Button, Stack } from "@mui/material";
import type { FilterCondition } from "@/types/filter";
import { FilterRow } from "./FilterRow";

interface Props {
  filters: FilterCondition[];
  addFilter: () => void;
  updateFilter: (id: string, patch: Partial<FilterCondition>) => void;
  removeFilter: (id: string) => void;
  clearFilters: () => void;
}

export function FilterBuilder({
  filters,
  addFilter,
  updateFilter,
  removeFilter,
  clearFilters,
}: Props) {
  return (
    <Stack spacing={2}>
      {filters.map((f) => (
        <FilterRow
          key={f.id}
          filter={f}
          onChange={(patch) => updateFilter(f.id, patch)}
          onRemove={() => removeFilter(f.id)}
        />
      ))}

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={addFilter}>
          Add Filter
        </Button>
        <Button variant="outlined" onClick={clearFilters}>
          Clear
        </Button>
      </Stack>
    </Stack>
  );
}