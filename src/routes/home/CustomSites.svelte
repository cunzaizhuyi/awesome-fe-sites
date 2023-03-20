<script lang="ts">
  import { onMount } from 'svelte';
  import FormModal from "./FormModal.svelte";
  import SimpleButton from "@/components/SimpleButton.svelte";

  let modalVisible = false;
  let newSite = {} // 新增站点

  interface ILocalSite {
    name: string;
    link: string;
  }

  let localList = [];
  onMount(() => {
    const item = localStorage.getItem("__local_sites__");
    if (item) {
      localList = JSON.parse(item);
    }
  })


  $: {
    if (localList.length) {
      localStorage.setItem("__local_sites__", JSON.stringify(localList));
    }

    // 关闭弹窗时 删除已填数据
    if (!modalVisible) {
      newSite = {}
    }
  }

  const handleOk = () => {
    console.log('111: ', newSite)
    if (newSite.name && newSite.link) {
      localList = [
        ...localList,
        {...newSite},
      ] as ILocalSite[]
    }
    modalVisible = false
  };

  const handleCancel = () => {
    modalVisible = false
  };

</script>

<div>
    <section class="mt-15px">
      <div class="mb-10px text-26px">
        <div class="i-fluent-emoji-flat-star"></div>
        <span class="relative top-3px font-NotoSerifSC font-500">私人收藏</span>
      </div>
      <div class="item-wrapper inline-block">
        {#each localList as site}
          <SimpleButton>
            <a href="{site.link}" target="_blank" class="bg-black text-white">
              { site.name }
            </a>
          </SimpleButton>
        {/each}
      </div>
      <div
          class="btn cursor-pointer m-5px inline-block"
          on:click={() => (modalVisible = true)}
      >
        新增私人收藏站点 👏
      </div>
    </section>

  <FormModal
      visible={modalVisible}
      title={'新增私人收藏站点'}
      onCancel={handleCancel}
      onOk={handleOk}
  >
    <div class="flex flex-col">
      <input
          type="text"
          placeholder="请输入需要添加的站点名称"
          class="m-2 p-2 border-none bg-[#f1f1f1] b-rd"
          on:input={(ev) =>
                            (newSite.name = (ev.target).value)
                        }
      />
      <input
          type="text"
          placeholder="请输入需要添加的站点url"
          class="m-2 p-2 border-none bg-[#f1f1f1] b-rd"
          on:input={(ev) =>
                            (newSite.link = (ev.target).value)
                        }
      />
    </div>
  </FormModal>
</div>

<style lang="scss">
  .btn {
    width: fit-content;
    padding: 7px 15px;
    background: #000028;
    border-radius: 20px;
    color: white;
  }

  .btn:hover {
    box-shadow: 4px 4px 8px gray;
  }

</style>
