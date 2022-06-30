<template>
  <div class="field">
    <label class="label"> <LabelRequired v-if="isRequired" />{{ label }}</label>
    <p class="description" v-show="description">{{ description }}</p>
    <div class="control">
      <label class="checkbox">
        <input
          @input="updateValue"
          :required="isRequired"
          @change="updateValue"
          type="checkbox"
          v-model="terms"
        />
        {{ data }}
      </label>
    </div>
    <p class="message-error" v-show="isError">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import LabelRequired from './LabelRequired.vue';
export default {
    props: {
        label: {
            type: String,
            required: true,
            default: "label",
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
            default: "",
        },
        data: {
            type: String,
        },
        isError: {
            type: Boolean,
        },
        errorMessage: {
            type: String,
        },
        value: {
          type: Boolean,
        }
    },
    data() {
        return {
            terms: false,
        };
    },
    watch: {
      value:{
        handler(newVal){
        this.terms = newVal
        },
        immediate:true,
      }
    },
    methods: {
        updateValue() {
            this.$emit("input", this.terms);
        },
    },
    components: { LabelRequired }
};
</script>

<style scoped>
.label {
  font-size: 14px;
}
input {
  padding: 16px 10px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  width:16px;
  height: 16px;
  margin-right:9px;
}

.checkbox{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 16px 10px
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

.control {
  margin-top: 8px;
}
</style>