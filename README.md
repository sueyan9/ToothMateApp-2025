#2025 update version--This project consists of two parts: the frontend (ToothMateApp) and the backend (ToothMateServer). Ensure the following tools are installed:

Node.js – for running the JavaScript environment

ngrok – for exposing your local server to the internet

Visual Studio Code – recommended code editor

Expo Go – to run the React Native app on your Android/iOS device Steps: Open both the ToothMateApp and ToothMateServer folders in separate Visual Studio Code windows.

In each project’s terminal, ensure you're in the correct root directory.

Run the following command in each terminal: npm install

Start the Backend Server In the ToothMateServer directory, run: npm run dev
Run ngrok In a new terminal window, run: ngrok http 3000 Open the file ToothMateApp/src/api/axios.js and replace the baseURL with the new ngrok URL: const baseURL = 'https://your-ngrok-url.ngrok.io'; // replace this with your ngrok URL
Start the Frontend App In the ToothMateApp directory, run: npx expo start This opens a browser window with a QR code.
Run the App on Your Phone Scan QR Code with camera and click the link.
Make sure your phone and computer are on the same Wi-Fi network.# ToothMate phone app

# ToothMate phone app

### **Downloads:**  
[Node.JS](https://nodejs.org/en/download)    
[ngrok](https://ngrok.com/download)    
[Visual Studio Code](https://code.visualstudio.com/download)  

Expo Go - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [iOS](https://apps.apple.com/app/apple-store/id982107779)

**Note: Both Node.JS and ngrok should be added to system path to simplify use. More information [here.](https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho)**  

**Another Note: Although Visual Studio Code is not absolutely required to run the application, it will simplify running both the server and phone app and will provide an environment for further development.**

### **Installing Dependencies**
Project dependencies are third party packages that extend the capabilities of our code. We have used many third party dependecies to gives us access to features you might find in the app, for instance PDFReader.

1. Open the ToothMateApp and ToothMateServer projects in Visual Studio Code.
2. Open the terminal in each Visual Studio Code window ensuring it is in the directory of each project.
3. Type "npm install" in both terminal windows to install necessary dependencies for both projects on your device.

**Note: Alternatively you can open Windows command line instances in the root folders of both the ToothMateApp and ToothMateServer and run "npm install" from there.**

### **Starting Server & Running App**  
1. Open a Visual Studio Code terminal instance inside the **ToothMateServer** root folder and run **"npm run dev"** to run server. Alternatively, you can open a Windows command line instance inside the **ToothMateServer** root folder and run **"npm run dev"** from there.  

![Starting Server from VSCode](/../media/ReadMeFiles/Starting_Server_From_VSCode.PNG) ![Startin Server from Windows Command Line](/../media/ReadMeFiles/Starting_Server_from_Command_Line.png)  

2. Open Windows Command Line (or terminal instance in Visual Studio Code) and run **"ngrok http 3000"**.

![Starting ngrok through Windows Command Line](/../media/ReadMeFiles/starting_ngrok.png)  

3. Copy the **https forwarding url** from the running ngrok instance and paste into baseURL inside src/api/axios.js inside the ToothMateApp folder. Make sure you save the changes to axios.js with File > Save or by pressing Ctrl+S.

![axios.js file location](/../media/ReadMeFiles/axios.js_location.PNG)
![axios.js file contents](/../media/ReadMeFiles/axios.js_contents.PNG)

4. Open a Visual Studio Code terminal instance inside the **ToothMateApp** root folder and run **"npm start"" to run phone app (can also be done from Windows command line). Doing so will also open the following window in your browser.

![Starting App from VSCode](/../media/ReadMeFiles/Starting_App_From_VSCode.PNG)
![Running App browser window](/../media/ReadMeFiles/App_Browser_Window.PNG)

5. To run the app on your phone, open Expo Go and press "Scan QR Code" then scan the QR code on the browser window. Ensure that your phone is on the same local network as the computer being used to run the server.

![Expo Go](/../media/ReadMeFiles/Expo_Go.jpg)

6. Alternatively, to instead run the phone app on your computer, you can install an Android or iPhone emulator and in the browser window click either **"Run on Android device/emulator"** or **"Run on iOS simulator"**.
