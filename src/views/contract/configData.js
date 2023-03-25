

export const tableConfig = Object.freeze({});
export const columns = Object.freeze([
   
    {
        prop: 'name',
        label: '姓名',
        width: 120,
    },
    {
        label: '身份证',
        prop: 'identity_card',

    },
    {
        prop: 'status',
        label: '合同状态',
        width: 120,
    },
    {
        label: '操作',
        prop: 'operation',
        width: 300,
    },
].map(ele => ({ ...ele, align: 'center' })));