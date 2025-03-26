const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0330", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Such a smartie :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my gf so beautiful?", // Example trending search query
    "1000 reasons why Tyler is perfect", // Another example query
    `Haden's greatest hits`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-03-30", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Butterflies", // Title of the song
      artist: "Michael Jackson", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Blue Dream",
      artist: "Jhené Aiko",
      left: "40%",
      top: "15%",
    },
    {
      title: "Get You",
      artist: "Daniel Caesar, Kali Uchis",
      left: "15%",
      top: "40%",
    },
    {
      title: "See You Again",
      artist: "Tyler, The Creator, Kali Uchis",
      left: "30%",
      top: "75%",
    },
    {
      title: "Lovin' You",
      artist: "Minnie Riperton",
      left: "5%",
      top: "65%",
    },
    {
      title: "Congratulations",
      artist: "Mac Miller, Bilal",
      left: "25%",
      top: "90%",
    },
    {
      title: "Kiss Me Thru The Phone",
      artist: "Soulja Boy, Sammie",
      left: "35%",
      top: "50%",
    },
    {
      title: "Infrunami",
      artist: "Steve Lacy",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "February 4, 2024", description: "Our first message" }, // Message entry
      { title: "EVERYDAY", description: "Our HDawg days" },
      { title: "May 9, 2024", description: "Our First I love you (in the messages)❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "April 8, 2024", description: "First Road Trip!🎉" }, // Picture entry
      { title: "February 17, 2024", description: "Halloween with Peb" },
      { title: "October 31, 2024", description: "Amazing birthday celebration" },
      { title: "September 24, 2024", description: "Our First Date 💕" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, I love you so much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for the amazing year, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together",
    "how long have we been together?", // Another example of a correct search query
    "How long have we been together",
  ],
};

export default config;
