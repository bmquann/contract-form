<template>
  <div class="formWarning">
      <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
      <p class="formWarning__title">ご確認ください</p>
      <p class="formWarning__content">名前と生年月日が表示されている場合は正しく表示されているか確認をして、間違えている場合は修正をお願いいたします。</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >

.formWarning{
      padding:16px;
  background: #F1F2F7;
}
  .formWarning p { 
    display: inline-block;

  }
  .formWarning__title {
    font-weight: 700;
    font-size: 18px;
    /* margin: 0 0 16px 10px; */
    line-height: 42px;
  }
 svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
    height:20px;
    width: 22.5px;
    margin-right: 9px;
      color: #B2B1FF !important
}
.formWarning__content{
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>