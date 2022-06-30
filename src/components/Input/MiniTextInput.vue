<template>
  <div class="field">
    <div class="control">
      <input
        :required="isRequired"
        v-if="name"
        name="name"
        @input="updateValue"
        @blur="updateValue"
        :class="{ error: isError }"
        class="input"
        type="text"
        :placeholder="placeholder"
        v-model="input"
      />
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
      default: "Enter your information",
    },

    isError: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
        value: {
      type: String,
    },
  },
  methods: {
    updateValue() {
      this.$emit("input",this.input);
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
};
</script>

<style scoped>
.field {
  width: calc(100% / 3);
}
.label {
  font-size: 14px;
}
input {
  padding: 16px 10px;
  width: 66.6%;
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

span {
  font-size: 14px;
  font-weight: 500;
  padding: 8px;
}
.control {
  width: 100%;
}
</style>