<template>
    <div id="progress">
        <div id="progress-bar"></div>
        <ul id="progress-icon">
            <li class="step " :class="{done : parseInt(currentForm) > 1, active : currentForm === 1}">
                <font-awesome-icon icon="fa-solid fa-check" />
            </li>
            <li class="step "  :class="{done : parseInt(currentForm) > 2, active : currentForm === 2}">
                <font-awesome-icon icon="fa-solid fa-pen" />
            </li>
            <li class="step"  :class="{done : parseInt(currentForm) > 3, active : currentForm === 3}">
                <font-awesome-icon icon="fa-solid fa-check" />
            </li>
            <li class="step"  :class="{done : parseInt(currentForm) > 4, active : currentForm === 4}">
                <font-awesome-icon icon="fa-solid fa-pen" />
            </li>
            <li class="step"  :class="{done : parseInt(currentForm) > 5, active : currentForm === 5}">
                <font-awesome-icon icon="fa-solid fa-check" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
props:{
    currentForm:{
        type:Number,
        required:true,
    }
}
}
</script>

<style scoped>
#progress {
    position: relative;
}

#progress-bar {
    position: absolute;
    background: lightseagreen;
    height: 5px;
    width: 0%;
    top: 50%;
    left: 0;
}

#progress-icon {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
}

.step:not(:last-child)::before  {
    content: "";
    background-color: #DCDCDC;
    position: absolute;
    top: 50%;
    left: 37px;
    height: 2px;
    width: 265%;
    z-index: -1;
}

#progress-icon .step {
    border: 3px solid #DCDCDC;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    position: relative;
    z-index: 1;
    background-color:#DCDCDC;
    color:white;
}

#progress-icon .step.active {
    border-color: #B2B1FF;
    background-color: #B2B1FF;
    color: #fff;
}
#progress-icon .step.done,  .step.done::before{
    border-color: #B2B1FF;
    background-color: #B2B1FF;
    color: #6563FF;
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa{
    width:22px;
    height:22px
}
</style>