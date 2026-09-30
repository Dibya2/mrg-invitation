// Web Audio API ambient wedding melody generator & audio manager

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: any = null;

  constructor() {
    // Lazy init on user interaction
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public play() {
    this.initCtx();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.playMelodyLoop();
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine', gainVal = 0.08) {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Smooth attack & decay envelope for flute/marimba like soft sound
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn('Audio synth note error', e);
    }
  }

  private playMelodyLoop() {
    // Romantic pentatonic / Raga Bhupali notes (Hz)
    // C4, D4, E4, G4, A4, C5, D5, E5
    const notes = [
      261.63, 293.66, 329.63, 392.00, 440.00,
      523.25, 587.33, 659.25
    ];

    const sequence = [
      { note: notes[0], dur: 1.2 },
      { note: notes[2], dur: 1.0 },
      { note: notes[3], dur: 1.5 },
      { note: notes[4], dur: 1.2 },
      { note: notes[5], dur: 1.8 },
      { note: notes[4], dur: 1.0 },
      { note: notes[3], dur: 1.2 },
      { note: notes[2], dur: 1.5 },
      { note: notes[1], dur: 1.0 },
      { note: notes[0], dur: 2.0 },
    ];

    let index = 0;
    this.playTone(sequence[0].note, sequence[0].dur);

    this.intervalId = setInterval(() => {
      if (!this.isPlaying) return;
      index = (index + 1) % sequence.length;
      const current = sequence[index];
      this.playTone(current.note, current.dur);
    }, 1200);
  }
}

export const weddingAudio = new WeddingAudioPlayer();
