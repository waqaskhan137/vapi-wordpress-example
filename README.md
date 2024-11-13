# Vapi Voice Demo

A simple web application demonstrating voice interaction using Vapi API. The app features a microphone button that allows users to start and stop voice recording.

## Features

- Click-to-talk microphone button
- Visual feedback during recording
- Error handling for microphone permissions
- Responsive design

```text
vapi-wordpress-example/
├── src/
│   └── index.html
├── css/
│   └── styles.css
├── js/
│   ├── bundle.js
│   └── script.js
├── README.md
```


## Setup

1. Clone this repository
2. Open `index.html` in your web browser
3. Click the microphone button to start/stop recording

## Requirements

- Modern web browser with microphone support
- Internet connection for loading Font Awesome icons
- Valid Vapi API credentials

## Files

- `index.html` - Main HTML file
- `styles.css` - Button styling and animations
- `script.js` - Voice recording logic and Vapi integration
- `bundle.js` - Bundled dependencies

## bundle.js

`bundle.js` is generated using the `vapi-websdk` npm package. It includes all necessary dependencies required for the Vapi API integration.

## Note

Make sure to replace the Vapi API credentials in `script.js` with your own before using. 