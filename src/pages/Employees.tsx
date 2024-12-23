import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataTable } from "@/components/ui/data-table";
import { EmployeeForm } from "@/components/forms/EmployeeForm";
import { ColumnDef } from "@tanstack/react-table";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
  joinDate: string;
  status: string;
}

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "joinDate",
    header: "Join Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-red-500">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    designation: "Senior Developer",
    joinDate: "2023-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "HR",
    designation: "HR Manager",
    joinDate: "2022-11-01",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    department: "Marketing",
    designation: "Marketing Lead",
    joinDate: "2023-03-20",
    status: "Active",
  },
];

const Employees = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-500">Manage your employee records</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>
                Add a new employee to your organization. Fill in all the required
                information below.
              </DialogDescription>
            </DialogHeader>
            <EmployeeForm />
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6">
        <DataTable columns={columns} data={employees} searchKey="name" />
      </Card>
    </div>
  );
};

export default Employees;