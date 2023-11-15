import React, {FunctionComponent} from 'react';

interface IPrimaryButtonProps {
    text: string
    action: () => void
}

const PrimaryButton: FunctionComponent<IPrimaryButtonProps> = ({text, action}) => {
    return (
        <div onClick={action}>
            {text}
        </div>
    );
};

export default PrimaryButton;