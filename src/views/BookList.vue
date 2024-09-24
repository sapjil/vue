<template>
  <div>book</div>
  <ul>
    <li v-for="item in books" :books="books" :key="item.id">
      <button @click="showBookDetail(item.id)">
        {{ item.id }} .
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>

<script>
import { books } from "@/assets/sampledata.js";

export default {
  name: "BookList",
  data() {
    return {
      books: books,
      bookIndex: -1,
    };
  },
  methods: {
    showBookDetail(id) {
      this.bookIndex = id - 1;
      // console.log("id: ", id);
      // console.log("bookIndex: ", this.bookIndex);
      // this.books.id;
      this.$router.push({
        name: "book",
        params: {
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content,
        },
      });
      console.log(this.books[this.bookIndex].id);
      console.log(this.books[this.bookIndex].title);
      console.log(this.books[this.bookIndex].content);
    },
  },
  mounted() {
    console.log(books);
  },
};
</script>

<style lang="scss" scoped></style>
