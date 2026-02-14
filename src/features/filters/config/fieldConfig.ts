import { type FieldType } from "@/types/filter";

export interface FieldConfig {
    label: string;
    field: string;
    type: FieldType;
    options?: string[];
}

export const FIELD_CONFIG: FieldConfig[] = [
    { label: "Name", field: "name", type: "text" },
    { label: "Department", field: "department", type: "singleSelect", options: ["Engineering", "HR", "Sales"] },
    { label: "Salary", field: "salary", type: "number" },
    { label: "Join Date", field: "joinDate", type: "date" },
    { label: "Active", field: "isActive", type: "boolean" },
    { label: "Skills", field: "skills", type: "multiSelect", options: ["React", "Node", "GraphQL"] },
];