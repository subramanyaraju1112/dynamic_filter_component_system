import { TextField } from "@mui/material";

export function NumberInput({ value, onChange }: any) {
  return (
    <TextField
      size="small"
      type="number"
      label="Value"
      value={value ?? ""}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}