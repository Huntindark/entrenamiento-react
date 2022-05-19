const url = "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/";

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const fetchApi = async ({ path }) => {
  try {
    let result = await fetch(`${url}${path}`).then((payload) => payload.json());
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const postApi = async ({ path, body }) => {
  try {
    return await fetch(`${url}${path}`, {
      ...requestOptions,
      body: body,
    }).then((response) => response.status);
  } catch (error) {
    console.error(error);
  }
};
