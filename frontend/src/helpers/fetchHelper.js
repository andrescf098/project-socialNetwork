export const fetchHelper = async (url, method, body = {}, token = "") => {
  let options = {
    method: method,
  };
  if (method == "GET" && token) {
    options = {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, options);
    return response;
  } else if (body && !token) {
    options = {
      ...options,
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    return response;
  } else if (body && token && method != "DELETE") {
    options = {
      ...options,
      body: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, options);
    return response;
  } else if (method == "DELETE") {
    options = {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, options);
    return response;
  } else {
    const response = await fetch(url, options);
    return response;
  }
};
