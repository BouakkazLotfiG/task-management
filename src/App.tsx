import Kanban from './components/board/Kanban';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl h-[92vh] overflow-y-scroll mx-auto flex flex-col gap-4'>
        <h1 className='text-3xl mt-4'>Task management</h1>
        <Tabs defaultValue='kanban' className='w-full '>
          <TabsList className='w-full flex justify-start'>
            <TabsTrigger value='kanban'>Kanban</TabsTrigger>
            <TabsTrigger value='table'>Table</TabsTrigger>
          </TabsList>
          <TabsContent className='h-96' value='kanban'>
            <Kanban />
          </TabsContent>
          <TabsContent value='table'>Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default App;
