<template>
  <div>
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
                  ><strong class="text"> Home </strong></router-link
                >
              </p>

              <p class="navbar-item" style="margin-right: 40px">
                <router-link to="/viewtable"
                  ><strong class="text" style="text-decoration-line: underline">
                    View Table
                  </strong></router-link
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
      <div class="columns" style="margin-top: 2%">
        <div class="column">
          <center>
            <p class="txt"><strong>โต๊ะทั้งหมด</strong></p>
          </center>
        </div>
        <div class="column"></div>
      </div>
      <div class="columns" style="margin-top: 2%">
        <div class="column">
          <center>
            <div class="square">
              <div class="columns">
                <div class="column" style="margin-left: 35px">
                  <p class="res"><strong>ร้านอาหาร</strong></p>
                </div>
                <div class="column" style="margin-right: 35px">
                  <p class="res"><strong>ร้านอาหาร</strong></p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4">
                  <p><strong>A</strong></p>
                </div>
                <div class="column is-1">
                  <p><strong>B</strong></p>
                </div>
                <div class="column is-7">
                  <p style="margin-left: 14px"><strong>C</strong></p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-1">
                  <p style="margin-top: 20px; margin-left: 30px">
                    <strong>1</strong>
                  </p>
                </div>
                <div class="column is-2">
                  <button
                    v-show="this.showtable.indexOf('A1') == -1"
                    id="A1"
                    @click="getTable('A1')"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('A1') > -1"
                    class="btn1"
                    style="background-color: red"
                  ></p>
                </div>
                <div class="column is-3">
                  <button
                    v-show="this.showtable.indexOf('B1') == -1"
                    id="B1"
                    @click="getTable('B1')"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('B1') > -1"
                    class="btn1"
                    style="background-color: red"
                  ></p>
                </div>
                <div class="column is-1">
                  <p style="margin-top: 7px"><strong>1</strong></p>
                </div>
                <div class="column is-2">
                  <button
                    v-show="this.showtable.indexOf('C1') == -1"
                    id="C1"
                    @click="getTable('C1')"
                    style="margin-left: 12px"
                    class="button btn2"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('C1') > -1"
                    class="btn2"
                    style="background-color: red; margin-left: 12px"
                  ></p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-1">
                  <p style="margin-top: 20px; margin-left: 30px">
                    <strong>2</strong>
                  </p>
                </div>
                <div class="column is-2">
                  <button
                    v-show="this.showtable.indexOf('A2') == -1"
                    id="A2"
                    @click="getTable('A2')"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('A2') > -1"
                    class="btn1"
                    style="background-color: red"
                  ></p>
                </div>
                <div class="column is-3">
                  <button
                    v-show="this.showtable.indexOf('B2') == -1"
                    id="B2"
                    @click="getTable('B2')"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('B2') > -1"
                    class="btn1"
                    style="background-color: red"
                  ></p>
                </div>
                <div class="column is-1" style="margin-top: -30px">
                  <p style="margin-top: 7px"><strong>2</strong></p>
                </div>
                <div class="column is-2" style="margin-top: -30px">
                  <button
                    v-show="this.showtable.indexOf('C2') == -1"
                    id="C2"
                    @click="getTable('C2')"
                    style="margin-left: 12px"
                    class="button btn2"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('C2') > -1"
                    class="btn2"
                    style="background-color: red; margin-left: 12px"
                  ></p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-1">
                  <p style="margin-top: 20px; margin-left: 30px">
                    <strong>3</strong>
                  </p>
                </div>
                <div class="column is-2">
                  <button
                    v-show="this.showtable.indexOf('A3') == -1"
                    id="A3"
                    @click="getTable('A3')"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('A3') > -1"
                    class="btn1"
                    style="background-color: red"
                  ></p>
                </div>
                <div class="column is-3">
                  <button
                    v-show="this.showtable.indexOf('B3') == -1"
                    id="B3"
                    @click="getTable('B3')"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('B3') > -1"
                    class="btn1"
                    style="background-color: red"
                  ></p>
                </div>
                <div class="column is-1" style="margin-top: -60px">
                  <p style="margin-top: 7px"><strong>3</strong></p>
                </div>
                <div class="column is-2" style="margin-top: -60px">
                  <button
                    v-show="this.showtable.indexOf('C3') == -1"
                    id="C3"
                    @click="getTable('C3')"
                    style="margin-left: 12px"
                    class="button btn2"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('C3') > -1"
                    class="btn2"
                    style="background-color: red; margin-left: 12px"
                  ></p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-half"></div>

                <div class="column is-1" style="margin-top: -85px">
                  <p style="margin-top: 7px"><strong>4</strong></p>
                </div>
                <div
                  class="column is-2"
                  style="margin-top: -100px; margin-left: -10px"
                >
                  <button
                    v-show="this.showtable.indexOf('C4') == -1"
                    id="C4"
                    @click="getTable('C4')"
                    style="margin-left: 12px"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('C4') > -1"
                    class="btn1"
                    style="background-color: red; margin-left: 12px"
                  ></p>
                </div>
                <div
                  class="column is-1"
                  style="margin-top: -85px; margin-left: -35px"
                >
                  <p style="margin-top: 7px"><strong>5</strong></p>
                </div>
                <div
                  class="column is-2"
                  style="margin-top: -100px; margin-left: -45px"
                >
                  <button
                    v-show="this.showtable.indexOf('C5') == -1"
                    id="C5"
                    @click="getTable('C5')"
                    style="margin-left: 12px"
                    class="button btn1"
                  ></button>
                  <p
                    v-show="this.showtable.indexOf('C5') > -1"
                    class="btn1"
                    style="background-color: red; margin-left: 12px"
                  ></p>
                </div>
              </div>
            </div>
          </center>
        </div>
        <div class="column">
          <center>
            <div class="square1">
              <div class="columns">
                <div class="column">
                  <p class="text1" style="margin-top: 2%">
                    จำนวนโต๊ะทั้งหมด {{ maxtable }} โต๊ะ
                  </p>
                  <p class="text1" style="margin-top: 4%">
                    จำนวนโต๊ะคงเหลือ {{maxtable - showtable.length}} โต๊ะ
                  </p>
                </div>
              </div>
              <div class="columns" style="margin-top: 4%">
                <div class="column">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-square" style="color: white"></i>
                    </span>
                    <span>ว่าง</span>
                  </span>
                </div>
                <div class="column">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-square" style="color: red"></i>
                    </span>
                    <span>จองแล้ว</span>
                  </span>
                </div>
                <div class="column">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-square"></i>
                    </span>
                    <span>ไม่ว่าง</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="square2">
              <div class="columns">
                <div class="column">
                  <p
                    class="text1"
                    style="margin-left: -50%; margin-bottom: 5%; margin-top: 5%"
                  >
                    ชื่อ
                  </p>
                  <input
                    class="input is-rounded"
                    type="text"
                    style="width: 200px; margin-bottom: 5%"
                    v-model="name"
                  />
                  <p class="text1" style="margin-left: -30%; margin-bottom: 5%">
                    โต๊ะที่จอง
                  </p>
                  <div class="control">
                    <input
                      class="input is-rounded"
                      type="text"
                      v-model="table"
                      readonly
                      style="width: 200px; margin-bottom: 5%"
                    />
                  </div>
                </div>
                <div class="column" style="margin-top: 2%">
                  <form>
                    <p
                      class="text1"
                      style="margin-left: -30%; margin-bottom: 5%"
                    >
                      เวลาที่จอง
                    </p>
                    <b-field>
                      <b-timepicker
                        rounded
                        hour-format="24"
                        placeholder="Click to select..."
                        :min-time="minTime"
                        :max-time="maxTime"
                        icon="clock"
                        v-model="time"
                        style="width: 200px"
                      >
                      </b-timepicker>
                    </b-field>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <button class="button btn3" @click="addReserve()">Next</button>
            </div>
          </center>
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
.txt {
  font-size: 30px;
}
.text {
  color: #f5f5f5;
  font-size: 20px;
}
.text1 {
  font-size: 20px;
  color: black;
}
.fontdetail {
  font-size: 50px;
  margin-left: 10%;
  color: #006d77;
}
.square {
  width: 600px;
  height: 580px;
  background-color: #83c5be;
  border-radius: 10px;
}
.square1 {
  width: 600px;
  height: 200px;
  background-color: #83c5be;
  border-radius: 10px;
}
.square2 {
  width: 600px;
  height: 250px;
  background-color: #83c5be;
  border-radius: 10px;
  margin-top: 5%;
}
.res {
  text-align: center;
  margin-top: 5%;
  background-color: white;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  padding-top: 4%;
  font-size: 20px;
}
.btn1 {
  width: 47px;
  height: 75px;
  border-radius: 10px;
}
.btn2 {
  width: 123px;
  height: 41px;
  border-radius: 10px;
}
.btn3 {
  margin-top: 30px;
  width: 170px;
  height: 42px;
  border-radius: 10px;
  background-color: #006d77;
  color: white;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    const min = new Date();
    min.setHours(11);
    min.setMinutes(30);
    const max = new Date();
    max.setHours(13);
    max.setMinutes(0);
    return {
      minTime: min,
      maxTime: max,
      maxtable: 11,
      name: "",
      table: [],
      time: "",
      date: new Date(),
      nowDate: new Date(),
      showdata: "",
      showtable: [],
    };
  },
  created() {
    this.dataTable();
  },
  methods: {
    dataTable() {
      axios
        .post("http://localhost:3000/datatable", {
          nowdate: this.nowDate.toLocaleDateString("en-US"),
          status : "booking"
        })
        .then((response) => {
          this.showdata = response.data;
          for (let i = 0; i < this.showdata.length; i++) {
            for (let j = 0; j < this.showdata[i].table.length; j++) {
              this.showtable.push(this.showdata[i].table[j]);
            }
          }

        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTable(id) {
      console.log(this.table.indexOf(id));
      if (this.table.indexOf(id) != -1) {
        this.table.splice(this.table.indexOf(id), 1);
        document.getElementById(id).style.backgroundColor = "white";
      } else {
        this.table.push(id);
        document.getElementById(id).style.backgroundColor = "#C7FFA5";
      }
    },
    addReserve() {
      if (this.name != "" && this.table != "" && this.time != "") {
        axios
          .post("http://localhost:3000/addreserve", {
            table: this.table,
            status: "booking",
            name: this.name,
            date: this.date.toLocaleDateString("en-US"),
            time: this.time.toLocaleTimeString("en-US"),
            code: Math.floor(Math.random() * 10000),
          })
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("name", this.name)
            localStorage.setItem("time", this.time.toLocaleTimeString("en-US"))
            this.$router.push({ name: "Reservetable" });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Please complete all fields.");
      }
    },
  },
};
</script>
