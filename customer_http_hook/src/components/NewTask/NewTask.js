import useHttp from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { sendRequest: sendTaskRequest, error, isLoading } = useHttp();

  const addTask = (taskText, data) => {
    const generatedId = data.name;
    const task = { id: generatedId, text: taskText };
    props.onAddTask(task);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "http://localhost:2000/tasks",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      addTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
