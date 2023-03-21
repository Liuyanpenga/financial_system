export const transData = (dataStr) => {
    let obj = typeof dataStr === 'string' ? JSON.parse(dataStr) : dataStr;
    let tmp = obj; // 两个引用指向相同数据
    while (tmp.data) tmp = tmp.data;// data的指针下移
    // 使用最后一个data
    obj.data = tmp;
    return obj;
}


export const transPager = (dataStr) => {
    let obj = JSON.parse(dataStr);
    let tmp = obj;
    let pager = {};
    while (tmp.data) {
        tmp = tmp.data;// data的指针下移
        if (tmp.hasOwnProperty('pages')) {
            pager = {
                ...tmp
            }
            // delete pager.data;
            Reflect.deleteProperty(pager,'data');
            break;
        }
    } 
    // 找到了pager
    obj.pager = pager;
    return obj;
}
