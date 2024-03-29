import {
  Body,
  Cookie,
  FormBody,
  Header,
  HRequest,
  HResponse,
  HUrl,
  IuDInterface,
  Param,
} from "@/scripts/cTypes/internal/IuDInterface.ts";
import { BodyMode, HeadKey, Method } from "@/scripts/cTypes/cEnum/CEnum.ts";
import {
  createUUID,
  generateRandomJSON,
  getRandomInRange,
} from "@/scripts/third/commonFunc.ts";

/**
 * 查询接口数量，返回总数和已完成数和调试的数量
 */
export function mockInterfaceInfos() {
  // 随机值
  let totalnumber = getRandomInRange(233, 555);
  let donumber = getRandomInRange(23, 77);
  let completenumber = totalnumber - donumber;

  // 返回值
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

  let interfaceObjs: Array<IuDInterface> = [];

  for (let i = 0; i < totalnumber; i++) {
    const id = createUUID();
    const name = `Mock测试_${i}`;
    const url = generateHUrl();
    const request = generateHRequest();
    const response = generateHResponse();

    // 组装
    const webInterfaceObj: IuDInterface = {
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
    const selected = Math.random() < 0.5;
    const key = `param${i}`;
    const value = `value${i}`;
    const description = `description${i}`;

    // 组装
    const param: Param = {
      selected,
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
  const method = Math.random() < 0.5 ? Method.POST : Method.GET;
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
    const selected = Math.random() < 0.5;
    const key = HeadKey.CONTENTTYPE;
    const value = `value${i}`;
    const description = `description${i}`;

    const header: Header = {
      selected,
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
  const mode = BodyMode.FORMDATA;
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
    const selected = Math.random() < 0.5;
    const key = `key${i}`;
    const value = `value${i}`;
    const description = `description${i}`;

    const formBody: FormBody = {
      selected,
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
  const statuscode = 200;
  const statustext = "OK";
  // 随机生成一个json的字符串
  const body = JSON.stringify(generateRandomJSON(3));
  const usetime = Math.floor(Math.random() * 1000);
  const reqheader: Header[] = generateHeaders();

  const cookies: Cookie[] = generateCookies();

  return {
    header,
    statuscode,
    statustext,
    body,
    usetime,
    reqheader,
    cookies,
  };
}

/**
 * 生成随机的 Cookie 数组
 */
function generateCookies(): Cookie[] {
  const count = Math.floor(Math.random() * 6) + 1;
  const cookies: Cookie[] = [];

  for (let i = 0; i < count; i++) {
    const selected = Math.random() < 0.5;
    const key = `key${i}`;
    const value = `value${i}`;
    const description = `description${i}`;

    const cookie: Cookie = {
      selected,
      key,
      value,
      description,
    };

    cookies.push(cookie);
  }

  return cookies;
}
