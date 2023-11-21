<template>
    <div class="container">
      <session>
      <div class="button-create">
        <RouterLink to="/createPrize"> 
          <button>Create</button> 
        </RouterLink>
      </div>
  
        <table>
          <thead>
            <tr>
              <th class="id">ID</th>
              <th>Image</th>
              <th>Khmer name</th>
              <th>English name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A01</td>
              <td>
                <div class="img">
                  <img
                    src="https://media.istockphoto.com/id/1129874904/es/foto/jard%C3%ADn-cosmos-cosmos-hermosa-rosa-flowe.jpg?s=170667a&w=0&k=20&c=4TPKZld-b70AJSqWtgss9y18jjVhy5qk0T44lcMPYoU="
                    alt=""
                  />
                </div>
              </td>
              <td>ដបទឹក</td>
              <td>Water bottle</td>
              <td>
                <span class="material-symbols-outlined" id="edit">
                  edit_square
                </span>
                <span class="material-symbols-outlined" id="delete">delete</span>
              </td>
            </tr>
            <tr>
              <td>A01</td>
              <td>
                <div class="img">
                  <img
                    src="https://m.media-amazon.com/images/I/710NY8yFXRL.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td>ដបទឹក</td>
              <td>Water</td>
              <td>
                <span class="material-symbols-outlined" id="edit">
                  edit_square
                </span>
                <span class="material-symbols-outlined" id="delete">delete</span>
              </td>
            </tr>
            <tr>
              <td>A01</td>
              <td>
                <div class="img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </td>
              <td>ដបទឹក</td>
              <td>Water bottle</td>
              <td>
                <span class="material-symbols-outlined" id="edit">
                  edit_square
                </span>
                <span class="material-symbols-outlined" id="delete">delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </session>
    </div>
  </template>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
table {
  border-collapse: collapse;
  margin-top: 6%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
th,
td {
  border: 2px solid white;
}
thead th {
  width: 350px;
}
td img {
  width: 100px;
}
.img {
  justify-content: center;
  display: flex;
  margin: 10px;
}
thead th {
  background-color: rgb(18, 142, 18);
  color: white;
  padding: 10px;
}
tbody td {
  padding: 10px;
}
.id {
  width:10%;
}
tr:nth-child(even) {
  background-color: #ece9e9;
}
tr:nth-child(odd) {
  background-color: #d5dcda;
}
#edit {
  color: rgb(16, 171, 16);
  font-size: 30px;
}
#delete {
  font-size: 32px;
  color: rgb(224, 83, 83);
}

.button-create button {
  background-color: rgb(18, 142, 18);
  padding: 10px;
  color: white;
  border-radius: 5px;
}
.button-create {
  display: flex;
  justify-content: end;
  margin-bottom: -30px;
}
</style>
