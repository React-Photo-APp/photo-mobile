import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

function MusicRoute() {
  return <Text>Music</Text>;
}

function AlbumsRoute() {
  return <Text>Albums</Text>;
}

function RecentsRoute() {
  return <Text>Recents</Text>;
}

function Navigation() {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'history' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default Navigation;
