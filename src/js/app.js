import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss)

const body = document.querySelector('body')

// Runs before every transition
barba.hooks.before((data) => {
    const background = data.current.container.dataset.background;
    body.style.setProperty('--page-background', background);
})

barba.init({
    transitions: [
        {
            name: 'home',
            sync: true,
            to: {
                namespace: ['home'],
            },
            once() {},
            leave() {},
            enter() {},
        },
        {
            name: 'fade',
            to: {
                namespace: ['fade'],
            },
            leave() {
                // with css plugin, this will not run
                console.log('leave');
            },
            enter() {
                // with css plugin, this will not run
                console.log('enter');
            },
        },
        {
            name: 'clip',
            sync: true,
            to: {
                namespace: ['clip'],
            },
            leave() {
                // with css plugin, this will not run
                console.log('leave');
            },
            enter() {
                // with css plugin, this will not run
                console.log('enter');   
            },
        },
        {
            name: 'with-cover',
            to: {
                namespace: ['with-cover'],
            },
            leave() {
                // with css plugin, this will not run
                console.log('leave');
            },
            enter() {
                // with css plugin, this will not run
                console.log('enter');
            },
        }
    ]
})
