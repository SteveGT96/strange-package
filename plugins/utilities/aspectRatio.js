const plugin = require('tailwindcss/plugin');


const aspectRatio = plugin(function({addUtilities, variants, theme}) {
    //'@apply absolute w-full h-full inset-0': {}
    const child = {
        '@apply absolute w-full h-full inset-0': {}
    }
    let ratio = {
        '.ratio-1-1': {
            position: 'relative',
            paddingTop:  '100%',
            '> *': {
                ...child
            }
        },
    }

    for(let i=1; i<17; i++) {
        for(let j=1; j<17; j++) {
            if(i === j) {
                continue;
            }
            const className = `.ratio-${j}-${i}`;
            ratio = {
                ...ratio,
                [className]: {
                    position: 'relative',
                    paddingTop: `${(i/j)*100}%`,
                    '> *': {
                        ...child
                    }
                },
            }
        }
    }
    addUtilities(ratio, variants('aspectRatio'));
});

module.exports = aspectRatio;