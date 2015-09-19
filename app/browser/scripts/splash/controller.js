'use strict';

class SplashCtrl {


    constructor() {
        this.electronVersion = process.versions['electron'];
    }

    openDevTools() {
    	var ipc = require('ipc');
  		ipc.send('devTools', null);
    }

}
export {
    SplashCtrl
};
