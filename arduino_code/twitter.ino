/*
The sketch demonstrates how to do advertise from a Bluetooth Low Energy 4
to the RFduino, then make an LED connected to pin 3 change color.
 
It is supposed to be used with the Cordova RFDuino Plugin Daisybot app
*/
 
#include <RFduinoBLE.h>
#include <Adafruit_NeoPixel.h>

#define PIN 3
Adafruit_NeoPixel strip = Adafruit_NeoPixel(1, 3, NEO_GRB + NEO_KHZ800); 
void setup() {
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'

  // start the BLE stack
  RFduinoBLE.begin();
}
 
void loop() {
  
}

void RFduinoBLE_onDisconnect()
{
  // don't leave the led on if they disconnect

}
 
void RFduinoBLE_onReceive(char *data, int len)
{
if(data[0] == '0'){
  strip.setPixelColor(0, strip.Color(255,0,0));
  strip.setPixelColor(2, strip.Color(255,0,0));
  strip.setPixelColor(4, strip.Color(255,0,0));
  strip.setPixelColor(6, strip.Color(255,0,0));
  strip.setPixelColor(8, strip.Color(255,0,0));
  strip.setPixelColor(10, strip.Color(255,0,0));

}
else if(data[0] == '1'){
strip.setPixelColor(0, strip.Color(0,0,255));
strip.setPixelColor(2, strip.Color(0,0,255));
strip.setPixelColor(4, strip.Color(0,0,255));
strip.setPixelColor(6, strip.Color(0,0,255));
strip.setPixelColor(8, strip.Color(0,0,255));
strip.setPixelColor(10, strip.Color(0,0,255));

}
else if(data[0] == '2'){
strip.setPixelColor(0, strip.Color(255,255,0));
strip.setPixelColor(2, strip.Color(255,255,0));
strip.setPixelColor(4, strip.Color(255,255,0));
strip.setPixelColor(6, strip.Color(255,255,0));
strip.setPixelColor(8, strip.Color(255,255,0));
strip.setPixelColor(10, strip.Color(255,255,0));

}

else if(data[0] == '3'){
strip.setPixelColor(0, strip.Color(0,100,100));
strip.setPixelColor(2, strip.Color(0,100,100));
strip.setPixelColor(4, strip.Color(0,100,100));
strip.setPixelColor(6, strip.Color(0,100,100));
strip.setPixelColor(8, strip.Color(0,100,100));
strip.setPixelColor(10, strip.Color(0,100,100));

}
else if(data[0] == '4'){
strip.setPixelColor(0, strip.Color(50,50,50));
strip.setPixelColor(2, strip.Color(50,50,50));
strip.setPixelColor(4, strip.Color(50,50,50));
strip.setPixelColor(6, strip.Color(50,50,50));
strip.setPixelColor(8, strip.Color(50,50,50));
strip.setPixelColor(10, strip.Color(50,50,50));

}

else if(data[0] == '5'){
strip.setPixelColor(0, strip.Color(100,100,0));
}
else if(data[0] == '6'){
strip.setPixelColor(0, strip.Color(100, 0,100));
}
else if(data[0] == '7'){
strip.setPixelColor(0, strip.Color(100,100,0));
}
else if(data[0] == '8'){
strip.setPixelColor(0, strip.Color(100, 0,100));
}
else{
strip.setPixelColor(0, strip.Color(0,255,0));
}

 strip.show(); 
}



void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  if(WheelPos < 85) {
   return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  } else if(WheelPos < 170) {
   WheelPos -= 85;
   return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else {
   WheelPos -= 170;
   return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
}
