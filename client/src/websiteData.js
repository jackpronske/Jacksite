const contactItems = [
  {
    name: "Jopronske@gmail.com",
    image_url: "images/Mail.png",
    type: "MAIL",
  },
  {
    name: "Austin, TX",
    image_url: "images/Location.png",
    url: "https://www.youtube.com/watch?v=t7-NA3hXZq0",
    type: "LINK",
  },
  {
    name: "Phone | Zoom",
    image_url: "images/Phone.png",
    url: "https://zoom.us/",
    type: "LINK",
  },
  {
    name: "GitHub",
    image_url: "images/GitHub.png",
    url: "https://github.com/jackpronske",
    type: "LINK",
  },
  {
    name: "LinkedIn",
    image_url: "images/LinkedIn.png",
    url: "https://www.linkedin.com/in/jackpronske/",
    type: "LINK",
  },
];

const skillItems = [
  {
    name: "JavaScript",
    url: "images/JavaScript_Logo.png",
  },
  {
    name: "React | Redux",
    url: "images/ReactRedux_Logo.png",
  },
  {
    name: "HTML | CSS",
    url: "images/Htmlcss_Logo.png",
  },
  {
    name: "Node | Express",
    url: "images/Node_Logo.png",
  },
  {
    name: "MongoDB",
    url: "images/Mongo_Logo.png",
  },
  {
    name: "PostgreSQL",
    url: "images/Postgres_Logo.png",
  },
];

const workItems = [
  {
    name: "Lovelace Legends",
    stack: "React | Pure-CSS | Jest | Axios | Node/Express | A11y",
    description:
      "Developed a Related Products and Outfit Creator module for an e-commerce website.",
    image_url: "assets/FEC_demo.gif",
  },
  {
    name: "Sudoku Solver",
    stack: "Node | Jest | CMD-line | Recursion",
    description:
      "Created a Sudoku solving algorithm that will take an incomplete board and provide a valid solution.",
    image_url: "assets/Sudoku_solution.gif",
  },
];

module.exports = {
  contactItems,
  skillItems,
  workItems,
};
