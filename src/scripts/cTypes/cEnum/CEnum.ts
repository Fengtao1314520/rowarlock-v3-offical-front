/**
 * HTTP 方法
 * METHOD
 */
export enum Method {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
/**
 * header头
 */
export enum HeadKey {
  ACCPET = "Accept",
  ACCEPTENCODING = "Accept-Encoding",
  ACCEPTLANGUAGE = "Accept-Language",
  CACHECONTROL = "Cache-Control",
  COOKIE = "Cookie",
  CONTENTLENGTH = "Content-Length",
  CONTENTTYPE = "Content-Type",
  HOST = "Host",
  USERAGENT = "User-Agent",
}
/**
 * BODY的字段格式
 */
export enum BodyMode {
  FORMDATA = "formdata",
  URLENCODED = "urlencoded",
  JSON = "JSON",
  TEXT = "Text",
  XML = "XML",
  HTML = "HTML",
}
