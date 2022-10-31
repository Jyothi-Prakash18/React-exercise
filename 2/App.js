import img from './Images/phto.jpg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>card view </h1>
        <div class="cards">
        <article class="card">
        <header>
            <h2>ABOUT UI/UX</h2>
        </header>    
        <center>
        <img src={img} alt="logo"/>
        </center>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><div class="content"><p>User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience</p>
            <footer>
            <a href="https://www.coursera.org/articles/ui-vs-ux-design"><button className='button'>To be continue</button></a>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}
export default App;