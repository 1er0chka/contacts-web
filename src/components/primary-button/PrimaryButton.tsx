import React, {FunctionComponent} from 'react';
import styles from './PrimaryButton.module.sass'

interface IPrimaryButtonProps {
    text: string
    action: () => void
}

const PrimaryButton: FunctionComponent<IPrimaryButtonProps> = ({text, action}) => {
    return (
        <div className={styles.button} onClick={action}>
            {text}
        </div>
    );
};

export default PrimaryButton;