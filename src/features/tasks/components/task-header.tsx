import { CreateTask } from "./create-task";

export default function TaskHeader() {
    return (
        <div className="flex items-center justify-between mb-4">
            <h1>
                Tareas
            </h1>
            <CreateTask />
        </div>
    );
}