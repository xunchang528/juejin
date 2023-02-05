import { AppContext } from "next/app";

//照着字节的demo加的文件
export const LOCALDOMAIN = "http://127.0.0.1:3000";
export const CMSDOMAIN = "http://127.0.0.1:1337";

//应该是适配小屏幕的函数
// export const getIsMobile = (context: AppContext) => {
//   const { headers = {} } = context.ctx.req || {};
//   return /mobile|android|iphone|ipad|phone/i.test(
//     (headers["user-agent"] || "").toLowerCase()
//   );
// };

//适配webp格式图片的函数
// export const getIsSupportWebp = (context: AppContext) => {
//   const { headers = {} } = context.ctx.req || {};
//   return headers.accept?.includes("image/webp");
// };
