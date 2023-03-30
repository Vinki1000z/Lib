console.log("this is my lib");
let cs = document.getElementsByClassName("cs");
let maths = document.getElementsByClassName("maths");
let mag = document.getElementsByClassName("mag");
let mec = document.getElementsByClassName("mec");
let cat = document.getElementsByClassName("cat");
var search = document.getElementsByClassName("search");
let main_t = document.getElementsByClassName("main_t");
let btn = document.getElementsByClassName("reset");
let request = document.getElementsByClassName("request");
let req_form=document.getElementsByClassName("req_form");
let req_submit=document.getElementsByClassName("req_submit");
let close=document.getElementsByClassName("close");
let box_1=document.getElementsByClassName("box_1");
let box_2=document.getElementsByClassName("box_3");
let box_3=document.getElementsByClassName("box_3");
let first=document.getElementsByClassName("first");
console.log(first);
let table = document.getElementById("table");
cs[0].style.display = "none";
maths[0].style.display = "none";
mec[0].style.display = "none";
mag[0].style.display = "none";
main_t[0].style.display = "block";

req_form[0].style.display = "none";
first[0].style.display = "none";





let cs_coa = [
  {
    name: "Computer Fundamentals Architecture and Organization",
    author: " Ram B",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Fundamentals of Computer Organization",
    author: "Hesham El-Rewini",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: "Organization and Design",
    author: "Sivarama P Dandamudi",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Creating a Data–Drivens",
    author: " Carl Anderson",
    rating: "3.5/5",
    Available: "Available",
  },
];
let cs_dsa = [
  {
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Data Structures and Algorithms Made Easy",
    author: "Narsimha Karumanchi",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Algorithms",
    author: "Robert Sedgewick and Kevin Wayne",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: "Grokking Algorithms",
    author: "Aditya Bhargava",
    rating: "3.5/5",
    Available: "Available",
  },
];

let cs_pl = [
  {
    name: "Clean Code",
    author: "Robert C. Martin",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Design Patterns",
    author: "Eric Gamma",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Refactoring, Improving The Design ",
    author: "Martin Fowler ",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: " Introduction to Algorithms",
    author: "Thomas H. Cormen",
    rating: "3.5/5",
    Available: "Available",
  },
];
let cs_db = [
  {
    name: "Database System Concept",
    author: "Abraham Silberschatz ",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Introduction to Database Management Systems",
    author: "Kahate",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: "Data Structures and Algorithms Made Easy",
    author: " Bipin Desai",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Principles of Database Systems",
    author: " J D Ullman",
    rating: "3.5/5",
    Available: "Available",
  },
];
let maths_coa = [
  {
    name: "Discrete Mathematics and Its Applications",
    author: " Kenneth Rosen",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Essential Discrete Mathematics",
    author: " Harry Lewis",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: "Journey into Discrete Mathematics",
    author: "Owen D. Byer,",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Discrete Mathematics for Computer Science",
    author: " J D Ullman",
    rating: "3.5/5",
    Available: "Available",
  },
];
let maths_dsa = [
  {
    name: "Quantitative Aptitude for Competitive Examination",
    author: " Dr R.S. Aggarwal",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Fast Track Objective Arithmetic Paperback",
    author: "Rajesh Verma",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: "Teach Yourself Quantitative Aptitude",
    author: "Owen D. Byer,",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "The Pearson Guide To Quantitative Aptitude",
    author: " J D Ullman",
    rating: "3.5/5",
    Available: "Available",
  },
];
let maths_pl = [
  {
    name: "James Stewart's CALCULUS",
    author: "Stewart,",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Fast Track Objective Arithmetic Paperback",
    author: "Rajesh Verma",
    rating: "3/5",
    Available: "Available",
  },
  {
    name: "Thomas' Calculus: Early Transcendentals",
    author: "Hass Joel ,",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "The Pearson Guide To Quantitative Aptitude",
    author: " Morris Kline",
    rating: "3.5/5",
    Available: "Available",
  },
];
let maths_db = [
  {
    name: "James Stewart's CALCULUS:",
    author: "Ste wart,",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Fast Paperback",
    author: "Rajesh Verma",
    rating: "3/5",
    Available: "Available",
  },{
    name: "The Pearson Guide  Aptitude",
    author: " Morris Kline",
    rating: "3.5/5",
    Available: "Available",
  },
  {
    name: "Early Transcendentals",
    author: "Joel ,",
    rating: "4.5/5",
    Available: "Not Available",
  }
  
];
let mag_coa = [
  {
    name: "Low-tech Magazine",
    author: "Morris Kline,",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Fast Paperback",
    author: "Rajesh Verma",
    rating: "3/5",
    Available: "Available",
  },{
    name: "Read Low-tech Magazine Offline",
    author: " Joe",
    rating: "3.5/5",
    Available: "Available",
  },
  {
    name: "A do-it-ourselves guid",
    author: "Rajesh Verma",
    rating: "4.5/5",
    Available: "Not Available",
  }
  
];
let mag_dsa = [
  {
    name: "Glucose Revolution",
    author: " Jessie Inchauspé ",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "How Not to Die",
    author: "Michael Greger ",
    rating: "3/5",
    Available: "Available",
  },{
    name: "Atomic Habits",
    author: " James Clear ",
    rating: "3.5/5",
    Available: "Available",
  },
  {
    name: "The Obesity Code ",
    author: " Dr. Jason Fung ",
    rating: "4.5/5",
    Available: "Not Available",
  }
  
];
let mag_pl = [
  {
    name: "	Exchange Rates",
    author: " A. V. Rajwade ",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Business Standard General Awareness ",
    author: "Michael PO ",
    rating: "3/5",
    Available: "Available",
  },{
    name: "	Uncornered",
    author: "Luci Clear ",
    rating: "3.5/5",
    Available: "Available",
  },
  {
    name: "The Code ",
    author: " Dr. David Fung ",
    rating: "4.5/5",
    Available: "Not Available",
  }
  
];
let mag_db = [
  {
    name: "News And Events ",
    author: " Dr. David Fung ",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "	India Today",
    author: " A. V. Rajwade ",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "	The Frontline",
    author: "Luci Clear ",
    rating: "3.5/5",
    Available: "Available",
  },
  {
    name: "Chronicle",
    author: "Michael PO ",
    rating: "3/5",
    Available: "Available",
  },
  
  
];
let mec_coa = [
  {
    name: "A Textbook of Modern Toxicology ",
    author: "Hodgson",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Regenesis ",
    author: " A. V. Raju",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "	The Frontline",
    author: "George Church and Ed Regis ",
    rating: "3.5/5",
    Available: "Available",
  },
  {
    name: "Genentech: The Beginnings of Biotech",
    author: "Sally Smith Hughes",
    rating: "3/5",
    Available: "Available",
  },
  
  
];
let mec_dsa = [{
    name: "James Stewart's CALCULUS",
    author: "Stewart,",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "A Textbook of Modern Toxicology ",
    author: "Hodgson",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Regenesis ",
    author: " A. V. Raju",
    rating: "4/5",
    Available: "Available",
  },
  
  {
    name: "Thomas' Calculus: Early Transcendentals",
    author: "Hass Joel ,",
    rating: "4.5/5",
    Available: "Not Available",
  },
  
  
];
let mec_pl = [{
    name: "Rise of the Robots",
    author: "Martin Ford,",
    rating: "4/5",
    Available: "Available",
  },
  {
    name: "Superintelligence ",
    author: "Nick Bostrom",
    rating: "4.5/5",
    Available: "Not Available",
  },
  {
    name: "Regenesis ",
    author: " A. V. Raju",
    rating: "4/5",
    Available: "Available",
  },
  
  {
    name: "Player Piano",
    author: "Kurt Vonnegut Jr. ,",
    rating: "4.5/5",
    Available: "Not Available",
  },
  
  
];


var value;
cat[0].addEventListener("click", (e) => {
  var cat_v = cat[0].value;
  console.log("this is the value of cat");
  console.log(cat_v);
  if (cat_v === "cs") {
    value = 1;
    console.log(value);
    cs[0].style.display = "block";
    maths[0].style.display = "none";
    mec[0].style.display = "none";
    mag[0].style.display = "none";
    main_t[0].style.display = "none";
  } else if (cat_v === "maths") {
    value = 2;
    console.log(value);

    cs[0].style.display = "none";
    maths[0].style.display = "block";
    mec[0].style.display = "none";
    mag[0].style.display = "none";
    main_t[0].style.display = "none";
  } else if (cat_v === "mag") {
    value = 3;
    console.log(value);

    cs[0].style.display = "none";
    maths[0].style.display = "none";
    mec[0].style.display = "none";
    mag[0].style.display = "block";
    main_t[0].style.display = "none";
  } else if (cat_v === "mec") {
    value = 4;
    console.log(value);
    cs[0].style.display = "none";
    maths[0].style.display = "none";
    mec[0].style.display = "block";
    mag[0].style.display = "none";
    main_t[0].style.display = "none";
  } else {
    cs[0].style.display = "none";
    maths[0].style.display = "none";
    mec[0].style.display = "none";
    mag[0].style.display = "none";
    main_t[0].style.display = "block";
  }

  e.preventDefault();
});

let type;
search[0].addEventListener("click", (e) => {
 

  if (value === 1) {
    type = cs[0].value;
    if (type === "a") {
      let html = "";
      cs_coa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "b") {
      let html = "";
      cs_dsa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "c") {
      let html = "";
      cs_pl.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "d") {
      let html = "";
      cs_db.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    }
  } else if (value === 2) {
    type = maths[0].value;
    if (type === "a") {
      let html = "";
      maths_coa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "b") {
      let html = "";
      maths_dsa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "c") {
      let html = "";
      maths_pl.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "d") {
      let html = "";
      maths_db.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    }
  } else if (value === 3) {
    type = mag[0].value;
    if (type === "a") {
      let html = "";
mag_coa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "b") {
      let html = "";
mag_dsa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "c") {
      let html = "";
      mag_pl.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "d") {
      let html = "";
    mag_db.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    }
  } else if (value === 4) {
    type = mec[0].value;
    if (type === "a") {
      let html = "";
      mec_coa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "b") {
      let html = "";
      mec_dsa.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "c") {
      let html = "";
      mec_pl.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    } else if (type === "d") {
      let html = "";
      cs_db.forEach((ele) => {
        html += `
              <tr>
          
              <td>${ele.name}</td>
              <td>${ele.author}</td>
              <td>${ele.rating}</td>
              <td>${ele.Available}</td>
          </tr>
              `;
      });
      table.innerHTML = html;
    }
  }
  e.preventDefault();
});


btn[0].addEventListener("click",(e)=>{
  cs[0].style.display = "none";
maths[0].style.display = "none";
mec[0].style.display = "none";
mag[0].style.display = "none";
main_t[0].style.display = "block";
cat[0].value="Select The category";
table.innerHTML = "";
  e.preventDefault();
})
request[0].addEventListener("click",(e)=>{
  console.log("clicked");
  req_form[0].style.display="block";
  e.preventDefault();
})
req_submit[0].addEventListener("click",(e)=>{
  console.log("clicked");
first[0].style.display = "block";
req_form[0].style.display = "none";
  e.preventDefault();
})
