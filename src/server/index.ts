import * as Server from './server';

console.log(`Launching Node environment...`);

// Start listener
if (!module.parent) {
    Server.start();
}
