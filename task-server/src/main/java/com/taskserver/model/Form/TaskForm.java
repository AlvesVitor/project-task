package com.taskserver.model.Form;

import com.taskserver.model.entity.Task;
import com.taskserver.model.enums.TaskStatus;
import javax.validation.constraints.NotBlank;
import lombok.Setter;

@Setter
public class TaskForm {

    @NotBlank
    private String description;
    private TaskStatus status;

    public Task convert() {
        return new Task(null, description, TaskStatus.PENDING);
    }

    public Task update(Task task) {
        task.setDescription(this.description);
        task.setStatus(this.status);
        return task;
    }

}
