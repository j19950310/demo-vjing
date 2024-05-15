#define SIZE 1.0
// Lower - more flowing
#define FLUENCY 0.85

uniform float u_time;
uniform vec3 u_color;
uniform vec2 u_mouse;
uniform float u_audioData[512];
uniform float u_volume;
uniform float u_resolution;
varying vec2 vUv;

float rand(vec2 co) { 
  return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
} 

void main()
{

  vec2 iResolution = vec2(500.0, 500.0);
  vec2 iMouse = u_mouse * 0.01;
  float iTime = u_time;
  vec4 color = vec4(1.0);
	vec2 UVcoords = vUv.xy * iResolution.xy;
  vec2 id = ceil(UVcoords/SIZE);

  vec2 rid = vec2(rand(id), rand(id+iResolution.y));    
    color = -vec4( 0.1/fract(rid.x + rid.y - iTime * FLUENCY)-0.1)*15.0;//sparke effect
    
   float d3 = iResolution.y*.5 ,//number to move pic upwards
         d4 =  iResolution.x*.5 ,//number to move pic sideways
         d2 = 8.0 - 2.0 * sin( 5.0+iTime*.07 ) + iMouse.y*0.021, //number to move 5 wave machines outwards
         d1 = .5 ; ;// wave width
         UVcoords = .5*(UVcoords - vec2(d4,d3)); //move pic around
    
    
	//function to make color concentric sinewaves like water drop waves radiating from a pt:   
#define S(X, Y, period)   color += sin(length(UVcoords + vec2(X,Y)*d2)*period)-.2;

    S(0.0,0.0,iMouse.x*0.02)
        
    //4 other wave machines on axes
    S(0,1.0*d2,d1)  S(0,-1.0*d2,d1)  S(-1.0*d2,-0.0,d1)  S(1.0*d2,0.0,d1)  

    gl_FragColor = color;
}