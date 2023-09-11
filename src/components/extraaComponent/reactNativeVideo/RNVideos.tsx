import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

interface Props {}
interface useStateProp {
  stretch: string;
  contain: string;
  default: string;
  cover: string;
  // select: boolean;
}
const RNVideos: React.FC<Props> = () => {
  const [clicked, setclicked] = useState(false);
  const [paused, setpaused] = useState(false);
  const [progress, setprogress] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);

  const ref = useRef();
  const format = (seconds: number): string => {
    let mins: string = String(Math.floor(seconds / 60)).padStart(2, '0');
    let secs: string = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${mins}:${secs}`;
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      {fullScreen && <StatusBar hidden />}
      <TouchableOpacity
        style={{width: '100%', height: fullScreen ? '100%' : 200}}
        onPress={() => {
          setclicked(true);
        }}>
        <Video
          source={{
            uri: 'https://mazwai.com/videvo_files/video/free/2014-06/small_watermarked/thomas_mandelid--clips_of_the_Aurora_preview.mp4',
          }}
          controls={false}
          repeat={false}
          style={{height: fullScreen ? '100%' : 200, width: '100%'}}
          resizeMode={'cover'}
          paused={paused}
          ref={ref}
          onProgress={(x: any) => {
            console.log(x);
            setprogress(x);
          }}
        />
        {clicked && (
          <TouchableOpacity
            style={{
              height: fullScreen ? '100%' : 200,
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setclicked(false)}>
            <TouchableOpacity
              style={{position: 'absolute', top: 0, right: 0, padding: 15}}
              onPress={() => {
                if (fullScreen) {
                  Orientation.lockToPortrait();
                } else {
                  Orientation.lockToLandscape();
                }
                setFullScreen(!fullScreen);
              }}>
              <Image
                source={
                  fullScreen
                    ? require('../assets/icons/minimize.png')
                    : require('../assets/icons/maximize.png')
                }
                style={{height: 24, width: 24, tintColor: '#fff'}}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) - 10);
                }}>
                <Image
                  source={require('../assets/icons/back.png')}
                  style={{
                    tintColor: '#fff',
                    height: 30,
                    width: 30,
                    padding: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpaused(!paused)}>
                <Image
                  source={
                    paused
                      ? require('../assets/icons/playbtn.png')
                      : require('../assets/icons/pause.png')
                  }
                  style={{
                    tintColor: '#fff',
                    height: 30,
                    width: 30,
                    padding: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) + 10);
                }}>
                <Image
                  source={require('../assets/icons/forward.png')}
                  style={{
                    tintColor: '#fff',
                    height: 30,
                    width: 30,
                    padding: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{width: '80%', height: 40}}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#fff"
                value={progress.currentTime}
                onValueChange={x => {
                  ref.current.seek(x);
                }}
              />
              <Text style={{color: '#fff'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {/* <Text style={{color: 'red'}}>RNVideos</Text> */}
    </View>
  );
};

export default RNVideos;

const styles = StyleSheet.create({});
