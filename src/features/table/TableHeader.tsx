interface Props {
    onSort: (key: string) => void;
  }
  
  export function TableHeader({ onSort }: Props) {
    return (
      <thead>
        <tr>
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("department")}>Department</th>
          <th onClick={() => onSort("salary")}>Salary</th>
        </tr>
      </thead>
    );
  }