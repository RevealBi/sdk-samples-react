import { createContext, useContext } from 'react';

export const DashboardsListStateContext = createContext();

export const useDashboardsListState = () => {
    return useContext(DashboardsListStateContext);
}