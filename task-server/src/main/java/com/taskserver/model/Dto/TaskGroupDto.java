package com.taskserver.model.Dto;

import com.taskserver.model.entity.Task;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TaskGroupDto {

    private List<Task> pedding;
    private List<Task> completed;
    private List<Task> deleted;

}
