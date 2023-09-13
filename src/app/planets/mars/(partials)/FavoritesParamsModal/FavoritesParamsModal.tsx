import {Modal} from '@/components/Modal';
import {useSearchNasa} from '@/hooks/useSearchNasa';
import {SearchRoverParams} from '@/types/Nasa';

import {BsTrash3Fill, BsSearch} from 'react-icons/bs';

type FavoritesParamsModalProps = {
  refetch: () => void;
  setNewSearchInitiated: React.Dispatch<React.SetStateAction<boolean>>;
};
function FavoritesParamsModal({
  refetch,
  setNewSearchInitiated,
}: FavoritesParamsModalProps) {
  const {
    favorites,
    removeFavorite,
    isModalOpen,
    closeModal,
    setSelectedRover,
    setSolDate,
    setEarthDate,
    setCurrentPage,
  } = useSearchNasa();

  const handleAddToSearch = (fav: SearchRoverParams) => {
    // Update the search parameters based on the selected favorite
    setSelectedRover(fav.rover);
    if (fav.solDate) {
      setSolDate(fav.solDate);
      setEarthDate({startDate: '', endDate: ''}); // Reset earthDate if solDate is present
    } else if (fav.earthDate) {
      setEarthDate(fav.earthDate);
      setSolDate(null); // Reset solDate if earthDate is present
    }
    setCurrentPage(1);
    setNewSearchInitiated(true); // Reset to the first page

    // Refetch data with the updated parameters
    refetch();
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={'Favorite Searches'}>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Rover</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {favorites.map((fav, index) => (
            <tr key={index}>
              <td>{fav.rover}</td>
              <td>
                {fav.solDate
                  ? fav.solDate.toString()
                  : typeof fav.earthDate === 'object' && fav.earthDate !== null
                  ? fav?.earthDate?.startDate?.toString()
                  : fav.earthDate}
              </td>
              <td>
                <button
                  onClick={() => handleAddToSearch(fav)}
                  className="mx-2"
                  aria-label="Search using this favorite">
                  <BsSearch />
                </button>
                <button
                  onClick={() => removeFavorite(index)}
                  className="mx-2"
                  aria-label="Remove this favorite">
                  <BsTrash3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
}

export default FavoritesParamsModal;
