import { ComponentChildren } from "preact";
import { JSXInternal } from "preact/src/jsx";

import styles from "./styles.module.scss";
import { jcn } from "../../utils/className";

interface BoxProps extends JSXInternal.HTMLAttributes<HTMLDivElement> {
    header?: ComponentChildren;
    children: ComponentChildren;
    contentClassName?: string;
}

const Box = ({ header, children, className, contentClassName, ...rest }: BoxProps) => {
    return (
        <div className={jcn(styles.container, className)} {...rest}>
            {header && <div className={styles.header}>{header}</div>}
            <div className={contentClassName}>{children}</div>
        </div>
    );
}

export default Box;