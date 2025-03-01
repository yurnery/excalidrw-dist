import "./ToolIcon.scss";
type LockIconProps = {
    title?: string;
    name?: string;
    checked: boolean;
    onChange?(): void;
    isMobile?: boolean;
};
export declare const HandButton: (props: LockIconProps) => JSX.Element;
export {};
