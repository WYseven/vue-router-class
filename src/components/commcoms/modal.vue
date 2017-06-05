<template>
<transition name="fade">
  <div  v-show='show'>
    <div key='1' class="el-message-box__wrapper" style="z-index: 2018;"> 
      <div class="el-message-box"> 
        <div class="el-message-box__header"> 
        <div class="el-message-box__title">
          创建团队
        </div> 
        <i class="el-message-box__close el-icon-close"></i> 
        </div> 
        <div class="el-message-box__content"> 
        <div class="el-message-box__status"></div> 
        <div class="el-message-box__message" style="margin-left: 0px;"> 
          <p> </p> 
        </div> 
        <div class="el-message-box__input"> 
          <div class="el-input"> 
          <input type="text" placeholder="请输入团队名称" autocomplete="off" class="el-input__inner" /> 
          </div> 
          <div class="el-message-box__errormsg" style="visibility: hidden;"></div> 
        </div> 
        </div> 
        <div class="el-message-box__btns"> 
        <button type="button" class="el-button el-button--default"> <span> 取消 </span></button> 
        <button type="button" class="el-button el-button--default el-button--primary "> <span> 创建 </span></button> 
        </div> 
      </div> 
    </div> 
    <div key='2' class="v-modal" style="z-index: 2017;"></div>
  </div>
</transition>
</template>
<script>
  export default {
    props: ['show'],
    created () {}
  }
</script>
