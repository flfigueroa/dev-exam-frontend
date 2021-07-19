<template>
  <div class="container">

    <div v-if="loading">Loading...</div>

    <div v-else>
       <h2>HTTP RESPONSE</h2>
        <b-btn block class="ping-btn" variant="info" v-on:click="postReport"><b>PING!</b></b-btn>

      <div v-if="reports.length===0">
        <b-jumbotron bg-variant="white">
          <b>THERE IS NO DATA.</b>
        </b-jumbotron>
      </div>

      <div v-else>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TIMESTAMP</th>
              <th scope="col">HTTP RESPONSE</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="report in reports" v-bind:key="report.id"> 
              <th scope="row">{{report.id}}</th>
              <!-- moment(report.created_at).format('MMMM Do YYYY, h:mm:ss a'); // July 18th 2021, 12:03:45 pm -->

              <!-- {{moment(report.created_at).format('YYYY-MM-DD')}} -->
              <td>{{moment(report.created_at).format('MMMM Do YYYY, h:mm:ss A')}}</td>
              <td>{{report.header}} 
              </td>
              <td>
                <b-btn block class="del-btn" variant="danger" v-on:click="deleteReport(report.id)">
                  DELETE
                </b-btn>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>


    </div>
  </div> 
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'Reports',
    el: '#v-for-object',
    data() {
      return {
        reports: [],
        loading: true,
        errors: [],
        payload: {},
      };
    },

    // Fetch all reports
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/reports`)
        this.reports = res.data

        let status = res.status
        let statusText = res.statusText
        let headers = res.headers

        let head = {status: status, statusText: statusText, headers: headers};
        this.payload = JSON.stringify(head)

        this.loading = false

      } catch (e) {
          console.log(e)
          this.errors.push(e)
      }
    },

    methods: {
      // Pushes report to the server when called.
      async postReport() {
        try {
          await axios.post(`http://localhost:3000/reports`, {
            header: this.payload
          })
          const res = await axios.get(`http://localhost:3000/reports`)
          console.log(JSON.stringify(res));
          this.reports = res.data
        } catch (e) {
          this.errors.push(e)
        }
      },

      // Deletes report via ID from the database
      async deleteReport(id) {
        try {
          await axios.delete(`http://localhost:3000/reports/${id}`)
          const res = await axios.get(`http://localhost:3000/reports`)
          this.reports = res.data
        } catch (e) {
          this.errors.push(e)
        }
      }
    }
  
  }
</script>


<style>
  h3 {
    margin-bottom: 5%;
  }
  .ping-btn {
    margin: 20px;
    width: 75%;
  }
</style>