<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <table>
      <colgroup>
        <col style="width: 33.333%" />
        <col style="width: 33.333%; background: #eee" />
        <col style="width: 33.333%" />
      </colgroup>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>SEX</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(user, i) in userList">
          <td>{{ user.userid }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const API_URL =
        "https://c4c896cd-5d50-4523-8c74-1edfa639313f.mock.pstmn.io/user/userlist";
      this.userList = await this.$api(API_URL, "get");
      console.log(this.userList);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
  thead {
    background: #444;
    color: #fff;
  }
  tbody {
  }
  th,
  td {
    padding: 0.5rem;
    border: 1px solid #ddd;
  }
}
</style>
