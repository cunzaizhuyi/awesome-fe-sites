import {
    component$,
    useStore,
    useStyles$,
    $,
    useBrowserVisibleTask$,
} from "@builder.io/qwik";
import Modal from "~/components/modal";
import CardSite from "~/routes/card-mode/CardSite";
import style from "./index.scss?inline";

interface ILocalSite {
    name: string;
    link: string;
    desc: string;
}

// QWIK WARN Serializing dirty watch. Looks like an internal error.
// it seems like a qwik internal bug
// https://github.com/BuilderIO/qwik/issues/2715
export default component$(() => {
    useStyles$(style);

    const store = useStore({
        modalTitle: "新增私人收藏站点",
        modalOkText: "确定",
        modalCancelText: "取消",
        modalVisible: false,
        name: "",
        link: "",
        desc: "",
        localList: [] as ILocalSite[],
    });

    useBrowserVisibleTask$(() => {
        const item = window.localStorage.getItem("__local_sites__");
        store.localList = item ? JSON.parse(item) : ([] as ILocalSite[]);
    });

    useBrowserVisibleTask$(({ track }) => {
        track(() => store.localList);

        localStorage.setItem("__local_sites__", JSON.stringify(store.localList));
    });

    const resetTempSite = $(() => {
        store.name = "";
        store.desc = "";
        store.link = "";
    });

    const handleOk = $(() => {
        if (store.name && store.link && store.desc) {
            store.localList = [
                ...store.localList,
                {
                    name: store.name,
                    link: store.link,
                    desc: store.desc,
                },
            ];
            resetTempSite();
            store.modalVisible = false;
        }
    });

    const handleCancel = $(() => {
        resetTempSite();
        store.modalVisible = false;
    });

    return (
        <>
            <div
                class="btn cursor-pointer m-5px dark:bg-#eee dark:text-black"
                onClick$={() => (store.modalVisible = true)}
            >
                新增私人收藏站点 👏
            </div>
            {store.localList.length > 0 && (
                <section>
                    <div class="mb-10px dark:text-white text-[30px]">
                        <div class="i-mdi-file-table-outline text-orange-400" />
                        <span class="relative top-3px">私人收藏</span>
                    </div>
                    <div class="item-wrapper">
                        {store.localList.map((site, index) => (
                            <div class="item-wrapper">
                                <CardSite site={site} key={index} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
            <Modal
                visible={store.modalVisible}
                title={store.modalTitle}
                okText={store.modalOkText}
                cancelText={store.modalCancelText}
                onCancel={handleCancel}
                onOk={handleOk}
            >
                <div class="flex flex-col">
                    <input
                        type="text"
                        placeholder="请输入需要添加的站点名称"
                        class="m-2 p-2 border-none bg-[#f1f1f1] b-rd"
                        onInput$={(ev) =>
                            (store.name = (ev.target as HTMLInputElement).value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="请输入需要添加的站点url"
                        class="m-2 p-2 border-none bg-[#f1f1f1] b-rd"
                        onInput$={(ev) =>
                            (store.link = (ev.target as HTMLInputElement).value)
                        }
                    />
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="请输入站点描述信息"
                        class="m-2 p-2 border-none bg-[#f1f1f1] b-rd resize-none"
                        onInput$={(ev) =>
                            (store.desc = (ev.target as HTMLInputElement).value)
                        }
                    />
                </div>
            </Modal>
        </>
    );
});