/* md5: fb5f21fcd0bb073d51d26c888fb7c623 */
/* Rap仓库id: 276889 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276889
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870257
   */
  'GET/example/1611984283777': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string
    }
    Res: {
      /**
       * 字符串属性示例
       */
      string: string
      /**
       * 数字属性示例
       */
      number: number
      /**
       * 布尔属性示例
       */
      boolean: boolean
      /**
       * 正则属性示例
       */
      regexp: string
      /**
       * 函数属性示例
       */
      function: string
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number
        /**
         * 数组元素示例
         */
        bar: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items: any[]
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number
        /**
         * 对象属性示例
         */
        bar: string
      }
      /**
       * 占位符示例
       */
      placeholder: string
    }
  }

  /**
   * 接口名：login
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870271
   */
  'POST/login': {
    Req: {
      username: string
      password: string
    }
    Res: {
      isOk: number
      errMsg: string
    }
  }

  /**
   * 接口名：list
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870274
   */
  'GET/list': {
    Req: {}
    Res: {
      isOk: number
      errMsg: string
      data: {
        id: number
        type: string
        amount: number
        create_at: string
      }[]
    }
  }

  /**
   * 接口名：register
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870748
   */
  'POST/register': {
    Req: {
      username?: string
      password?: string
    }
    Res: {
      isOk: number
      errMsg: string
    }
  }

  /**
   * 接口名：add
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870749
   */
  'POST/add': {
    Req: {}
    Res: {}
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'GET/example/1611984283777': ResSelector<IModels['GET/example/1611984283777']['Res']>
  'POST/login': ResSelector<IModels['POST/login']['Res']>
  'GET/list': ResSelector<IModels['GET/list']['Res']>
  'POST/register': ResSelector<IModels['POST/register']['Res']>
  'POST/add': ResSelector<IModels['POST/add']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：示例接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870257
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1611984283777': (req?: IModels['GET/example/1611984283777']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/example/1611984283777', {
        url: '/example/1611984283777',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1611984283777']>
    },

    /**
     * 接口名：login
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870271
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/login': (req?: IModels['POST/login']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/login', {
        url: '/login',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/login']>
    },

    /**
     * 接口名：list
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870274
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/list': (req?: IModels['GET/list']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/list', {
        url: '/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/list']>
    },

    /**
     * 接口名：register
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870748
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/register': (req?: IModels['POST/register']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/register', {
        url: '/register',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/register']>
    },

    /**
     * 接口名：add
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276889&mod=438605&itf=1870749
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/add': (req?: IModels['POST/add']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/add', {
        url: '/add',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/add']>
    },
  }
}
