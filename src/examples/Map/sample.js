import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

const MapComponent = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  TrackAsiaGL.add

  useEffect(() => {
    (async () => {
      await TrackAsiaGL.images.addImage(
        'custom-icon',
        require('./path-to-your-image.png') // Đường dẫn đến hình ảnh của bạn
      );
    })();
  }, []);

  useEffect(() => {
    const updateMarkerPosition = async () => {
      if (mapRef.current && markerRef.current) {
        const center = await mapRef.current.getCenter();
        if (center) {
          markerRef.current.setCoordinates(center);
        }
      }
    };
    const map = mapRef.current;
    if (map) {
      map.on('regionDidChange', updateMarkerPosition);
    }

    return () => {
      if (map) {
        map.off('regionDidChange', updateMarkerPosition);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <TrackAsiaGL.MapView
        ref={mapRef}
        style={styles.map}
        styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key"
        centerCoordinate={[106.660172, 10.762622]} 
        zoomLevel={12}
      >
        <TrackAsiaGL.Camera
          ref={markerRef}
          centerCoordinate={[106.660172, 10.762622]}
          zoomLevel={12}
        />
      </TrackAsiaGL.MapView>
      <TrackAsiaGL.Images
    </View>
  );
};

const styles
