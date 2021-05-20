<template>
  <div class="ui segment coin desktop">
    <router-link :to="'/currency/' + coin.slug" class="ui grid">
      <div class="one wide column segment__bold">{{ coin.cmc_rank }}</div>
      <div class="two wide column segment__primary">
        <div class="coin-name">
          <img
            :src="`https://raw.githubusercontent.com/jsupa/crypto-icons/main/icons/${coin.symbol.toLowerCase()}.png`"
            class="segment__crypto-logo"
          />
          <!-- <Cryptoicon :symbol="`${coin.symbol.toLowerCase()}`" size="24" /> -->
          {{ coin.name }}
        </div>
      </div>
      <div class="one wide column segment__bold">{{ coin.symbol }}</div>
      <div class="three wide column segment__bold">
        {{ formatCurrency(coinQuotes.market_cap) }}
      </div>
      <div class="two wide column segment__primary">
        {{ formatCurrency(coinQuotes.price) }}
      </div>
      <div class="three wide column segment__primary">
        {{ formatNumber(coin.circulating_supply) }} {{ coin.symbol }}
      </div>
      <div
        class="two wide column"
        :class="[
          isValuePositive(coinQuotes.percent_change_1h)
            ? 'segment__positive'
            : 'segment__negative'
        ]"
      >
        {{ coinQuotes.percent_change_1h }} %
      </div>
      <div
        class="two wide column"
        :class="[
          isValuePositive(coinQuotes.percent_change_24h)
            ? 'segment__positive'
            : 'segment__negative'
        ]"
      >
        {{ coinQuotes.percent_change_24h }} %
      </div>
    </router-link>
  </div>
</template>

<script>
import { formatCurrency, formatNumber, isValuePositive } from '@/utils'

export default {
  name: 'HomeCoinItem',
  props: {
    coin: {
      type: Object
    },
    coinQuotes: {
      type: Object
    }
  },
  created() {
    this.formatCurrency = formatCurrency
    this.formatNumber = formatNumber
    this.isValuePositive = isValuePositive
  }
}
</script>

<style src="@/assets/styles/home-coin-item.css"></style>
<style lang="scss" scoped>
.coin-name {
  display: flex;
  align-items: center;
  svg,
  img {
    margin-right: 10px;
  }
  img {
    width: 25px;
    height: auto;
  }
}
</style>
