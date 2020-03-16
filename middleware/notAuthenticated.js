import firebase from '~/plugins/firebase';

export default async ({ redirect }) => {
  const user = await new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => resolve(user));
  });

  if (user) {
    redirect('/unit-list');
  }
};
