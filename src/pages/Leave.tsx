import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { LeaveRequestForm } from "@/components/forms/LeaveRequestForm";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const leaveBalance = [
  { type: "Casual Leave", total: 12, used: 5, balance: 7 },
  { type: "Sick Leave", total: 10, used: 2, balance: 8 },
  { type: "Earned Leave", total: 15, used: 0, balance: 15 },
];

interface LeaveRequest {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  status: string;
  reason: string;
}

const columns: ColumnDef<LeaveRequest>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "days",
    header: "Days",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.original.status === "Approved"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-green-500">
          <Check className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-red-500">
          <X className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

const leaveHistory = [
  {
    id: 1,
    type: "Casual Leave",
    startDate: "2024-03-20",
    endDate: "2024-03-21",
    days: 2,
    status: "Approved",
    reason: "Personal work",
  },
  {
    id: 2,
    type: "Sick Leave",
    startDate: "2024-02-15",
    endDate: "2024-02-15",
    days: 1,
    status: "Approved",
    reason: "Not feeling well",
  },
  {
    id: 3,
    type: "Casual Leave",
    startDate: "2024-04-01",
    endDate: "2024-04-01",
    days: 1,
    status: "Pending",
    reason: "Family function",
  },
];

const Leave = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
          <p className="text-gray-500">Apply and track your leave requests</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Apply Leave
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apply for Leave</DialogTitle>
              <DialogDescription>
                Submit a new leave request. Please provide all the required details
                below.
              </DialogDescription>
            </DialogHeader>
            <LeaveRequestForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaveBalance.map((leave) => (
          <Card key={leave.type} className="p-6">
            <h3 className="text-lg font-semibold mb-4">{leave.type}</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-xl font-semibold">{leave.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Used</p>
                <p className="text-xl font-semibold">{leave.used}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Balance</p>
                <p className="text-xl font-semibold">{leave.balance}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Leave History</h2>
        <DataTable columns={columns} data={leaveHistory} searchKey="type" />
      </Card>
    </div>
  );
};

export default Leave;