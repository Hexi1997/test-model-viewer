import "@google/model-viewer";

const Model = () => (
  <div id="card">
    <model-viewer
      src="https://d25xo6hfo9fbc2.cloudfront.net/media/268Cuo0w7E9hE8BHB1swI_ANIMATION.glb"
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default Model;
