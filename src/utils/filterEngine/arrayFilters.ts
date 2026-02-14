export function matchArray(value: any[], operator: string, filterValue: any[]) {
    if (!Array.isArray(value)) return false;
  
    switch (operator) {
      case "in":
        return filterValue.some((v) => value.includes(v));
      case "notIn":
        return !filterValue.some((v) => value.includes(v));
      default:
        return true;
    }
  }