import { Http } from "@/scripts/networks/Http.ts";
import { ApiUrl } from "@/scripts/cTypes/cEnum/ApiUrl.ts";
import { ServerReqType } from "@/scripts/cTypes/cEnum/ServerReqType.ts";

export class HttpUserInfo {
  /**
   * @description 获取用户信息
   * @param userid
   * @constructor
   */
  static async GetUserInfo(userid: string): Promise<ServerReqType> {
    let data = {
      userid: userid,
    };
    return await Http.get(ApiUrl.USERINFO.value, data);
  }

  /**
   * @description 更新用户信息
   * @param userid
   * @param data
   * @constructor
   */
  static async PutUserInfo(userid: string, data: any): Promise<ServerReqType> {
    return await Http.put(ApiUrl.USERINFO.value, data);
  }
}
