type Task = {
  id: number;
  title: string;
  details: string;
  status: 'open' | 'in progress' | 'closed';
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
  category: 'work' | 'personal' | 'others';
  assignedTo: User[] | null;
  createdBy: User;
};
