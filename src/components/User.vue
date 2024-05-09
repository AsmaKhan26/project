<template>
  <div class="info" style="background-color: #ADD8E1">
    <div class="container">
      <header class="text-center py-5">
        <h1>Utilisateurs</h1>
      </header>
      
      <main>
        <div class="row">
          <!-- Liste des utilisateurs -->
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6" v-for="user in users" :key="user.id">
                <div class="card mb-3 border-primary">
                  <div class="card-header bg-primary text-white">
                    {{ user.firstName }} <i class="fas fa-user"></i>
                  </div>
                  <div class="card-body">
                    <p><i class="fas fa-phone"></i> <strong>Numéro:</strong> {{ user.phoneNumber }}</p>
                    <p><i class="fas fa-envelope"></i> <strong>Email:</strong> {{ user.email }}</p>
                    <p><i class="fas fa-briefcase"></i> <strong>Métier:</strong> {{ user.job }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Formulaire de création d'un nouvel utilisateur -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-success text-white">
                Créer un nouvel utilisateur <i class="fas fa-plus-circle"></i>
              </div>
              <div class="card-body">
                <form @submit.prevent="createUser">
                  <div class="form-group">
                    <label for="firstName">Prénom</label>
                    <input type="text" class="form-control" id="firstName" v-model="newUser.firstName" required>
                  </div>
                  <div class="form-group">
                    <label for="phoneNumber">Numéro de téléphone</label>
                    <input type="text" class="form-control" id="phoneNumber" v-model="newUser.phoneNumber" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="newUser.email" required>
                  </div>
                  <div class="form-group">
                    <label for="job">Métier</label>
                    <input type="text" class="form-control" id="job" v-model="newUser.job" required>
                  </div>
                  <div class="form-group">
                    <label for="gender">Genre</label>
                    <select class="form-control" id="gender" v-model="newUser.gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input type="password" class="form-control" id="password" v-model="newUser.password" required>
                  </div>
                  <button type="submit" class="btn btn-success"><i class="fas fa-save"></i> Enregistrer</button>
                </form>
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
  name: 'UserList',
  data() {
    return {
      users: [
        { id: 1, firstName: 'John', phoneNumber: '123456789', email: 'john@example.com', job: 'Développeur Web' },
        { id: 2, firstName: 'Jane', phoneNumber: '987654321', email: 'jane@example.com', job: 'Designer Graphique' },
        { id: 3, firstName: 'Alice', phoneNumber: '555555555', email: 'alice@example.com', job: 'Ingénieur Logiciel' },
        { id: 4, firstName: 'Bob', phoneNumber: '123456789', email: 'bob@example.com', job: 'Analyste de Données' },
        { id: 5, firstName: 'Sarah', phoneNumber: '987654321', email: 'sarah@example.com', job: 'Ingénieur en Robotique' },
        { id: 6, firstName: 'Michael', phoneNumber: '555555555', email: 'michael@example.com', job: 'Ingénieur Réseau' },
        { id: 7, firstName: 'Emily', phoneNumber: '123456789', email: 'emily@example.com', job: 'Développeur Mobile' },
        { id: 8, firstName: 'David', phoneNumber: '987654321', email: 'david@example.com', job: 'Designer UX/UI' }
      ],
      newUser: { firstName: '', phoneNumber: '', email: '', job: '', gender: 'male', password: '' }
    };
  },
  methods: {
    createUser() {
      console.log('Nouvel utilisateur créé:', this.newUser);
      this.newUser = { firstName: '', phoneNumber: '', email: '', job: '', gender: 'male', password: '' };
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
