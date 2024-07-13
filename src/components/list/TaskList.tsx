import { DataTable } from './DataTable';
import { columns } from './columns';

const TaskList = () => {
  return <DataTable columns={columns} data={tasks} />;
};

const users: User[] = [
  { id: 1, name: 'Alice', img: 'https://i.pravatar.cc/150?img=47' },
  { id: 2, name: 'Bob', img: 'https://i.pravatar.cc/150?img=68' },
  { id: 3, name: 'Charlie', img: 'https://i.pravatar.cc/150?img=12' },
];

const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Design homepage layout',
    details: 'Create wireframes and mockups for the new homepage design.',
    status: 'open',
    createdAt: '2024-06-18T09:00:00Z',
    priority: 'high',
    category: 'work',
    assignedTo: [users[0], users[1]],
    createdBy: users[2],
  },
  {
    id: 'task-2',
    title: 'Write blog post on TypeScript',
    details: 'Write an in-depth blog post about the benefits of TypeScript.',
    status: 'in progress',
    createdAt: '2024-06-17T10:00:00Z',
    priority: 'medium',
    category: 'work',
    assignedTo: [users[1]],
    createdBy: users[0],
  },
  {
    id: 'task-3',
    title: 'Grocery shopping',
    details: 'Buy vegetables, fruits, and other household items.',
    status: 'open',
    createdAt: '2024-06-16T12:00:00Z',
    priority: 'low',
    category: 'personal',
    assignedTo: null,
    createdBy: users[1],
  },
  {
    id: 'task-4',
    title: 'Update resume',
    details: 'Add recent job experience and skills to resume.',
    status: 'closed',
    createdAt: '2024-06-15T14:00:00Z',
    priority: 'high',
    category: 'personal',
    assignedTo: null,
    createdBy: users[2],
  },
  {
    id: 'task-5',
    title: 'Plan team outing',
    details: 'Organize a team outing event for next month.',
    status: 'in progress',
    createdAt: '2024-06-14T09:30:00Z',
    priority: 'medium',
    category: 'work',
    assignedTo: [users[0], users[2]],
    createdBy: users[1],
  },
  {
    id: 'task-6',
    title: 'Finish reading book',
    details: 'Complete reading "The Pragmatic Programmer".',
    status: 'open',
    createdAt: '2024-06-13T16:00:00Z',
    priority: 'low',
    category: 'personal',
    assignedTo: null,
    createdBy: users[0],
  },
  {
    id: 'task-7',
    title: 'Client meeting',
    details: 'Discuss project requirements with the client.',
    status: 'closed',
    createdAt: '2024-06-12T11:00:00Z',
    priority: 'high',
    category: 'work',
    assignedTo: [users[1]],
    createdBy: users[2],
  },
  {
    id: 'task-8',
    title: 'Fix bugs in app',
    details: 'Identify and fix bugs reported by users.',
    status: 'in progress',
    createdAt: '2024-06-11T13:00:00Z',
    priority: 'high',
    category: 'work',
    assignedTo: [users[0], users[2]],
    createdBy: users[1],
  },
  {
    id: 'task-9',
    title: 'Organize birthday party',
    details: 'Plan and organize a birthday party for a friend.',
    status: 'open',
    createdAt: '2024-06-10T17:00:00Z',
    priority: 'medium',
    category: 'personal',
    assignedTo: null,
    createdBy: users[2],
  },
  {
    id: 'task-10',
    title: 'Create project presentation',
    details: 'Prepare slides for the upcoming project presentation.',
    status: 'closed',
    createdAt: '2024-06-09T08:00:00Z',
    priority: 'medium',
    category: 'work',
    assignedTo: [users[1]],
    createdBy: users[0],
  },
];

export default TaskList;
