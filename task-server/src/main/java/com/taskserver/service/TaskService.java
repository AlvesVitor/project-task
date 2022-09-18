package com.taskserver.service;

import com.taskserver.model.Dto.TaskGroupDto;
import com.taskserver.model.Form.TaskForm;
import com.taskserver.model.entity.Task;
import com.taskserver.model.enums.TaskStatus;
import java.util.List;

public interface TaskService {

    Task save(TaskForm taskDto);

    Task update(long taskId, TaskForm taskForm) throws Exception;
    
    List<Task> findAllByStatus(TaskStatus status);
    
    TaskGroupDto findAllStatusGroup();

}
