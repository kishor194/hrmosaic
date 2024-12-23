export type Role = 'admin' | 'site_admin' | 'hr' | 'accounts' | 'employee' | 'manager' | 'it_admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  department?: string;
  avatar?: string;
}

export const ROLE_DESCRIPTIONS = {
  admin: 'Manages overall system settings and user roles, access to all modules, audit logs',
  site_admin: 'Manages regional settings and site-specific data, handles localized employee records',
  hr: 'Employee onboarding/offboarding, attendance and leave management, performance reviews',
  accounts: 'Payroll processing and compliance, TDS and tax calculations, financial reports',
  employee: 'Access to personal information, apply for leaves, view payslips and attendance',
  manager: 'Approves/rejects leaves, views team attendance and performance',
  it_admin: 'Manages system configurations, ensures data backups and security'
};