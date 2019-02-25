#version 150 core

in vec4 color;
in vec3 fN;
in vec3 fE;
in vec3 fL;

out  vec4  colorOUT;
out  vec4 gl_FragColor;

uniform vec4 ambientProduct, diffuseProduct, specularProduct;
uniform vec4 matAmbient, matDiffuse, matSpecular;
uniform vec4 lightPosition;
uniform float shininess;
uniform float intensity;

void main() 
{		
	vec3 N = normalize(fN);
	vec3 E = normalize(fE);
	vec3 L = normalize(fL);

	vec3 H = normalize( L + E );
	vec4 ambient = intensity * ambientProduct; 
	
	float Kd = max(dot(L, N), 0.0);
	vec4 diffuse = Kd * intensity * diffuseProduct;
	
	float Ks = pow(max(dot(N, H), 0.0), shininess);
	vec4 specular = Ks * intensity * specularProduct;

	if(dot(L, N) < 0.0 ){
		specular = vec4(0.0, 0.0, 0.0, 1.0);
	}
	

	gl_FragColor = (matAmbient * ambient) + (matDiffuse * diffuse) + (matSpecular * specular);
	gl_FragColor.a = 1.0;

   //colorOUT = color;
    //colorOUT = vec4(1.0,0.0,0.0,1.0);
} 

