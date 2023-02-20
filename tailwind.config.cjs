/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      l_primary: "#1D19DC",
      l_secondary: "#F16242",
      l_white: "#fff",
      l_black: "#000",
      l_black_text: "#494949",
      l_input_bg: "#343538",
      l_gray: "#8C8C8C",
      l_gray_2: "#AAAAAD",
      l_title: "#141414",
      video_back: "#F4F4F7",
      l_border: "#111111",
      faq_border: "#ADB5CD",
      faq_num: "#3E3E3E",
      faq_text: "#5D5B74",
      faq_bg: '#EEF1FF',
      faq_stats: '#373737',
      footer_back: "#131313",
      border_c: "#27282B",
      filter_gray: '#8A92A6',
      sign_in: '#3A57E8',
      profile_bg: '#E9ECEF',
      adminNav_subtitle: '#ADB5BD',
      profile_text: '#232D42',
      search_color: '#9DA3CF',
      roles_orange: '#E39F4F',
      roles_orangeBg: '#FFECD4',
      roles_cyan: '#26C8A7',
      roles_cyanBg: '#E0FEF8',
      roles_purple: '#7333DC',
      roles_purpleBg: '#EEE8FD',
      roles_blue: '#2636C8',
      white_red: '#EB5757'
    },
    
    boxShadow:{
        filter: '0px 10px 13px rgba(17, 38, 146, 0.05)',
        input: '0px 10px 13px rgba(17, 38, 146, 0.07)',
        admin_nav: '0px 10px 30px rgba(17, 38, 146, 0.05)'
    },
    
    screens: {
      max2xl: { max: "1535px" },

      maxxl: { max: "1279px" },
        'mxlfaq':{max:"1287px"},

      maxlg: { max: "1086px" },

      maxmd: { max: "767px" },

      maxsm: { max: "639px" },
      "2xl": { min: "1535px" },
      
      "maxf":{max: '976px'},
      "minf":{min: '976px'},
      
      xl: { min: "1279px" },

      lg: { min: "1086px" },

      md: { min: "767px" },

      sm: { min: "639px" },
    },
    extend: {
      maxWidth: {
        container: "1672px",
      },
      fontFamily: {
        gilroy: ["gilroy"],
      },
      fontSize: {
        title: '80px'
      }
    },
  },
  plugins: [],
};
