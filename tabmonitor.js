// registerOpenTab FUNCTION

const registerOpenTab = () => {

  let tabsOpen = 1;

  while (localStorage.getItem('openTab' + tabsOpen) !== null) {

    tabsOpen++;
  }

  localStorage.setItem('openTab' + tabsOpen, 'open');

  if (localStorage.getItem('openTab2') !== null) {

      window.alert('This application is already running in ' + (tabsOpen - 1) + ' other browser tab(s).')
  }
}


// unregisterOpenTab FUNCTION

const unregisterOpenTab = () => {

  let tabsOpen = 1;

  while (localStorage.getItem('openTab' + tabsOpen) !== null) {

    tabsOpen++;
  }

  localStorage.removeItem('openTab' + (tabsOpen - 1));
}


// EVENT LISTENERS
window.addEventListener('load', registerOpenTab);
window.addEventListener('beforeunload', unregisterOpenTab);
