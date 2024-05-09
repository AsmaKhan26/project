<template>
  <div class="info" style="background-color: #ADD8E1">
    <div class="container">
      <header class="text-center py-5">
        <h1>Liste des Tickets</h1>
      </header>
      
      <main>
        <div class="row">
          <!-- Liste des tickets -->
          <div class="col-md-4" v-for="ticket in tickets" :key="ticket.id">
            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white">
                {{ ticket.title }} <!-- Titre du ticket -->
              </div>
              <div class="card-body">
                <p><strong>Statut:</strong> {{ ticket.status }}</p> <!-- Statut du ticket -->
                <p><strong>Priorité:</strong> {{ ticket.priority }}</p> <!-- Priorité du ticket -->
                <p><strong>Date de création:</strong> {{ ticket.createdAt }}</p> <!-- Date de création du ticket -->
                <p><strong>Date d'échéance:</strong> {{ ticket.dueDate }}</p> <!-- Date d'échéance du ticket -->
                <p><strong>Créé par:</strong> {{ ticket.createdBy }}</p> <!-- Utilisateur qui a créé le ticket -->
                <p><strong>Assigné à:</strong> {{ ticket.assignedTo }}</p> <!-- Utilisateur auquel le ticket est assigné -->
                <p><strong>Tags:</strong> {{ ticket.tags.join(', ') }}</p> <!-- Tags associés au ticket -->
                <p><strong>Commentaires:</strong> {{ ticket.comments.length }}</p> <!-- Nombre de commentaires associés au ticket -->
                <p><strong>Équipe de support:</strong> {{ ticket.supportTeam }}</p> <!-- Équipe de support associée au ticket -->
                <p><strong>Description:</strong> {{ ticket.description }}</p> <!-- Description du ticket -->
                <button class="btn btn-danger" @click="closeTicket(ticket.id)">Fermer le ticket</button> <!-- Bouton pour fermer le ticket -->
                <button class="btn btn-info" @click="showCommentPopup(ticket.comments)">Voir les commentaires</button> <!-- Bouton pour afficher les commentaires -->
              </div>
            </div>
          </div>
        </div>
      </main>
    
      <footer class="text-center py-3">
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketList',
  data() {
    return {
      tickets: [
         { id: 1, title: 'Problème avec le serveur', status: 'En attente', priority: 'Haute', createdAt: '2024-05-09', dueDate: '2024-05-15', createdBy: 'John Doe', assignedTo: 'Jane Smith', tags: ['Bug', 'Urgent'], comments: ['Comment1', 'Comment2'], supportTeam: 'Support Team A', description: 'Le serveur rencontre des problèmes intermittents de connexion.' },
  { id: 2, title: 'Erreur de connexion', status: 'En cours', priority: 'Moyenne', createdAt: '2024-05-08', dueDate: '2024-05-12', createdBy: 'Alice Johnson', assignedTo: 'Bob Brown', tags: ['Network', 'Security'], comments: ['Comment1', 'Comment2'], supportTeam: 'Support Team B', description: 'Certains utilisateurs signalent des erreurs de connexion lors de l\'accès à l\'application.' },
  { id: 3, title: 'Problème d\'affichage', status: 'Fermé', priority: 'Basse', createdAt: '2024-05-07', dueDate: '2024-05-10', createdBy: 'Emily Davis', assignedTo: 'Michael Wilson', tags: ['UI', 'UX'], comments: ['Comment1', 'Comment2'], supportTeam: 'Support Team C', description: 'Les images ne se chargent pas correctement sur la page d\'accueil.' },
  // Ajoutez d'autres tickets ici
      ],
      commentPopupVisible: false,
      selectedTicketComments: []
    };
  },
  methods: {
    closeTicket(ticketId) {
      // Logique pour fermer un ticket
      console.log('Ticket fermé:', ticketId);
    },
    showCommentPopup(comments) {
      this.selectedTicketComments = comments;
      this.commentPopupVisible = true;
    },
    closeCommentPopup() {
      this.commentPopupVisible = false;
      this.selectedTicketComments = [];
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques à la page d'accueil */
.info {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
