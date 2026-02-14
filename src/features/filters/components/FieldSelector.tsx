import { MenuItem, TextField } from "@mui/material";
import { FIELD_CONFIG } from "@/features/filters/config/fieldConfig";
import type { FilterCondition, FieldType } from "@/types/filter";

interface Props {
  value: string;
  onChange: (patch: Partial<FilterCondition>) => void;
}

export function FieldSelector({ value, onChange }: Props) {
  return (
    <TextField
      select
      size="small"
      label="Field"
      value={value}
      onChange={(e) => {
        const field = e.target.value;
        const config = FIELD_CONFIG.find((f) => f.field === field);

        onChange({
          field,
          type: config?.type as FieldType,
          operator: undefined,
          value: "",
        });
      }}
      sx={{ minWidth: 150 }}
    >
      {FIELD_CONFIG.map((f) => (
        <MenuItem key={f.field} value={f.field}>
          {f.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
