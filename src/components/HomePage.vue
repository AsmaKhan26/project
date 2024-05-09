<template>
  <div class="dashboard">
    <div class="sidebar">
    <head>    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></head>
      <h2>Menu</h2>
      <ul>
        <li><i class="fas fa-user"></i><router-link to="/user"> Utilisateurs</router-link></li>
        <li><i class="fas fa-users"></i><router-link to="/support-team"> L'équipe support</router-link></li>
        <li><i class="fas fa-list"></i><router-link to="/ticket-list"> Liste des tickets</router-link></li>
        <li><i class="fas fa-plus"></i><router-link to="/ticket-form"> Nouveau ticket</router-link></li>
      </ul>
    </div>
    <div class="content">
      <div class="home-page">
        <div class="container">
          <header class="text-center py-5">
            <h1 class="mb-4">Bienvenue sur notre application de ticketing</h1>
            <h3>SolTech</h3>
          </header>
          <main>
            <p class="lead">Gérez facilement vos tickets et suivez leur statut en temps réel.</p>
          </main>
          <footer class="text-center py-3">
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}

</script>

<style scoped>
/* Styles pour le dashboard */
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #ADD8E6;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

a:hover {
  color: #007bff;
}

.content {
  flex: 1;
}

/* Styles spécifiques à la page d'accueil */
.home-page {
  background-image: url('@/assets/5138226.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 50px;
}

.home-page .container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
}

.home-page header h1, .home-page header h3 {
  color: #333;
}

.home-page main {
  margin-top: 20px;
}

.home-page footer {
  margin-top: 20px;
  color: #333;
}

</style>
