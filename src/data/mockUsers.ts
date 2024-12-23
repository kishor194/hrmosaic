import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@example.com',
    role: 'admin',
    department: 'Administration'
  },
  {
    id: '2',
    name: 'Sarah Site',
    email: 'site.admin@example.com',
    role: 'site_admin',
    department: 'Administration'
  },
  {
    id: '3',
    name: 'Mike HR',
    email: 'hr@example.com',
    role: 'hr',
    department: 'Human Resources'
  },
  {
    id: '4',
    name: 'Lisa Finance',
    email: 'accounts@example.com',
    role: 'accounts',
    department: 'Finance'
  },
  {
    id: '5',
    name: 'Tom Employee',
    email: 'employee@example.com',
    role: 'employee',
    department: 'Sales'
  },
  {
    id: '6',
    name: 'Jane Manager',
    email: 'manager@example.com',
    role: 'manager',
    department: 'Sales'
  },
  {
    id: '7',
    name: 'Bob Tech',
    email: 'it.admin@example.com',
    role: 'it_admin',
    department: 'IT'
  }
];

export const getCurrentUser = (): User => {
  // For demo purposes, return the admin user
  return mockUsers[0];
};