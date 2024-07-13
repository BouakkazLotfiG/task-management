import Kanban from './components/board/Kanban';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from './components/Navbar';
import TaskList from './components/list/TaskList';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='h-[92vh] max-w-screen-xl overflow-y-scroll mx-auto flex flex-col gap-8'>
        <Tabs defaultValue='kanban' className='w-full mt-6'>
          <TabsList className='w-full flex justify-start'>
            <TabsTrigger value='kanban'>Kanban</TabsTrigger>
            <TabsTrigger value='table'>Table</TabsTrigger>
          </TabsList>
          <TabsContent className='px-4  h-96' value='kanban'>
            <Kanban />
          </TabsContent>
          <TabsContent className='px-4' value='table'>
            <TaskList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
