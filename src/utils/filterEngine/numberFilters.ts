export function matchNumber(value: number, operator: string, filterValue: any) {
    switch (operator) {
      case "equals":
        return value === filterValue;
      case "gt":
        return value > filterValue;
      case "lt":
        return value < filterValue;
      case "gte":
        return value >= filterValue;
      case "lte":
        return value <= filterValue;
      case "between":
        return value >= filterValue[0] && value <= filterValue[1];
      default:
        return true;
    }
  }