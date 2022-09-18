package com.taskserver.controller;

import com.taskserver.model.Dto.TaskGroupDto;
import com.taskserver.model.Form.TaskForm;
import com.taskserver.model.entity.Task;
import com.taskserver.model.enums.TaskStatus;
import com.taskserver.service.TaskService;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> save(@Valid @RequestBody TaskForm taskForm) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(taskService.save(taskForm));
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<Task> update(@PathVariable long taskId, @Valid @RequestBody TaskForm taskForm) throws Exception {
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(taskService.update(taskId, taskForm));
    }

    @GetMapping("/{taskStatus}")
    public ResponseEntity<List<Task>> findAllByStatus(@PathVariable TaskStatus taskStatus) {
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(taskService.findAllByStatus(taskStatus));
    }

    @GetMapping()
    public ResponseEntity<TaskGroupDto> findAllStatusGroup() {
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(taskService.findAllStatusGroup());
    }

}
