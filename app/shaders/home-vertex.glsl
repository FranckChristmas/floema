#define PI 3.1415926535897932384626433832795

attribute vec3 position;
attribute vec2 uv;

uniform float uSpeed;
uniform vec2 uViewportSizes;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 newPosition = modelViewMatrix * vec4(position, 1.0); // modeviewMatrix multiply by the position of the vertex

  // newPosition.z -= (sin(newPosition.y / uViewportSizes.y *  PI / 2.0)+ sin(newPosition.x / uViewportSizes.x * PI / 2.0)) * abs(uSpeed);
    newPosition.z -= ((cos(newPosition.y / uViewportSizes.y * 0.1)) * (cos(newPosition.x / uViewportSizes.x * 0.1))) * abs(uSpeed);

  // set the z position of the vertex to the sin of the x position of the vertex

  
  gl_Position = projectionMatrix * newPosition;
}