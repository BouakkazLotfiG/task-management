import { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Avatars from '../board/Avatars';
import { formatDateStatus } from '@/utils/formatDateTime';

// Define your columns with the Opportunity type
export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <Button
        className='font-[800] text-sm'
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        title
        <ArrowUpDown className='ml-2 h-4 w-4' />
      </Button>
    ),
  },
  {
    accessorKey: 'details',
    header: 'details',
  },
  {
    accessorKey: 'priority',
    header: 'priority',
  },
  {
    accessorKey: 'createdAt',
    header: 'created at',
    cell: ({ row }) => formatDateStatus(row.original.createdAt),
  },
  {
    accessorKey: 'assignedTo',
    header: 'assigned to',
    cell: ({ row }) => (
      <div className='flex w-full justify-between mt-2'>
        <Avatars users={row.original.assignedTo} />
      </div>
    ),
  },
];
