<template>
  <div>
    <!-- <img src="../assets/promotion.png" /> -->
    <div class="bg_img">
      <div>
        <nav
          class="navbar"
          role="navigation"
          aria-label="main navigation"
          style="background-color: #006d77"
        >
          <div class="navbar-brand" style="height: 80px">
            <a class="navbar-item" href="/">
              <img
                src="../assets/table.png"
                style="width: 60px; max-height: 80px; margin-left: 30px"
              />
              <b><p class="text" style="margin-left: 30px">LOGO NAME</p></b>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end" style="margin-right: 100px">
              <p class="navbar-item" style="margin-right: 40px">
                <router-link to="/"
                  ><strong class="text" style="text-decoration-line: underline">
                    Homepage
                  </strong></router-link
                >
              </p>

              <p class="navbar-item" style="margin-right: 40px">
                <router-link to="/viewtable"
                  ><strong class="text"> View Table </strong></router-link
                >
              </p>

              <p class="navbar-item">
                <router-link to="/reservetable"
                  ><strong class="text"> Reserve </strong></router-link
                >
              </p>
            </div>
          </div>
        </nav>
      </div>
      <div class="columns">
        <div class="column" style="margin-top: 10%">
          <p class="fontdetail">Online</p>
          <p class="fontdetail">Table Reservation</p>
          <button class="button btn" @click="goToViewTable()">
            View Table
            <span class="icon" style="margin-left: 100px"
              ><i class="fas fa-arrow-right"></i
            ></span>
          </button>
          <p class="decorate">
            Easy, Fast & convenience
            <span class="icon">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>

        <div class="column" style="text-align: center; margin-top: 8%">
          <img src="../assets/table.png" width="339px" height="340px" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bg_img {
  width: 100%;
  min-height: 100vh;
  background-color: #edf6f6;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.text {
  color: #f5f5f5;
  font-size: 20px;
}
.fontdetail {
  font-size: 50px;
  margin-left: 15%;
  color: #006d77;
}
.btn {
  background-color: #006d77;
  color: white;
  margin-left: 15%;
  margin-top: 5%;
  font-size: 30px;
  border-radius: 15px;
}
.decorate {
  margin-top: 3%;
  margin-left: 15%;
  background-color: #16b57f;
  font-size: 16px;
  width: 232px;
  height: 32px;
  border-radius: 100px;
  padding-left: 15px;
  padding-top: 3px;
  color: #f5f5f5;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToViewTable() {
      this.$router.push({ name: "Viewtable" });
    },
  },
};
</script>
