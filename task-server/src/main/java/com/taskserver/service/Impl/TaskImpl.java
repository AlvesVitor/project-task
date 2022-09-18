package com.taskserver.service.Impl;

import com.taskserver.model.Dto.TaskGroupDto;
import com.taskserver.model.Form.TaskForm;
import com.taskserver.model.entity.Task;
import com.taskserver.model.enums.TaskStatus;
import com.taskserver.repository.TaskRepository;
import com.taskserver.service.TaskService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepsotRepository;

    /**
     *
     * @param taskDto
     * @return task
     */
    @Override
    public Task save(TaskForm taskDto) {
        return taskRepsotRepository.save(taskDto.convert());
    }

    /**
     *
     * @param taskId
     * @param taskForm
     * @return task
     * @throws Exception
     */
    @Override
    public Task update(long taskId, TaskForm taskForm) throws Exception {
        Optional<Task> taskOptional = taskRepsotRepository.findById(taskId);

        if (!taskOptional.isPresent()) {
            throw new Exception();
        }
        return taskRepsotRepository.save(taskForm.update(taskOptional.get()));
    }

    /**
     *
     * @param status
     * @return list<task>
     */
    @Override
    public List<Task> findAllByStatus(TaskStatus status) {
        return taskRepsotRepository.findAllByStatusOrderByIdAsc(status);
    }

    /**
     *
     * @return taskDto
     */
    @Override
    public TaskGroupDto findAllStatusGroup() {
        TaskGroupDto taskDto = new TaskGroupDto();

        taskDto.setPedding(taskRepsotRepository.findAllByStatusOrderByIdAsc(TaskStatus.PENDING));
        taskDto.setCompleted(taskRepsotRepository.findAllByStatusOrderByIdAsc(TaskStatus.COMPLETED));
        taskDto.setDeleted(taskRepsotRepository.findAllByStatusOrderByIdAsc(TaskStatus.DELETED));

        return taskDto;

    }

}
