<template>
  <div class="form1">
        <div class="form__header">
      {{ header }}
    </div>
    <ContractFormProgressBar :currentForm="currentForm" />
    <ContactFormCalender />
    <ContactFormWarning />
    <form @submit.prevent="handleNext">
      <div class="form" v-for="form in forms" :key="form.id">
        <ContactFormTextInfor
          v-for="(main, index) in form.main"
          :key="index"
          :main="main"
        ></ContactFormTextInfor>
      </div>
      <div class="form1__checkbox">
        <CheckboxInput
          :isError="errors.has(input.name)"
          :errorMessage="errors.first(input.name)"
          :name="input.name"
          :label="input.label"
          :isRequired="input.isRequired"
          v-validate="{
            required: input.isRequired,
            integer: input.isInteger,
            email: input.isEmail,
          }"
          :value="result1[input.name]"
          v-model="result1[input.name]"
          :description="input.description"
          :data="input.value"
        >
        </CheckboxInput>
      </div>
      <div class="form1__comment">
        <img src="../../assets/Vector.png" alt="" />
        <span>i</span>
        <p>雇用契約や入社手続きについて ご不明点はお問い合わせください</p>
      </div>
      <button  type="submit" v-bind:disabled="errors.any()"  >入社手続きの入力に進む</button>
    </form>
  </div>
</template>

<script>
import ContactFormWarning from "../ContractFormWarning.vue";
import ContactFormCalender from "../ContractFormCalender";
import ContactFormTextInfor from "./ContractFormTextInfor.vue";
import ContractFormProgressBar from "../ContractFormProgressBar.vue";
import CheckboxInput from "../Input/CheckboxInput.vue";
import { mapState } from "vuex";
export default {
  components: {
    ContactFormTextInfor,
    ContactFormWarning,
    ContactFormCalender,
    ContractFormProgressBar,
    CheckboxInput,
  },
  props: {
    forms: {
      type: Array,
      required: true,
    },
    header: {
      type: String,
    },
    currentForm: {
      type: Number
}
  },
  data() {
    return {
      input: {
        isRequired: true,
        isInteger: false,
        isEmail: false,
        label: "",
        type: "checkbox",
        name: "checked",
        placeHolder: "  ",
        description: "",
        value: "外国籍の方はチェックを入れてください",
      },
    result1: {
      checked: ''
    }
    };
  },
  watch: {
    result1:{
      handler(newVal){
        this.$store.commit("UPDATE_DATA1",newVal)
      }
    },
    dataForm1:{
      immediate:true,
      handler(newVal){
        this.result1= newVal
      }
    }
  },
  computed:{
          ...mapState(["dataForm1"])
  },
  methods: {
     handleNext: function () {
        this.$store.commit("UPDATE_PAGEACTIVE", 1);
    },
  }
};
</script>

<style scoped>
.form {
  margin: 16px 0;
}

.form1__checkbox {
  padding: 8px 16px;
  background-color: #f1f2f7;
}

.form1__comment span {
  color: #6563ff;
  position: absolute;
  font-size: 22px;
  top: 30%;
  left: 46px;
  font-weight: 900;
}

.form1__comment img {
  width: 50px;
  height: 50px;
}

.form1__comment {
  position: relative;
  background: #f1f2f7;
  margin: 16px 0;
  padding: 21px 24px;
  display: flex;
}
.form1__comment p {
  padding: 0 21px;
  font-size: 18px;
  line-height: 30px;
}
button {
  padding: 12px 10px;
  width: 100%;
  border: none;
  color: white;
  line-height: 24px;
  background: #b2b1ff;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.5s;
}
button:hover {
  background: #6563ff;
}
.form__header{
  font-weight: 400;
font-size: 24px;
line-height: 52px;
color: #333333;
}
</style>