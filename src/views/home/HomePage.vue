<template>
  <div class="home">
    <div v-if="loading" class="ui active large loader"></div>
    <div v-else class="ui grid">
      <div class="sixteen wide column coin-market">
        <div class="ui four column grid">
          <div class="column">
            <div class="ui segment blue inverted">
              Market Cap: {{ formatCurrency(totalMarketCap) }}
            </div>
          </div>
          <div class="column">
            <div class="ui segment blue inverted">
              Volume (24Hr): {{ formatCurrency(total24HrVolume) }}
            </div>
          </div>
          <div class="column">
            <div class="ui segment blue inverted">
              BTC Dominance: {{ totalBTCPercentage.toFixed(4) }}%
            </div>
          </div>
          <div class="column">
            <div class="ui segment blue inverted">
              ETH Dominance: {{ totalETHPercentage.toFixed(4) }}%
            </div>
          </div>
        </div>
      </div>

      <div class="sixteen wide column">
        <!-- Header -->
        <div class="ui segment header desktop">
          <div class="ui grid">
            <div class="one wide column">#</div>
            <div class="two wide column">Name</div>
            <div class="one wide column">Symbol</div>
            <div class="three wide column">Market Cap</div>
            <div class="two wide column">Price</div>
            <div class="three wide column">Circulating Supply</div>
            <div class="two wide column">% 1h</div>
            <div class="two wide column">% 24h</div>
          </div>
        </div>

        <!-- HomeCoinItem -->
        <HomeCoinItem
          v-for="coin in coins"
          :key="coin.id"
          :coin="coin"
          :coinQuotes="coin.quote.USD"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatCurrency } from '@/utils'
import HomeCoinItem from './components/HomeCoinItem'

export default {
  name: 'HomePage',
  components: {
    HomeCoinItem
  },
  created() {
    this.formatCurrency = formatCurrency
  },
  computed: {
    ...mapGetters([
      'loading',
      'coins',
      'totalMarketCap',
      'total24HrVolume',
      'totalBTCPercentage',
      'totalETHPercentage'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 90px;
}
</style>
