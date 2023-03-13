import req from '@/utils/request'
import pretty from '@/utils/pretty'
export const login = user => {
  return pretty(req({
    method: 'post',
    url: '/user/login',
    data: user
  }))
}