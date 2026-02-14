import { Checkbox, ListItemText, MenuItem, Select } from "@mui/material";
import { FIELD_CONFIG } from "@/features/filters/config/fieldConfig";

export function MultiSelectInput({ filter, onChange }: any) {
  const config = FIELD_CONFIG.find((f) => f.field === filter.field);

  return (
    <Select
      multiple
      size="small"
      value={filter.value ?? []}
      onChange={(e) => onChange(e.target.value)}
      renderValue={(selected) => (selected as string[]).join(", ")}
    >
      {config?.options?.map((o) => (
        <MenuItem key={o} value={o}>
          <Checkbox checked={filter.value?.includes(o)} />
          <ListItemText primary={o} />
        </MenuItem>
      ))}
    </Select>
  );
}