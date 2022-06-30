<template>
  <div class="field" :class="{ disabled: isDisabled }">
    <label class="label">
      <LabelRequired :class="{ disabled: isDisabled }" v-if="isRequired" />{{
        label
      }}</label
    >
    <p class="description" v-show="description">{{ description }}</p>
    <div class="control">
      <div class="select">
        <select
        v-model="selected"
        :required="isRequired && !isDisabled"
          name="name"
          @input="updateValue"
          @blur="updateValue"
          :class="{ error: isError }"
          class="input"
        >
          <option disabled selected value="">{{ placeholder }}</option>
          <option
            v-for="option in options"
            :key="option.id"
            v-bind:value="option.name"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import LabelRequired from "./LabelRequired.vue";
export default {
  data(){
    return {
      selected:null
    }
  },
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
      default: "Enter your information",
    },
    label: {
      type: String,
    },
    isError: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
    isRequired: {
      type: Boolean,
      // default: false
    },
    description: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
        value: {
      type: String,
    },
  },
  methods: {
    updateValue() {
      this.$emit("input", this.selected);
    },
  },
    watch: {
    value: {
      handler(newVal) {
        this.selected = newVal;
      },
      immediate: true,
    },
  },
  components: { LabelRequired },
};
</script>

<style scoped>
.label {
  font-size: 14px;
}
select {
  padding: 16px 10px;
  width: 100%;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  -webkit-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 5px),
    calc(100% - 15px) calc(1em + 5px), calc(100% - 2.5em) -5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}
select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>