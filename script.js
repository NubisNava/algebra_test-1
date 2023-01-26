// git init samo kad radimo projekt iz nule
// git branch da vidimo ima li dodatnih grana
// git branch dev -> on pokuša nešto kopirati iz mastera u dev a to se tek može nakon prvog commita
// git hub -> plusić -> new repository -> ime repozitorija-> public ili private (završni se stavlja na git u public) -> mi radimo push an existing repositora from the command line -> mora biti prebačeno na ssh-> kopiramo prvu liniju jer ona daje vezu između lokalnog i udaljenog repozitorija (git remote add origin)
// git remote -v (ako ništa ne izbaci, znači da nije uspostavljena nikakva veza)
// git push prema udaljenom repozitoriju (ono što smo radili lokalno)
// git push -u origin-> hoćemo da pusha na izvor tako da stvori upstream vezu s master branchom
// git checkout je za promjenu grane
// mi ne želimo spojiti direktno na master jer je na njemu cijela produkcija 
// git branch -a daje i ono što je na udaljenom repozitoriju
// kad refreshamo stranicu, vidimo sve pushove

// git checkout master-> kaže da napravimo git pull jer nam je lokalno korak iza mastera
// fetch pokupi upstreamove
// moram odbaciti promjene da bih mogla mergati master i dev branch
// odbacimo promjene s git stash
// stash odbaci samo ono što smo spremili nakon zadnjeg commita
// git fetch spoji taj dev koji smo mi napravili na git hubu

dosta zanimljivo sve skupa


console.log(window);

