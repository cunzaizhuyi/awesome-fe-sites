<script>
  export let visible;
  export let title;
  export let onOk;
  export let onCancel;
</script>

{#if visible}
  <div>
    <div class="modal-mask" on:click={onCancel}></div>
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title">{title}</div>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <div class="modal-footer">
        <button class="modal-cancel-btn btn" on:click={onCancel}>
          取消
        </button>
        <button class="btn" on:click={onOk}>
          新增
        </button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.6;
    z-index: 1000;
  }

  .modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    min-width: 500px;
    border-radius: 4px;
    z-index: 1001;
  }

  .modal-title {
    padding: 30px;
    color: black;
    font-size: 20px;
    border-bottom: 1px solid #e8e8e8;
  }

  .modal-body {
    padding: 30px;
    font-size: 14px;
    border-bottom: 1px solid #e8e8e8;
  }

  .modal-footer {
    text-align: center;
    padding: 30px;
    display: flex;

    & .btn {
      flex: 1;
      height: 32px;
      text-align: center;
      margin: 0 12px;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    .modal-cancel-btn {
      background-color: #ff4d4d;
    }
  }
</style>