import './App.css';
import {Container, Nav, Navbar, NavDropdown, Row, Col} from 'react-bootstrap';
import herovideo from "./images/hero.mp4"
import part1 from "./images/part1.jpg"

function App() {
  return (
    <>
    <div className="hero">
      <video src={herovideo} width="100%" height="100%" autoPlay loop muted style={{objectFit:"cover", objectPosition:"top"}}>
      Your browser does not support the video tag.
      </video>
      <div className="bgContent">
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
    <Container className="mt-5">
    <Row>
    <p className='h4 text-center'> מסיבט - בטים / קזינו / רולטה / הימורי לייב
                </p>
      <Col>
      <div className="text-end card">
                    
                <p className='text-small'>
                הצטרפו לבוט גזע החדש  - בוט גזע </p>
                <p>
                כל דרכי התשלום במקום 1️⃣
                </p>
                <p>
                ביטקויין 💰<br/>
                ביט 💰<br/>
                פייבוקס 💰<br/>
                העברת בנקאית 💰<br/>
                קוד משיכה 💰<br/>
                מזומן לשליח 🚖</p>
                </div>
                </Col>
      <Col>
      <div className="text-end card">
                <p>
                בונוס הפקדה ראשוני עד 40% 
                לשחקנים וותיקים בונוס תמידי </p>
                <p>
                קזינו אונליין בשידורים חיים כבר כאן ⭐️⭐️</p>
                <p>
                ‏✅עד 40% בונוס בקזינו🔞ובספורט🏀</p>
                <p>
                ✅🏐כל מישחקי הספורט🥊🏒</p>
                <p>
                ✅‏🇮🇱שחקנים ישראלים🇮🇱</p>
                <p>
                ✅🧍🏻‍♀️סוכן  / סוכנת  צמוד/ה👩🏻🤝👨🏼</p>
                <p>
                ✅👑יחסים גבוהים
                </p><p>
                ✅☄️הפקדות ומשיכות מהירות💸
                </p>
                </div>
                </Col>
      <Col>
      <div className="text-end card">
                <p>
                ❇️טלגרם: @messi10bet
                </p><p>
                📱ווצאפ: 054-8326815
                </p>
                <p>
                ⭐️לערוץ ביקורות שלנו⭐️<br/>
                ⭐️לערוץ המלצות שלנו⭐️<br/>
                ⭐️לערוץ צפיה ישירה במשחקים⭐️
                </p>
                <p>הכל יש בבוט שלנו לחצו כאן</p>

                </div>

  </Col>
</Row>
<Row className="mt-5">
<Col sm={4} className="part1">
    <img src={part1} width="100%" height="100%" alt="" />
      </Col>
  <Col>
                <div className="text-end card">
                <p> ברוכים הבאים למסיבט ⚽️</p>
                <p>
                המקום המושלם למהמרים ♦️</p>
                <p>
                הפקדות זריזות💰</p>
                משיכות סופר זריזות 💰<br/>
                אפשרות הימור באמצע משחק ⚽️<br/>
                קזינו לייב אבוולשן ♦️<br/>
                עד 50% בונוס הפקדה ✅
                <p>
                ווצאפ שירות לקוחות 054-8326815
                </p><p>
                להצטרפות לערוץ של מסיבט - לחצו כאן
                </p><p>
                רוצים להתחיל לשחק - לחצו כאן
                </p>
      </div>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col>
      <div className="text-end card">
                <p>
                להלן התקנון של מסיבט : 
                </p>
                <p>
                ‌‎הפקדות/משיכות
                <br />
                ‌‎הפקדת הנקודות באתר תתבצע אך ורק דרך סוכנים מורשים של מסיבט
                אך ורק דרך השם משתמש דרך הבוט.<br />
                ‌‎דרכי הפקדה:<br />
                ‌‎ביט, פייבוקס, העברה בנקאית, קוד משיכה, 
                ‌‎קריפטו, שליח מזומן (באיזורים מסויימים)</p>
                <p>
                ‌‎משיכות יתבצעו כל יום בין השעות 11:00 עד 15:00
                ‌‎אלא אם כן תואם אחרת מול הסוכן הישיר!
                ( 24 שעות מרגע ההפקדה )
                </p>
                </div>
                </Col>
      <Col>
      <div className="text-end card">
                <p>
                ‌‎תשלומים יבוצעו באותה דרך הפקדה (ניתן לשינוי)
                ‌‎עד 24 שעות מרגע המשיכה.
                </p>
                <p>
                במקרה של יותר מ-20% בונוס בהפקדה, פריטה תתבצע ( 48 שעות מרגע ההפקדה .)
                </p>
                <p>
                ‌‎בונוסים <br/>
                ‌‎עד 500 שקל הפקדה
                <br/>
                ‌‎ !אין כמות הימורים חובה
                </p>                                                        
                        <p>
                ‌‎500 ₪ בונוס 125 ( 5 הימורים חובה )
                </p> 
                </div>
                </Col>
      <Col>
      <div className="text-end card">      
                <p>                                             
                ‌‎1,000 ₪ בונוס 250 ( 5 הימורים חובה )
                </p>  
                <p>                                                  
                ‌‎2,000 ₪ בונוס 500 (10 הימורים חובה)
                </p>  
                <p>                                                  
                ‌‎3,000 ₪ בונוס 750(10הימורים חובה ) 
                </p>  
                <p> 
                ‌‎4,000 ₪ בונוס 1000 (15 הימורים חובה ) 
                </p>  
                <p> 
                ‌‎5,000 ₪ בונוס 1500 (15 הימורים חובה )
                </p>  
                </div>
                </Col>
      <Col>
      <div className="text-end card">
                <p> 

                ‌‎מינימום  הפקדה בכל האתרים והאפליקציות:
                </p>  
                <p> 
                100  ₪
                </p>  
                <p> 
                ‌‎תקנון ספורט -<br/>
                ‌‎הימורים שונים חובה לקבלת ההנחה בכפוף למבצע.<br/>
                ‌‎▪️ליגות בכירות עד 5000 נקודות להרוויח במשחק.<br/>
                ‌‎▪️ליגות בכירות – אנגלית-ספרדית-צרפתית-גרמנית-איטלקית-
                ‌‎      הולנדית -ברזילאית -ליגת העל -ליגת האלופות -אופ"א-מונדיאל-יורו-NBA
                ‌‎▪️ליגות מישניות עד 2500 נק להרוויח למשחק.<br/>
                ‌‎     ליגות משניות אנגליה ב . איטליה ב גרמניה ב צרפתית ב ליגה לאומית  
                ‌‎     בליגיה פורטוגל רוסיה יוון ספרד ב ברזיל ב ארגנטינה ב
                <br/>
                ‌‎▪️ליגות לא מוכרות עד 600 נקודות להרוויח למשחק.
                <br/>
                ‌‎▪️כל הליגה שלא צוינה בתקנון זה נחשבת ללא מוכרת!
                <br/>
                ‌‎▪️משולב יכול להרוויח מקסימום 10,000 נקודות (אין כפל במשולבים)
                <br/>
                </p>
                </div>
                </Col>
      <Col>
      <div className="text-end card">
        <p>
                ‌‎▪️טניס עד 2000 נקודות רווח למשחק .
                <br/>
                ‌‎▪️פוטבול ובייסבול עד 2000 נקודות להרוויח למשחק 
                <br/>
                ‌‎▪️קרנות צהובים עד 2000 רווח נקודות למשחק 
                <br/>
                ‌‎▪️**אין ביטולים בליין רץ!!!!!! *
                </p>  
                <p> 
                ‌‎קזינו -<br/>
                ‌‎🟠רולטה -עד 5000 נקודות להרוויח לטרנזקציה
                <br/>
                ‌‎🟡בלאק ג'ק – עד 2,000 נקודות להרוויח לטרנזקציה
                <br/>
                ‌‎🟢בקרה – עד 2000 נקודות להרוויח לטרנזקציה
                <br/>
                ‌‎🔵שחור\אדום – עד 2000 נקודות לטרנזקציה
                </p>  
                <p> 
                אצלינו הכסף שלכם בטוח !<br/>
                מסיבט מאחל לכם בהצלחה <br/>
                מוזמנים להיכנס לבוט שלנו לעוד פרטים וביקורות
                </p> 
      </div>
      </Col>
    </Row>
    </Container>
    <div style={{height:"1000px"}}></div>
    </>
  );
}

export default App;
