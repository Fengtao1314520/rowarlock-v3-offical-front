import { Http } from "@/scripts/networks/Http.ts";
import { ServerReqType } from "@/scripts/cTypes/cEnum/ServerReqType.ts";
import { ApiUrl } from "@/scripts/cTypes/cEnum/ApiUrl.ts";

export class HttpStatistics {
  /**
   * @description 获取用户统计数据
   * @param userid
   * @constructor
   */
  static async GetStatistics(userid: string): Promise<ServerReqType> {
    return await Http.get(ApiUrl.STATISTICS.value, { userid: userid });
  }
}
