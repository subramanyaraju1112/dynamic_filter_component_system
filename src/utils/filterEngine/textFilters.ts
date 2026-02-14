export function matchText(value: any, operator: string, filterValue: string) {
    const v = value?.toString().toLowerCase().trim() ?? "";
    const f = filterValue?.toLowerCase().trim() ?? "";
  
    if (!f) return true; 
  
    switch (operator) {
      case "equals":
      case "is":
        return v === f;
  
      case "contains":
        return v.includes(f);
  
      case "startsWith":
        return v.startsWith(f);
  
      case "endsWith":
        return v.endsWith(f);
  
      default:
        return true;
    }
  }
  