const custom = {
  isPageAnimate: true, // 是否开启路由动画
  pageAnimateType: 'zoom-fade', // 路由动画类型
  table: {
    apiSetting: {
      pageField: 'pageNum', // 当前页的字段名
      sizeField: 'pageSize', // 每页数量字段名
      listField: 'lists', // 接口返回的数据字段名
      totalField: 'total' // 接口返回总页数字段名
    },
    defaultPageSize: 10, // 默认分页数量
    pageSizes: [10, 20, 30, 40, 50] // 可切换每页数量集合
  },
  upload: {
    apiSetting: {
      // 考虑接口规范不同
      infoField: 'data', // 集合字段名
      imgField: 'file' // 图片地址字段名
    },
    // 图片上传类型
    fileType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml']
  }
}

export default custom
