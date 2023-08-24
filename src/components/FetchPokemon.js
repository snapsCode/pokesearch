export const getData = async (number, offset) => {
  try {
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${offset}`
    );
    const data = await resp.json();
    const results = await data.results;

    //Now fetching the data from each url
    const urls = await results.map((result) => result.url);
    const urlResps = await Promise.all(urls.map((u) => fetch(u)));
    const urlData = await Promise.all(urlResps.map((resps) => resps.json()));
    // console.log("newdata", newData);
    // const urlData = Promise.all(urls.map((u) => fetch(u))).then((resps) =>
    //   Promise.all(resps.map((res) => res.json()))
    // );
    return await urlData;
  } catch (error) {
    console.log("oops", error);
  }
};

export const somefunc = () => {
  
}