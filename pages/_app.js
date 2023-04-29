import React, { PureComponent } from 'react'
import TicTacToe from '../components/games/tictac'
import GooglePage from "../components/google/googlepage"
import '../public/styles.css';
import Firebase from '../components/Firebase';

export class App extends PureComponent {

  constructor(props) {
    super(props)

    this.ref = Firebase.firestore().collection('pagevisits');

    this.state = {
      pagevisits: 0
    }
  }

  componentDidMount() {
    this.ref.onSnapshot(this.onCollectionUpdate);
    let db = Firebase.firestore();
    db.collection('pagevisits').add(
      {
        timeStamp: new Date(),
        platform: window.navigator.appVersion,
        browser: window.navigator.vendor,
        userAgent: window.navigator.userAgent,

      }
    );
  }

  onCollectionUpdate = (querySnapshot) => {
    console.log(querySnapshot.size)
    this.setState({
      pagevisits: querySnapshot.size
    }, () => console.log(this.state.pagevisits));
  }

  toggleFloatContent() {
    var floatContainer = document.querySelector(".float-container");
    var floatText = document.getElementById("floatText");
    if (floatContainer.classList.contains("expanded")) {
      floatContainer.classList.remove("expanded");
      floatText.style.display = "none";
    } else {
      floatContainer.classList.add("expanded");
      floatText.style.display = "block";
    }
  }

  render() {
    console.log("Page Visits: ", this.state.pagevisits)
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {/* <TicTacToe /> */}
        <GooglePage />

        <div className="float-container" onClick={this.toggleFloatContent}>
          <span style={{fontWeight: "bold"}}>{this.state.pagevisits || "RN"}</span>
          <p id="floatText">Google Search Engine Clone! Developed for Educational Purpose Only. {this.state.pagevisits && `Page Visits: ${this.state.pagevisits}`}</p>
        </div>

        <style jsx>{`
         .float-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background-color: #008CBA;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .float-container:hover {
          background-color: #00688B;
        }
        
        .float-container.expanded {
          width: 300px;
          border-radius: 10px;
        }
        
        .float-container.expanded span {
          display: none;
        }
        
        .float-container.expanded p {
          display: block;
          margin: 0;
          padding: 10px;
          color: #fff;
          font-size: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        #floatText {
          display: none;
          font-size: 12px;
        }
        `}</style>
      </div>
    )
  }
}

export default App