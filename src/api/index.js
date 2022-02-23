import request from "@/utils/request";

export function getRoutes() {
  return request({
    url: "/role/auth/tree",
    method: "get",
  });
}

export function getUserList(params) {
  return request({
    url: "/user",
    method: "get",
    params,
  });
}

export function getUserDetail(id) {
  return request({
    url: `/user/${id}`,
    method: "get",
  });
}
