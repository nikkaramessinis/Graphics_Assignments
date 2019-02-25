#version 150 core

in  vec4 vPosition;
in  vec4 vColor;
in	vec3 vNormal;

out vec4 color;
out vec3 fN;
out vec3 fE;
out vec3 fL;

uniform mat4 mvp;
uniform vec4 lightPosition;

void main()
{
	fN = vNormal;
	fE = vPosition.xyz;
	fL = lightPosition.xyz;

	if(lightPosition.w != 0.0){
		fL = lightPosition.xyz - vPosition.xyz;
	}

    gl_Position = mvp * vPosition;

	//gl_Position = vPosition;
    //color = vColor;
}
