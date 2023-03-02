import type { QRL } from "@builder.io/qwik";
import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import style from "./index.scss?inline";

interface IModalProps {
    title?: string;
    visible: boolean;
    onOk?: QRL<() => void>;
    onCancel?: QRL<() => void>;
    okText?: string;
    cancelText?: string;
}

export default component$((props: IModalProps) => {
    useStyles$(style);

    return (
        <>
            {props.visible && (
                <>
                    <div class="modal-mask" onClick$={props.onCancel}></div>
                    <div class="modal-container">
                        <div class="modal-header">
                            <div class="modal-title">{props.title}</div>
                        </div>
                        <div class="modal-body">
                            <Slot />
                        </div>
                        <div class="modal-footer">
                            <button class="modal-cancel-btn btn" onClick$={props.onCancel}>
                                {props.cancelText}
                            </button>
                            <button class="btn" onClick$={props.onOk}>
                                {props.okText}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
});
