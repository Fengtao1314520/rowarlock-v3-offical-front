import { CuDUserDetails } from "@/ctypes/communicate/CuDUserDetails.ts";

/**
 * @description: 用户信息
 */
export interface IuDUser extends CuDUserDetails {
  [key: string]: any;
}
