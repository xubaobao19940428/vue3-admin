import request from '../requestPB'

/**
 * 仓库列表分页
 * @export
 * @param {*} params
 * @returns
 */
export function warehousePage (params) {
    console.log(params)
    const req = request.create('WarehousePageReq', params)
    return request('erp', 'WarehouseBossService.WarehousePage', req, 'warehouse.WarehousePageResp')
};

/**
 * 云仓入库单列表
 * @export
 * @param {*} params
 * @returns
 */
export function purchaseLogiList (params) {
    console.log(params)
    const req = request.create('PurchaseLogiListReq', params)
    return request('erp', 'IncomeOrderBossService.PurchaseLogiList', req, 'warehouse.PurchaseLogiListResp')
};

/**
 * 云仓入库订单列表
 * @export
 * @param {*} params
 * @returns
 */
export function incomeOrderPage (params) {
    console.log(params)
    const req = request.create('IncomeOrderPageReq', params)
    return request('erp', 'IncomeOrderBossService.IncomeOrderPage', req, 'warehouse.IncomeOrderPageResp')
};

/**
 * 入库单签收
 * @export
 * @param {*} params
 * @returns
 */
export function incomeOrderSign (params) {
    console.log(params)
    const req = request.create('IncomeOrderSignReq', params)
    return request('erp', 'IncomeOrderBossService.IncomeOrderSign', req, 'warehouse.IncomeOrderSignResp')
};

/**
 * 采购物流列表
 * @export
 * @param {*} params
 * @returns
 */
export function logiOrderPage (params) {
    console.log(params)
    const req = request.create('IncomeOrderPageReq', params)
    return request('erp', 'IncomeOrderBossService.LogiOrderPage', req, 'warehouse.IncomeOrderPageResp')
};

/**
 * 修改物流单
 * @export
 * @param {*} params
 * @returns
 */
export function modifyIncomeOrderLogi (params) {
    console.log(params)
    const req = request.create('ModifyIncomeOrderLogiReq', params)
    return request('erp', 'IncomeOrderBossService.ModifyIncomeOrderLogi', req, 'warehouse.ModifyIncomeOrderLogiResp')
};

/**
 * 入库单签收
 * @export
 * @param {*} params
 * @returns
 */
export function addSignAbnormal (params) {
    console.log(params)
    const req = request.create('AddSignAbnormalReq', params)
    return request('erp', 'AbnormalBossService.AddSignAbnormal', req, 'warehouse.AddSignAbnormalResp')
};

/**
 * 确认入库
 * @export
 * @param {*} params
 * @returns
 */
export function orderIncome (params) {
    console.log(params)
    const req = request.create('OrderIncomeReq', params)
    return request('erp', 'IncomeOrderBossService.OrderIncome', req, 'warehouse.IncomeOrderSignResp')
};

/**
 * 包裹异常列表
 * @export
 * @param {*} params
 * @returns
 */
export function abnormalLogiPage (params) {
    console.log(params)
    const req = request.create('AbnormalLogiPageReq', params)
    return request('erp', 'AbnormalBossService.AbnormalLogiPage', req, 'warehouse.AbnormalLogiPageResp')
};

/**
 * 商品异常列表
 * @export
 * @param {*} params
 * @returns
 */
export function abnormalSkuPage (params) {
    console.log(params)
    const req = request.create('AbnormalSkuPageReq', params)
    return request('erp', 'AbnormalBossService.AbnormalSkuPage', req, 'warehouse.AbnormalSkuPageResp')
};

/**
 * 商品异常列表
 * @export
 * @param {*} params
 * @returns
 */
export function purchaseDealAbnormal (params) {
    console.log(params)
    const req = request.create('PurchaseDealAbnormalReq', params)
    return request('erp', 'AbnormalBossService.PurchaseDealAbnormal', req, 'warehouse.PurchaseDealAbnormalResp')
};

/**
 * sku异常类型列表
 * @export
 * @param {*} params
 * @returns
 */
export function skuAbnormalType (params) {
    console.log(params)
    const req = request.create('SkuAbnormalTypeReq', params)
    return request('erp', 'AbnormalBossService.SkuAbnormalType', req, 'warehouse.SkuAbnormalTypeResp')
};

/**
 * 签收异常类型列表
 * @export
 * @param {*} params
 * @returns
 */
export function signAbnormalType (params) {
    console.log(params)
    const req = request.create('SignAbnormalTypeReq', params)
    return request('erp', 'AbnormalBossService.SignAbnormalType', req, 'warehouse.SignAbnormalTypeResp')
};

/**
 * 仓库出库单分页
 * @export
 * @param {*} params
 * @returns
 */
export function outOrderPage (params) {
    console.log(params)
    const req = request.create('OutOrderPageReq', params)
    return request('erp', 'OutOrderBossService.OutOrderPage', req, 'warehouse.OutOrderPageResp')
};

/**
 * 仓库出库单分页
 * @export
 * @param {*} params
 * @returns
 */
export function outOrderDetail (params) {
    console.log(params)
    const req = request.create('OutOrderDetailReq', params)
    return request('erp', 'OutOrderBossService.OutOrderDetail', req, 'warehouse.OutOrderDetailResp')
};

/**
 * 出库单重推
 * @export
 * @param {*} params
 * @returns
 */
export function repushOutOrder (params) {
    console.log(params)
    const req = request.create('RepushOutOrderReq', params)
    return request('erp', 'OutOrderBossService.RepushOutOrder', req, 'warehouse.RepushOutOrderResp')
};

/**
 * 取消出库单
 * @export
 * @param {*} params
 * @returns
 */
export function cannelOutOrder (params) {
    console.log(params)
    const req = request.create('CannelOutOrderReq', params)
    return request('erp', 'OutOrderBossService.CannelOutOrder', req, 'warehouse.CannelOutOrderResp')
};

/**
 * 创建出库单
 * @export
 * @param {*} params
 * @returns
 */
export function createOutOrder (params) {
    console.log(params)
    const req = request.create('CreateOutOrderReq', params)
    return request('erp', 'OutOrderBossService.CreateOutOrder', req, 'warehouse.CreateOutOrderResp')
};
/**
 * 获取出库单可调的仓库
 * @export
 * @param {*} params
 * @returns
 */
export function GetTransferWarehouse (params) {
    console.log(params)
    const req = request.create('GetTransferWarehouseReq', params)
    return request('erp', 'OutOrderBossService.GetTransferWarehouse', req, 'warehouse.GetTransferWarehouseResp')
};
/**
 * 出库单调仓
 * @export
 * @param {*} params
 * @returns
 */
export function TransferOutOrder (params) {
    console.log(params)
    const req = request.create('TransferOutOrderReq', params)
    return request('erp', 'OutOrderBossService.TransferOutOrder', req, 'warehouse.TransferOutOrderResp')
};

/**
 * 物流公司列表
 * @export
 * @param {*} params
 * @returns
 */
export function logiCompanyList (params) {
    const req = request.create('LogiCompanyReq', params)
    return request('erp', 'WarehouseBossService.LogiCompany', req, 'warehouse.LogiCompanyResp')
};
/**
 * 获取异常单采购单列表*
 * @export
 * @param {*} params
 * @returns
 */
export function AbnormalPurchaseOrder (params) {
    const req = request.create('AbnormalPurchaseOrderReq', params)
    return request('erp', 'AbnormalBossService.AbnormalPurchaseOrder', req, 'warehouse.AbnormalPurchaseOrderResp')
};
/**
 * 异常补单
 * @export
 * @param {*} params
 * @returns
 */
export function AbnormalMakeup (params) {
    const req = request.create('AbnormalMakeupReq', params)
    return request('erp', 'AbnormalBossService.AbnormalMakeup', req, 'warehouse.AbnormalMakeupResp')
};
/**
 * 异常完结
 * @export
 * @param {*} params
 * @returns
 */
export function OverAbnormal (params) {
    const req = request.create('OverAbnormalReq', params)
    return request('erp', 'AbnormalBossService.OverAbnormal', req, 'warehouse.OverAbnormalResp')
};
/**
 * 异常处理列表
 * @export
 * @param {*} params
 * @returns
 */
export function AbnormalProcess (params) {
    const req = request.create('AbnormalProcessReq', params)
    return request('erp', 'AbnormalBossService.AbnormalProcess', req, 'warehouse.AbnormalProcessResp')
};

/**
 *  导出异常包裹
 * @export
 * @param {*} params
 * @returns
 */
export function ExportAbnormalLogi (params) {
    const req = request.create('AbnormalLogiPageReq', params)
    return request('erp', 'AbnormalBossService.ExportAbnormalLogi', req, 'warehouse.ExportAbnormalLogiResp')
};
/**
 * 导出异常sku
 * @export
 * @param {*} params
 * @returns
 */
export function ExportAbnormalSku (params) {
    const req = request.create('AbnormalSkuPageReq', params)
    return request('erp', 'AbnormalBossService.ExportAbnormalSku', req, 'warehouse.ExportAbnormalSkuResp')
};
/**
 *  获取中转仓库
 * @export
 * @param {*} params
 * @returns
 */
export function GetTransferAddress (params) {
    const req = request.create('GetTransferAddressReq', params)
    return request('erp', 'WarehouseBossService.GetTransferAddress', req, 'warehouse.GetTransferAddressResp')
};

// 获取条形码
export function getSkuBarCode (params) {
    const req = request.create('GetSkuBarCodeReq', params)
    return request('erp', 'WarehouseBossService.GetSkuBarCode', req, 'warehouse.GetSkuBarCodeResp')
};

/**
 *  拆单
 * @export
 * @param {*} params
 * @returns
 */
export function SpiltOutOrder (params) {
    const req = request.create('SpiltOutOrderReq', params)
    return request('erp', 'OutOrderBossService.SpiltOutOrder', req, 'warehouse.SpiltOutOrderResp')
};
/**
 * 撤销拆单
 * @export
 * @param {*} params
 * @returns
 */
export function RevokeSpiltOutOrder (params) {
    const req = request.create('RevokeSpiltOutOrderReq', params)
    return request('erp', 'OutOrderBossService.RevokeSpiltOutOrder', req, 'warehouse.RevokeSpiltOutOrderResp')
};
/**
 * 获取补发的仓库列表
 * @export
 * @param {*} params
 * @returns
 */
export function GetReissueWarehouse (params) {
    const req = request.create('GetReissueWarehouseReq', params)
    return request('erp', 'OutOrderBossService.GetReissueWarehouse', req, 'warehouse.GetReissueWarehouseResp')
};
/**
 * 补发
 * @export
 * @param {*} params
 * @returns
 */
export function ReissueOutOrder (params) {
    const req = request.create('ReissueOutOrderReq', params)
    return request('erp', 'OutOrderBossService.ReissueOutOrder', req, 'warehouse.ReissueOutOrderResp')
};
/**
 * 换货
 * @export
 * @param {*} params
 * @returns
 */
export function BarterOutOrder (params) {
    const req = request.create('BarterOutOrderReq', params)
    return request('erp', 'OutOrderBossService.BarterOutOrder', req, 'warehouse.BarterOutOrderResp')
};
/**
 * 编辑出库单 （m目前只支持编辑未出库的 补发、换货 出库单）
 * @export
 * @param {*} params
 * @returns
 */
export function EditOutOrder (params) {
    const req = request.create('EditOutOrderReq', params)
    return request('erp', 'OutOrderBossService.EditOutOrder', req, 'warehouse.EditOutOrderResp')
}

