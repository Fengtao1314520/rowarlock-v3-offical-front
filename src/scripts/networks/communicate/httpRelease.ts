import { ServerReqType } from "@/scripts/cTypes/cEnum/ServerReqType.ts";
import { Http } from "@/scripts/networks/Http.ts";
import { ApiUrl } from "@/scripts/cTypes/cEnum/ApiUrl.ts";

export class HttpRelease {
  /**
   * @description 获取用户按年份释放的记录
   * @param userid
   * @param params
   * @constructor
   */
  static async GetReleaseYearListByUserId(
    userid: string,
    params: any,
  ): Promise<ServerReqType> {
    let data = {
      userid: userid,
      condition: params,
    };
    return await Http.get(ApiUrl.RELEASE.value, data);
  }

  /**
   * @description 获取用户当前年的释放记录
   * @param userid
   * @param params
   * @constructor
   */
  static async GetReleaseListByUserId(
    userid: string,
    params: any,
  ): Promise<ServerReqType> {
    let data = {
      userid: userid,
      condition: params,
    };
    return await Http.get(ApiUrl.RELEASE.value, data);
  }
}
