import React, { createContext, useState, useContext } from 'react';

interface TransitionContextType {
    completed: boolean;
    toggleCompleted: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

interface TransitionProviderProps {
    children: React.ReactNode;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
    const [completed, setCompleted] = useState<boolean>(false);

    const toggleCompleted = (value: boolean) => {
        setCompleted(value);
    };

    return <TransitionContext.Provider value={{ completed, toggleCompleted }}>{children}</TransitionContext.Provider>;
};

export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return context;
};

export default TransitionContext;
