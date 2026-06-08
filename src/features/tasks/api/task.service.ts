import { apiClient } from "@/shared/api/api-client";
import type { Task } from "../types/task.type";

export class TaskService {
    async getAll(): Promise<Task> {
        return apiClient.get("/api/tasks/get");
    }
};

export const taskService = new TaskService();