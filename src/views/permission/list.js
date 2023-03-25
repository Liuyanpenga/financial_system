export const tableConfig = Object.freeze({});
export const columns = Object.freeze([
    {
        prop: 'account',
        label: '用户名',
    },
    {
        prop: 'password',
        label: '密码',
    },
    {
        prop: 'reg_time',
        label: '创建时间',
    },
   
    {
        label: '创建者',
        prop: 'creator',

    },
    {
        label: '权限分配',
        prop: 'role_name',
    },
].map(ele => ({ ...ele, align: 'center' })));