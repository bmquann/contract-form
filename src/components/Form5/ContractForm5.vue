<template>
  <div class="form5">
    <div class="form__header">
      {{ header }}
    </div>
    <contract-form-progress-bar :currentForm="currentForm" />
    <contract-form-calender />
    <ContractFormWarning />
    <div class="form5__btn">
      <button class="form5__btnReset" @click="handleReset">戻る</button>
      <button class="form5__btnDone" @click="handleDone">申請する</button>
    </div>
  </div>
</template>

<script>
import ContractFormCalender from "../ContractFormCalender.vue";
import ContractFormProgressBar from "../ContractFormProgressBar.vue";
import ContractFormWarning from "../ContractFormWarning.vue";
export default {
  components: {
    ContractFormCalender,
    ContractFormProgressBar,
    ContractFormWarning,
  },
  props: {
    currentForm: {
      type: Number,
    },
    header: {
      type: String,
    },
  },
  methods: {
    handleReset() {
        this.$store.commit('RESET_DATA')
    },
    handleDone(){
        alert('done')
    }
  }
};
</script>

<style scoped>
.form__header {
  font-weight: 400;
  font-size: 24px;
  line-height: 52px;
  color: #333333;
  text-align: center;
}
.form5__btn button {
  width: 132px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 9px;
  align-items: center;
  text-align: center;
  margin: 18px 12px;
  cursor: pointer;
}
.form5__btn {
  display: flex;
  justify-content: end;
}
.form5__btnReset {
  background: #ffffff;
  border: 1px solid #6563ff;
  border-radius: 4px;
  color: #6563ff;
}
.form5__btnDone {
  background: #6563ff;
  border: 1px solid #6563ff;
  border-radius: 4px;
  color: white;
}
</style>