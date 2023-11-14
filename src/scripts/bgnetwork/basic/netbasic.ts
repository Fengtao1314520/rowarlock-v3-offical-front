/**
 * POST请求
 * @param url 请求地址
 * @param data 请求数据
 * @param headers 请求头
 */
export async function postFunction(
  url: string,
  data: string,
  headers: Record<string, string> | null,
) {
  // 如果headers没有定义，就定义一个
  if (headers === null) {
    headers = { "content-type": "application/json" };
  }

  // 发送请求
  const response = await fetch(url, {
    mode: "cors",
    method: "POST",
    headers: headers,
    body: data,
  });
  let statuscode = response.status;
  let result = await response.json();
}

/**
 * GET请求
 * @param url 请求地址
 * @param data 请求数据
 * @param headers 请求头
 */
export async function getFunction(
  url: string,
  data: string,
  headers: Record<string, string> | null,
) {
  // 如果headers没有定义，就定义一个
  if (headers === null) {
    headers = { "content-type": "application/json" };
  }
  // 发送请求
  const response = await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: headers,
    body: data,
  });
  let statuscode = response.status;
  let result = await response.json();
}
