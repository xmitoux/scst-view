import firebase from '~/plugins/firebase';

export default ({ redirect }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      redirect('/');
    }
  });
};
