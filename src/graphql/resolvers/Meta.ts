import axios from 'axios';

const Spid = async () => {
  const res = await axios.get(
    'https://static.api.nexon.co.kr/fifaonline4/latest/spid.json'
  );

  console.dir(res);
  return {
    id: 10,
    name: 'name',
  };
};

export const Query = {
  spid: Spid,
};
