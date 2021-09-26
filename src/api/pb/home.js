import request from '../requestPB'

/**
 * 首页订单任务列表
 * @export
 * @param {*} params
 * @returns
 */
export function QueryOrderCountNumList(params) {
    console.log(params)
    const req = request.create('SupplierOrderCountListReq', params)
    return request('erp', 'SupplierOrderBusinessService.QueryOrderCountNumList', req, 'SupplierOrderCountListRes')
}

/**
 * 首页数据报表
 * @export
 * @param {*} params
 * @returns
 */
export function QueryOrderDataTable(params) {
    console.log(params)
    const req = request.create('SupplierOrderDateTableReq', params)
    return request('erp', 'SupplierOrderBusinessService.QueryOrderDataTable', req, 'SupplierOrderDataTableRes')
}

/**
 * 商品统计数字
 * @export
 * @param {*} params
 * @returns
 */
export function SummaryProduct(params) {
    console.log(params)
    const req = request.create('SummaryProductReq', params)
    return request('product', 'SupplierProductService.SummaryProduct', req, 'SummaryProductResp')
}