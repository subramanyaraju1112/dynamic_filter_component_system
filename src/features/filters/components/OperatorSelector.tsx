import { MenuItem, TextField } from "@mui/material";
import { OPERATOR_MAP } from "@/features/filters/config/operatorMap";
import type { FilterCondition, Operator, FieldType } from "@/types/filter";

interface Props {
  type: FieldType;
  value: Operator | undefined;
  onChange: (patch: Partial<FilterCondition>) => void;
}

export function OperatorSelector({ type, value, onChange }: Props) {
  const operators = OPERATOR_MAP[type] ?? [];

  return (
    <TextField
      select
      size="small"
      label="Operator"
      value={value ?? ""}
      onChange={(e) =>
        onChange({
          operator: e.target.value as Operator,
          value: "",
        })
      }
      sx={{ minWidth: 150 }}
    >
      {operators.map((op) => (
        <MenuItem key={op} value={op}>
          {op}
        </MenuItem>
      ))}
    </TextField>
  );
}
