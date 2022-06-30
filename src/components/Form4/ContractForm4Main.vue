<template>
  <div class="form4">
    <div class="form__prev" @click="handlePrev">
      <font-awesome-icon icon="fa-solid fa-arrow-left" /> 雇用契約に戻る
    </div>
    <div class="form__header">
      {{ header }}
    </div>
    <ContractFormProgressBar :currentForm="currentForm" />
    <ContractFormCalender />
    <div class="form4__img">
      <img src="../../assets/accept 1.png" alt="" />
    </div>
    <div class="form4__content">
      申請がありがとうございました。
      <br />
      入社手続きの承認をお待ちください。
    </div>
    <div class="form4__btn">
      <button @click="handlePrev">申請した内容を見る</button>
    </div>
  </div>
</template>

<script>
import ContractFormProgressBar from "../ContractFormProgressBar.vue";
import ContractFormCalender from "../ContractFormCalender.vue";
export default {
  components: { ContractFormProgressBar, ContractFormCalender },
  props: {
    currentForm: {
      type: Number,
    },
    header: {
      type: String,
    },
  },
  methods: {
       handlePrev: function () {
      this.$store.commit("HANDLE_PREV");
    },
  }
};
</script>

<style scoped>
.form__prev {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  cursor: pointer;
}

.form__header {
  font-weight: 400;
  font-size: 24px;
  line-height: 52px;
  color: #333333;
  text-align: center;
}

.form4__img {
  text-align: center;
}

.form4__content {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  color: #333333;
  width: 450px;
  margin: 36px auto;
}

.form4__btn button{
  padding:12px 16px;
  color: #007BC3;
  border: 1px solid #007BC3;
border-radius: 8px;
background:#fff;
cursor: pointer;
}

.form4__btn{
  text-align: center;
}
</style>