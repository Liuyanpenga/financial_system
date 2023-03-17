import req from '@/utils/request'

export const createLoanApi = (loanData) => req.post('/loan/create',loanData)