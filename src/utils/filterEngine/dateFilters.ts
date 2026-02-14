import { toDate } from "@/utils/helpers";

export function matchDate(value: any, operator: string, filterValue: any) {
  const v = toDate(value);

  // guard null safely
  if (v === null) return false;

  switch (operator) {
    case "between": {
      const start = toDate(filterValue?.[0]);
      const end = toDate(filterValue?.[1]);

      if (start === null || end === null) return false;

      return v >= start && v <= end;
    }

    case "equals": {
      const d = toDate(filterValue);
      if (d === null) return false;
      return v === d;
    }

    default:
      return true;
  }
}