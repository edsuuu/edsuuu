import React, { createContext, useState, useContext } from 'react';
import { TransitionComponentProps, TransitionContextType } from '../interfaces';

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<TransitionComponentProps> = ({ children }) => {
    const [completed, setCompleted] = useState<boolean>(false);

    const toggleCompleted = (value: boolean) => {
        setCompleted(value);
    };

    return <TransitionContext.Provider value={{ completed, toggleCompleted }}>{children}</TransitionContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return context;
};

export default TransitionContext;
