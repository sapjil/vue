<template>
  <section class="carousel">
    <div class="carousel__wrap">
      <div class="carousel__main">
        <transition name="fade">
          <div :key="datas[active].id" v-show="active === datas[active].id">
            <p>{{ datas[active].text }}</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="carousel__control">
      <button type="button" @click="prev" class="carousel__prev">
        <fa icon="chevron-left" />
      </button>
      <ul class="carousel__pages" style="flex-direction: row">
        <li
          v-for="(data, idx) in datas"
          :key="idx"
          :class="{ current: active === data.id }"
          @click="current(data.id)"
        >
          <span>{{ data.id + 1 }}</span> / <span>{{ datas.length }}</span>
        </li>
      </ul>
      <button type="button" @click="next" class="carousel__next">
        <fa icon="chevron-right" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      datas: [
        {
          id: 0,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum at aliquid, a natus repudiandae, iste officiis, ipsam laudantium perspiciatis modi beatae sunt dolorem aperiam incidunt esse hic ipsum ut repellat.",
        },
        {
          id: 1,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum at aliquid, a natus repudiandae, iste officiis, ipsam laudantium perspiciatis",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum at aliquid, a natus repudiandae, iste officiis, ipsam laudantium perspiciatis modi beatae sunt dolorem aperiam incidunt esse hic ipsum ut repellat.",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum at aliquid, a natus repudiandae",
        },
      ],
    };
  },
  methods: {
    current(id) {
      this.active = id;
    },
    prev() {
      if (this.active <= 0) {
        this.active = this.datas.length - 1;
      } else {
        this.active--;
      }
    },
    next() {
      if (this.active >= this.datas.length - 1) {
        this.active = 0;
      } else {
        this.active++;
      }
    },
  },
  // mounted() {
  //   let that = this;
  //   setInterval(() => {
  //     that.next();
  //   }, 4000);
  // },
};
</script>

<style lang="scss" scoped>
.carousel {
  max-width: 460px;
}
.carousel__control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .carousel__prev,
  .carousel__next {
    width: 1.5rem;
    height: 1.5rem;
    flex: 0 0 auto;
  }
}
.carousel__main {
  min-height: 7rem;
  background: #eee;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
.carousel__pages {
  li {
    padding: 0 0.5rem;
    &.current {
    }
    &:not(.current) {
      display: none;
    }
  }
}
</style>
