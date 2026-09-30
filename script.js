/* =====================================================
   MINDCARE - MENTAL HEALTH AWARENESS WEBSITE
   ===================================================== */


/* ================= BASIC RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "DM Sans", sans-serif;
    color: #24352f;
    background: #f8fbf9;
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}

section {
    scroll-margin-top: 80px;
}


/* ================= VARIABLES ================= */

:root {

    --green-dark: #244d40;
    --green: #397763;
    --green-light: #dfeee8;

    --cream: #f8f5ee;
    --cream-dark: #eee9dd;

    --blue: #537b87;
    --blue-light: #e6f0f2;

    --text: #24352f;
    --text-light: #64736d;

    --white: #ffffff;

    --shadow:
        0 15px 40px rgba(36, 77, 64, 0.08);

}


/* ================= NAVBAR ================= */

.navbar {

    position: sticky;
    top: 0;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.94);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid #e8eee9;
}

.nav-container {

    width: min(1180px, 92%);

    margin: auto;

    height: 76px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}

.logo {

    font-size: 24px;

    font-weight: 700;

    color: var(--green-dark);

    display: flex;

    align-items: center;

    gap: 8px;
}

.logo span:last-child {
    color: var(--green);
}

.logo-icon {
    font-size: 25px;
}

nav {

    display: flex;

    align-items: center;

    gap: 30px;
}

nav a {

    color: #53645d;

    font-size: 14px;

    font-weight: 600;

    transition: 0.3s;
}

nav a:hover {
    color: var(--green);
}

.menu-btn {

    display: none;

    border: none;

    background: transparent;

    font-size: 28px;

    cursor: pointer;

    color: var(--green-dark);
}


/* ================= HERO ================= */

.hero {

    min-height: 700px;

    width: min(1180px, 92%);

    margin: auto;

    display: grid;

    grid-template-columns: 1.1fr 0.9fr;

    align-items: center;

    gap: 70px;
}

.hero-content {
    padding: 70px 0;
}

.eyebrow {

    color: var(--green);

    font-size: 12px;

    letter-spacing: 2.5px;

    font-weight: 700;

    margin-bottom: 15px;
}

.hero h1 {

    font-family: "Playfair Display", serif;

    font-size: clamp(48px, 6vw, 78px);

    line-height: 1.08;

    color: var(--green-dark);

    max-width: 700px;
}

.hero h1 span {

    display: block;

    color: var(--green);
}

.hero-text {

    color: var(--text-light);

    font-size: 17px;

    max-width: 620px;

    margin-top: 25px;
}

.hero-buttons {

    display: flex;

    gap: 15px;

    margin-top: 35px;

    flex-wrap: wrap;
}


/* ================= BUTTONS ================= */

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding: 13px 22px;

    border-radius: 9px;

    font-size: 14px;

    font-weight: 700;

    border: 1px solid transparent;

    cursor: pointer;

    transition: 0.3s;
}

.primary-btn {

    background: var(--green-dark);

    color: white;
}

.primary-btn:hover {

    transform: translateY(-3px);

    box-shadow: 0 10px 25px rgba(36, 77, 64, 0.2);
}

.secondary-btn {

    background: white;

    color: var(--green-dark);

    border-color: #cbdcd4;
}

.secondary-btn:hover {

    background: var(--green-light);

    transform: translateY(-3px);
}


/* ================= HERO VISUAL ================= */

.hero-visual {

    position: relative;

    height: 500px;

    display: flex;

    align-items: center;

    justify-content: center;
}

.circle {

    position: absolute;

    border-radius: 50%;
}

.circle-one {

    width: 390px;

    height: 390px;

    background: var(--green-light);
}

.circle-two {

    width: 290px;

    height: 290px;

    background: #c8ded5;
}

.brain-card {

    position: relative;

    z-index: 2;

    width: 280px;

    padding: 40px 30px;

    text-align: center;

    border-radius: 25px;

    background: rgba(255, 255, 255, 0.95);

    box-shadow: var(--shadow);

    transform: rotate(2deg);

    animation: floating 4s ease-in-out infinite;
}

.brain-icon {

    font-size: 80px;

    margin-bottom: 15px;
}

.brain-card h3 {

    color: var(--green-dark);

    font-size: 22px;

    margin-bottom: 8px;
}

.brain-card p {

    color: var(--text-light);

    font-size: 14px;
}

@keyframes floating {

    0%,
    100% {
        transform: translateY(0) rotate(2deg);
    }

    50% {
        transform: translateY(-12px) rotate(2deg);
    }
}


/* ================= GENERAL SECTIONS ================= */

.section {

    padding: 100px 0;

    width: min(1180px, 92%);

    margin: auto;
}

.section-heading {

    max-width: 700px;
}

.section-heading.center {

    text-align: center;

    margin-left: auto;

    margin-right: auto;
}

.section-heading h2 {

    font-family: "Playfair Display", serif;

    font-size: clamp(34px, 4vw, 50px);

    line-height: 1.2;

    color: var(--green-dark);
}

.section-description {

    color: var(--text-light);

    margin-top: 15px;
}


/* ================= INTRO ================= */

.intro {

    background: var(--cream);

    width: 100%;

    padding-left: max(4%, calc((100% - 1180px) / 2));

    padding-right: max(4%, calc((100% - 1180px) / 2));
}

.intro-content {

    margin-top: 50px;

    display: grid;

    grid-template-columns: 1fr 0.8fr;

    gap: 70px;

    align-items: center;
}

.intro-text p {

    color: var(--text-light);

    margin-bottom: 18px;

    font-size: 16px;
}

.quote-card {

    background: white;

    padding: 35px;

    border-radius: 20px;

    box-shadow: var(--shadow);

    border-left: 5px solid var(--green);
}

.quote-mark {

    font-family: Georgia, serif;

    font-size: 70px;

    color: var(--green);

    line-height: 0.7;
}

.quote-card p {

    color: var(--green-dark);

    font-size: 18px;

    font-weight: 600;

    margin-top: 15px;
}


/* ================= CARD GRID ================= */

.card-grid {

    display: grid;

    gap: 25px;

    margin-top: 50px;
}

.three-columns {

    grid-template-columns: repeat(3, 1fr);
}

.info-card,
.challenge-card {

    background: white;

    padding: 32px;

    border-radius: 17px;

    box-shadow: var(--shadow);

    border: 1px solid #edf2ef;

    transition: 0.3s;
}

.info-card:hover,
.challenge-card:hover {

    transform: translateY(-7px);

    box-shadow: 0 20px 45px rgba(36, 77, 64, 0.12);
}

.card-icon {

    font-size: 38px;

    margin-bottom: 18px;
}

.info-card h3,
.challenge-card h3 {

    font-size: 21px;

    color: var(--green-dark);

    margin-bottom: 10px;
}

.info-card p,
.challenge-card p {

    font-size: 14px;

    color: var(--text-light);
}


/* ================= CHALLENGES ================= */

.challenges {

    background: #f8fbf9;
}

.challenge-card {

    position: relative;

    overflow: hidden;
}

.challenge-number {

    position: absolute;

    top: 22px;

    right: 25px;

    font-size: 12px;

    font-weight: 700;

    color: #b7c9c1;
}


/* ================= WARNING ================= */

.warning {

    width: 100%;

    padding: 100px max(4%, calc((100% - 1180px) / 2));

    background: var(--green-dark);

    color: white;
}

.warning-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 80px;

    align-items: center;
}

.warning .eyebrow {

    color: #a9d1c1;
}

.warning h2 {

    font-family: "Playfair Display", serif;

    font-size: clamp(35px, 4vw, 52px);

    line-height: 1.2;

    margin-bottom: 20px;
}

.warning-content > p {

    color: #d3e2dc;

    margin-bottom: 30px;
}

.warning .primary-btn {

    background: white;

    color: var(--green-dark);
}

.signs-box {

    background: rgba(255, 255, 255, 0.08);

    padding: 30px;

    border-radius: 20px;

    display: none;

    border: 1px solid rgba(255, 255, 255, 0.12);
}

.signs-box.show {

    display: block;

    animation: fadeIn 0.4s ease;
}

.sign-item {

    padding: 13px 0;

    color: #edf7f3;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    display: flex;

    gap: 12px;
}

.sign-item:last-child {
    border-bottom: none;
}

.sign-item span {

    color: #9fd0bd;

    font-weight: bold;
}


/* ================= SELF CARE ================= */

.selfcare {

    background: var(--cream);
}

.selfcare-grid {

    margin-top: 50px;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.selfcare-card {

    background: white;

    padding: 30px;

    border-radius: 17px;

    border: 1px solid #ebe8df;

    transition: 0.3s;
}

.selfcare-card:hover {

    transform: translateY(-5px);

    box-shadow: var(--shadow);
}

.selfcare-card > span {

    font-size: 35px;
}

.selfcare-card h3 {

    color: var(--green-dark);

    margin: 12px 0 5px;
}

.selfcare-card p {

    color: var(--text-light);

    font-size: 14px;
}


/* ================= SUPPORT ================= */

.support-grid {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 20px;

    margin-top: 50px;
}

.support-card {

    background: white;

    border: 1px solid #e7eeea;

    border-radius: 17px;

    padding: 30px;

    box-shadow: var(--shadow);
}

.support-number {

    width: 42px;

    height: 42px;

    border-radius: 50%;

    background: var(--green-light);

    color: var(--green-dark);

    display: flex;

    align-items: center;

    justify-content: center;

    font-weight: 700;

    margin-bottom: 20px;
}

.support-card h3 {

    color: var(--green-dark);

    margin-bottom: 8px;
}

.support-card p {

    color: var(--text-light);

    font-size: 14px;
}


/* ================= MYTHS ================= */

.myths {

    background: #eef5f1;
}

.myth-list {

    max-width: 900px;

    margin: 50px auto 0;
}

.myth-row {

    display: grid;

    grid-template-columns: 1fr 1fr;

    margin-bottom: 18px;

    border-radius: 15px;

    overflow: hidden;

    box-shadow: 0 8px 25px rgba(36, 77, 64, 0.06);
}

.myth,
.fact {

    padding: 25px;
}

.myth {

    background: #f2e8e3;
}

.fact {

    background: white;
}

.myth span,
.fact span {

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1.5px;
}

.myth span {

    color: #a46b5d;
}

.fact span {

    color: var(--green);
}

.myth p,
.fact p {

    margin-top: 8px;

    font-size: 14px;
}

.myth p {
    color: #765c55;
}

.fact p {
    color: var(--text-light);
}


/* ================= RESOURCES ================= */

.resources {

    width: 100%;

    background: var(--green-dark);

    color: white;

    padding: 100px max(4%, calc((100% - 1180px) / 2));
}

.resources-container {

    display: grid;

    grid-template-columns: 1fr 0.7fr;

    gap: 80px;

    align-items: center;
}

.resources .eyebrow {

    color: #a9d1c1;
}

.resources h2 {

    font-family: "Playfair Display", serif;

    font-size: clamp(35px, 4vw, 52px);

    line-height: 1.2;
}

.resource-content > p {

    color: #d3e2dc;

    margin: 20px 0 30px;
}

.resource-buttons {

    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}

.resources .primary-btn {

    background: white;

    color: var(--green-dark);
}

.resources .secondary-btn {

    background: transparent;

    color: white;

    border-color: #6f9889;
}

.resource-card {

    background: white;

    color: var(--green-dark);

    padding: 40px;

    border-radius: 22px;

    text-align: center;

    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.resource-icon {

    font-size: 50px;

    margin-bottom: 15px;
}

.resource-card h3 {

    font-size: 26px;

    margin-bottom: 10px;
}

.resource-card p {

    color: var(--text-light);

    font-size: 14px;

    margin-bottom: 20px;
}

.resource-card strong {

    display: block;

    font-size: 34px;

    color: var(--green);

    letter-spacing: 1px;
}

.resource-card small {

    display: block;

    color: var(--text-light);

    margin-top: 3px;
}


/* ================= FAQ ================= */

.faq-container {

    max-width: 850px;

    margin: 50px auto 0;
}

.faq-item {

    background: white;

    border: 1px solid #e3ebe6;

    border-radius: 12px;

    margin-bottom: 12px;

    overflow: hidden;
}

.faq-question {

    width: 100%;

    padding: 20px 23px;

    background: white;

    border: none;

    text-align: left;

    cursor: pointer;

    font-size: 16px;

    font-weight: 600;

    color: var(--green-dark);

    display: flex;

    justify-content: space-between;

    align-items: center;
}

.faq-question span {

    font-size: 24px;

    color: var(--green);

    transition: 0.3s;
}

.faq-item.active .faq-question span {

    transform: rotate(45deg);
}

.faq-answer {

    max-height: 0;

    overflow: hidden;

    transition: max-height 0.35s ease;
}

.faq-answer p {

    padding: 0 23px 20px;

    color: var(--text-light);

    font-size: 14px;
}


/* ================= DISCLAIMER ================= */

.disclaimer {

    width: 100%;

    padding: 30px max(4%, calc((100% - 1180px) / 2));

    background: #fff9e9;
}

.disclaimer-content {

    display: flex;

    align-items: flex-start;

    gap: 15px;

    color: #746a4c;

    font-size: 13px;
}

.disclaimer-content > span {

    font-size: 20px;
}


/* ================= FOOTER ================= */

footer {

    background: #172f28;

    color: white;

    padding: 65px max(4%, calc((100% - 1180px) / 2)) 20px;
}

.footer-container {

    display: grid;

    grid-template-columns: 1.5fr 1fr 1fr;

    gap: 50px;

    padding-bottom: 50px;
}

.footer-brand .logo {

    color: white;

    margin-bottom: 15px;
}

.footer-brand .logo span:last-child {

    color: #a9d1c1;
}

.footer-brand p {

    color: #aabdb6;

    max-width: 320px;

    font-size: 14px;
}

.footer-links {

    display: flex;

    flex-direction: column;

    gap: 8px;
}

.footer-links h4 {

    margin-bottom: 10px;

    color: white;
}

.footer-links a {

    color: #aabdb6;

    font-size: 13px;

    transition: 0.3s;
}

.footer-links a:hover {

    color: white;

    transform: translateX(3px);
}

.footer-bottom {

    border-top: 1px solid rgba(255, 255, 255, 0.1);

    padding-top: 20px;

    display: flex;

    justify-content: space-between;

    gap: 20px;

    flex-wrap: wrap;

    color: #8ea59d;

    font-size: 12px;
}


/* ================= ANIMATION ================= */

@keyframes fadeIn {

    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* ================= RESPONSIVE ================= */

@media (max-width: 950px) {

    nav {

        gap: 16px;
    }

    .hero {

        grid-template-columns: 1fr;

        text-align: center;

        padding-top: 40px;
    }

    .hero-text {

        margin-left: auto;

        margin-right: auto;
    }

    .hero-buttons {

        justify-content: center;
    }

    .hero-visual {

        height: 420px;
    }

    .intro-content,
    .warning-container,
    .resources-container {

        grid-template-columns: 1fr;

    }

    .support-grid {

        grid-template-columns: repeat(2, 1fr);
    }

    .three-columns,
    .selfcare-grid {

        grid-template-columns: repeat(2, 1fr);
    }

    .resources-container {

        gap: 50px;
    }

}


@media (max-width: 700px) {

    .nav-container {

        height: 68px;
    }

    .menu-btn {

        display: block;
    }

    nav {

        position: absolute;

        top: 68px;

        left: 0;

        width: 100%;

        background: white;

        display: none;

        flex-direction: column;

        align-items: flex-start;

        gap: 0;

        border-bottom: 1px solid #e7eee9;

        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.05);
    }

    nav.show {

        display: flex;
    }

    nav a {

        width: 100%;

        padding: 15px 4%;

        border-bottom: 1px solid #eef2ef;
    }

    .hero {

        min-height: auto;

        padding: 70px 0;
    }

    .hero h1 {

        font-size: 48px;
    }

    .hero-visual {

        height: 340px;
    }

    .circle-one {

        width: 280px;

        height: 280px;
    }

    .circle-two {

        width: 210px;

        height: 210px;
    }

    .brain-card {

        width: 230px;

        padding: 30px 20px;
    }

    .brain-icon {

        font-size: 60px;
    }

    .section {

        padding: 75px 0;
    }

    .three-columns,
    .selfcare-grid,
    .support-grid {

        grid-template-columns: 1fr;
    }

    .myth-row {

        grid-template-columns: 1fr;
    }

    .footer-container {

        grid-template-columns: 1fr;
    }

}


@media (max-width: 450px) {

    .hero h1 {

        font-size: 40px;
    }

    .hero-buttons {

        flex-direction: column;
    }

    .hero-buttons .btn {

        width: 100%;
    }

    .warning,
    .resources {

        padding-top: 75px;

        padding-bottom: 75px;
    }

    .resource-buttons {

        flex-direction: column;
    }

    .resource-buttons .btn {

        width: 100%;
    }

}