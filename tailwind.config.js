/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens:{
      'sm':'768px',
      'md':'810px',
      'lg':'1000px',
      'lg2':'1200px',
      'xl':'1300px'
    },
    backgroundImage:{
      'mobilehome':"url('/assets/home/background-home-mobile.jpg')",
      'destinationmobile':"url('/assets/destination/background-destination-mobile.jpg')",
      'destinationtab':"url('/assets/destination/background-destination-tablet.jpg')",
      'crewmobile': "url('/assets/crew/background-crew-mobile.jpg')",
      'tabhome':"url(/assets/home/background-home-tablet.jpg)",
      'home':"url(/assets/home/background-home-desktop.jpg)"
    }, 
    colors:{
      'dark':'#0B0D17',
      'grey':'#D0D6F9',
      'white':'#FFFFFF'
    },
    fontSize:{
      '3xl':'150px',
      '2xl':'100px',
      'xl':'80px'
    },
    fontFamily:{
      'bellefair':['"Bellefair"',"serif"],
      'barlow': ['"Barlow Condensed"', "sans-serif"],
      'barlow2':["'Barlow'", 'sans-serif']
    }
  },
  plugins: [],
}

