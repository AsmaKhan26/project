
Copy code
<template>
  <div class="container">
    <div class="ticket-form">
      <form @submit.prevent="handleSubmit">
        <div>
          <h2>Nouveau ticket</h2>
          <br>
          <label for="title">Titre :</label>
          <input type="text" id="title" v-model="ticket.title" required>
        </div>
        <div>
          <label for="description">Description :</label>
          <textarea id="description" v-model="ticket.description" required></textarea>
        </div>
        <div>
          <label for="statut">Statut :</label>
          <select id="statut" v-model="ticket.statut" required>
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
        <div>
          <label for="priority">Priorité :</label>
          <select id="priority" v-model="ticket.priority" required>
            <option value="Faible">Faible</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Forte">Forte</option>
          </select>
        </div>
        <div>
          <label for="creePar">Créé par :</label>
          <input type="text" id="creePar" v-model="ticket.creePar" required>
        </div>
        <div>
          <label for="assigneA">Assigné à :</label>
          <input type="text" id="assigneA" v-model="ticket.assigneA">
        </div>
        <div>
          <label for="tags">Tags :</label>
          <input type="text" id="tags" v-model="ticket.tags" placeholder="Séparez les tags par des virgules">
        </div>
        <div>
          <label for="supportTeam">Équipe de support :</label>
          <select id="supportTeam" v-model="ticket.supportTeam">
          <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
          </select>
        </div>
        <div>
          <label for="commentaire">Commentaires :</label>
          <textarea id="commentaire" v-model="ticket.commentaire"></textarea>
        </div>
        <br>
        <button @click="goToHomePage">Retour à la page d'accueil</button>
        <button @click="goToTicketList">Voir tous les tickets</button>
        <button type="submit">Créer Ticket</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticket: {
        title: '',
        description: '',
        statut: 'En attente',
        priority: 'Moyenne',
        creePar: '',
        assigneA: '',
        tags: '',
        commentaire: '',
        supportTeam: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Données du ticket:', this.ticket);
    },
    goToHomePage() {
      this.$router.push({ name: 'Home' });
    },
    goToTicketList() {
      this.$router.push({ name: 'TicketList' });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Centre verticalement en haut */
  height: 100vh;
}

.ticket-form {
  border: 1px solid #000; /* Ajout du cadre autour du formulaire */
  padding: 20px;
  background-color: #ADD8E6; /* Bleu clair pour le formulaire */
  max-width: 600px; /* Largeur maximale du formulaire */
}

/* Ajout de styles pour les éléments de formulaire */
.ticket-form form div {
  margin-bottom: 15px;
}
.ticket-form form label {
  display: block;
  margin-bottom: 5px;
}
.ticket-form form input,
.ticket-form form select,
.ticket-form form textarea {
  width: calc(100% - 16px); /* Largeur ajustée pour éviter le débordement horizontal dû à la bordure */
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.ticket-form form textarea {
  height: 100px; /* Hauteur personnalisée pour la zone de texte */
}
.ticket-form form button {
  margin-right: 10px;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>