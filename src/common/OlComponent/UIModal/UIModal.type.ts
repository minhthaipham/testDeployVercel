export interface IUIModalProps {
    ref?: React.RefObject<HTMLDialogElement>;
    openModal: boolean;
    onCloseModal: () => void;
    className?: React.ComponentProps<'div'>['className'];
    children?: React.ReactNode;
}