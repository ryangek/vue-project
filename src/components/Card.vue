<template>
    <div class="item">
        <b-row>
            <b-col col cols="6">
                <img :src="image" width="100%">
            </b-col>
            <b-col col cols="6">
                <div class="title p-2">
                    {{ title }}
                </div>
                <div class="description p-2">
                    <span>
                        {{ description }}
                    </span>
                </div>
                <div class="px-4 btn-order">
                    <button v-on:click="addToCart(idx)" class="btn btn-block btn-danger">
                        จาก ฿{{ price }}
                    </button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    idx: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: '6 ฟรี 6'
    },
    description: {
      type: String,
      default: 'เพียงซื้อ ไก่ทอด 6 ชิ้น และ เฟรนช์ฟรายส์ใหญ่ 1 กล่อง ฟรี วิงแซ่บ 6 ชิ้น'
    },
    url: {
      type: String,
      default: '/static/images/6_free_6.png'
    },
    image: {
      type: String,
      default: '/static/images/6_free_6.png'
    },
    price: {
      type: String,
      default: '279.00'
    }
    // price: Number,
    // isPublished: Boolean,
    // commentIds: Array,
    // author: Object,
    // callback: Function,
    // contactsPromise: Promise // or any other constructor
  },
  methods: {
    addToCart: function (idx) {
      this.$store.commit('addToCart', this.$store.state.menus[idx])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-order {
    position: absolute;
    min-width: 100%;
    bottom: 10px;
    right: 5px;
}
.item {
    min-height: 180px;
    max-width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image {
    position: absolute;
}
.title {
    line-height: 1.4;
    padding-bottom: 10px;
    color: #e4002b;
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    font-family: "Prompt", sans-serif;
}
.description {
    font-weight: normal;
    color: #666;
    font-size: 15px;
    text-align: left;
    font-family: "Prompt", sans-serif;
}
@media (max-width: 767px)
{
    .image {
        position: relative;
    }
}
</style>
