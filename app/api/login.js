import axios from 'axios';
const planningCenterUrl = 'https://login.planningcenteronline.com';

export const planningCenterLogin = () => {
    axios({
        method: 'post',
        url: `${planningCenterUrl}/login`,
      }).then((response) => {
        console.log(response.data);
      });
}