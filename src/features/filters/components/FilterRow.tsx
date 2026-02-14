import { Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { FilterCondition } from "@/types/filter";
import { FieldSelector } from "./FieldSelector";
import { OperatorSelector } from "./OperatorSelector";
import { ValueInputRenderer } from "./ValueInputRenderer";

interface Props {
    filter: FilterCondition;
    onChange: (patch: Partial<FilterCondition>) => void;
    onRemove: () => void;
}

export function FilterRow({ filter, onChange, onRemove }: Props) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <FieldSelector value={filter.field} onChange={onChange} />

            <OperatorSelector
                type={filter.type}
                value={filter.operator}
                onChange={onChange}
            />

            <ValueInputRenderer filter={filter} onChange={onChange} />

            <IconButton onClick={onRemove}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}
