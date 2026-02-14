export function getNestedValue(obj: any, path: string) {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  }
  
  export function toLower(val: any) {
    return typeof val === "string" ? val.toLowerCase() : val;
  }
  
  export function toDate(val: any) {
    return val ? new Date(val).getTime() : null;
  }

export function exportCSV(data: any[], filename = "employees.csv") {
    if (!data || data.length === 0) {
        alert("No data to export");
        return;
    }

    const headers = Object.keys(data[0]);

    const rows = [
        headers,
        ...data.map((row) => headers.map((h) => row[h])),
    ];

    const csv = rows.map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
}
