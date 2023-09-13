'use client';
import {SearchBar} from './(partials)/SearchBar';
import {PhotoList} from './(partials)/PhotoList';
import {WelcomeSection} from './(partials)/WelcomeSection';
import {FloatingButton} from '@/components/FloatingButton';
import {Spinner} from '@/components/Spinner';
import {FavoritesParamsModal} from '@/app/planets/mars/(partials)/FavoritesParamsModal';
import {useMarsData} from './(hooks)/useMarsData';
import {ErrorMessage} from './(partials)/ErrorMessage';

function MarsPage() {
  const {
    accumulatedPhotos,
    setNewSearchInitiated,
    isError,
    isLoading,
    loadMoreRef,
    openModal,
    refetch,
    data,
  } = useMarsData();

  return (
    <div className="h-full">
      <WelcomeSection />
      <div className="lg:grid lg:grid-cols-8 h-full ">
        <div className="w-full lg:col-span-2 grid justify-items-center lg:justify-items-start">
          <SearchBar setNewSearchInitiated={setNewSearchInitiated} />
        </div>
        <div className="lg:col-span-6">
          {isError && <ErrorMessage />}

          {!isError && <PhotoList photos={accumulatedPhotos} />}
          <div ref={loadMoreRef} className="w-full mb-4 flex justify-center">
            {isLoading &&
              (accumulatedPhotos.length > 0 ||
                (data?.photos && data.photos.length > 0)) && <Spinner />}
          </div>
        </div>
      </div>
      <FloatingButton onClick={openModal} />
      <FavoritesParamsModal
        refetch={refetch}
        setNewSearchInitiated={setNewSearchInitiated}
      />
    </div>
  );
}

export default MarsPage;
