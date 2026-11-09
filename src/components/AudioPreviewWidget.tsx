import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Sparkles, Disc } from "lucide-react";

interface Track {
  name: string;
  genre: string;
  bpm: number;
  key: string;
}

const DEMO_TRACKS: Track[] = [
  { name: "Cơn Mưa Đêm", genre: "Pop Ballad V-Pop", bpm: 72, key: "C Major" },
  { name: "Hương Hoa Đất Mẹ", genre: "Bolero Trữ Tình", bpm: 84, key: "D Minor" },
  { name: "Sài Gòn Đêm Bay", genre: "Vinahouse Club Remix", bpm: 138, key: "F Minor" },
  { name: "Midnight Vibe", genre: "Trap R&B 808", bpm: 95, key: "G# Minor" },
];

export const AudioPreviewWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [bars, setBars] = useState<number[]>([30, 45, 60, 80, 55, 90, 70, 40, 65, 85, 95, 60, 40, 75, 50, 65]);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const currentTrack = DEMO_TRACKS[selectedTrackIndex];

  // Synthesize chord and beat pulses when playing
  const playChords = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Kick thump
      const kickOsc = ctx.createOscillator();
      const kickGain = ctx.createGain();
      kickOsc.frequency.setValueAtTime(120, now);
      kickOsc.frequency.exponentialRampToValueAtTime(35, now + 0.15);
      kickGain.gain.setValueAtTime(0.4 * volume, now);
      kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      kickOsc.connect(kickGain);
      kickGain.connect(ctx.destination);
      kickOsc.start(now);
      kickOsc.stop(now + 0.25);

      // Warm chord notes (C-E-G or Fm chords)
      const freqs = selectedTrackIndex === 2 
        ? [174.61, 207.65, 261.63] // Fm
        : selectedTrackIndex === 1
        ? [146.83, 174.61, 220.00] // Dm
        : [130.81, 164.81, 196.00]; // Cmaj

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq * (idx === 0 ? 1 : 1.5), now);
        gain.gain.setValueAtTime(0.08 * volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
      });
    } catch {
      // AudioContext fallback
    }
  };

  useEffect(() => {
    if (isPlaying) {
      playChords();
      const timer = window.setInterval(() => {
        playChords();
        setBars(() => Array.from({ length: 16 }, () => Math.floor(Math.random() * 70 + 25)));
      }, 500);
      intervalRef.current = timer;
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setBars([30, 45, 60, 80, 55, 90, 70, 40, 65, 85, 95, 60, 40, 75, 50, 65]);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, selectedTrackIndex, volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#14161f] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Disc className={`w-5 h-5 text-[#ff6b00] ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }} />
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Audio Preview · Beat Mẫu Thực Tế</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#ffb800] bg-[#ffb800]/10 px-2.5 py-1 rounded-full font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sản phẩm của học viên</span>
        </div>
      </div>

      {/* Track selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {DEMO_TRACKS.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => {
              setSelectedTrackIndex(idx);
              if (!isPlaying) setIsPlaying(true);
            }}
            className={`text-left p-2.5 rounded-xl border transition-all text-xs ${
              selectedTrackIndex === idx
                ? "bg-[#ff6b00]/15 border-[#ff6b00] text-white"
                : "bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <div className="font-semibold truncate">{t.name}</div>
            <div className="text-[11px] text-neutral-400 truncate">{t.genre}</div>
          </button>
        ))}
      </div>

      {/* Player and Waveform Display */}
      <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Tạm dừng" : "Phát thử"}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] hover:from-[#ff7b1a] hover:to-[#ff991a] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#ff6b00]/30 transition-transform active:scale-95"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>{currentTrack.name}</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300 font-normal">
                {currentTrack.bpm} BPM
              </span>
            </div>
            <div className="text-xs text-neutral-400">
              {currentTrack.genre} · Key {currentTrack.key}
            </div>
          </div>
        </div>

        {/* Animated Sound Waveform Bars */}
        <div className="flex items-end gap-1 h-10 px-2 py-1 flex-1 max-w-[260px] justify-center sm:justify-end">
          {bars.map((height, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-150 ${
                isPlaying ? "bg-gradient-to-t from-[#ff6b00] to-[#ffb800]" : "bg-white/20"
              }`}
              style={{ height: `${isPlaying ? height : 20}%` }}
            />
          ))}
        </div>

        {/* Volume controls */}
        <div className="hidden md:flex items-center gap-2 shrink-0 text-neutral-400">
          <Volume2 className="w-4 h-4 text-neutral-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 accent-[#ff6b00] cursor-pointer"
            aria-label="Âm lượng"
          />
        </div>
      </div>
    </div>
  );
};
