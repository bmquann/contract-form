<template>
  <div class="field" :class="{ disabled: isDisabled }">
    <label class="label">
      <LabelRequired :class="{ disabled: isDisabled }" v-if="isRequired" />{{
        label
      }}</label
    >
    <p class="description" v-show="description">{{ description }}</p>
    <div class="select control">
      <div class="select__wrap">
        <div class="searchBox">
          <input
            :class="{ error: isError }"
            v-model="searchInput"
            class="select__title"
            @input="handleSearch"
            @focusin="handleShow"
            @focusout="handleHide"
            :placeholder="placeholder"
            :required="isRequired && !isDisabled"
          />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <transition name="fade">
          <div class="select__options" v-show="showOption">
            <div class="select__group">
              <div disabled class="option__item" v-show="!result.length">
                No result match
              </div>
              <div
                v-for="(item, index) in result"
                :key="index"
                for="item"
                class="option__item"
                @click="handleSelect(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </transition>
      </div>
      <p class="message-error" v-show="isError">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import LabelRequired from "./LabelRequired.vue";
export default {
  props: {
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
    data: {
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
  data() {
    return {
      searchInput: "",
      result: "",
      showOption: false,
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.searchInput = newVal;
      },
      immediate: true,
    },
  },

  methods: {
    handleSearch() {
      this.result = [];
      this.data.forEach((item) => {
        if (item.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
          this.result.push(item);
        }
      });
    },
    handleShow() {
      this.showOption = true;
    },
    handleHide() {
            this.$emit("input", this.searchInput);
      this.showOption = false;
    },
    handleSelect(item) {
      this.searchInput = item.name;
      this.showOption = false;
    },

  },
  components: { LabelRequired },
};
</script>

<style scoped>
.select {
  text-align: left;
}

.select__label {
  font-size: 16px;
  color: #000;
  padding-bottom: 10px;
}

.select__wrap {
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  margin-top: 8px;
}

.select .error {
  box-shadow: 0 0 4px #f4b6c1;
  border: 1px solid #aa4651;
}

.select__title {
  display: block;
  width: 100%;
  height: 100%;
  padding: 16px 35px;
}

.select__options {
  position: absolute;
  top: calc(100% + 1px);
  background-color: #fff;
  width: 100%;
  padding: 12px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
}

.select__group {
  overflow-y: auto;
  width: 100%;
}

.select__group::-webkit-scrollbar {
  width: 8px;
  height: 62px;
  background: transparent;
  border-radius: 6px;
}

.select__group::-webkit-scrollbar-thumb {
  background: #dcdcdc;
}

.message-error {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.option__item {
  padding: 8px 0px;
  background-color: #fff;
  transition: background-color 0.2s ease-in;
  font-size: 16px;
  margin-left: 20px;
}

.option__item:hover {
  background-color: #ccc;
}
.description {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0 0 0;
  color: #666666;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
  position: absolute;
  top: 27%;
  left: 7px;
  font-weight: 300;
  color: #99999999;
  width: 25px;
  height: 22px;
  pointer-events: none;
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>