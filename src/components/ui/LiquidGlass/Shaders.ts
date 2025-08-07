// src/components/ui/LiquidGlass/shaders.ts

export const vertexShader = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

export const fragmentShader = `
  precision mediump float;
  
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform float u_intensity;
  uniform bool u_active;
  
  varying vec2 v_texCoord;
  
  // Función de distorsión para el efecto shader
  vec2 distort(vec2 uv, vec2 mouse, float intensity) {
    vec2 delta = uv - mouse;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, 0.3, distance);
    
    // Crear efecto de lente/refracción
    float angle = atan(delta.y, delta.x);
    float distortion = sin(distance * 20.0 - u_time * 2.0) * 0.01 * intensity * influence;
    
    return uv + normalize(delta) * distortion;
  }
  
  void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_mouse / u_resolution;
    
    float baseIntensity = u_active ? 2.0 : 1.0;
    float intensity = u_intensity * baseIntensity;
    
    // Aplicar distorsión
    vec2 distortedUV = distort(uv, mouse, intensity);
    
    // Muestra la textura con la distorsión aplicada
    vec4 color = texture2D(u_texture, distortedUV);
    
    // Efecto de aberración cromática
    float aberration = intensity * 0.01;
    color.r = texture2D(u_texture, distortedUV + vec2(aberration, 0.0)).r;
    color.g = texture2D(u_texture, distortedUV).g;
    color.b = texture2D(u_texture, distortedUV - vec2(aberration, 0.0)).b;
    
    // Efecto de vidrio (reflejos y transparencia)
    vec2 delta = uv - mouse;
    float distance = length(delta);
    float influence = 1.0 - smoothstep(0.0, 0.4, distance);
    
    // Añadir brillo en el punto del mouse
    float highlight = influence * intensity * 0.3;
    color.rgb += highlight;
    
    gl_FragColor = color;
  }
`;