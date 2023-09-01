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
    return await urlData;
  } catch (error) {
    console.log("oops", error);
  }
};

export const getGen = async (gen) => {
  try {
    let num = 151;
    let offset = 0;
    switch (gen) {
      case 1:
        num = 151;
        offset = 0;
        break;
      case 2:
        num = 100;
        offset = 151;
        break;
      case 3:
        num = 135;
        offset = 251;
        break;
      case 4:
        num = 107;
        offset = 386;
        break;
      case 5:
        num = 156;
        offset = 493;
        break;
      case 6:
        num = 72;
        offset = 649;
        break;
      case 7:
        num = 88;
        offset = 721;
        break;
      case 8:
        num = 96;
        offset = 809;
        break;
      case 9:
        num = 104;
        offset = 906;
        break;
      default:
        num = 151;
        offset = 0;
        break;
    }
    return await getData(num, offset);
  } catch (error) {
    console.log("there was an error.", error);
  }
};
