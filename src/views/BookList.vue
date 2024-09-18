<template>
  <div>book</div>
  <ul>
    <li v-for="book in books" :key="book.id">
      <button @click="showBookDetail(book.id)">
        {{ book.id }} .
        {{ book.title }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      bookIndex: -1,
      books: [
        { id: 1, title: "本のタイトル「극기훈련」", content: "books 1" },
        { id: 2, title: "本のタイトル「훈방조치」", content: "books 2" },
        { id: 3, title: "本のタイトル「나아가라」", content: "books 3" },
      ],
    };
  },
  methods: {
    showBookDetail(id) {
      this.bookIndex = id - 1;
      // console.log("id: ", id);
      // console.log("bookIndex: ", this.bookIndex);
      // this.books.id;
      this.$router.push({
        name: "Book",
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
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
