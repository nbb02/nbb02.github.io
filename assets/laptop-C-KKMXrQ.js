import{r as n,a8 as Be,a9 as Ie,c as Pe,aa as Fe,j as f}from"./index-euQWPMTv.js";import{b as re,a as ce,_ as _e,c as ue,E as Le,O as $e,C as ze,u as je}from"./Environment-CeidIt_h.js";import{V as oe,D as He,b as Ve,P as Ce,O as De,T as pe,c as fe,W as xe,d as Ge,e as Ze,f as Ne,C as Ye,g as ye,a as Xe,h as ge,L as be,M as te}from"./three.module-TBexnMdy.js";const ne=new oe,me=new oe,Ke=new oe,Me=new Ve;function qe(t,e,o){const r=ne.setFromMatrixPosition(t.matrixWorld);r.project(e);const i=o.width/2,s=o.height/2;return[r.x*i+i,-(r.y*s)+s]}function Je(t,e){const o=ne.setFromMatrixPosition(t.matrixWorld),r=me.setFromMatrixPosition(e.matrixWorld),i=o.sub(r),s=e.getWorldDirection(Ke);return i.angleTo(s)>Math.PI/2}function Qe(t,e,o,r){const i=ne.setFromMatrixPosition(t.matrixWorld),s=i.clone();s.project(e),Me.set(s.x,s.y),o.setFromCamera(Me,e);const v=o.intersectObjects(r,!0);if(v.length){const x=v[0].distance;return i.distanceTo(o.ray.origin)<x}return!0}function et(t,e){if(e instanceof De)return e.zoom;if(e instanceof Ce){const o=ne.setFromMatrixPosition(t.matrixWorld),r=me.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=o.distanceTo(r);return 1/(2*Math.tan(i/2)*s)}else return 1}function tt(t,e,o){if(e instanceof Ce||e instanceof De){const r=ne.setFromMatrixPosition(t.matrixWorld),i=me.setFromMatrixPosition(e.matrixWorld),s=r.distanceTo(i),v=(o[1]-o[0])/(e.far-e.near),x=o[1]-v*e.far;return Math.round(v*s+x)}}const le=t=>Math.abs(t)<1e-10?0:t;function we(t,e,o=""){let r="matrix3d(";for(let i=0;i!==16;i++)r+=le(e[i]*t.elements[i])+(i!==15?",":")");return o+r}const rt=(t=>e=>we(e,t))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),nt=(t=>(e,o)=>we(e,t(o),"translate(-50%,-50%)"))(t=>[1/t,1/t,1/t,1,-1/t,-1/t,-1/t,-1,1/t,1/t,1/t,1,1,1,1,1]);function st(t){return t&&typeof t=="object"&&"current"in t}const ot=n.forwardRef(({children:t,eps:e=.001,style:o,className:r,prepend:i,center:s,fullscreen:v,portal:x,distanceFactor:g,sprite:l=!1,transform:a=!1,occlude:c,onOcclude:w,castShadow:T,receiveShadow:U,material:F,geometry:j,zIndexRange:M=[16777271,0],calculatePosition:R=qe,as:L="div",wrapperClass:N,pointerEvents:$="auto",...y},k)=>{const{gl:z,camera:d,scene:A,size:p,raycaster:H,events:V,viewport:P}=re(),[h]=n.useState(()=>document.createElement(L)),G=n.useRef(null),b=n.useRef(null),E=n.useRef(0),B=n.useRef([0,0]),C=n.useRef(null),S=n.useRef(null),O=x?.current||V.connected||z.domElement.parentNode,W=n.useRef(null),Z=n.useRef(!1),X=n.useMemo(()=>c&&c!=="blending"||Array.isArray(c)&&c.length&&st(c[0]),[c]);n.useLayoutEffect(()=>{const _=z.domElement;c&&c==="blending"?(_.style.zIndex=`${Math.floor(M[0]/2)}`,_.style.position="absolute",_.style.pointerEvents="none"):(_.style.zIndex=null,_.style.position=null,_.style.pointerEvents=null)},[c]),n.useLayoutEffect(()=>{if(b.current){const _=G.current=Be.createRoot(h);if(A.updateMatrixWorld(),a)h.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const u=R(b.current,d,p);h.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${u[0]}px,${u[1]}px,0);transform-origin:0 0;`}return O&&(i?O.prepend(h):O.appendChild(h)),()=>{O&&O.removeChild(h),_.unmount()}}},[O,a]),n.useLayoutEffect(()=>{N&&(h.className=N)},[N]);const D=n.useMemo(()=>a?{position:"absolute",top:0,left:0,width:p.width,height:p.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...v&&{top:-p.height/2,left:-p.width/2,width:p.width,height:p.height},...o},[o,s,v,p,a]),m=n.useMemo(()=>({position:"absolute",pointerEvents:$}),[$]);n.useLayoutEffect(()=>{if(Z.current=!1,a){var _;(_=G.current)==null||_.render(n.createElement("div",{ref:C,style:D},n.createElement("div",{ref:S,style:m},n.createElement("div",{ref:k,className:r,style:o,children:t}))))}else{var u;(u=G.current)==null||u.render(n.createElement("div",{ref:k,style:D,className:r,children:t}))}});const I=n.useRef(!0);ce(_=>{if(b.current){d.updateMatrixWorld(),b.current.updateWorldMatrix(!0,!1);const u=a?B.current:R(b.current,d,p);if(a||Math.abs(E.current-d.zoom)>e||Math.abs(B.current[0]-u[0])>e||Math.abs(B.current[1]-u[1])>e){const Y=Je(b.current,d);let K=!1;X&&(Array.isArray(c)?K=c.map(J=>J.current):c!=="blending"&&(K=[A]));const ee=I.current;if(K){const J=Qe(b.current,d,H,K);I.current=J&&!Y}else I.current=!Y;ee!==I.current&&(w?w(!I.current):h.style.display=I.current?"block":"none");const se=Math.floor(M[0]/2),Te=c?X?[M[0],se]:[se-1,0]:M;if(h.style.zIndex=`${tt(b.current,d,Te)}`,a){const[J,de]=[p.width/2,p.height/2],ie=d.projectionMatrix.elements[5]*de,{isOrthographicCamera:he,top:Ue,left:Re,bottom:ke,right:Oe}=d,We=rt(d.matrixWorldInverse),Ae=he?`scale(${ie})translate(${le(-(Oe+Re)/2)}px,${le((Ue+ke)/2)}px)`:`translateZ(${ie}px)`;let Q=b.current.matrixWorld;l&&(Q=d.matrixWorldInverse.clone().transpose().copyPosition(Q).scale(b.current.scale),Q.elements[3]=Q.elements[7]=Q.elements[11]=0,Q.elements[15]=1),h.style.width=p.width+"px",h.style.height=p.height+"px",h.style.perspective=he?"":`${ie}px`,C.current&&S.current&&(C.current.style.transform=`${Ae}${We}translate(${J}px,${de}px)`,S.current.style.transform=nt(Q,1/((g||10)/400)))}else{const J=g===void 0?1:et(b.current,d)*g;h.style.transform=`translate3d(${u[0]}px,${u[1]}px,0) scale(${J})`}B.current=u,E.current=d.zoom}}if(!X&&W.current&&!Z.current)if(a){if(C.current){const u=C.current.children[0];if(u!=null&&u.clientWidth&&u!=null&&u.clientHeight){const{isOrthographicCamera:Y}=d;if(Y||j)y.scale&&(Array.isArray(y.scale)?y.scale instanceof oe?W.current.scale.copy(y.scale.clone().divideScalar(1)):W.current.scale.set(1/y.scale[0],1/y.scale[1],1/y.scale[2]):W.current.scale.setScalar(1/y.scale));else{const K=(g||10)/400,ee=u.clientWidth*K,se=u.clientHeight*K;W.current.scale.set(ee,se,1)}Z.current=!0}}}else{const u=h.children[0];if(u!=null&&u.clientWidth&&u!=null&&u.clientHeight){const Y=1/P.factor,K=u.clientWidth*Y,ee=u.clientHeight*Y;W.current.scale.set(K,ee,1),Z.current=!0}W.current.lookAt(_.camera.position)}});const q=n.useMemo(()=>({vertexShader:a?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[a]);return n.createElement("group",_e({},y,{ref:b}),c&&!X&&n.createElement("mesh",{castShadow:T,receiveShadow:U,ref:W},j||n.createElement("planeGeometry",null),F||n.createElement("shaderMaterial",{side:He,vertexShader:q.vertexShader,fragmentShader:q.fragmentShader})))}),it={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},at={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},ae=t=>t===Object(t)&&!Array.isArray(t)&&typeof t!="function";function ve(t,e){const o=re(s=>s.gl),r=ue(fe,ae(t)?Object.values(t):t);return n.useLayoutEffect(()=>{e?.(r)},[e]),n.useEffect(()=>{if("initTexture"in o){let s=[];Array.isArray(r)?s=r:r instanceof pe?s=[r]:ae(r)&&(s=Object.values(r)),s.forEach(v=>{v instanceof pe&&o.initTexture(v)})}},[o,r]),n.useMemo(()=>{if(ae(t)){const s={};let v=0;for(const x in t)s[x]=r[v++];return s}else return r},[t,r])}ve.preload=t=>ue.preload(fe,t);ve.clear=t=>ue.clear(fe,t);const lt=n.forwardRef(({scale:t=10,frames:e=1/0,opacity:o=1,width:r=1,height:i=1,blur:s=1,near:v=0,far:x=10,resolution:g=512,smooth:l=!0,color:a="#000000",depthWrite:c=!1,renderOrder:w,...T},U)=>{const F=n.useRef(null),j=re(P=>P.scene),M=re(P=>P.gl),R=n.useRef(null);r=r*(Array.isArray(t)?t[0]:t||1),i=i*(Array.isArray(t)?t[1]:t||1);const[L,N,$,y,k,z,d]=n.useMemo(()=>{const P=new xe(g,g),h=new xe(g,g);h.texture.generateMipmaps=P.texture.generateMipmaps=!1;const G=new Ge(r,i).rotateX(Math.PI/2),b=new Ze(G),E=new Ne;E.depthTest=E.depthWrite=!1,E.onBeforeCompile=S=>{S.uniforms={...S.uniforms,ucolor:{value:new Ye(a)}},S.fragmentShader=S.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),S.fragmentShader=S.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const B=new ye(it),C=new ye(at);return C.depthTest=B.depthTest=!1,[P,G,E,b,B,C,h]},[g,r,i,t,a]),A=P=>{y.visible=!0,y.material=k,k.uniforms.tDiffuse.value=L.texture,k.uniforms.h.value=P*1/256,M.setRenderTarget(d),M.render(y,R.current),y.material=z,z.uniforms.tDiffuse.value=d.texture,z.uniforms.v.value=P*1/256,M.setRenderTarget(L),M.render(y,R.current),y.visible=!1};let p=0,H,V;return ce(()=>{R.current&&(e===1/0||p<e)&&(p++,H=j.background,V=j.overrideMaterial,F.current.visible=!1,j.background=null,j.overrideMaterial=$,M.setRenderTarget(L),M.render(j,R.current),A(s),l&&A(s*.4),M.setRenderTarget(null),F.current.visible=!0,j.overrideMaterial=V,j.background=H)}),n.useImperativeHandle(U,()=>F.current,[]),n.createElement("group",_e({"rotation-x":Math.PI/2},T,{ref:F}),n.createElement("mesh",{renderOrder:w,geometry:N,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},n.createElement("meshBasicMaterial",{transparent:!0,map:L.texture,opacity:o,depthWrite:c})),n.createElement("orthographicCamera",{ref:R,args:[-r/2,r/2,i/2,-i/2,v,x]}))}),Ee="/assets/mac-draco-ZdAOTOTf.glb",ct="/assets/github.com_nbb02_4_35-Bspy2KWS.webp";function ut(t){return Ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"},child:[]},{tag:"path",attr:{d:"M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"},child:[]},{tag:"path",attr:{d:"M14 10.5a1.5 1.5 0 0 1 3 0v1.5"},child:[]},{tag:"path",attr:{d:"M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"},child:[]},{tag:"path",attr:{d:"M5 3l-1 -1"},child:[]},{tag:"path",attr:{d:"M4 7h-1"},child:[]},{tag:"path",attr:{d:"M14 3l1 -1"},child:[]},{tag:"path",attr:{d:"M15 6h1"},child:[]}]})(t)}const ft=!1,mt=.56;function Se(t,e){return t}function vt(t){const e=Pe.c(54),{onScreenClick:o}=t,r=n.useRef(null),i=n.useRef(0),s=n.useRef(0),v=n.useRef(!1),x=n.useRef(null),g=n.useRef(null),{nodes:l,materials:a}=je(Ee),c=re(dt),w=ve(ct);let T,U;e[0]!==c||e[1]!==w?(T=()=>{const D=g.current;if(!D)return;const m=w.clone();m.flipY=ft,m.colorSpace=Xe,m.wrapS=ge,m.wrapT=ge,m.generateMipmaps=!1,m.minFilter=be,m.magFilter=be,m.anisotropy=Math.min(16,c),m.needsUpdate=!0;const I=m.image,q=I?.width??0,_=I?.height??0;if(!q||!_)return;const u=q/_,Y=Math.min(mt,u/1.6);return m.repeat.set(1,Y),s.current=Math.max(0,1-Y),i.current=0,m.offset.set(0,Se(i.current,s.current)),D.map=m,D.needsUpdate=!0,x.current=m,()=>{x.current===m&&(x.current=null),m.dispose()}},U=[c,w],e[0]=c,e[1]=w,e[2]=T,e[3]=U):(T=e[2],U=e[3]),n.useEffect(T,U);let F,j;e[4]===Symbol.for("react.memo_cache_sentinel")?(F=()=>{const D=m=>{if(!v.current||(m.preventDefault(),s.current<=0))return;const I=te.clamp(i.current+m.deltaY*6e-4,0,s.current);i.current=I;const q=x.current;q&&(q.offset.y=Se(I,s.current))};return window.addEventListener("wheel",D,{passive:!1}),()=>{window.removeEventListener("wheel",D)}},j=[],e[4]=F,e[5]=j):(F=e[4],j=e[5]),n.useEffect(F,j);let M;e[6]===Symbol.for("react.memo_cache_sentinel")?(M=D=>{if(!r.current)return;const m=D.clock.getElapsedTime();r.current.rotation.x=te.lerp(r.current.rotation.x,Math.cos(m/2)/20+.25,.1),r.current.rotation.y=te.lerp(r.current.rotation.y,Math.sin(m/4)/20,.1),r.current.rotation.z=te.lerp(r.current.rotation.z,Math.sin(m/8)/20,.1),r.current.position.y=te.lerp(r.current.position.y,(-2+Math.sin(m/2))/2,.1)},e[6]=M):M=e[6],ce(M);let R,L,N;e[7]===Symbol.for("react.memo_cache_sentinel")?(R=[0,-.04,.41],L=[0,2.96,-.13],N=[Math.PI/2,0,0],e[7]=R,e[8]=L,e[9]=N):(R=e[7],L=e[8],N=e[9]);let $;e[10]!==a.aluminium||e[11]!==l.Cube008.geometry?($=f.jsx("mesh",{material:a.aluminium,geometry:l.Cube008.geometry}),e[10]=a.aluminium,e[11]=l.Cube008.geometry,e[12]=$):$=e[12];const y=a["matte.001"];let k;e[13]!==l.Cube008_1.geometry||e[14]!==y?(k=f.jsx("mesh",{material:y,geometry:l.Cube008_1.geometry}),e[13]=l.Cube008_1.geometry,e[14]=y,e[15]=k):k=e[15];let z,d;e[16]===Symbol.for("react.memo_cache_sentinel")?(z=D=>{D.stopPropagation(),v.current=!0},d=()=>{v.current=!1},e[16]=z,e[17]=d):(z=e[16],d=e[17]);let A;e[18]!==o?(A=D=>{D.stopPropagation(),o&&o()},e[18]=o,e[19]=A):A=e[19];let p;e[20]===Symbol.for("react.memo_cache_sentinel")?(p=f.jsx("meshBasicMaterial",{ref:g,toneMapped:!1}),e[20]=p):p=e[20];let H;e[21]!==l.Cube008_2.geometry||e[22]!==A?(H=f.jsx("mesh",{geometry:l.Cube008_2.geometry,onPointerOver:z,onPointerOut:d,onClick:A,children:p}),e[21]=l.Cube008_2.geometry,e[22]=A,e[23]=H):H=e[23];let V;e[24]!==k||e[25]!==H||e[26]!==$?(V=f.jsx("group",{"rotation-x":-.425,position:R,children:f.jsxs("group",{position:L,rotation:N,children:[$,k,H]})}),e[24]=k,e[25]=H,e[26]=$,e[27]=V):V=e[27];let P;e[28]===Symbol.for("react.memo_cache_sentinel")?(P=[0,2.6,0],e[28]=P):P=e[28];let h;e[29]===Symbol.for("react.memo_cache_sentinel")?(h={pointerEvents:"none",width:"160px",textAlign:"center"},e[29]=h):h=e[29];let G;e[30]===Symbol.for("react.memo_cache_sentinel")?(G=f.jsxs(ot,{position:P,transform:!0,occlude:!1,style:h,center:!0,children:[f.jsx("div",{style:{display:"flex",justifyContent:"center"},children:f.jsx("div",{style:{padding:"8px 12px",borderRadius:9999,background:"rgba(0,0,0,0.65)",color:"white",fontSize:13,opacity:.95,animation:"fadeBlink 1.6s ease-in-out infinite"},children:f.jsx(ut,{size:30})})}),f.jsx("style",{children:"@keyframes fadeBlink{0%{opacity:0}30%{opacity:0.95}70%{opacity:0.6}100%{opacity:0}}"})]}),e[30]=G):G=e[30];let b;e[31]===Symbol.for("react.memo_cache_sentinel")?(b=[1.79,0,3.45],e[31]=b):b=e[31];let E;e[32]!==a.keys||e[33]!==l.keyboard.geometry?(E=f.jsx("mesh",{material:a.keys,geometry:l.keyboard.geometry,position:b}),e[32]=a.keys,e[33]=l.keyboard.geometry,e[34]=E):E=e[34];let B;e[35]===Symbol.for("react.memo_cache_sentinel")?(B=[0,-.1,3.39],e[35]=B):B=e[35];let C;e[36]!==a.aluminium||e[37]!==l.Cube002.geometry?(C=f.jsx("mesh",{material:a.aluminium,geometry:l.Cube002.geometry}),e[36]=a.aluminium,e[37]=l.Cube002.geometry,e[38]=C):C=e[38];let S;e[39]!==a.trackpad||e[40]!==l.Cube002_1.geometry?(S=f.jsx("mesh",{material:a.trackpad,geometry:l.Cube002_1.geometry}),e[39]=a.trackpad,e[40]=l.Cube002_1.geometry,e[41]=S):S=e[41];let O;e[42]!==C||e[43]!==S?(O=f.jsxs("group",{position:B,children:[C,S]}),e[42]=C,e[43]=S,e[44]=O):O=e[44];let W;e[45]===Symbol.for("react.memo_cache_sentinel")?(W=[0,-.03,1.2],e[45]=W):W=e[45];let Z;e[46]!==a.touchbar||e[47]!==l.touchbar.geometry?(Z=f.jsx("mesh",{material:a.touchbar,geometry:l.touchbar.geometry,position:W}),e[46]=a.touchbar,e[47]=l.touchbar.geometry,e[48]=Z):Z=e[48];let X;return e[49]!==V||e[50]!==E||e[51]!==O||e[52]!==Z?(X=f.jsxs("group",{ref:r,dispose:null,children:[V,G,E,O,Z]}),e[49]=V,e[50]=E,e[51]=O,e[52]=Z,e[53]=X):X=e[53],X}function dt(t){return t.gl.capabilities.getMaxAnisotropy()}je.preload(Ee);function yt(){const t=Pe.c(16),e=Fe();let o;t[0]!==e?(o=()=>e("/desktop"),t[0]=e,t[1]=o):o=t[1];const r=o;let i,s,v;t[2]===Symbol.for("react.memo_cache_sentinel")?(i={position:[-5,0,-15],fov:55},s=[1,2],v=f.jsx("pointLight",{position:[10,10,10],intensity:1.5}),t[2]=i,t[3]=s,t[4]=v):(i=t[2],s=t[3],v=t[4]);let x,g;t[5]===Symbol.for("react.memo_cache_sentinel")?(x=[0,Math.PI,0],g=[0,1,0],t[5]=x,t[6]=g):(x=t[5],g=t[6]);let l;t[7]!==r?(l=f.jsx("group",{rotation:x,position:g,children:f.jsx(vt,{onScreenClick:()=>r()})}),t[7]=r,t[8]=l):l=t[8];let a;t[9]===Symbol.for("react.memo_cache_sentinel")?(a=f.jsx(Le,{preset:"city"}),t[9]=a):a=t[9];let c;t[10]!==l?(c=f.jsxs(n.Suspense,{fallback:null,children:[l,a]}),t[10]=l,t[11]=c):c=t[11];let w,T;t[12]===Symbol.for("react.memo_cache_sentinel")?(T=f.jsx(lt,{position:[0,-4.5,0],scale:20,blur:2,far:4.5}),w=f.jsx($e,{enablePan:!1,enableZoom:!1,minPolarAngle:Math.PI/2.2,maxPolarAngle:Math.PI/2.2}),t[12]=w,t[13]=T):(w=t[12],T=t[13]);let U;return t[14]!==c?(U=f.jsx(f.Fragment,{children:f.jsxs(ze,{camera:i,dpr:s,children:[v,c,T,w]})}),t[14]=c,t[15]=U):U=t[15],U}export{yt as default};
