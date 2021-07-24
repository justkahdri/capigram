const getData = async (url: string, callback: (data: any) => void) => {
  const response = await fetch(url);
  const data = await response.json();
  callback(data);
};

export default getData;
