<template >
  <div class="field" :class="{ disabled: isDisabled }">
    <div class="form__input">
      <label class="label">
        <LabelRequired :class="{ disabled: isDisabled }" v-if="isRequired" />{{
          label
        }}
      </label>
      <p class="description" v-show="description">{{ description }}</p>
      <div class="result" v-if="accept !== 'image/*' && !isShowResult">
        <p>
          <span class="result__title"> {{ inputValue.name }}</span
          ><br />
          <span class="result__size">{{ inputValue.size }} kB</span>
        </p>
      </div>
      <div v-if="accept == 'image/*'" class="resultImg">
        <img
          v-show="name == 'avatar'"
          class="file-upload-image"
          alt="your image"
          :src="[
            inputValue.src
              ? inputValue.src
              : require('../../assets/iOS_の画像.png'),
          ]"
        />
        <img
          v-show="!isShowResult"
          v-if="name !== 'avatar'"
          class="file-upload-image"
          :src="inputValue.src"
          alt="your image"
        />
      </div>
      <div :class="{ error: !!message }"    v-show="isHidden" class="image-upload-wrap">
        <input
        :required="isRequired && !isDisabled"
          @change="updateValue"
          @blur="updateValue"
          class="file-upload-input"
          type="file"
          :accept="accept"
        />
        <div class="drag-text">
          <font-awesome-icon icon="fa-solid fa-cloud-arrow-up" />
          <p class="title">ファイルをドラッグ&ドロップ</p>
          <p class="content">ファイルをドロップするか、 ファイルを参照する</p>
        </div>
      </div>
      <transition name="slide">
        <p v-show="message" class="message-error">{{ message }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
import LabelRequired from "./LabelRequired.vue";
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
    accept: {
      type: String,
      required: true,
    },
    name: {
      type: String,
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
      type: null,
      default: () => {},
    },
    isHidden: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      message: this.error,
      inputValue: {
        file: null,
        src: "",
      },
      isShowResult: true,
    };
  },
  watch: {
    inputValue: {
      handler(newVal) {
        newVal != "" ? (this.isShowResult = false) : (this.isShowResult = true);
      },
    },
    value: {
      immediate: true,
      handler(newVal) {
        if (newVal != undefined) this.inputValue = newVal;
      },
    },
  },
  methods: {
    updateValue(e) {
      if (e.target.files[0] !== undefined) {
        this.message = "";
        this.inputValue = {
          file: e.target.files[0],
          src: URL.createObjectURL(e.target.files[0]),
        };
        this.$emit("input", this.inputValue);
      } else {
        if (this.isRequired) {
          this.message = `The ${this.label} field is required`;
        }
        this.$emit("input", "");
        this.inputValue = "";
      }
    },
  },
  components: { LabelRequired },
};
</script>
<style scoped>
.label {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
}

.image-upload-wrap {
  margin-top: 8px;
  position: relative;
  background: white;
  padding: 12px;
  border-radius: 4px;
}

.drag-text {
  width: 40%;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
}

.title {
  color: #333333;
  font-weight: 700;
}

.content {
  font-size: 12px;
  color: #666666;
  font-weight: 400;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
  height: 19px;
  width: 27px;
  color: #b2b1ff;
}

.file-upload-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.resultImg {
  text-align: center;
}

.error {
  box-shadow: 0 0 4px #f4b6c1;
  border: 1px solid #aa4651;
}

.result {
  padding: 8px 24px;
  width: 40%;
  background: white;
  font-size: 12px;
  line-height: 16px;
  display: block;
  margin-top: 16px;
  border-radius: 2px;
}

.result__title {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
}

.result__size {
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #666666;
}

img {
  width: 120px;
  height: 160px;
  margin: 0 auto;
  background: white;
  margin-top: 16px;
}

.description {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0 0 0;
  color: #666666;
}

.message-error {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>
