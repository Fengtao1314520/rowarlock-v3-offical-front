import { ServerReqType } from "@/scripts/cTypes/cEnum/ServerReqType.ts";
import { Method } from "@/scripts/cTypes/cEnum/CEnum.ts";
import { axiosInstance } from "@/scripts/networks/extraAxios.ts";

export class Http {
  /**
   * @description POST请求
   * @param url 请求地址
   * @param data 请求数据
   * @param headers 请求头
   */
  static async post(url: string, data: any, headers?: Record<string, string>) {
    // 返回结果
    let serverReqType: ServerReqType = {
      data: { rescode: 0, resdata: null, resmessage: "" },
      duration: 0,
      method: Method.POST,
      statuscode: 0,
      url: url,
    };

    // 如果headers有，就复写
    if (headers !== undefined) {
      axiosInstance.defaults.headers.post[headers.key] = headers.value;
    }

    // 计时开始
    let startTime = performance.now();

    let response = await axiosInstance.post(url, data);

    // 计时结束
    let endTime = performance.now();
    serverReqType.duration = endTime - startTime;
    serverReqType.statuscode = response.status;
    // 对象转json字符串转为对象
    serverReqType.data = response.data;

    // 返回值
    return serverReqType;
  }

  /**
   * @description GET请求
   * @param url
   * @param data
   * @param headers
   */
  static async get(url: string, data?: any, headers?: Record<string, string>) {
    // 返回结果
    let serverReqType: ServerReqType = {
      data: { rescode: 0, resdata: null, resmessage: "" },
      duration: 0,
      method: Method.GET,
      statuscode: 0,
      url: url,
    };

    // 如果headers有，就复写
    if (headers !== undefined) {
      axiosInstance.defaults.headers.post[headers.key] = headers.value;
    }

    // 计时开始
    let startTime = performance.now();

    // 处理原始data
    if (data !== undefined) {
      // 查看data,包含condition字段
      if (data["condition"]) {
        // 转为url编码
        data["condition"] = encodeURI(JSON.stringify(data["condition"]));
      }
    }

    try {
      // 发送
      let response = await axiosInstance.get(url, {
        params: data,
      });
      serverReqType.statuscode = response.status;
      // 对象转json字符串转为对象
      serverReqType.data = response.data;
    } catch (e) {
      serverReqType.data.resdata = e;
    } finally {
      // 计时结束
      let endTime = performance.now();
      // 返回值
      serverReqType.duration = endTime - startTime;
    }
    return serverReqType;
  }

  static async put(url: string, data: any, headers?: Record<string, string>) {
    // 返回结果
    let serverReqType: ServerReqType = {
      data: { rescode: 0, resdata: null, resmessage: "" },
      duration: 0,
      method: Method.PUT,
      statuscode: 0,
      url: url,
    };

    // 如果headers有，就复写
    if (headers !== undefined) {
      axiosInstance.defaults.headers.post[headers.key] = headers.value;
    }

    // 计时开始
    let startTime = performance.now();

    try {
      let response = await axiosInstance.put(url, data);

      serverReqType.statuscode = response.status;
      // 对象转json字符串转为对象
      serverReqType.data = response.data;
    } catch (e) {
      serverReqType.data.resdata = e;
    } finally {
      // 计时结束
      let endTime = performance.now();
      // 返回值
      serverReqType.duration = endTime - startTime;
    }
    return serverReqType;
  }
}
