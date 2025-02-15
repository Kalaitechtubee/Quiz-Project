// import { useContext } from "react";
// import "./Scoreboard.css";
// import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
// import { BiReset } from "react-icons/bi";
// import { BsShare } from "react-icons/bs";
// import quizContext from "../../context/quizContext";
// import { Link as ReachLink } from "react-router-dom";
// import ScoreRemark from "../../components/ScoreRemark/ScoreRemark";

// const Scoreboard = (props) => {
//     const context = useContext(quizContext);
//     const { setNext, setScore, setAnswerList } = context;
//     const { total_que, correct_que, wrong_que } = props;
//     let percentage = (correct_que / total_que) * 100;
//     let Attempted = ((correct_que + wrong_que) / total_que) * 100;

//     const handleGoHome = () => {
//         window.location.reload();
//     };

//     const handlePlayAgain = () => {
//         setNext(0);
//         setScore({ rightAnswers: 0, wrongAnswers: 0 });
//         setAnswerList([]);
//     };

//     return (
//         <>
//             <div className="main">
//                 <div className="score-container">
//                     <div className="score">
//                         Your Score <br />
//                         <span>
//                             {percentage.toFixed(2)} <small>%</small>
//                         </span>
//                     </div>
//                     <ScoreRemark percentage={percentage} />
//                 </div>
//                 {/* Table */}
//                 <div className="point-table">
//                     <div className="semi-table">
//                         <div
//                             style={{ backgroundColor: "#A45EDA" }}
//                             className="circle"
//                         ></div>
//                         <div className="mx-2">
//                             <div className="point-info">Attempted</div>
//                             <div
//                                 style={{
//                                     color: "/*#A45EDA*/#fff",
//                                     width: "5.8rem",
//                                     background: "#212832",
//                                     padding: "0.5rem",
//                                     borderRadius: "0.5rem",
//                                 }}
//                                 className="point"
//                             >
//                                 {Attempted.toFixed(2)}%
//                             </div>
//                         </div>
//                     </div>
//                     <div className="semi-table">
//                         <div
//                             style={{ backgroundColor: "#A45EDA" }}
//                             className="circle"
//                         ></div>
//                         <div className="mx-2">
//                             <div className="point-info">Total Questions</div>
//                             <div
//                                 style={{
//                                     color: "#fff",
//                                     width: "5.8rem",
//                                     background: "#212832",
//                                     padding: "0.5rem",
//                                     borderRadius: "0.5rem",
//                                 }}
//                                 className="point"
//                             >
//                                 {total_que}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="semi-table">
//                         <div
//                             style={{ backgroundColor: "rgb(6 143 86)" }}
//                             className="circle"
//                         ></div>
//                         <div className="mx-2">
//                             <div className="point-info">Correct</div>
//                             <div
//                                 style={{
//                                     color: "/*rgb(6 143 86)*/#fff",
//                                     background: "#212832",
//                                     padding: "0.5rem",
//                                     width: "5.8rem",
//                                     borderRadius: "0.5rem",
//                                 }}
//                                 className="point"
//                             >
//                                 {correct_que}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="semi-table">
//                         <div
//                             style={{ backgroundColor: "rgb(223 75 75)" }}
//                             className="circle"
//                         ></div>
//                         <div className="mx-2">
//                             <div className="point-info">Wrong</div>
//                             <div
//                                 style={{
//                                     color: "/*rgb(223 75 75)*/#fff",
//                                     width: "5.8rem",
//                                     background: "#212832",
//                                     padding: "0.5rem",
//                                     borderRadius: "0.5rem",
//                                 }}
//                                 className="point"
//                             >
//                                 {wrong_que}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="footer">
//                     <div className="text-center" onClick={handleGoHome}>
//                         <div
//                             style={{ backgroundColor: "#BE709F" }}
//                             className="home-btn"
//                         >
//                             <AiOutlineHome />
//                         </div>
//                         <div className="footer-text">Home</div>
//                     </div>
//                     <div className="text-center">
//                         <div
//                             style={{ backgroundColor: "#755ED3" }}
//                             className="home-btn"
//                         >
//                             <BsShare />
//                         </div>
//                         <div className="footer-text">Share Score</div>
//                     </div>
//                     <div className="text-center">
//                         <ReachLink to="/review">
//                             <div
//                                 style={{ backgroundColor: "#BF8D6F" }}
//                                 className="home-btn"
//                             >
//                                 <AiOutlineEye />
//                             </div>
//                         </ReachLink>
//                         <div className="footer-text">Review Answer</div>
//                     </div>
//                     <div className="text-center" onClick={handlePlayAgain}>
//                         <div
//                             style={{ backgroundColor: "#5492B3" }}
//                             className="home-btn"
//                         >
//                             <BiReset />
//                         </div>
//                         <div className="footer-text">Play Again</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Scoreboard;
import { useContext, useState } from "react";
import "./Scoreboard.css";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import quizContext from "../../context/quizContext";
import { Link as ReachLink } from "react-router-dom";
import ScoreRemark from "../../components/ScoreRemark/ScoreRemark";
import jsPDF from "jspdf";

const Scoreboard = (props) => {
    const context = useContext(quizContext);
    const { setNext, setScore, setAnswerList } = context;
    const { total_que, correct_que, wrong_que } = props;
    const [userName, setUserName] = useState(""); // State for participant's name

    let percentage = (correct_que / total_que) * 100;
    let Attempted = ((correct_que + wrong_que) / total_que) * 100;

    const handleGoHome = () => {
        window.location.reload();
    };

    const handlePlayAgain = () => {
        setNext(0);
        setScore({ rightAnswers: 0, wrongAnswers: 0 });
        setAnswerList([]);
    };

    const generateCertificate = () => {
        if (!userName.trim()) {
            alert("Please enter your name to generate the certificate.");
            return;
        }

        const doc = new jsPDF();

        // Set background color for the certificate
        doc.setFillColor(173, 216, 230); // Light blue background
        doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F'); // Fill the entire page

        // Add a border
        doc.setDrawColor(0, 0, 0); // Black border
        doc.setLineWidth(1.5);
        doc.rect(10, 10, 190, 280); // Add a border around the page

        // Add certificate title
        doc.setFontSize(28);
        doc.setTextColor(0, 0, 128); // Navy blue text
        doc.setFont("helvetica", "bold");
        doc.text("Certificate of Achievement", 105, 50, null, null, 'center');

        // Add a decorative line
        doc.setDrawColor(0, 0, 128); // Navy blue line
        doc.setLineWidth(1);
        doc.line(30, 60, 180, 60); // Horizontal line under the title

        // Add participant's name
        doc.setFontSize(24);
        doc.setTextColor(0, 0, 0); // Black text
        doc.setFont("helvetica", "normal");
        doc.text(`This certificate is awarded to`, 105, 90, null, null, 'center');
        doc.setFontSize(28);
        doc.setTextColor(0, 0, 128); // Navy blue text
        doc.text(userName, 105, 120, null, null, 'center'); // Use the entered name

        // Add quiz results
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0); // Black text
        doc.text(`For scoring ${percentage.toFixed(2)}% in the quiz`, 105, 150, null, null, 'center');

        // Add a decorative box for quiz details
        doc.setFillColor(255, 255, 255); // White background for the box
        doc.rect(50, 170, 110, 60, 'F'); // White box
        doc.setDrawColor(0, 0, 128); // Navy blue border
        doc.rect(50, 170, 110, 60); // Border around the box

        // Add quiz details inside the box
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0); // Black text
        doc.text(`Total Questions: ${total_que}`, 105, 185, null, null, 'center');
        doc.text(`Correct Answers: ${correct_que}`, 105, 200, null, null, 'center');
        doc.text(`Wrong Answers: ${wrong_que}`, 105, 215, null, null, 'center');

        // Add a decorative footer
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 128); // Navy blue text
        doc.text("Congratulations on your achievement!", 105, 250, null, null, 'center');
        doc.text("Keep learning and growing!", 105, 260, null, null, 'center');

        // Save the PDF
        doc.save(`${userName}_Certificate.pdf`);
    };

    return (
        <>
            <div className="main">
                <div className="score-container">
                    <div className="score">
                        Your Score <br />
                        <span>
                            {percentage.toFixed(2)} <small>%</small>
                        </span>
                    </div>
                    <ScoreRemark percentage={percentage} />
                </div>

                {/* Participant's Name Input */}
                <div className="user-name-input text-black">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="point-table">
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "#A45EDA" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Attempted</div>
                            <div
                                style={{
                                    color: "/*#A45EDA*/#fff",
                                    width: "5.8rem",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {Attempted.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "#A45EDA" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Total Questions</div>
                            <div
                                style={{
                                    color: "#fff",
                                    width: "5.8rem",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {total_que}
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "rgb(6 143 86)" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Correct</div>
                            <div
                                style={{
                                    color: "/*rgb(6 143 86)*/#fff",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    width: "5.8rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {correct_que}
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "rgb(223 75 75)" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Wrong</div>
                            <div
                                style={{
                                    color: "/*rgb(223 75 75)*/#fff",
                                    width: "5.8rem",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {wrong_que}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="text-center" onClick={handleGoHome}>
                        <div
                            style={{ backgroundColor: "#BE709F" }}
                            className="home-btn"
                        >
                            <AiOutlineHome />
                        </div>
                        <div className="footer-text">Home</div>
                    </div>
                    <div className="text-center">
                        <div
                            style={{ backgroundColor: "#755ED3" }}
                            className="home-btn"
                        >
                            <BsShare />
                        </div>
                        <div className="footer-text">Share Score</div>
                    </div>
                    <div className="text-center">
                        <ReachLink to="/review">
                            <div
                                style={{ backgroundColor: "#BF8D6F" }}
                                className="home-btn"
                            >
                                <AiOutlineEye />
                            </div>
                        </ReachLink>
                        <div className="footer-text">Review Answer</div>
                    </div>
                    <div className="text-center" onClick={handlePlayAgain}>
                        <div
                            style={{ backgroundColor: "#5492B3" }}
                            className="home-btn"
                        >
                            <BiReset />
                        </div>
                        <div className="footer-text">Play Again</div>
                    </div>
                    <div className="text-center" onClick={generateCertificate}>
                        <div
                            style={{ backgroundColor: "#4CAF50" }}
                            className="home-btn"
                        >
                            📄
                        </div>
                        <div className="footer-text">Download Certificate</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Scoreboard;