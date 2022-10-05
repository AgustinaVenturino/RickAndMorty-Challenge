const regFindPage = '(page=[0-9]+)';

const getPageParam = (page: string) => {
  try {
    const findPageReg = new RegExp(regFindPage);
    const resultsReg = findPageReg.exec(page);
    return resultsReg && resultsReg[0];
  } catch (e) {
    console.log(e);
  }
};

export {getPageParam};
