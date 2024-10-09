import Cookie from 'js-cookie';

const getToken = () => {
  try {
    const accessToken = Cookie.get('accessToken');
    if (accessToken) {
      const token = {
        accessToken,
      };
      return token;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const setToken = (token: string) => {
  try {
    Cookie.set('accessToken', token, {
      expires: 30,
      path: '/',
      secure: true,
      sameSite: 'strict',
    });
  } catch (error) {
    console.log(error);
  }
};

const TokenService = {
  getToken,
  setToken,
};

export default TokenService;
