import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    // {
    //   id: 1,
    //   job: "Play Football",
    //   isDone: false,
    // },
    // {
    //   id: 2,
    //   job: "Learn React",
    //   isDone: true,
    // },
    // {
    //   id: 3,
    //   job: "Sleep Early",
    //   isDone: true,
    // },
    // {
    //   id: 4,
    //   job: "Smoking",
    //   isDone: false,
    // },
  ],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  removeTask: (taskId) =>
    set((state) => ({ tasks: state.tasks.filter((el) => el.id !== taskId) })),

  doneTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((el) =>
        el.id === taskId ? { ...el, isDone: !el.isDone } : el
      ),
    })),
}));

export default useTaskStore;
