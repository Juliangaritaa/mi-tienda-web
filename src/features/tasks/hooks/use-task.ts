import { useState, useEffect } from "react";
import { taskService } from "../api/task.service";

export function useTask() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTasks = async () => {
        setLoading(true);
        try {
            const data = await taskService.getAll();
            setTasks(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return {
        tasks,
        loading,
        getTasks
    };
}