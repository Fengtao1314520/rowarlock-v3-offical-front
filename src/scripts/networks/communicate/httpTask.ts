import { Http } from "@/scripts/networks/Http.ts";
import { ApiUrl } from "@/scripts/cTypes/cEnum/ApiUrl.ts";
import { ServerReqType } from "@/scripts/cTypes/cEnum/ServerReqType.ts";

export class HttpTask {
  /**
   * @description 获取用户信息
   * @param userid
   * @param params
   * @constructor
   */
  static async GetTaskListByUserId(
    userid: string,
    params: any,
  ): Promise<ServerReqType> {
    let data = {
      userid: userid,
      condition: params,
    };
    return await Http.get(ApiUrl.TASK.value, data);
  }

  /**
   * @description 更新用户信息
   * @param userid
   * @param params
   * @constructor
   */
  static async GetTaskDetailById(
    userid: string,
    params: any,
  ): Promise<ServerReqType> {
    let data = {
      userid: userid,
      condition: params,
    };
    return await Http.get(ApiUrl.TASK.value, data);
  }
}
