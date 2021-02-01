/* md5: fdea2f02f283117912b2fadef07cb088 */
/* Rap仓库id: 276889 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276889
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'GET/example/1611984283777': [
    'GET/example/1611984283777_REQUEST',
    'GET/example/1611984283777_SUCCESS',
    'GET/example/1611984283777_FAILURE',
  ],

  'POST/login': ['POST/login_REQUEST', 'POST/login_SUCCESS', 'POST/login_FAILURE'],

  'GET/list': ['GET/list_REQUEST', 'GET/list_SUCCESS', 'GET/list_FAILURE'],

  'POST/register': ['POST/register_REQUEST', 'POST/register_SUCCESS', 'POST/register_FAILURE'],

  'POST/add': ['POST/add_REQUEST', 'POST/add_SUCCESS', 'POST/add_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/example/1611984283777': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/example/1611984283777']['Req']
      response: IResponseTypes['GET/example/1611984283777']
    }
  >

  'POST/login': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/login']['Req']
      response: IResponseTypes['POST/login']
    }
  >

  'GET/list': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/list']['Req']
      response: IResponseTypes['GET/list']
    }
  >

  'POST/register': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/register']['Req']
      response: IResponseTypes['POST/register']
    }
  >

  'POST/add': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/add']['Req']
      response: IResponseTypes['POST/add']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870257
   */
  'GET/example/1611984283777': function useData(
    filter?:
      | {request?: IModels['GET/example/1611984283777']['Req']}
      | {(storeData: IRapperStore['GET/example/1611984283777'][0]): boolean}
  ) {
    type Req = IModels['GET/example/1611984283777']['Req']
    type Item = IRapperStore['GET/example/1611984283777'][0]
    type Res = IResponseTypes['GET/example/1611984283777']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/example/1611984283777', filter)
  },

  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870271
   */
  'POST/login': function useData(
    filter?: {request?: IModels['POST/login']['Req']} | {(storeData: IRapperStore['POST/login'][0]): boolean}
  ) {
    type Req = IModels['POST/login']['Req']
    type Item = IRapperStore['POST/login'][0]
    type Res = IResponseTypes['POST/login']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/login', filter)
  },

  /**
   * 接口名：list
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870274
   */
  'GET/list': function useData(
    filter?: {request?: IModels['GET/list']['Req']} | {(storeData: IRapperStore['GET/list'][0]): boolean}
  ) {
    type Req = IModels['GET/list']['Req']
    type Item = IRapperStore['GET/list'][0]
    type Res = IResponseTypes['GET/list']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/list', filter)
  },

  /**
   * 接口名：register
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870748
   */
  'POST/register': function useData(
    filter?: {request?: IModels['POST/register']['Req']} | {(storeData: IRapperStore['POST/register'][0]): boolean}
  ) {
    type Req = IModels['POST/register']['Req']
    type Item = IRapperStore['POST/register'][0]
    type Res = IResponseTypes['POST/register']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/register', filter)
  },

  /**
   * 接口名：add
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870749
   */
  'POST/add': function useData(
    filter?: {request?: IModels['POST/add']['Req']} | {(storeData: IRapperStore['POST/add'][0]): boolean}
  ) {
    type Req = IModels['POST/add']['Req']
    type Item = IRapperStore['POST/add'][0]
    type Res = IResponseTypes['POST/add']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/add', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870257
   */
  'GET/example/1611984283777': function useData(
    requestParams?: IModels['GET/example/1611984283777']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/example/1611984283777']['Req']>
  ) {
    type Req = IModels['GET/example/1611984283777']['Req']
    type Res = IResponseTypes['GET/example/1611984283777']
    type IFetcher = typeof fetch['GET/example/1611984283777']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/example/1611984283777',
      fetcher: fetch['GET/example/1611984283777'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870271
   */
  'POST/login': function useData(
    requestParams?: IModels['POST/login']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/login']['Req']>
  ) {
    type Req = IModels['POST/login']['Req']
    type Res = IResponseTypes['POST/login']
    type IFetcher = typeof fetch['POST/login']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/login',
      fetcher: fetch['POST/login'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：list
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870274
   */
  'GET/list': function useData(
    requestParams?: IModels['GET/list']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/list']['Req']>
  ) {
    type Req = IModels['GET/list']['Req']
    type Res = IResponseTypes['GET/list']
    type IFetcher = typeof fetch['GET/list']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/list',
      fetcher: fetch['GET/list'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：register
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870748
   */
  'POST/register': function useData(
    requestParams?: IModels['POST/register']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/register']['Req']>
  ) {
    type Req = IModels['POST/register']['Req']
    type Res = IResponseTypes['POST/register']
    type IFetcher = typeof fetch['POST/register']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/register',
      fetcher: fetch['POST/register'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：add
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870749
   */
  'POST/add': function useData(
    requestParams?: IModels['POST/add']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/add']['Req']>
  ) {
    type Req = IModels['POST/add']['Req']
    type Res = IResponseTypes['POST/add']
    type IFetcher = typeof fetch['POST/add']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/add',
      fetcher: fetch['POST/add'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870257
   */
  'GET/example/1611984283777': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/example/1611984283777']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/example/1611984283777']['Req']
        response?: IResponseTypes['GET/example/1611984283777']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870271
   */
  'POST/login': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/login']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/login']['Req']
        response?: IResponseTypes['POST/login']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：list
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870274
   */
  'GET/list': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/list']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/list']['Req']
        response?: IResponseTypes['GET/list']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：register
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870748
   */
  'POST/register': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/register']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/register']['Req']
        response?: IResponseTypes['POST/register']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：add
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870749
   */
  'POST/add': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/add']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/add']['Req']
        response?: IResponseTypes['POST/add']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870257
   */
  'GET/example/1611984283777': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/example/1611984283777': undefined},
    })
  },

  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870271
   */
  'POST/login': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/login': undefined},
    })
  },

  /**
   * 接口名：list
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870274
   */
  'GET/list': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/list': undefined},
    })
  },

  /**
   * 接口名：register
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870748
   */
  'POST/register': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/register': undefined},
    })
  },

  /**
   * 接口名：add
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870749
   */
  'POST/add': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/add': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'GET/example/1611984283777': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['GET/example/1611984283777']['Req']}
      | {(storeData: IRapperStore['GET/example/1611984283777'][0]): boolean}
  ) => {
    type Req = IModels['GET/example/1611984283777']['Req']
    type Res = IResponseTypes['GET/example/1611984283777']
    type Item = IRapperStore['GET/example/1611984283777'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/example/1611984283777',
      filter
    )
  },
  'POST/login': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/login']['Req']} | {(storeData: IRapperStore['POST/login'][0]): boolean}
  ) => {
    type Req = IModels['POST/login']['Req']
    type Res = IResponseTypes['POST/login']
    type Item = IRapperStore['POST/login'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/login', filter)
  },
  'GET/list': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/list']['Req']} | {(storeData: IRapperStore['GET/list'][0]): boolean}
  ) => {
    type Req = IModels['GET/list']['Req']
    type Res = IResponseTypes['GET/list']
    type Item = IRapperStore['GET/list'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/list', filter)
  },
  'POST/register': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/register']['Req']} | {(storeData: IRapperStore['POST/register'][0]): boolean}
  ) => {
    type Req = IModels['POST/register']['Req']
    type Res = IResponseTypes['POST/register']
    type Item = IRapperStore['POST/register'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/register', filter)
  },
  'POST/add': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/add']['Req']} | {(storeData: IRapperStore['POST/add'][0]): boolean}
  ) => {
    type Req = IModels['POST/add']['Req']
    type Res = IResponseTypes['POST/add']
    type Item = IRapperStore['POST/add'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/add', filter)
  },
}

export const rapperDataSelector = {
  'GET/example/1611984283777': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/example/1611984283777']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/example/1611984283777')
  },
  'POST/login': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/login']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/login')
  },
  'GET/list': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/list']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/list')
  },
  'POST/register': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/register']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/register')
  },
  'POST/add': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/add']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/add')
  },
}

export const rapperActions = RequestTypes || []
