"use client";
import React from "react";
import { Employee, Payment, columns } from "./columns"
import { DataTable } from "./data-table"

function getData() {
 
  const [emps, setEmps] = React.useState<Employee[]>([
    {
      id: "728ed52f",
      salary: 100,
      name: "Chris",
      email: "chris@example.com",
      dateofhire: new Date("06-10-2022"),
      status: "active",
      dept: "Finance"

    },
    {
      id: "728ed52f4",
      salary: 100,
      name: "Tom",
      email: "tom@example.com",
      dateofhire: new Date("06-10-2022"),
      status: "active",
      dept: "Finance"

    },
  ]);

  // Retrieve data from localStorage when component mounts
  const refreshData = () => {
    const storedEmps = localStorage.getItem("Emps");
    if (storedEmps) {
      try {
        const parsedEmps = JSON.parse(storedEmps) as Employee[];
        setEmps(parsedEmps);
      } catch (error) {
        console.error('Error parsing employees from localStorage:', error);
        setEmps([]); 
      }
    }
  };

  React.useEffect(() => {
    refreshData(); // Load data on mount
  }, []);

  return (
    <div className="container mx-auto py-10">
   
    <DataTable columns={columns} data={emps} refreshData={refreshData} />
  </div>
  );
 
}

export default getData;


