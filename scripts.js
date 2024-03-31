document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const voteMessage = document.getElementById('vote-message');
    const confirmVoteButton = document.getElementById('confirm-vote-button');
    const container = document.querySelector('.container');
    
    let selectedOption = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const participantName = this.querySelector('.participant-name').textContent;
        voteMessage.innerHTML = `Você selecionou <strong>${participantName}</strong>. Confirme seu voto:`;
        voteMessage.scrollIntoView({ behavior: 'smooth' });
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedOption = this.cloneNode(true);
        selectedOption.querySelector('.participant-photo').style.pointerEvents = 'none'; // Desativar o clique na foto
        selectedOption.querySelector('.participant-name').style.pointerEvents = 'none'; // Desativar o clique no nome
        confirmVoteButton.style.display = 'block'; // Exibir o botão de confirmar voto
      });
    });
  
    confirmVoteButton.addEventListener('click', function() {
      if (selectedOption) {
        container.innerHTML = ''; // Limpar o conteúdo anterior
        container.appendChild(voteMessage.cloneNode(true));
        const votedOption = selectedOption.cloneNode(true);
        votedOption.querySelector('.participant-photo').style.pointerEvents = 'none'; // Desativar o clique na foto
        votedOption.querySelector('.participant-name').style.pointerEvents = 'none'; // Desativar o clique no nome
        container.appendChild(votedOption);
        
        // Criar botão "Votar Novamente"
        const voteAgainButton = document.createElement('button');
        voteAgainButton.textContent = 'Votar Novamente';
        voteAgainButton.classList.add('button');
        voteAgainButton.classList.add('confirm-vote-button');
        voteAgainButton.style.display = 'block';
        voteAgainButton.addEventListener('click', function() {
          window.location.reload(); // Recarregar a página para votar novamente
        });
        container.appendChild(voteAgainButton);
      }
    });
  });
  