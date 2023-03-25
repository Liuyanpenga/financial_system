
import { TEXT } from '@/conf/uiTypes';
import Vue from 'vue';

//性别
export const sexOptions = [
    { value: "man", label: "男" },
    { value: "woman", label: "女" }
];
export const genEditForm = function (row) {

    // this:Vue
    let fn = Vue.filter.bind(Vue);
    return {
        items: [
            [{ label: 'id', value: row.id, key: 'id', }],
            [{ label: '姓名', value: row.name, key: 'name', }],
            [{ label: '性别', value: fn('sex')(row.sex), key: 'sex' }],
            [{ label: '地址', value: row.address1, key: 'address1' }],
            [{ label: '身份证', value: row.identity_card, key: 'identity_card' }],
            [{ label: '手机号', value: row.mobile_phone, key: 'mobile_phone' }],
            [{ label: '教育程度', value: fn('education')(row.education), key: 'education' }],
            [{ label: '出生日期', value: fn('date')(row.birthday), key: 'birthday' }],
        ].map((arr) => {
            arr[0].type = TEXT;
            arr[0].attrs = {
                disabled: true
            }
            arr[0].colSpan = 22;

            return arr;
        }),
    }

}
export const tableConfig = Object.freeze({});
export const columns = Object.freeze([
    {
        prop: 'birthday',
        label: '出生日期',
        width: 400,
    },
    {
        prop: 'name',
        label: '姓名',
        width: 400,
    },
    {
        label: '身份证',
        prop: 'identity_card',
        width: 400

    },
    {
        label: '操作',
        prop: 'operation',
    },
].map(ele => ({ ...ele, align: 'center' })));