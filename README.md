# Dynamic Filter Component System

A **React + TypeScript** application that demonstrates a fully client-side **dynamic filtering engine** with real-time table updates, multiple filter logic, and modular architecture.

This project was built as a **frontend assessment–style implementation** focusing on correctness, scalability, and clean component design.

---

## Features

### Advanced Client-Side Filtering

* Real-time filtering as inputs change
* **AND logic between different fields**
* **OR logic within the same field**
* Case-insensitive text search
* Numeric comparisons (`=`, `>`, `<`, `between`, etc.)
* Date range filtering with proper parsing
* Multi-select array filtering (`IN` / `NOT IN`)
* Nested object filtering (e.g., `address.city`)

### Modular Architecture

* Reusable **filter engine** separated from UI
* Config-driven **field and operator mapping**
* Typed **FilterCondition** model for scalability
* Clean separation of:

  * UI components
  * hooks
  * utilities
  * filtering logic

### Data Handling

* 50-record realistic employee dataset
* Multiple data types:

  * text
  * numbers
  * dates
  * booleans
  * arrays
  * nested objects
* CSV export of **filtered results**

---

## Tech Stack

* **React (Vite)**
* **TypeScript**
* **Material UI (MUI)**
* **Client-side filtering engine (custom implementation)**

No backend required — data is mocked locally.

---

## Project Structure

```
src/
│
├── data/                # Mock dataset & API
├── features/
│   ├── filters/         # Filter UI + engine config
│   └── table/           # Data table & sorting
├── types/               # Shared TypeScript models
├── utils/
│   └── filterEngine/    # Core filtering algorithms
│
└── pages/
    └── Home.tsx         # Main screen
```

---

## Installation

```bash
# Clone the repo
git clone https://github.com/subramanyaraju1112/dynamic_filter_component_system.git

# Install dependencies
yarn install

# Start development server
yarn dev
```

App runs at:

```
http://localhost:5173
```

---

## Key Engineering Decisions

### 1. Single Source of Truth for Filters

Filter state is managed in **Home.tsx** and passed down via props to avoid:

* duplicate state
* stale UI updates
* inconsistent filtering

---

### 2. Decoupled Filtering Engine

Filtering logic is **UI-independent**, enabling:

* reuse in other components
* easy unit testing
* scalability for backend migration

---

### 3. Logical Grouping Strategy

```
AND → across fields  
OR  → within same field
```

This mirrors **real production search/filter systems**.

---

## Example Use Cases

* Find employees with:

  * `Department = Engineering`
  * `Salary > 90,000`
* Search:

  * `Name contains "Arjun"`
* Filter by:

  * join date range
  * skills (multi-select)
  * nested city field

---

## Future Improvements

* Server-side filtering support
* Pagination & virtualization
* Saved filter presets
* Unit tests for filter engine
* URL query sync for shareable filters

---

## Author

**Subramanya Raju**
Frontend Engineer — React, TypeScript, Redux, Healthcare Platforms

---

