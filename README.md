# tabMonitor
tabMonitor uses `localStorage` to keep track of how many browser tabs are open for any given website.

**tabMonitor** listens for page `load` and `unload` events:

 - when a page is loaded, a new entry is added to `localStorage`
 - when a page is unloaded, the last entry is removed from `localStorage`

If there is ever more than one entry, the browser can report not only that more than one tab is open from the same site but also *how many* tabs are open from the same site.

## tabMonitor

```
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
```
