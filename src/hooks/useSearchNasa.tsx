import {SearchNasaContext} from '@/context/SearchNasaContext';
import {useContext} from 'react';

export const useSearchNasa = () => {
  const context = useContext(SearchNasaContext);
  if (!context) {
    throw new Error('useSearchNasa must be used within a SearchNasaProvider');
  }
  return context;
};
