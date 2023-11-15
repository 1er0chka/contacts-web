import React, {
    createContext,
    useState,
    ReactNode,
    FunctionComponent,
    PropsWithChildren,
} from "react";

type ContextMenuContextType = {
    isVisible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    position: { x: number, y: number }
    setPosition: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>
};

const defaultPosition: { x: number, y: number } = {
    x: 0,
    y: 0
}

const defaultState: ContextMenuContextType = {
    isVisible: false,
    setVisible: () => false,
    position: {x: 0, y: 0},
    setPosition: () => defaultPosition
};

export const ContextMenuContext = createContext<ContextMenuContextType>(defaultState);

type ContextMenuProviderProps = {
    children: ReactNode;
};

export const ContextMenuProvider: FunctionComponent<PropsWithChildren<ContextMenuProviderProps>> = ({children}) => {
    const [isMenuVisible, setMenuVisible] = useState<boolean>(defaultState.isVisible);
    const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>(defaultState.position);

    return (
        <ContextMenuContext.Provider value={{
            isVisible: isMenuVisible,
            setVisible: setMenuVisible,
            position: menuPosition,
            setPosition: setMenuPosition
        }}>
            {children}
        </ContextMenuContext.Provider>
    );
};
