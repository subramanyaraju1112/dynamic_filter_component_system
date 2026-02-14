export type FieldType =
  | "text"
  | "number"
  | "date"
  | "boolean"
  | "singleSelect"
  | "multiSelect";

export type Operator =
  | "equals"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "gt"
  | "lt"
  | "gte"
  | "lte"
  | "between"
  | "is"
  | "isNot"
  | "in"
  | "notIn";

export interface FilterCondition {
  id: string;
  field: string;
  type: FieldType;
  operator: Operator;
  value: any;
}