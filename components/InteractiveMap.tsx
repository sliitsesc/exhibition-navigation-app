import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Location } from '@/mocks/locations';

interface InteractiveMapProps {
  locations: Location[];
  userLocation: {latitude: number, longitude: number} | null;
  mapType: 'standard' | 'satellite';
}

const { width, height } = Dimensions.get('window');

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  locations, 
  userLocation, 
  mapType 
}) => {
  const webViewRef = useRef<WebView>(null);
  const [mapReady, setMapReady] = useState(false);

  const getOccupancyColor = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    if (percentage < 50) return '#10B981'; // green
    if (percentage < 80) return '#FBBF24'; // yellow
    return '#EF4444'; // red
  };

  const mapHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Campus Map</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <style>
            body { margin: 0; padding: 0; }
            #map { height: 100vh; width: 100vw; }
            .custom-marker {
                background: rgba(18, 18, 20, 0.9);
                border: 2px solid #6366F1;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 12px;
                backdrop-filter: blur(10px);
            }
            .user-marker {
                background: #6366F1;
                border: 3px solid white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
                50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.8); }
                100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
            }
            .popup-content {
                background: #1A1A1C;
                color: white;
                padding: 12px;
                border-radius: 8px;
                min-width: 200px;
            }
            .popup-title {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 8px;
            }
            .popup-details {
                font-size: 14px;
                color: #A0A0A8;
                margin-bottom: 4px;
            }
            .occupancy-bar {
                width: 100%;
                height: 6px;
                background: #2A2A2E;
                border-radius: 3px;
                overflow: hidden;
                margin: 8px 0;
            }
            .occupancy-fill {
                height: 100%;
                border-radius: 3px;
                transition: width 0.3s ease;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <script>
            // Initialize map centered on Thurstan College
            const map = L.map('map').setView([6.9031, 79.8622], 18);
            
            // Add tile layer
            const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            });
            
            const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '© Esri'
            });
            
            let currentLayer = standardLayer;
            currentLayer.addTo(map);
            
            let userMarker = null;
            let locationMarkers = [];
            
            // Function to update map type
            function updateMapType(type) {
                map.removeLayer(currentLayer);
                currentLayer = type === 'satellite' ? satelliteLayer : standardLayer;
                currentLayer.addTo(map);
            }
            
            // Function to add user location
            function addUserLocation(lat, lng) {
                if (userMarker) {
                    map.removeLayer(userMarker);
                }
                
                const userIcon = L.divIcon({
                    className: 'user-marker',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                });
                
                userMarker = L.marker([lat, lng], { icon: userIcon })
                    .addTo(map)
                    .bindPopup('<div class="popup-content"><div class="popup-title">Your Location</div></div>');
            }
            
            // Function to add location markers
            function addLocationMarkers(locations) {
                // Clear existing markers
                locationMarkers.forEach(marker => map.removeLayer(marker));
                locationMarkers = [];
                
                locations.forEach(location => {
                    const occupancyPercentage = Math.round((location.currentOccupancy / location.capacity) * 100);
                    const color = occupancyPercentage < 50 ? '#10B981' : occupancyPercentage < 80 ? '#FBBF24' : '#EF4444';
                    
                    const icon = L.divIcon({
                        className: 'custom-marker',
                        html: occupancyPercentage + '%',
                        iconSize: [40, 40],
                        iconAnchor: [20, 20],
                        popupAnchor: [0, -20]
                    });
                    
                    const popupContent = \`
                        <div class="popup-content">
                            <div class="popup-title">\${location.name}</div>
                            <div class="popup-details">\${location.building}, Floor \${location.floor}</div>
                            <div class="popup-details">\${location.description}</div>
                            <div class="occupancy-bar">
                                <div class="occupancy-fill" style="width: \${occupancyPercentage}%; background-color: \${color};"></div>
                            </div>
                            <div class="popup-details" style="color: \${color};">
                                \${location.currentOccupancy}/\${location.capacity} (\${occupancyPercentage}%)
                            </div>
                        </div>
                    \`;
                    
                    const marker = L.marker([location.coordinates.latitude, location.coordinates.longitude], { icon })
                        .addTo(map)
                        .bindPopup(popupContent);
                    
                    locationMarkers.push(marker);
                });
            }
            
            // Message handler for React Native
            window.addEventListener('message', function(event) {
                const data = JSON.parse(event.data);
                
                switch(data.type) {
                    case 'updateLocations':
                        addLocationMarkers(data.locations);
                        break;
                    case 'updateUserLocation':
                        if (data.location) {
                            addUserLocation(data.location.latitude, data.location.longitude);
                        }
                        break;
                    case 'updateMapType':
                        updateMapType(data.mapType);
                        break;
                    case 'centerOnLocation':
                        map.setView([data.latitude, data.longitude], 19);
                        break;
                }
            });
            
            // Notify React Native that map is ready
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'mapReady' }));
            }
        </script>
    </body>
    </html>
  `;

  useEffect(() => {
    if (mapReady && webViewRef.current) {
      webViewRef.current.postMessage(JSON.stringify({
        type: 'updateLocations',
        locations: locations
      }));
    }
  }, [locations, mapReady]);

  useEffect(() => {
    if (mapReady && webViewRef.current && userLocation) {
      webViewRef.current.postMessage(JSON.stringify({
        type: 'updateUserLocation',
        location: userLocation
      }));
    }
  }, [userLocation, mapReady]);

  useEffect(() => {
    if (mapReady && webViewRef.current) {
      webViewRef.current.postMessage(JSON.stringify({
        type: 'updateMapType',
        mapType: mapType
      }));
    }
  }, [mapType, mapReady]);

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === 'mapReady') {
        setMapReady(true);
      }
    } catch (error) {
      console.log('Map message error:', error);
    }
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <WebView
          ref={webViewRef}
          source={{ html: mapHTML }}
          style={styles.webview}
          onMessage={handleMessage}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ html: mapHTML }}
        style={styles.webview}
        onMessage={handleMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});