'use client';

import {EarthDate, Rover, SearchRoverParams, SolDate} from '@/types/Nasa';
import {createContext, useState, ReactNode} from 'react';

type SearchNasaContextType = {
  favorites: SearchRoverParams[];
  addFavorite: (params: SearchRoverParams) => void;
  removeFavorite: (index: number) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  selectedRover: Rover;
  setSelectedRover: React.Dispatch<React.SetStateAction<Rover>>;
  solDate: SolDate;
  setSolDate: React.Dispatch<React.SetStateAction<SolDate>>;
  earthDate: EarthDate;
  setEarthDate: React.Dispatch<React.SetStateAction<EarthDate>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  selectedCamera: string | null;
  setSelectedCamera: React.Dispatch<React.SetStateAction<string | null>>;
};

type SearchNasaProviderProps = {
  children: ReactNode;
};

export const SearchNasaContext = createContext<
  SearchNasaContextType | undefined
>(undefined);

export const SearchNasaProvider: React.FC<SearchNasaProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<SearchRoverParams[]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    }
    return [];
  });
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRover, setSelectedRover] = useState<Rover>(null);
  const [solDate, setSolDate] = useState<SolDate>(null);
  const [earthDate, setEarthDate] = useState<EarthDate>({
    startDate: '',
    endDate: '',
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const addFavorite = (params: SearchRoverParams) => {
    const newFavorites = [...favorites, params];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SearchNasaContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isModalOpen,
        openModal,
        closeModal,
        selectedRover,
        setSelectedRover,
        solDate,
        setSolDate,
        earthDate,
        setEarthDate,
        currentPage,
        setCurrentPage,
        selectedCamera,
        setSelectedCamera,
      }}>
      {children}
    </SearchNasaContext.Provider>
  );
};
