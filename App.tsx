import { useState, useMemo } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { PanGestureHandler } from 'react-native-gesture-handler';

const App = () => {
  const [date, setDate] = useState(new Date());
  const dragX = useMemo(() => new Animated.Value(0), []);

  const onGestureEvent = useMemo(
    () =>
      Animated.event([{ nativeEvent: { translationX: dragX } }], {
        useNativeDriver: true,
      }),
    [dragX],
  );

  return (
    <SafeAreaView>
      <DatePicker
        androidVariant="nativeAndroid"
        minimumDate={new Date(2020, 12, 1)}
        maximumDate={new Date()}
        mode="date"
        date={date}
        onDateChange={setDate}
      />
      <PanGestureHandler
        activeOffsetX={8}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={() => {}}
      >
        <Animated.View />
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default App;
