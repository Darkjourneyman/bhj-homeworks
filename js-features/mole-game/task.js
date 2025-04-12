(() => {
    let playing = true,
      activeHole = 1;
  
    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        next();
      }, 800 );
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.addEventListener('click', function() {
        if (!playing) return;
        
        if (this.classList.contains('hole_has-mole')) {
          const dead = document.getElementById('dead');
          dead.textContent = parseInt(dead.textContent) + 1;
        } else {
          const lost = document.getElementById('lost');
          lost.textContent = parseInt(lost.textContent) + 1;
        }
        
        if (parseInt(document.getElementById('dead').textContent) >= 10) {
          alert('Победа!');
          resetGame();
        } else if (parseInt(document.getElementById('lost').textContent) >= 5) {
          alert('Вы проиграли!');
          resetGame();
        }
      });
    }
    
    function resetGame() {
      document.getElementById('dead').textContent = '0';
      document.getElementById('lost').textContent = '0';
    }
  
    next();
  })();