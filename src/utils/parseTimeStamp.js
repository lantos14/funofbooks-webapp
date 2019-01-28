const parseTimeStamp = (data) => {

  data.forEach(record => {
    const copyDate = `${record.createdAt.slice(0, 10)}, ${record.createdAt.slice(11, 16)}`;
    record.createdAt = copyDate;
  });
}

export default parseTimeStamp;