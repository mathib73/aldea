import axios from 'axios';

const sendExcel = async (excel) => {
  const data = new FormData();
  data.append('excel', excel);
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/excel`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  };

  const res = await axios(config);
  console.log(res.status);
  return res.status;
};

export { sendExcel };
