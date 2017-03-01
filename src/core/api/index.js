/* eslint-disable no-undef */
export const userAdd = (user) => {

  return new Promise((resolve, reject) => {
    if (!user.userId) {
      let newUser = {...user};
      newUser.userId = Math.round(Math.random()*10000);
      resolve(newUser)
    } else {
      return reject('User already exist')
    }
  });
};

export const userUpdate = (user) => {
  return new Promise((resolve, reject) => {
    if (user.userId) {
      resolve(user)
    } else {
      return reject('No user ID')
    }
  });
};

export const userRemove = (user) => {
  return new Promise((resolve, reject) => {
    if (user.userId) {
      resolve(user)
    } else {
      return reject('No user ID')
    }
  });
};