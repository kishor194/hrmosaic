import { Card } from "@/components/ui/card";
import {
  Users,
  UserCheck,
  Calendar,
  Clock,
  AlertCircle,
  Briefcase,
} from "lucide-react";

const Index = () => {
  const stats = [
    {
      name: "Total Employees",
      value: "150",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      name: "Present Today",
      value: "142",
      icon: UserCheck,
      color: "bg-green-500",
    },
    {
      name: "On Leave",
      value: "8",
      icon: Calendar,
      color: "bg-yellow-500",
    },
    {
      name: "Late Arrivals",
      value: "3",
      icon: Clock,
      color: "bg-red-500",
    },
    {
      name: "Leave Requests",
      value: "5",
      icon: AlertCircle,
      color: "bg-purple-500",
    },
    {
      name: "Departments",
      value: "8",
      icon: Briefcase,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome to your HRMS dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.name}
              className="p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Index;