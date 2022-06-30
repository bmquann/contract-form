<template>
  <div class="field" :class="{ disabled: isDisabled }">
    <label class="label">
      <LabelRequired :class="{ disabled: isDisabled }" v-if="isRequired" />{{
        label
      }}</label
    >
    <p class="description" v-show="description">{{ description }}</p>
    <div class="control">
      <input
        :required="isRequired && !isDisabled"
        name="name"
        @input="updateValue"
        @blur="updateValue"
        :class="{ error: isError }"
        class="input"
        type="text"
        v-model="input"
        :placeholder="placeholder"
      />
    </div>
    <p class="message-error" v-show="isError">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import LabelRequired from "./LabelRequired.vue";
export default {
  data() {
    return {
      input: "",
    };
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
    isDisabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.input = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    updateValue() {
      this.$emit("input", this.input);
    },
  },
  components: { LabelRequired },
};
</script>

<style scoped>
.label {
  font-size: 14px;
}
input {
  padding: 16px 10px;
  width: 100%;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
}

.error {
  box-shadow: 0 0 4px #f4b6c1;
  border: 1px solid #aa4651;
}

.error:focus {
  outline: 3px solid #f4b6c1;
}

.message-error {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
}

.description {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0 0 0;
  color: #666666;
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>