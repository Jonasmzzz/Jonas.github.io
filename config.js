/**
 * ========================================================
 * 🌟 JONAS PROFILE CONFIGURATION (guns.lol Style)
 * ========================================================
 * Hier kannst du ganz einfach alle Links, Namen, Bilder,
 * Videos und Songs anpassen!
 */

const CONFIG = {
  // Profil Details
  profile: {
    name: "Jonas",
    titleGlow: true, // Schöner Leuchteffekt um den Namen
    location: "FFM", // z.B. "FFM", "Frankfurt", "Germany"
    badge: "VIP",    // Kleines Badge neben dem Namen (optional, leer lassen für keins)
    avatar: "assets/avatar.jpg", // Lokales Fallback-Profilbild
    viewsStart: 119, // Startwert für den Aufrufzähler
  },

  // Discord Live-Integration (Lanyard API)
  discord: {
    enabled: true,
    userId: "453756683886264321", // Jonas's Discord User ID
    useDiscordAvatar: true,       // Dynamisches Discord-Profilbild laden
    showStatusRing: true,         // Farbiger Statusring um das Profilbild (Online, Idle, DND, Offline)
    showPresenceCard: true        // Live Rich-Presence Box (Spiele, Spotify, Status)
  },

  // Medien (Hintergrund-Video & Sound)
  media: {
    // Pfad zu deinem Hintergrund-Video (z.B. "assets/bg-video.mp4" oder Online-Link)
    videoSrc: "assets/bg-video.mp4",
    
    // Pfad zu deiner Musikdatei (z.B. "assets/bg-audio.mp3" oder "assets/bg-audio.wav")
    audioSrc: "assets/bg-audio.mp3",
    
    // Songtitel & Künstler für den Player
    trackTitle: "Chill Ambient Vibes",
    trackArtist: "Jonas",

    // Standardlautstärke beim Betreten (0.0 bis 1.0 -> 0.4 = 40%)
    defaultVolume: 0.5,
  },

  // Social Media & Linksammlung
  // Tipp: Trage hier deine echten Profil-URLs ein!
  links: [
    {
      name: "Spotify",
      url: "https://open.spotify.com",
      icon: "spotify",
      description: "Playlists & Sound"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "instagram",
      description: "@jonas"
    },
    {
      name: "Snapchat",
      url: "https://snapchat.com",
      icon: "snapchat",
      description: "Snapchat Add"
    },
    {
      name: "GitHub",
      url: "https://github.com/Jonasmzzz",
      icon: "github",
      description: "github.com/Jonasmzzz"
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: "discord",
      description: "Discord Community"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      icon: "tiktok",
      description: "TikTok Feed"
    }
  ],

  // Zusätzliche visuelle Effekte
  effects: {
    splashText: "[ click anywhere to enter ]", // Text beim ersten Laden
    glowColor: "#ffffff",
    audioVisualizer: true
  }
};
