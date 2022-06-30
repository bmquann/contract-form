<template>
  <div class="form2">
    <div class="form__prev" @click="handlePrev">
      <font-awesome-icon icon="fa-solid fa-arrow-left" /> 雇用契約に戻る
    </div>
    <div class="form__header">
      {{ header }}
    </div>
    <ContractFormProgressBar :currentForm="currentForm" />
    <ContractFormCalender />
    <ContractFormWarning />
    <form @submit.prevent="handleNext">
      <div
        v-for="form in data"
        :key="form.id"
        class="sub-form"
        :class="{ hidden: currentForm === 3 && form.disabled }"
      >
        <div :class="{ form3: currentForm === 3 }" class="sub-form__container">
          <div class="sub-form__title">
            {{ form.title }}
          </div>
          <div v-if="form.desc" class="sub-form__description">
            {{ form.desc }}
          </div>
        </div>
        <div v-for="input in form.form" :key="input.name">
          <div v-if="input.header" class="field">
            <label class="label"> {{ input.header }} </label>
          </div>

          <!--  Render input with type = text  -->
          <TextInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === undefined),
            }"
            v-if="input.type == 'text'"
            :placeholder="input.placeHolder"
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
            v-model="result[input.name]"
            :value="result[input.name]"
            :description="input.description"
            :isDisabled="input.disabled"
          >
          </TextInput>

          <!--  Render input with type = fil  -->

          <FileInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === undefined),
            }"
            v-if="input.type == 'file'"
            v-model="result[input.name]"
            :value="result[input.name]"
            :isRequired="input.isRequired"
            :accept="input.accept"
            :label="input.label"
            :name="input.name"
            :isDisabled="input.disabled"
            :isHidden="currentForm === 3 ? false : true"
            :description="input.description"
          ></FileInput>

          <!--  Render input with type = radio  -->

          <RadioInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === undefined),
            }"
            v-if="input.type == 'radio'"
            v-model="result[input.name]"
            :value="result[input.name]"
            :isRequired="input.isRequired"
            :data="input.data"
            :label="input.label"
          >
          </RadioInput>

          <!--  Render input with type = radio  -->

          <MultiInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === undefined),
            }"
            v-if="input.type == 'dob'"
            :label="input.title"
            :isRequired="input.isRequired"
            :type="input.type"
            :dobIsError="dobIsError"
          >
            <MiniTextInput
              :class="{
                hidden:
                  (currentForm === 3 && input.disabled) ||
                  (currentForm === 3 && result[input.name] === undefined),
              }"
              v-for="i in input.data"
              :key="i.id"
              slot="miniTextInput"
              :isError="errors.has(i.name)"
              :errorMessage="errors.first(i.name)"
              :name="i.name"
              :isRequired="i.isRequired"
              v-validate="{
                required: input.isRequired,
                integer: input.isInteger,
                email: input.isEmail,
              }"
              v-model="result.birth[i.name]"
              :value="result[input.name]"
              :placeholder="i.placeholder"
              :label="i.label"
              @input="validateDateOfBirth"
            >
            </MiniTextInput>
          </MultiInput>

          <!--  Render input with type = date  -->

          <DateInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === undefined),
            }"
            v-if="input.type == 'date'"
            :placeholder="input.placeHolder"
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
            v-model="result[input.name]"
            :value="result[input.name]"
            :description="input.description"
            :isDisabled="input.disabled"
          >
          </DateInput>

          <!--  Render input with type = select  -->

          <SelectInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === undefined),
            }"
            v-if="input.type == 'select'"
            :placeholder="input.placeHolder"
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
            v-model="result[input.name]"
            :value="result[input.name]"
            :description="input.description"
            :options="input.options"
            :isDisabled="input.disabled"
          ></SelectInput>

          <!--  Render input with type = search  -->
          <SearchInput
            :class="{
              hidden:
                (currentForm === 3 && input.disabled) ||
                (currentForm === 3 && result[input.name] === ''),
            }"
            v-if="input.type == 'search'"
            :placeholder="input.placeHolder"
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
            v-model="result[input.name]"
            :value="result[input.name]"
            :description="input.description"
            :data="input.data"
            :isDisabled="input.disabled"
          ></SearchInput>
          <!--  Render input with type = search  -->

          <CheckboxInput
            v-if="input.type == 'checkbox'"
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
            v-model="result[input.name]"
            :value="result[input.name]"
            :description="input.description"
            :data="input.value"
          >
          </CheckboxInput>

          <!--  Render Text display Information with type = display  -->

          <div v-if="input.type == 'display'" class="field">
            <label class="label">{{ input.label }}</label>
            <p class="sub-form__displayText">
              {{ input.name == "age" ? result.age : input.text }}
            </p>
          </div>
        </div>
        <div
          class="addNewForm"
          v-if="form.name == 'education'"
          @click="addEducation"
        >
          <font-awesome-icon icon="fa-solid fa-plus" /> {{ form.function }}
        </div>
      </div>
      <button type="submit" v-bind:disabled="errors.any()">
        入社手続きの入力に進む
      </button>
    </form>
  </div>
</template>

<script>
import {
  data,
  addEducation,
  showFinancial,
  showForeign,
} from "../../data/form2";
import TextInput from "../Input/TextInput.vue";
import FileInput from "../Input/FileInput.vue";
import RadioInput from "../Input/RadioInput.vue";
import MultiInput from "../Input/MultiInput.vue";
import MiniTextInput from "../Input/MiniTextInput.vue";
import DateInput from "../Input/DateInput.vue";
import SelectInput from "../Input/SelectInput.vue";
import SearchInput from "../Input/SearchInput.vue";
import CheckboxInput from "../Input/CheckboxInput.vue";
import ContractFormProgressBar from "../ContractFormProgressBar.vue";
import ContractFormCalender from "../ContractFormCalender.vue";
import ContractFormWarning from "../ContractFormWarning.vue";
import { mapState } from "vuex";
export default {
  props: {
    header: {
      type: String,
    },
    currentForm: {
      type: Number,
    },
  },
  data() {
    return {
      data: data,
      result: {
        birth: {},
      },
      dobIsError: false,
      dobErrorMessage: "Date Formatted Error",
      isDisabledFinance: false,
    };
  },
  components: {
    TextInput,
    FileInput,
    RadioInput,
    MultiInput,
    MiniTextInput,
    DateInput,
    SelectInput,
    SearchInput,
    CheckboxInput,
    ContractFormProgressBar,
    ContractFormCalender,
    ContractFormWarning,
  },
  methods: {
    addEducation: addEducation,
    handleNext: function () {
      this.$store.commit("UPDATE_PAGEACTIVE", 1);
    },
    handlePrev: function () {
      this.$store.commit("HANDLE_PREV");
    },
    isValidDate(date) {
      var temp = date.split("/");
      var d = new Date(temp[0] + "/" + temp[1] + "/" + temp[2]);
      return (
        d &&
        d.getMonth() + 1 == temp[1] &&
        d.getDate() == Number(temp[2]) &&
        d.getFullYear() == Number(temp[0])
      );
    },
    getAge(date) {
      //  var temp = date.split("/");
      var today = new Date();
      var birthDate = new Date(date);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return (this.result.age = age);
    },
    validateDateOfBirth() {
      let dob =
        this.result.birth["year"] +
        "/" +
        this.result.birth["month"] +
        "/" +
        this.result.birth["day"];
      !this.isValidDate(dob)
        ? (this.dobIsError = true)
        : (this.dobIsError = false);
      this.getAge(dob);
    },
  },
  watch: {
    result: {
      handler(newVal) {
        showFinancial(newVal);
        showForeign(newVal);
        this.$store.commit("UPDATE_DATA2", newVal);
      },
      deep: true,
    },
    dataForm2: {
      immediate: true,
      handler(newVal) {
        this.result = newVal;
      },
    },
  },
  computed: {
    ...mapState(["dataForm2"]),
  },
};
</script>

<style scoped>
.sub-form {
  width: 100%;
  background-color: #f1f2f7;
  color: black;
  padding: 16px;
  margin-top: 16px;
}

.sub-form__title {
  font-weight: 400;
  font-size: 18px;
  line-height: 42px;
  color: #333333;
}

.sub-form__description {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #666666;
}

.field {
  margin: 24px 0;
}

.label {
  font-size: 14px;
}
.sub-form__displayText {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #666666;
  padding: 8px 0;
}

.addNewForm {
  color: #007bc3;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
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
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
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
}

.form3 {
  pointer-events: none;
}
</style>