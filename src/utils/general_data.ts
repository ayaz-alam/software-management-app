import { TaskType } from "../models/task-type";
import { TaskStatus } from "../models/tast-status";
import { Priority } from "../models/priority";
import { CURRENT_PROJECT } from "./localstorage/localStorage";

const taskStatusOptions = [
  { key: "BACKLOG", text: "Backlog", value: "BACKLOG" },
  { key: "READY", text: "Ready", value: "READY" },
  { key: "IN_PROGRESS", text: "In Progress", value: "IN_PROGRESS" },
  { key: "PEER_REVIEW", text: "Peer Review", value: "PEER_REVIEW" },
  { key: "TESTING", text: "Testing", value: "TESTING" },
  { key: "DONE", text: "Done", value: "DONE" },
  { key: "RESOLVED", text: "Resolved", value: "RESOLVED" },
  { key: "DEPLOYED", text: "Deployed", value: "DEPLOYED" },
  { key: "CANCELLED", text: "Cancelled", value: "CANCELLED" },
];

const priorityItemOptions = [
  { key: "l1", text: "Low", value: "LOW" },
  { key: "m2", text: "Medium", value: "MEDIUM" },
  { key: "h3", text: "High", value: "HIGH" },
];
const taskTypeOptions = [
  { key: TaskType.USER_STORY, text: "User story", value: TaskType.USER_STORY },
  { key: TaskType.EPIC, text: "Epic", value: TaskType.EPIC },
  { key: TaskType.BUG, text: "Issue/bug", value: TaskType.BUG },
];

const labelsOptions = [
  {
    key: "l0",
    text: "Improvement",
    value: "lmprovement",
  },
  {
    key: "l1",
    text: "UI",
    value: "UI",
  },
  {
    key: "l2",
    text: "Backend",
    value: "Backend",
  },
  {
    key: "l3",
    text: "Cloud",
    value: "Cloud",
  },
  {
    key: "l4",
    text: "Performance",
    value: "Performance",
  },
  {
    key: "l5",
    text: "Urgent",
    value: "Urgent",
  },
];

const getTextForTaskTypeId = (taskType: string) => {
  if (!taskType) return "NA";
  const text = taskStatusOptions.filter((item) => {
    return item.key === taskType;
  })[0].text;

  return text ? text : "NA";
};

const getTaskStatusByString = (taskStatus: string): TaskStatus => {
  switch (taskStatus) {
    case TaskStatus.BACKLOG:
      return TaskStatus.BACKLOG;
    case TaskStatus.READY:
      return TaskStatus.READY;
    case TaskStatus.IN_PROGRESS:
      return TaskStatus.IN_PROGRESS;
    case TaskStatus.PEER_REVIEW:
      return TaskStatus.PEER_REVIEW;
    case TaskStatus.TESTING:
      return TaskStatus.TESTING;
    case TaskStatus.DONE:
      return TaskStatus.DONE;
    case TaskStatus.CANCELLED:
      return TaskStatus.CANCELLED;
    case TaskStatus.DEPLOYED:
      return TaskStatus.DEPLOYED;
    default:
      return TaskStatus.BACKLOG;
  }
};

const getTaskType = (taskType: string): TaskType => {
  switch (taskType) {
    case TaskType.USER_STORY:
      return TaskType.USER_STORY;
    case TaskType.EPIC:
      return TaskType.EPIC;
    case TaskType.BUG:
      return TaskType.BUG;
    default:
      return TaskType.USER_STORY;
  }
};

const getPriorityByString = (priority: string): Priority => {
  switch (priority) {
    case Priority.LOW:
      return Priority.LOW;
    case Priority.MEDIUM:
      return Priority.MEDIUM;
    case Priority.HIGH:
      return Priority.HIGH;
    default:
      return Priority.LOW;
  }
};

const getProjectId = () => {
  let projectId = localStorage.getItem(CURRENT_PROJECT);
  if (projectId) {
    try {
      projectId = JSON.parse(projectId);
      return projectId;
    } catch (err) {
      return "NA";
    }
  }
  return "NA";
};

export {
  //Dropdownoptions
  taskStatusOptions,
  labelsOptions,
  priorityItemOptions as priorityItems,
  taskTypeOptions,
  //Functions
  getTextForTaskTypeId,
  getTaskStatusByString,
  getTaskType,
  getPriorityByString,
  getProjectId,
};
