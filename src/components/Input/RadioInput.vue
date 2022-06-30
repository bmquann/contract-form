<template>
  <div class="field">
    <label class="label"> <LabelRequired v-if="isRequired" />{{ label }}</label>
    <p class="description" v-show="description">{{ description }}</p>
    <div class="control">
      <label v-for="(item, index) in data" :key="index" class="radio">
        <input
          @input="updateValue"
          @blur="updateValue"
          v-model="selected"
          type="radio"
          :value="item"
        />
        {{ item }}
      </label>
    </div>
  </div>
</template>

<script>
import LabelRequired from "./LabelRequired.vue";
export default {
  props: {
    data: {
      type: Array,
    },
    label: {
      type: String,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      selected: ""
    };
  },
  components: { LabelRequired },
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
};
</script>

<style scoped>
.control {
  display: flex;
}

.label {
  font-size: 14px;
}
.radio {
  background: white;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  padding: 12px;
  text-align: center;
  margin-top: 8px;
}
input {
  width: 15px;
  height: 15px;
}
</style>