import { Method } from "@/scripts/cTypes/cEnum/CEnum.ts";

/**
 * @description: 从服务器端网络返回数据类型
 */
export type ServerReqType = {
  url: string;
  method: Method;
  statuscode: number;
  duration: number;
  data: {
    rescode: number;
    resmessage: string;
    resdata: any | null;
  };
};
