import type { FieldType, Operator } from "@/types/filter";

export const OPERATOR_MAP: Record<FieldType, Operator[]> = {
    text: ["equals", "contains", "startsWith", "endsWith"],
    number: ["equals", "gt", "lt", "gte", "lte", "between"],
    date: ["between"],
    boolean: ["is"],
    singleSelect: ["is", "isNot"],
    multiSelect: ["in", "notIn"],
};