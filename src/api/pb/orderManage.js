import request from '../requestPB'
//直邮订单

/**
 * jit订单分页查询
 * @export
 * @param {*} params
 * @returns
 */
export function JitOrderPage(params) {
    console.log(params)
    const req = request.create('JitOrderPageReq', params)
    return request('erp', 'JitOrderBossService.JitOrderPage', req, 'JitOrderPageResp')
}

/**
 * jit订单tab页数量查询
 * @export
 * @param {*} params
 * @returns
 */
export function JitOrderPageTab(params) {
    console.log(params)
    const req = request.create('JitOrderPageTabReq', params)
    return request('erp', 'JitOrderBossService.JitOrderPageTab', req, 'JitOrderPageTabResp')
}

/**
 * 导入发货
 * @export
 * @param {*} params
 * @returns
 */
export function ImportShip(params) {
    console.log(params)
    const req = request.create('ImportJitShipReq', params)
    return request('erp', 'JitOrderBossService.ImportShip', req, 'ImportJitShipResp')
}

/**
 * 导出
 * @export
 * @param {*} params
 * @returns
 */
export function ExportJitOrder(params) {
    console.log(params)
    const req = request.create('JitOrderPageReq', params)
    return request('erp', 'JitOrderBossService.ExportJitOrder', req, 'ExportJitOrderResp')
}

/**
 * 查询订单物流信息
 * @export
 * @param {*} params
 * @returns
 */
export function QueryJitLogi(params) {
    console.log(params)
    const req = request.create('QueryJitLogiReq', params)
    return request('erp', 'JitOrderBossService.QueryJitLogi', req, 'QueryJitLogiResp')
}

/**
 * 查询订单物流信息及物流跟踪信息
 * @export
 * @param {*} params
 * @returns
 */
export function QueryLogiTracking(params) {
    console.log(params)
    const req = request.create('QueryLogiTrackingReq', params)
    return request('erp', 'JitOrderBossService.QueryLogiTracking', req, 'QueryLogiTrackingResp')
}

/**
 * 修改物流单号
 * @export
 * @param {*} params
 * @returns
 */
export function ModifyLogi(params) {
    console.log(params)
    const req = request.create('ModifyJitOrderLogiReq', params)
    return request('erp', 'JitOrderBossService.ModifyLogi', req, 'ModifyJitOrderLogiResp')
}

/**
 * jit订单发货
 * @export
 * @param {*} params
 * @returns
 */
export function Ship(params) {
    console.log(params)
    const req = request.create('JitOrderShipReq', params)
    return request('erp', 'JitOrderBossService.Ship', req, 'JitOrderShipResp')
}

/**
 * 直邮物流公司列表查询
 * @export
 * @param {*} params
 * @returns
 */
export function GetLogiCompanyList(params) {
    console.log(params)
    const req = request.create('LogiCompanyListReq', params)
    return request('erp', 'LogiCompanyBossService.GetLogiCompanyList', req, 'LogiCompanyListResp')
}

/**
 * 导出模板
 * @export
 * @param {*} params
 * @returns
 */
export function ExportTemplate(params) {
    console.log(params)
    const req = request.create('ExportTemplateReq', params)
    return request('erp', 'JitOrderBossService.ExportTemplate', req, 'ExportJitOrderResp')
}

// 代发订单

/**
 * 供应商列表，分页
 * @export
 * @param {*} params
 * @returns
 */
export function SupplierOrderPage(params) {
    console.log(params)
    const req = request.create('SupplierOrderBusinessPageReq', params)
    return request('erp', 'SupplierOrderBusinessService.SupplierOrderPage', req, 'SupplierOrderBusinessPageResp')
};

/**
 * 获取列表页状态信息
 * @export
 * @param {*} params
 * @returns
 */
export function GetSupplierOrderPageTabList(params) {
    console.log(params)
    const req = request.create('GetSupplierOrderPageTabListReq', params)
    return request('erp', 'SupplierOrderBusinessService.GetSupplierOrderPageTabList', req, 'GetSupplierOrderPageTabListResp')
};

/**
 * 导入发货 - 供应商
 * @export
 * @param {*} params
 * @returns
 */
export function ImportOrderDeliver(params) {
    console.log(params)
    const req = request.create('ImportOrderDeliverReq', params)
    return request('erp', 'SupplierOrderBusinessService.ImportOrderDeliver', req, 'ImportOrderDeliverResp')
};

/**
 * 导出订单
 * @export
 * @param {*} params
 * @returns
 */
export function ExportOrder(params) {
    console.log(params)
    const req = request.create('SupplierOrderBusinessPageReq', params)
    return request('erp', 'SupplierOrderBusinessService.ExportOrder', req, 'ExportSupplierOrderResp')
};

/**
 * 供应商详情
 * @export
 * @param {*} params
 * @returns
 */
export function GetSupplierOrderDetail(params) {
    console.log(params)
    const req = request.create('SupplierOrderDetailBusinessReq', params)
    return request('erp', 'SupplierOrderBusinessService.GetSupplierOrderDetail', req, 'SupplierOrderDetailBusinessResp')
};

/**
 * 订单缺货
 * @export
 * @param {*} params
 * @returns
 */
export function OrderStockOut(params) {
    console.log(params)
    const req = request.create('SupplierOrderStockOutBusinessReq', params)
    return request('erp', 'SupplierOrderBusinessService.OrderStockOut', req, 'SupplierOrderStockoutResp')
};

/**
 * 物流公司列表查询
 * @export
 * @param {*} params
 * @returns
 */
export function QueryLogiCompanyList(params) {
    console.log(params)
    const req = request.create('QueryLogiCompanyListReq', params)
    return request('erp', 'SupplierOrderBusinessService.QueryLogiCompanyList', req, 'QueryLogiCompanyListResp')
};

/**
 * 修改物流单号
 * @export
 * @param {*} params
 * @returns
 */
export function ModifyLogiCode(params) {
    console.log(params)
    const req = request.create('ModifyLogiCodeReq', params)
    return request('erp', 'SupplierOrderBusinessService.ModifyLogiCode', req, 'ModifyLogiCodeResp')
}

/**
 * 订单发货
 * @export
 * @param {*} params
 * @returns
 */
export function OrderDeliver(params) {
    console.log(params)
    const req = request.create('SupplierOrderDeliverReq', params)
    return request('erp', 'SupplierOrderBusinessService.OrderDeliver', req, 'SupplierOrderDeliverResp')
}
