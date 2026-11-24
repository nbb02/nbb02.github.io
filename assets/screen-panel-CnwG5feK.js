import{b as w,a as j,_ as F}from"./Environment-BnuKrguD.js";import{r,W as P,b8 as H,q as L,aV as q,z as X,S as R}from"./index-Igq4rpjH.js";const J={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},K={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},Y=r.forwardRef(({scale:t=10,frames:D=1/0,opacity:I=1,width:u=1,height:s=1,blur:U=1,near:_=0,far:k=10,resolution:o=512,smooth:A=!0,color:p="#000000",depthWrite:E=!1,renderOrder:z,...G},O)=>{const f=r.useRef(null),a=w(e=>e.scene),v=w(e=>e.gl),l=r.useRef(null);u=u*(Array.isArray(t)?t[0]:t||1),s=s*(Array.isArray(t)?t[1]:t||1);const[c,V,W,n,x,d,g]=r.useMemo(()=>{const e=new P(o,o),T=new P(o,o);T.texture.generateMipmaps=e.texture.generateMipmaps=!1;const b=new H(u,s).rotateX(Math.PI/2),Z=new L(b),m=new q;m.depthTest=m.depthWrite=!1,m.onBeforeCompile=i=>{i.uniforms={...i.uniforms,ucolor:{value:new X(p)}},i.fragmentShader=i.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),i.fragmentShader=i.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const C=new R(J),B=new R(K);return B.depthTest=C.depthTest=!1,[e,b,m,Z,C,B,T]},[o,u,s,t,p]),y=e=>{n.visible=!0,n.material=x,x.uniforms.tDiffuse.value=c.texture,x.uniforms.h.value=e*1/256,v.setRenderTarget(g),v.render(n,l.current),n.material=d,d.uniforms.tDiffuse.value=g.texture,d.uniforms.v.value=e*1/256,v.setRenderTarget(c),v.render(n,l.current),n.visible=!1};let M=0,h,S;return j(()=>{l.current&&(D===1/0||M<D)&&(M++,h=a.background,S=a.overrideMaterial,f.current.visible=!1,a.background=null,a.overrideMaterial=W,v.setRenderTarget(c),v.render(a,l.current),y(U),A&&y(U*.4),v.setRenderTarget(null),f.current.visible=!0,a.overrideMaterial=S,a.background=h)}),r.useImperativeHandle(O,()=>f.current,[]),r.createElement("group",F({"rotation-x":Math.PI/2},G,{ref:f}),r.createElement("mesh",{renderOrder:z,geometry:V,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},r.createElement("meshBasicMaterial",{transparent:!0,map:c.texture,opacity:I,depthWrite:E})),r.createElement("orthographicCamera",{ref:l,args:[-u/2,u/2,s/2,-s/2,_,k]}))}),$="/assets/mac-draco-ZdAOTOTf.glb",ee="/assets/screen-panel-5C4i8Lv3.jpg";export{Y as C,ee as f,$ as l};
