type User = {
  username: string;
  password: string;
};
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Bueno', password: '123456' };
const sentUser = { username: 'Bueno', password: '123454' };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

export default 1;
