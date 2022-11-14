import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState({});

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = error => {
    console.error(error.message);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location };
};

export default useCurrentLocation;