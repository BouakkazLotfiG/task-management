import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TaskCardProps {
  users: User[];
}

const Avatars: React.FC<TaskCardProps> = ({ users }) => {
  return (
    <div className='flex gap-1'>
      {users &&
        users.map((user) => (
          <Avatar key={user.id}>
            <AvatarImage src={user.img} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        ))}
    </div>
  );
};

export default Avatars;
