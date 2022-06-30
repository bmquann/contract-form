<template>
    <div class="subForm">
        <p class="subForm__header">{{ main.header }}</p>
        <div v-for="(content, index) in main.content" :key="index" class="subForm__content">
            <p v-show="!!content.title">{{ content.title }}</p>
            <p v-for="(text, index) in content.body" :key="index">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["main"],
    data() {
        return {};
    },
};
</script>

<style scoped>
.subForm {
    width: 100%;
    background-color: #f1f2f7;
    color: black;
    padding: 16px;
}

.subForm__header {
    font-size: 18px;
    color: #333333;
    font-weight: 400;
    font-size: 18px;
    line-height: 42px;
}

.subForm__content {
    margin: 8px 0px;
    padding:8px 10px;
    background-color: white;
}

.subForm__content p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
}
</style>