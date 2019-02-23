const show = ([k, v]) => console.log(`${k}: ${v}`);

const main = () => {

    const index = 'c';
    const c = {};

    const fs = {
        a: () => Math.random(),
        b: _r => _r('a') + 1,
        c: _r => _r('b') + 10
    };

    const r = n => {
        let x = c[n];

        if (!x) {
            x = fs[n](r);
            c[n] = x;
        }

        return x;
    }

    r(index);

    Object.entries(c).forEach(show);
};

main();