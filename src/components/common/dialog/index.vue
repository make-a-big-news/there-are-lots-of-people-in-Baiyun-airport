<template>
  <div class="modal" :class="{show:visible}" transition="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×</button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <p>{{content}}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">{{closeTxt}}

          </button>
          <button type="button" class="btn btn-primary" @click="positive">{{positiveTxt}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialog',
//        props验证
    props: {
      visible: {
        type: Boolean
      },
      title: {
        type: String,
        default: '提示'
      },
      content: {
        type: String,
        default: '内容'
      },
      positiveTxt: {
        type: String,
        default: '确定'
      },
      onPositive: {
        type: Function,
        default: function () {
        }
      },
      closeTxt: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      positive(){
        this.onPositive();
        this.close();
      },
      close() {
        this.visible = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-dialog {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .dialog-enter-active, .dialog-leave-active {
    opacity: 1;
    transform: scale(1);
    transition: transform .4s, opacity .4s;
  }

  .dialog-enter, .dialog-leave {
    opacity: 0;
    transform: scale(1.2);
  }
</style>

