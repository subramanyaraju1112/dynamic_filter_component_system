import { TextField } from "@mui/material";

export function TextInput({ value, onChange }: any) {
    return (
        <TextField
            size="small"
            label="Value"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}