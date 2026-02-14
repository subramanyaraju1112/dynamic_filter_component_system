import { Switch } from "@mui/material";

export function BooleanToggle({ value, onChange }: any) {
  return <Switch checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} />;
}