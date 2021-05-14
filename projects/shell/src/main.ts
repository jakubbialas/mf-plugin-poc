
// import('./bootstrap');

import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry('http://localhost:4201/remoteEntry.js', 'foo_feature'),
    loadRemoteEntry('http://localhost:4202/remoteEntry.js', 'bar_feature')
])
    .catch(err => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch(err => console.error(err));
