import req from '@/utils/request'

// 提交申请 
export const createLoanApi = (loanData) => req.post('/loan/create', loanData, { fullLoading: true })
// 申请列表
export const getLoanList = (pager) => req.get('/loan/list', { params: pager })
// 申请编辑更新
export const editLoanUpdate = (loanData) => req.put('/loan/update', loanData)
// 申请删除
export const deleteLoanForm = (id) => req.delete('/loan/delete/' + id)
// 提交审核
export const submitLoanForm = (id) => req.post('/loan/submitToApprove/', { id })
// 初审通过
export const passLoan = (appId, loanId) => req.post('/approve/first/pass', { appId, loanId })
// 初审拒绝
export const rejectLoan = (appId) => req.post('/approve/first/reject', { appId })
// 终审查看
export const getEndLoanInfo = id => req.get('/loan/query?id=' + id);
// 终审通过
export const passEndLoan = (appId) => req.post('/approve/end/pass', { appId });
// 终审拒绝
export const rejectEndLoan = (appId) => req.post('/approve/end/reject', { appId });
// 生成合同
export const createContractFile = (id) => req.post('/contract/createFile', { id });
// 下载合同
export const downloadContractFile = (id) => req.get(`/contract/download?id=${id}`);
// 生成浏览器专属 blob
export const createBlob = (url) => req({
  url:url,
  responseType:'blob'
})
