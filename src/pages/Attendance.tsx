import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const attendanceRecords = [
  {
    id: 1,
    date: "2024-03-18",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present",
    workHours: "9h 0m",
  },
  {
    id: 2,
    date: "2024-03-17",
    checkIn: "09:15 AM",
    checkOut: "06:30 PM",
    status: "Present",
    workHours: "9h 15m",
  },
  {
    id: 3,
    date: "2024-03-16",
    checkIn: "-",
    checkOut: "-",
    status: "Weekend",
    workHours: "-",
  },
];

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-500">Track your attendance records</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" /> View Calendar
          </Button>
          <Button>
            <Clock className="mr-2 h-4 w-4" /> Check In
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-green-500">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Status</p>
              <p className="text-2xl font-semibold text-gray-900">Present</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-500">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Check In Time</p>
              <p className="text-2xl font-semibold text-gray-900">09:00 AM</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-purple-500">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Work Hours</p>
              <p className="text-2xl font-semibold text-gray-900">8h 30m</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Attendance History</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Work Hours</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        record.status === "Present"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </TableCell>
                  <TableCell>{record.workHours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Attendance;