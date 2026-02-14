import { TextField, Stack } from "@mui/material";

export function DateRangeInput({ value = ["", ""], onChange }: any) {
  return (
    <Stack direction="row" spacing={1}>
      <TextField
        type="date"
        size="small"
        value={value[0]}
        onChange={(e) => onChange([e.target.value, value[1]])}
      />
      <TextField
        type="date"
        size="small"
        value={value[1]}
        onChange={(e) => onChange([value[0], e.target.value])}
      />
    </Stack>
  );
}