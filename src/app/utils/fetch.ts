interface JsonRequestInit extends RequestInit {
  body?: any;
}
export const fetchAsync = async (url: string, options: JsonRequestInit = {}) => {
  options.body = JSON.stringify(options.body);
  options.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const response = await fetch(url, {
    ...options,
  });
  let result: any;

  try {
    result = await response.json();
  } catch (err) {
    console.error('Invalid data type');
  }
  if (response.ok) {
    return result;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw { status: response.status, headers: response.headers, data: result };
  }
};
