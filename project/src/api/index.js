import service from '../utils/request.js'

//顶部导航栏列表接口
export function getMenuList(data) {
    return service({
        method: 'post',
        url: '/Index/IndexLoad',
        data
    })
}

//左侧导航栏列表接口
export function getChildMenu(data) {
    return service({
        method: 'post',
        url: '/Index/GetChildMenu',
        data
    })
}

//获取按钮接口
export function GetButtons(data) {
    return service({
        method: 'post',
        url: '/Index/GetButtons',
        data
    })
}


//个人信息接口
export function info(data) {
    return service({
        method: 'post',
        url: '/Index/WelComeLoad',
        data
    })
}


//首页列表接口
export function WelComeFunc(data) {
    return service({
        method: 'post',
        url: '/Index/WelComeFunc',
        data
    })
}

//人员列表
export function EmployeeList(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeList',
        data
    })
}

//人员列表删除
export function EmployeeDelete(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeDelete',
        data
    })
}

//部门列表
export function DeptList(data) {
    return service({
        method: 'post',
        url: '/Employee/DeptList',
        data
    })
}

//部门列表删除
export function DeptDelete(data) {
    return service({
        method: 'post',
        url: '/Employee/DeptDelete',
        data
    })
}

//人员列表重置拼音
export function EmployeeResetPinyin(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeResetPinyin',
        data
    })
}

//人员列表导入
export function EmployeeImport(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeImport',
        data
    })
}