import req from '@/utils/request'

// 提交申请 
export const createLoanApi = (loanData) => req.post('/loan/create',loanData)
// 申请列表
export const getLoanList = (pager) => req.get('/loan/list',{params:pager})