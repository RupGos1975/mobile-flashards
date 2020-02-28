This project is identified as mobile-flashcards. 


Setup instructions:

Install Node from https://nodejs.org/en/download/. Choose from the list of what your operating system is.
The node installation will also install npm.
After installation:
1. Check if node and npm is installed by typing in the command prompt to check for version:
      node -v
      npm -v
   You should see the versions immediately in the next line : For example, v6.11.0 for node and
   5.3.0 for npm if you have installed those versions.

2. Since there are 2 types of native devices, such as IOS and Android, please download the device emulator from Genymotion for Android devices and XCode for iphone, ipad, or IOS based devices to emulate the application. Follow the directions to download, install, and setup on your local machine.
     -see https://www.genymotion.com/ for more information for android devices
     -see https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html for more information on IOS simulators.

3. If you would like to develop and test on real-time on a real device, please download expo from the "Apple App Store" from your phone or device for IOS supported devices and "Google Play" for android based devices. Follow the direction
     -For Android see https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en for more information for android based devices.
     -For IOS see https://itunes.apple.com/us/app/expo-client/id982107779?mt=8 for IOS devices. 

Unzip, Install, and Start:
4. Unzip the mobile-flashcards file into any directory, I have unzipped it in the /Users/Udacity directory.
    Mac:
    /Users/Udacity/mobile-flashcards
    Windows:
    C:\Users\Udacity\mobile-flashcards

5. Open a shell command prompt and CD to the mobile-flashcards 
    For example, 
    Mac:
        /Users/Udacity/mobile-flashcards
    Windows:
    C:\Users\Udacity\mobile-flashcards

6. Next, run the command "npm install" and it will install the mobile-flashcards. 
    For more information on create-react-native-app, please visit: https://github.com/react-community/create-react-native-app
   

7. In the mobile-flashcards that is the current directory in the command shell,

    Mac:
    /Users/Udacity/mobile-flashcards
    Windows:
    C:\Users\Udacity\mobile-flashcards

    type the following : npm start 
    -This will start the packager and follow the options:
      - Press a to open Android device or emulator, or i to open iOS emulator.
      - Press q to display QR code.
      - Press r to restart packager, or R to restart packager and clear cache.
      - Press d to toggle development mode. (current mode: development)

    - Also, if you are running the application on the actual physical device, launch the expo app from the
      device and it will show the "Tools" route. An item will show as "Scan QR Code" that will be user interactable. Click on the "Scan QR Code" and the camera of the device will turn on and the screen will
      show the camera view. On the npm console, a QR Code will show and will get read by the camera from the device. Hold the device/camera in front of the QR code. Once this occurs, it will load the application in to expo and will render the application as an item. After clicking on the newly item, it will load the 
      application. 







