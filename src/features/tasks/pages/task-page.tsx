import TaskHeader from "../components/task-header";
import TaskCard from "../components/task-card";
import { Separator } from "@/components/ui/separator";
import { useTask } from "../hooks/use-task";

export default function TaskPage() {
    const { tasks, loading } = useTask();

    return (
        <div>
            <TaskHeader />
            <Separator />
            <TaskCard 
                tasks={tasks}
                loading={loading}
            />
        </div>
    );
}