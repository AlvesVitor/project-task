const BACKEND_URL = "http://localhost:8085";

interface requestProps {
  url: string;
  type: string;
  value: Object | null;
}

function request({ url, type, value }: requestProps) {
  return new Promise<any>((resolver, reject) => {
    fetch(`${BACKEND_URL}${url}`, {
      method: type,
      body: value && JSON.stringify(value),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.ok) {
          resolver(res);
          return res;
        } else {
          reject(new Error(res.codigo + " : " + res.mensagem));
        }
      })
      .catch((err) => reject(err));
  });
}
export { request };
