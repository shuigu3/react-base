const createData = (task, isCompleted) => {
  return {
    task,
    isCompleted,
  };
};
const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

const fetch = async () => {
  await sleep(800);

  return [
    createData("Learn vue.js", false),
    createData("Learn React Hook", false),
    createData("Learn Gatsby.js", false),
  ];
};

export default { fetch };
