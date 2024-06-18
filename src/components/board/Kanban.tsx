import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from './KanbanData';
import TaskCard from './TaskCard';
import styled from 'styled-components';
const Container = styled.div`
  background: #fff;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  gap: 1rem;
  overflow-x: scroll;
`;

const TaskContainer = styled.div`
  width: 256px;
  margin-top: 8px;
`;

const DividerLine = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 6px;
  margin-bottom: 5px;
  border-radius: 8px;
  background: ${(props: any) => props.color};
`;

const Kanban = () => {
  const [data, setData] = useState<any>(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    // If there's no destination, exit the function
    if (!destination) {
      return;
    }

    // If the item is dropped in the same place, exit the function
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Get start and finish columns
    const startColumn = data.columns[source.droppableId];
    const finishColumn = data.columns[destination.droppableId];

    // Moving within the same column
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Moving from one column to another
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided: any) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {data.columnOrder.map((columnId: any, index: any) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId: any) => data.tasks[taskId]
              );

              return (
                <Draggable
                  key={column.id}
                  draggableId={column.id}
                  index={index}
                >
                  {(provided: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='column'
                    >
                      <h3 className='text-[15px] font-semibold'>
                        {column.title}
                      </h3>
                      <DividerLine color={column.color} />
                      <Droppable droppableId={column.id} type='task'>
                        {(provided: any) => (
                          <TaskContainer
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {tasks.map((task: any, index: any) => (
                              <TaskCard
                                key={task.id}
                                task={task}
                                index={index}
                              />
                            ))}
                            {provided.placeholder}
                          </TaskContainer>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
