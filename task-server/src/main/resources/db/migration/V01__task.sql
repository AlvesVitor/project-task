    CREATE TABLE tb_task (
	id SERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        status VARCHAR(50) NOT NULL
    );