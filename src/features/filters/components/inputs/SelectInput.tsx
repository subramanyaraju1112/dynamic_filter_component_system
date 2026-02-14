import { MenuItem, TextField } from "@mui/material";
import { FIELD_CONFIG } from "@/features/filters/config/fieldConfig";

export function SelectInput({ filter, onChange }: any) {
  const config = FIELD_CONFIG.find((f) => f.field === filter.field);

  return (
    <TextField select size="small" value={filter.value ?? ""} onChange={(e) => onChange(e.target.value)}>
      {config?.options?.map((o) => (
        <MenuItem key={o} value={o}>{o}</MenuItem>
      ))}
    </TextField>
  );
}