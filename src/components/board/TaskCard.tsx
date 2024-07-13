import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Avatars from './Avatars';
import { Badge } from '../ui/badge';
import { formatDateTime } from '@/utils/formatDateTime';

const Card = styled.div`
  border: 1px solid lightgrey;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 8px;
  width: 256px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.02);
`;

const ImageContainer = styled.div`
  cursor: pointer;
  width: 26px;
  height: 26px;
  background: #fafafa;
  border-radius: 8px;
`;

const LeadText = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #000;
`;

const LeadName = styled.span`
  font-size: ${(props: any) => (props.size ? `${props.size}px` : '13px')};
  font-weight: 500;
  color: #237cea;
`;

const Description = styled.p`
  margin-top: 4px;
  font-size: 13px;
  font-weight: 400;
  color: #000;
  opacity: 50%;
`;

const DateText = styled.p`
  margin-top: 8px;
  font-size: 13px;
  font-weight: 400;
  color: #868585;
`;

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  const { title, details, priority, createdAt, assignedTo } = task;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: any) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='flex flex-col'>
            <div className='flex justify-between items-start'>
              <div className=' border-b-2 pb-4 mb-2'>
                <Badge variant={priority} className='mb-2'>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </Badge>
                <h3 className='font-medium text-base mb-1'>{title}</h3>
                {/* <LeadText className='text-[13px] font-normal'>
                  Lead:{' '}
                  <LeadName className='text-[#237CEA] text-[13px] font-medium'>
                    Ramzi Khokh
                  </LeadName>
                </LeadText> */}

                <Description>{details}</Description>
                <DateText>{formatDateTime(createdAt)}</DateText>
              </div>
              <ImageContainer className='bg-[#FAFAFA] shadow-sm   flex justify-center items-center '>
                <img
                  className='w-[4px] h-[16px]'
                  src='/assets/icons/menu.svg'
                  alt='menu'
                />
              </ImageContainer>
            </div>

            <div className='flex w-full justify-between mt-2'>
              <Avatars users={assignedTo} />
            </div>
          </div>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;
