import { createUUID, getRandomInRange } from "@/scripts/third/smallThird";
import {
  Body,
  FormBody,
  Header,
  HRequest,
  HResponse,
  HUrl,
  Param,
  webInterfaceObj,
} from "@/ctypes/interfaceObj";
import { BODYMODE, HEADERKEY, METHOD } from "@/ctypes/cenum/cenum";

/**
 * 查询接口数量，返回总数和已完成数和调试的数量
 */
export function mockInterfaceInfos() {
  let totalnumber = getRandomInRange(233, 555);
  let donumber = getRandomInRange(23, 77);
  let completenumber = totalnumber - donumber;

  return {
    detail: {
      totalnumber: totalnumber,
      donumber: donumber,
      completenumber: completenumber,
    },
    cover: {
      totalnumber: "100",
      donumber: ((donumber / totalnumber) * 100).toFixed(2),
      completenumber: ((completenumber / totalnumber) * 100).toFixed(2),
    },
  };
}

/**
 * 查询接口列表，返回接口列表
 */
export function mockInterfaceObjs() {
  let totalnumber: number = getRandomInRange(10, 30);

  let interfaceObjs: Array<webInterfaceObj> = [];

  for (let i = 0; i < totalnumber; i++) {
    const id = createUUID();
    const name = `Mock测试_${i}`;
    const url = generateHUrl();
    const request = generateHRequest();
    const response = generateHResponse();

    // 组装
    const webInterfaceObj: webInterfaceObj = {
      id,
      name,
      url,
      request,
      response,
    };

    interfaceObjs.push(webInterfaceObj);
  }

  return interfaceObjs;
}

/**
 * 生成随机的 HUrl 对象
 * @returns 生成的 HUrl 对象
 */
function generateHUrl(): HUrl {
  const url = "https://example.com";
  const port = 8080;
  const params: Param[] = generateParams();

  // 返回值
  return {
    url,
    port,
    params,
  };
}

/**
 * 生成随机的 Param 数组
 * @returns 生成的 Param 数组
 */
function generateParams(): Param[] {
  const count = getRandomInRange(6, 12);
  const params: Param[] = [];

  for (let i = 0; i < count; i++) {
    const select = Math.random() < 0.5;
    const key = `param${i}`;
    const value = `value${i}`;
    const description = `description${i}`;

    // 组装
    const param: Param = {
      select,
      key,
      value,
      description,
    };
    params.push(param);
  }
  return params;
}

/**
 * 生成随机的 HRequest 对象
 * @returns 生成的 HRequest 对象
 */
function generateHRequest(): HRequest {
  const method = Math.random() < 0.5 ? METHOD.POST : METHOD.GET;
  const header: Header[] = generateHeaders();
  const body = generateBody();

  // 组装
  return {
    method,
    header,
    body,
  };
}

/**
 * 生成随机的 Header 数组
 * @returns 生成的 Header 数组
 */
function generateHeaders(): Header[] {
  const count = getRandomInRange(6, 12);
  const headers: Header[] = [];

  for (let i = 0; i < count; i++) {
    const select = Math.random() < 0.5;
    const key = HEADERKEY.CONTENTTYPE;
    const value = `value${i}`;
    const description = `description${i}`;

    const header: Header = {
      select,
      key,
      value,
      description,
    };

    headers.push(header);
  }

  return headers;
}

/**
 * 生成随机的 Body 对象
 * @returns 生成的 Body 对象
 */
function generateBody(): Body {
  const mode = BODYMODE.FORMDATA;
  const formbody: FormBody[] = generateFormBodies();
  const raw = "raw body";

  return {
    mode,
    formbody,
    raw,
  };
}

/**
 * 生成随机的 FormBody 数组
 * @returns 生成的 FormBody 数组
 */
function generateFormBodies(): FormBody[] {
  const count = Math.floor(Math.random() * 10) + 1;
  const formBodies: FormBody[] = [];

  for (let i = 0; i < count; i++) {
    const select = Math.random() < 0.5;
    const key = `key${i}`;
    const value = `value${i}`;
    const description = `description${i}`;

    const formBody: FormBody = {
      select,
      key,
      value,
      description,
    };

    formBodies.push(formBody);
  }

  return formBodies;
}

/**
 * 生成随机的 HResponse 对象
 * @returns 生成的 HResponse 对象
 */
function generateHResponse(): HResponse {
  const header: Header[] = generateHeaders();
  const statuscode = Math.floor(Math.random() * 1000) + 200;
  const statustext = "OK";
  const body = "response body";
  const usetime = Math.floor(Math.random() * 1000);
  const reqheader: Header[] = generateHeaders();

  return {
    header,
    statuscode,
    statustext,
    body,
    usetime,
    reqheader,
  };
}
