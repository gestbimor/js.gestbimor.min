document.addEventListener("DOMContentLoaded", () => {
    // Supprimer tout le contenu existant du body
    document.body.innerHTML = "";

    // Créer le contenu Bootstrap
    const html = `
      <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card p-5 shadow text-center" style="width: 50%;">
          <div class="card-body py-5">
            <h1 class="text-danger mb-3">Abonnement expiré</h1>
            <p class="mb-4">Votre abonnement est arrivé à expiration.<br>
              Veuillez le renouveler pour continuer à utiliser l'application.</p>
            <button class="btn btn-primary">Renouveler maintenant</button>
          </div>
        </div>
      </div>
    `;

    // Injecter dans le body
    document.body.innerHTML = html;
  });
