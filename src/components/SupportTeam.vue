<template>
  <div class="info" style="background-color: #ADD8E1">
    <div class="container">
      <header class="text-center py-5">
        
      </header>
      
      <main>
        <p1><i class="fas fa-users"></i> L'équipe support</p1> <!-- Ajout de l'icône Font Awesome -->
        <br><br>
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-header bg-success">
                        <i class="fas fa-list"></i> Support-team list <!-- Ajout de l'icône Font Awesome -->
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Support team</th>
                                    <th>Support member name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Team A</td>
                                    <td>Asma KHAN</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i> Edit</button> <!-- Bouton "Edit" avec icône Font Awesome -->
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i> Delete</button> <!-- Bouton "Delete" avec icône Font Awesome -->
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Team A</td>
                                    <td>Maella ADJELE</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i> Edit</button> <!-- Bouton "Edit" avec icône Font Awesome -->
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i> Delete</button> <!-- Bouton "Delete" avec icône Font Awesome -->
                                    </td>
                                </tr>
                                <td>2</td>
                                    <td>Team B</td>
                                    <td>Didier DUPONT</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i> Edit</button> <!-- Bouton "Edit" avec icône Font Awesome -->
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i> Delete</button> <!-- Bouton "Delete" avec icône Font Awesome -->
                                    </td>
                                    <tr>
                                    <td>2</td>
                                    <td>Team C</td>
                                    <td>Sarah BEN</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fas fa-edit"></i> Edit</button> <!-- Bouton "Edit" avec icône Font Awesome -->
                                        <button class="btn btn-danger"><i class="fas fa-trash"></i> Delete</button> <!-- Bouton "Delete" avec icône Font Awesome -->
                                    </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-header bg-success">
                        <i class="fas fa-user-plus"></i> Create new support member <!-- Ajout de l'icône Font Awesome -->
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <label>Member name</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <button class="btn btn-secondary"><i class="fas fa-sync-alt"></i> Reset</button> <!-- Ajout de l'icône Font Awesome -->
                                <button class="btn btn-success mx-2"><i class="fas fa-save"></i> Save</button> <!-- Ajout de l'icône Font Awesome -->
                            </div>
                        </div>
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
  name: 'HomePage'
}
</script>

<style scoped>
/* Styles spécifiques à la page d'accueil */
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
.info {
  /*background-image: url('@/assets/...jpg');*/
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Pour que l'image reste fixe par rapport à la fenêtre du navigateur */
  min-height: 100vh; /* Pour que la section prenne toute la hauteur de l'écran */

}
</style>
