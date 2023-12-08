import { BodyMode, HeadKey, Method } from "@/scripts/cTypes/cEnum/CEnum.ts";

/**
 * url信息
 */
export interface HUrl {
  // url地址
  url: string;
  // 端口号
  port: number;
  // 参数，get时使用，restful api时使用
  params: Array<Param>;
}

/**
 * request信息
 */
export interface HRequest {
  // POST GET等
  method: Method | string;
  // request header,CONTENTTYEP之类
  header: Array<Header>;
  // 发送内容
  body: Body;
}

/**
 * response信息
 */
export interface HResponse {
  // response header,CONTENTTYEP之类
  header: Array<Header>;
  // 状态码
  statuscode: number;
  // 状态文本
  statustext: string;
  // 返回内容
  body: string;
  // 耗时
  usetime: number;
  // request的真实header
  reqheader: Array<Header>;
  // Cookies
  cookies: Array<Cookie>;
}

/**
 * Header信息
 */
export interface Header {
  selected: boolean; // 适配前台，是否被选择
  key: HeadKey | string;
  value: string;
  description: string;
}

/**
 * body信息
 * notice:与postman不兼容，重写
 */
export interface Body {
  mode: BodyMode | string;
  // 格式化的form 发送请求 body
  formbody: Array<FormBody>;
  // RAW 发送请求 body
  raw: string;
}

/**
 * restfulAPI用到
 */
export interface Param {
  // 适配前台，是否被选择
  selected: boolean;
  key: string;
  value: string;
  description: string;
}

/**
 * FORM格式的body
 */
export interface FormBody {
  selected: boolean; // 适配前台，是否被选择
  key: string;
  value: string;
  description: string;
}

/**
 * Cookies
 */
export interface Cookie {
  selected: boolean; // 适配前台，是否被选择
  key: string;
  value: string;
  description: string;
}

/**
 * @description: 接口信息
 */
export interface IuDInterface {
  // 具有唯一识别性质的guid id
  id: string;
  // teststep名称
  name: string;
  //
  url: HUrl;
  // request信息
  request: HRequest;
  // response信息
  response: HResponse;
  // 是否被选中
  selected?: boolean;
  [key: string]: any;
}
