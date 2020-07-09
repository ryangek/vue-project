<template>
    <b-row v-if="idxItem > -1">
        <b-col col cols="4">
            <img :src="cart[idxItem].ImageName" width="100%">
        </b-col>
        <b-col col cols="8">
            <div class="title p-2">
                {{ cart[idxItem].ItemName }}
            </div>
            <div class="description p-2">
                <span>
                    {{ cart[idxItem].Description }}
                </span>
            </div>
            <div class="px-4">
                <button v-on:click="addToCart()" class="btn btn-sm btn-block btn-danger pb-2 float-right mt-0">
                    <b-icon-plus-circle></b-icon-plus-circle>
                </button>
                <button class="btn btn-sm btn-block btn-light pt-2 float-right mt-0">
                    {{ cart[idxItem].count }}
                </button>
                <button v-on:click="removeFromCart()" class="btn btn-sm btn-block btn-secondary pb-2 float-right mt-0">
                    <b-icon-dash-circle></b-icon-dash-circle>
                </button>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    idxItem: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      cart: null || this.$store.state.cart
    }
  },
  methods: {
    addToCart: function () {
      this.$store.commit('addToCart', this.item)
    },
    removeFromCart: function () {
      this.$store.dispatch('removeFromCart', this.idxItem)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-sm {
    width: 36px;
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
