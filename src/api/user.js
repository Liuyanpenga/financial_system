import req from '@/utils/request'
import pretty from '@/utils/pretty'
export const login = user => {
  return pretty(req({
    method: 'post',
    url: '/user/login',
    data: user
  }))
}
export const logout = () => req.post('/user/logout')

export const doCreateRole = (roleData) => req.post('/permission/createUser',roleData)