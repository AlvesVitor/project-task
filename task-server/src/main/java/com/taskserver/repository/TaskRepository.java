package com.taskserver.repository;

import com.taskserver.model.entity.Task;
import com.taskserver.model.enums.TaskStatus;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    public List<Task> findAllByStatusOrderByIdAsc(TaskStatus status);

}
