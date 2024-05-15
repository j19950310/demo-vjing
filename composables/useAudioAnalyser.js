const FFTSIZE = 1024;
export const useAudioAnalyser = async () => {
  const animationFrameId = ref(null);
  const volumeRef = ref(0);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = FFTSIZE;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  const updateVolume = () => {
    analyser.getByteFrequencyData(dataArray);
    // analyse dB
    const volume =
      dataArray.reduce((acc, value) => acc + value, 0) / dataArray.length;
    volumeRef.value = volume;

    animationFrameId.value = requestAnimationFrame(updateVolume);
  };
  updateVolume();

  return { bufferLength, dataArray, audioContext, animationFrameId, volumeRef };
};
