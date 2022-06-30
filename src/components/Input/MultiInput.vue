<template>
  <div class="field">
    <label class="label"> <LabelRequired />{{label}} </label>
    <div class="sub-form__multiInput">
      <slot name="miniTextInput"></slot>
    </div>
    <div v-if="type=='dob'">
        <p class="message-error" v-show="dobIsError">Date Formatted Error</p>
    </div>
  </div>
</template>

<script>
import LabelRequired from "./LabelRequired.vue";
export default {
  components: { LabelRequired },
  props: {
    label: {
      type: String,
    },
    dobIsError: {
      type: Boolean,
    },
    type:{
        type: String,
    }
  },
};
</script>

<style scoped>
.label {
  font-size: 14px;
}
.sub-form__multiInput {
  display: flex;
  flex-direction: row;
  margin: -24px 0;
}
.message-error {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
}
</style>