import { type FilterCondition } from "@/types/filter";
import { getNestedValue } from "@/utils/helpers";
import { matchText } from "./textFilters";
import { matchNumber } from "./numberFilters";
import { matchDate } from "./dateFilters";
import { matchArray } from "./arrayFilters";

/** Check if filter has usable value */
function isEmptyValue(value: any) {
  return (
    value === "" ||
    value === null ||
    value === undefined ||
    (Array.isArray(value) && value.length === 0)
  );
}

function evaluate(item: any, filter: FilterCondition) {
  const value = getNestedValue(item, filter.field);

  /** Ignore empty filters */
  if (isEmptyValue(filter.value)) return true;

  switch (filter.type) {
    case "text":
      return matchText(value, filter.operator, filter.value);

    case "number":
      return matchNumber(Number(value), filter.operator, filter.value);

    case "date":
      return matchDate(value, filter.operator, filter.value);

    case "multiSelect":
      return matchArray(value, filter.operator, filter.value);

    case "boolean":
      return value === filter.value;

    case "singleSelect":
      return value === filter.value;

    default:
      return true;
  }
}

export function applyFilters<T>(data: T[], filters: FilterCondition[]): T[] {
  /** No filters → return original */
  if (!filters.length) return data;

  /** Group filters by field (OR within same field) */
  const grouped: Record<string, FilterCondition[]> = {};

  filters.forEach((f) => {
    if (!grouped[f.field]) grouped[f.field] = [];
    grouped[f.field].push(f);
  });

  return data.filter((item) =>
    Object.values(grouped).every((group) =>
      group.some((f) => evaluate(item, f))
    )
  );
}
