import { useState } from "react";
import { type FilterCondition } from "@/types/filter";

export function useFilter() {
    const [filters, setFilters] = useState<FilterCondition[]>([]);

    const addFilter = () => {
        setFilters((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                field: "name",
                type: "text",
                operator: "contains",
                value: "",
            },
        ]);
    };

    const updateFilter = (id: string, patch: Partial<FilterCondition>) => {
        setFilters((prev) => prev.map((f) => (f.id === id ? { ...f, ...patch } : f)));
    };

    const removeFilter = (id: string) => {
        setFilters((prev) => prev.filter((f) => f.id !== id));
    };

    const clearFilters = () => setFilters([]);

    return { filters, addFilter, updateFilter, removeFilter, clearFilters };
}