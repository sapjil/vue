<template>
  <table>
    <caption>
      API DATA
    </caption>
    <colgroup>
      <col style="width: 5%" />
      <col style="width: 15%" />
      <col style="width: 15%" />
      <col style="width: 15%" />
      <col style="width: 15%" />
      <col style="width: 15%" />
      <col style="width: 20%" />
    </colgroup>
    <thead>
      <tr>
        <th>NO</th>
        <th>ID</th>
        <th>NAME</th>
        <th>SEX</th>
        <th>AGE</th>
        <th>JOB</th>
        <th>ADDRESS</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(user, i) in userList">
        <td>{{ i + 1 }}</td>
        <td>{{ user.userid }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.job }}</td>
        <td>{{ user.address }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <ul>
    <li>postman</li>
    <li>created</li>
    <li>async & await</li>
    <li>$api</li>
  </ul>
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

<style lang="scss">
table {
  max-width: 560px;
}
</style>
