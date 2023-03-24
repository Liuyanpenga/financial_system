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