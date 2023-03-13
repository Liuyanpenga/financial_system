const pretty = (promise) => {
  // 中间层处理  参数错误优先
  return promise
    .then((res) => {
      return [undefined, res];
    })
    .catch((err) => {
      return [err, undefined];
    });
}

export default pretty