export const dragTable = (Vue)=> {
  Vue.directive('drag', {
    inserted(el) {
      // 找到 table 元素
      let tableHeader = el.querySelector('div.el-table__header-wrapper')
      let tableBody = el.querySelector('div.el-table__body-wrapper')
      tableHeader.style.cursor = tableBody.style.cursor = 'grab'
      tableBody.style.overflow = 'hidden'
      // 鼠标按下记录位置
      tableHeader.onmousedown = tableBody.onmousedown = function (e) {
        // 记录滚动值(以此为基础变更)
        let originalScroll = tableBody.scrollLeft
        // 初始 X 位置
        let startX = e.clientX
        document.onmousemove = function (e) {
          // 结束 X 位置
          let endX = e.clientX
          // 差值
          let difference = endX - startX
          // 变更
          tableHeader.scrollLeft = tableBody.scrollLeft = originalScroll - difference
        }
        // 鼠标抬起释放事件
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null
        }
      }
    },
    unbind(el) {
      let tableHeader = el.querySelector('div.el-table__header-wrapper')
      let tableBody = el.querySelector('div.el-table__body-wrapper')
      tableHeader.onmousedown = tableBody.onmousedown = null
    }
  })
}