<template>
  <div
    id="demo"
    ref="self"
  ></div>
</template>

<script setup>
import * as THREE from "three";
import { useMouseInElement } from "@vueuse/core";
const self = ref(null);
const { x, y, isOutside } = useMouseInElement(self);

// import text from public

const audioContextRef = ref(null);
// 創建場景
const requestMicrophonePermission = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log("Microphone permission granted");
  } catch (error) {
    console.error("Microphone permission denied:", error);
  }
};

onMounted(async () => {
  // load text from '/shader.frag'
  const isDev = import.meta.env.DEV;
  const fragFileUrl = isDev ? '/shader.frag' : '/demo-vjing/shader.frag';
  const response = await fetch(fragFileUrl);
  const shaderFrag = await response.text();

  // AudioAnalyser
  await requestMicrophonePermission();
  const { bufferLength, dataArray, audioContext, volumeRef, animationFrameId } =
    await useAudioAnalyser();
  const scene = new THREE.Scene();
  const { width, height } = self.value.getBoundingClientRect();
  const uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_color: { type: "v3", value: new THREE.Color(0xff0000) },
    u_volume: { type: "f", value: volumeRef.value },
    u_audioData: { type: "fv1", value: new Uint8Array(bufferLength) },
    u_resolution: { type: "v2", value: new THREE.Vector2(width, height) },
    u_mouse: { type: "v2", value: new THREE.Vector2(x.value, y.value) },
  };

  // 創建鏡頭
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 500;

  // 創建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  self.value.appendChild(renderer.domElement);

  // 創建白色平面
  const geometry = new THREE.PlaneGeometry(500, 500);
  const material_base = new THREE.LineBasicMaterial({
    color: 0xffffff,
    linewidth: 1,
    linecap: "round", //ignored by WebGLRenderer
    linejoin: "round", //ignored by WebGLRenderer
  });
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: shaderFrag,
    //   `
    //   uniform float u_time;
    //   uniform vec3 u_color;
    //   uniform float u_audioData[${bufferLength}];
    //   uniform float u_volume;

    //   varying vec2 vUv;
    //   void main() {
    //     float audioValue = u_audioData[int(vUv.x * float(${bufferLength}))];
    //     vec3 color = u_color * audioValue / 255.0 * (u_volume * 0.5);
    //     gl_FragColor = vec4(color, 1.0);
    //   }
    // `,
  });

  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
  scene.add(camera);

  // 渲染場景
  function animate() {
    const { width, height } = self.value.getBoundingClientRect();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // 更新Uniforms
    uniforms.u_time.value += 0.001;
    uniforms.u_resolution.value.x = width;
    uniforms.u_resolution.value.y = height;

    // 更新鼠標位置
    uniforms.u_mouse.value.x = x.value;
    uniforms.u_mouse.value.y = y.value;

    // 更新Geometry size

    // 將音頻數據轉換為Float32Array並傳遞給Uniform
    // for (let i = 0; i < bufferLength; i++) {
    //   uniforms.u_audioData.value[i] = dataArray[i];
    // }
    uniforms.u_volume.value = volumeRef.value;
    uniforms.u_time.value += volumeRef.value * 0.05;
  }

  console.log(geometry);
  audioContextRef.value = audioContext;
  animate();

  // 調整視窗大小時更新渲染器和鏡頭
  window.addEventListener("resize", () => {
    const { width, height } = document
      .querySelector("#demo")
      .getBoundingClientRect();

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
});
onBeforeUnmount(() => {
  // if (animationFrameId.value) {
  //   console.log("cancelAnimationFrame", animationFrameId.value);
  //   cancelAnimationFrame(animationFrameId.value);
  // }

  if (audioContextRef.value) {
    // console.log("close audioContext");
    console.log("close audioContext");
    audioContextRef.value.close();
  }
});
</script>

<style>
#demo {
  width: 100%;
  height: 100dvh;
  background-color: black;
  color: white;
}
</style>
