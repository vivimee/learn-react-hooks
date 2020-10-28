const sleep = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

export const getList = async () => {
  await sleep(2);
  return [
    { id: 1, title: '项目1' },
    { id: 2, title: '项目2' },
    { id: 3, title: '项目3' },
  ]
}