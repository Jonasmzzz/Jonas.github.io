# 🌐 Jonas guns.lol Bio-Link Webseite (GitHub Pages)

Eine moderne, ästhetische Profil-Webseite im **guns.lol** Style mit Hintergrund-Video, Sound-Management, Glassmorphism-Effekt und Social-Media Linksammlung.

---

## 📁 Projektübersicht

```
jonas-guns-lol/
├── index.html          # Hauptseite & Struktur
├── style.css           # Guns.lol Glassmorphism-Design & Animationen
├── config.js           # ⚙️ HIER PASST DU DEINE LINKS & MEDIEN AN!
├── app.js              # Sound- & Video-Player Logik, Click-to-Enter
├── assets/
│   ├── avatar.jpg      # Dein Profilbild (Hasbulla / Jonas)
│   ├── bg-audio.mp3    # Hintergrundmusik
│   ├── bg-video.mp4    # (Optional) Dein eigenes Hintergrund-Video
│   └── reference_preview.png # Hintergrund-Standbild aus deinem Screenshot
└── README.md           # Diese Anleitung
```

---

## ⚡ Schnellanleitung: Wie passe ich meine Daten an?

Öffne einfach die Datei **`config.js`** in einem Texteditor (z. B. VS Code, Notepad++ oder Editor):

```javascript
const CONFIG = {
  profile: {
    name: "Jonas",              // Dein Name
    location: "FFM",            // Dein Standort / Tag
    avatar: "assets/avatar.jpg", // Dein Profilbild
    viewsStart: 119             // Startwert für Aufrufzähler
  },
  media: {
    videoSrc: "assets/bg-video.mp4", // Pfad zu deinem Video
    audioSrc: "assets/bg-audio.mp3", // Pfad zu deiner Musik
    trackTitle: "Chill Ambient Vibes",
    trackArtist: "Jonas",
    defaultVolume: 0.5          // Lautstärke 0.1 bis 1.0
  },
  links: [
    { name: "Spotify", url: "DEIN_SPOTIFY_LINK", icon: "spotify" },
    { name: "Instagram", url: "DEIN_INSTA_LINK", icon: "instagram" },
    { name: "Snapchat", url: "DEIN_SNAP_LINK", icon: "snapchat" },
    { name: "GitHub", url: "https://github.com/Jonasmzzz", icon: "github" },
    { name: "Discord", url: "DEIN_DISCORD_LINK", icon: "discord" },
    { name: "TikTok", url: "DEIN_TIKTOK_LINK", icon: "tiktok" }
  ]
};
```

### Eigenes Video / Musik einbinden:
1. Ziehe dein Video einfach in den Ordner `assets/` und nenne es `bg-video.mp4`.
2. Ziehe deine Lieblings-MP3 in den Ordner `assets/` und nenne sie `bg-audio.mp3`.
3. Ziehe dein Profilbild in den Ordner `assets/` und nenne es `avatar.jpg`.

---

## 🚀 Wie lade ich das auf GitHub Pages hoch?

Es gibt zwei super einfache Wege:

### Weg A: Direkt über den GitHub Browser (Sehr einfach)
1. Gehe auf [github.com/new](https://github.com/new).
2. Erstelle ein neues Repository mit dem Namen:
   - **`Jonasmzzz.github.io`** (dann lautet deine Adresse: `https://jonasmzzz.github.io/`)
   - ODER **`bio`** (dann lautet deine Adresse: `https://jonasmzzz.github.io/bio/`)
3. Wähle **Public** (öffentlich).
4. Klicke auf **"uploading an existing file"** und ziehe alle Dateien aus diesem Ordner (`index.html`, `style.css`, `config.js`, `app.js` und den gesamten `assets` Ordner) hinein.
5. Klicke auf **Commit changes**.
6. Gehe im Repository auf **Settings** ➡️ **Pages**:
   - Unter **Build and deployment** / **Source**: Wähle **Deploy from a branch**.
   - Branch: **`main`** und Ordner: **`/ (root)`**.
   - Klicke auf **Save**.
7. Nach 1–2 Minuten ist deine Webseite unter deinem GitHub Pages Link online!

---

### Weg B: Per Git im Terminal (Für Entwickler)

Öffne ein Terminal in diesem Ordner (`C:\Users\hoehn\.gemini\antigravity\scratch\jonas-guns-lol`):

```bash
git init
git add .
git commit -m "Initial guns.lol bio website"
git branch -M main
git remote add origin https://github.com/Jonasmzzz/Jonasmzzz.github.io.git
git push -u origin main
```

---

## ✨ Features
- **Click-to-Enter Splashscreen**: Garantiert sauberes Autoplay mit Ton (umgeht Browser-Restriktionen).
- **Glassmorphism Design**: Originalgetreuer Frosted-Glass-Look mit Blur, Schatten & Glow-Effekt.
- **Audio & Video Controller**: Play/Pause, Mute-Button, Lautstärkeregler und animierte Equalizer-Balken.
- **View Counter**: Lokaler Aufrufzähler mit Speicherung im Browser.
- **Responsive**: Passt sich automatisch perfekt an iPhones, Android, Tablets und Desktop-Bildschirme an.
