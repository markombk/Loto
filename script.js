document.addEventListener("DOMContentLoaded", function() {
    const brojeviDiv = document.getElementById('brojevi');
    const rezultatDiv = document.getElementById('rezultat');
    const izvlacenjeDiv = document.getElementById('izvlacenje');
    const potvrdiIzborBtn = document.getElementById('potvrdiIzbor');
    const novaIgraBtn = document.getElementById('novaIgra');
    let izabraniBrojevi = [];
    let izvuceniBrojevi = [];
    let brojPogodaka = 0;

    function secureRandomInt(maxExclusive) {
        const maxUint32 = 0x100000000;
        const limit = maxUint32 - (maxUint32 % maxExclusive);
        const randomValues = new Uint32Array(1);
        let value;

        do {
            window.crypto.getRandomValues(randomValues);
            value = randomValues[0];
        } while (value >= limit);

        return value % maxExclusive;
    }

    function generisiBrojeve() {
        for (let i = 1; i <= 39; i++) {
            const brojDiv = document.createElement('div');
            brojDiv.textContent = i;
            brojDiv.addEventListener('click', function() {
                if (izabraniBrojevi.includes(i)) {
                    izabraniBrojevi.splice(izabraniBrojevi.indexOf(i), 1);
                    brojDiv.classList.remove('selected');
                } else if (izabraniBrojevi.length < 7) {
                    izabraniBrojevi.push(i);
                    brojDiv.classList.add('selected');
                }
            });
            brojeviDiv.appendChild(brojDiv);
        }
    }

    function izvuciBroj() {
        if (izvuceniBrojevi.length < 7) {
            let broj = secureRandomInt(39) + 1;
            while (izvuceniBrojevi.includes(broj)) {
                broj = secureRandomInt(39) + 1;
            }
            izvuceniBrojevi.push(broj);

            const brojDiv = document.createElement('div');
            brojDiv.textContent = broj;
            izvlacenjeDiv.appendChild(brojDiv);

            if (izabraniBrojevi.includes(broj)) {
                brojPogodaka++;
            }

            if (izvuceniBrojevi.length === 7) {
                rezultatDiv.textContent = 'Izvlačenje je završeno, imate ukupno ' + brojPogodaka + ' pogodaka';
                novaIgraBtn.hidden = false;
            } else {
                setTimeout(izvuciBroj, 3000); // čeka 3 sekunde pre nego što izvuče sledeći broj
            }
        }
    }

    potvrdiIzborBtn.addEventListener('click', function() {
        if (izabraniBrojevi.length === 7) {
            potvrdiIzborBtn.hidden = true;
            izvuciBroj();
        } else {
            alert('Morate izabrati tačno 7 brojeva.');
        }
    });

    novaIgraBtn.addEventListener('click', function() {
        izabraniBrojevi = [];
        izvuceniBrojevi = [];
        brojPogodaka = 0;
        brojeviDiv.textContent = '';
        izvlacenjeDiv.textContent = '';
        rezultatDiv.textContent = '';
        generisiBrojeve();
        potvrdiIzborBtn.hidden = false;
        novaIgraBtn.hidden = true;
    });

    generisiBrojeve();
});
