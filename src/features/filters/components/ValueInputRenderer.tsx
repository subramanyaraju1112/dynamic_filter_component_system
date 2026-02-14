import type { FilterCondition } from "@/types/filter";
import { TextInput } from "./inputs/TextInput";
import { NumberInput } from "./inputs/NumberInput";
import { BooleanToggle } from "./inputs/BooleanToggle";
import { SelectInput } from "./inputs/SelectInput";
import { MultiSelectInput } from "./inputs/MultiSelectInput";
import { DateRangeInput } from "./inputs/DateRangeInput";

interface Props {
    filter: FilterCondition;
    onChange: (patch: Partial<FilterCondition>) => void;
}

export function ValueInputRenderer({ filter, onChange }: Props) {
    switch (filter.type) {
        case "text":
            return (
                <TextInput
                    value={filter.value ?? ""}
                    onChange={(v: string) => onChange({ value: v })}
                />
            );

        case "number":
            return (
                <NumberInput
                    value={filter.value ?? ""}
                    onChange={(v: number) => onChange({ value: v })}
                />
            );

        case "boolean":
            return (
                <BooleanToggle
                    value={filter.value ?? false}
                    onChange={(v: boolean) => onChange({ value: v })}
                />
            );

        case "singleSelect":
            return (
                <SelectInput
                    filter={filter}
                    onChange={(v: string) => onChange({ value: v })}
                />
            );

        case "multiSelect":
            return (
                <MultiSelectInput
                    filter={filter}
                    onChange={(v: string[]) => onChange({ value: v })}
                />
            );

        case "date":
            return (
                <DateRangeInput
                    value={filter.value ?? ["", ""]}
                    onChange={(v: string[]) => onChange({ value: v })}
                />
            );

        default:
            return null;
    }
}
