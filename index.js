// const page = (
//     <div>
//         <img src = "./download.png"  width= "50px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>React was released in 2013. </li>
//             <li>Used to build interactive elements on a website.</li>
//             <li>React is not a framework</li>
//             <li>React is a JavaScript library</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// function Page(){
//     return(
//             <ol>
//                 <li>Hireable</li>
//                 <li>Composable</li>
//                 <li>Easy to learn</li>
//             </ol>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))
function Header() {
  return (
    <header>
      <nav>
        <img src="./download.png" width="50px" />
      </nav>
    </header>
  );
}

function MyComponent() {
  return (
    <div>
      <h1>Reasons i am excited to learn React</h1>
      <ol>
        <li>Easy</li>
        <li>Hireable</li>
      </ol>
    </div>
  );
}


function Footer(){
    return(
        <footer>
        <small>"@ 2022 Luitel Development. All right reserved."</small>
      </footer>

    )
}

function Page() {
  return (
    <div>
        <Header />
        <MyComponent />
        <Footer />
      
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
