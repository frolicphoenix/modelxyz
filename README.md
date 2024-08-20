
# Modelxyz

Modelxyz is a 3D model viewer web application that allows users to upload and interact with 3D models directly in their browser. This project uses WebGL and Three.js. The core functionality allows users to upload .glb files, which are then accessible through - a gallery-style interface and an individual model viewer.

## Demo

Check out the live demo [here]([Modelxyz](https://modelxyz.vercel.app/))

https://modelxyz.vercel.app/

**Upload a Model:**
   - Click on the "Upload Model" button to select and load your 3D model.
   - Supported formats: GLB

**Interact with the Model:**
   - Use your mouse or trackpad to rotate, zoom, and pan the model.

## Objectives

- **Upload Functionality**: Enable users to upload 3D models in `.glb` format.
- **Gallery View**: Develop a user-friendly interface to browse uploaded models.
- **3D Viewer Integration**: Implement a viewer to display 3D models directly on the website using Three.js and React Three Fiber.

## Challenges Encountered

- **Scope Management**: The initial project scope was overly ambitious, which led to difficulties in fully implementing all planned features within the timeline.
- **Technical Issues**: 
  - CORS configurations posed a challenge in configuring the server to allow requests from different origins.
  - Issues with API routing resulted in unexpected responses, such as receiving HTML content instead of JSON data, complicating the debugging process.
 
## Successes

- **File Upload System**: Successfully implemented a file upload system that saves models to the server and retrieves them for viewing.
- **Frontend Development**: Developed a clean interface for uploading and viewing models.

## Current Status

As of now, the project successfully handles the uploading and storing of 3D models, and a fully interactive 3D viewer is functional. The integration of a basic gallery view is still under development.

## Resources

- [Three.js](https://threejs.org/) 
- [WebGL](https://get.webgl.org/)
- [ThreejsJourney](https://threejs-journey.com/)

