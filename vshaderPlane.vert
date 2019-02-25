#version 150 core


in  vec4 vPosition;
in  vec4 vColor;
out vec4 color;

uniform mat4 translate;
uniform mat4 scale;
uniform mat4 rotation;

void main()
{
    
    
    gl_Position = translate * rotation * scale * vPosition;
    
    // uncomment to have the cube centered on 0.0.0
    //gl_Position =  vPosition;
    
    color = vColor;
}
