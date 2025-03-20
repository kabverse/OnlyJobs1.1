import { useState, useEffect, useRef } from "react";
import "./OnlyJobsVideo.css";
import NavBar from "../NavBar/NavBar"; // Now the import will work correctly
import { Star, Moon, Sun, Briefcase, DollarSign, Sparkles } from "lucide-react";

const OnlyJobsVideo = () => {
    const [darkMode, setDarkMode] = useState(false);
    const bgRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        // Set initial theme based on localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.setAttribute("data-theme", "dark");
          } else {
            document.documentElement.setAttribute("data-theme", "light");
          }

        // Check if sections are in view for animation
        const handleScroll = () => {
            // Check if sections are in view for animation
            sectionRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.8) {
                        ref.classList.add("in-view");
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        // Trigger initial check for elements in view
        setTimeout(() => {
            handleScroll();
        }, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Assign refs to section elements
    const addSectionRef = (el, index) => {
        sectionRefs.current[index] = el;
    };

    return (
        <div className="onlyjobs-container">
            <div className="onlyjobs-background" ref={bgRef}>
                <div className="onlyjobs-shapes">
                    <div className="onlyjobs-shape onlyjobs-shape-1">
                        <Star size={24} />
                    </div>
                    <div className="onlyjobs-shape onlyjobs-shape-2">
                        <Moon size={24} />
                    </div>
                    <div className="onlyjobs-shape onlyjobs-shape-3">
                        <Sun size={24} />
                    </div>
                    <div className="onlyjobs-shape onlyjobs-shape-4">
                        <Briefcase size={24} />
                    </div>
                    <div className="onlyjobs-shape onlyjobs-shape-5">
                        <DollarSign size={24} />
                    </div>
                    <div className="onlyjobs-shape onlyjobs-shape-6">
                        <Sparkles size={24} />
                    </div>
                </div>
            </div>

            <div className="onlyjobs-overlay"></div>

            <NavBar />

            <div className="onlyjobs-content">
                <div className="onlyjobs-headline-container">
                    <h1 className="onlyjobs-headline">
                        Connecting Skills <span>With Opportunities</span>
                    </h1>
                    <p className="onlyjobs-subheadline">
                        Showcase your talents through interactive portfolios and
                        find your dream job
                    </p>
                </div>

                <div className="onlyjobs-sections">
                    {/* Section 1 */}
                    <div
                        className="onlyjobs-section"
                        ref={(el) => addSectionRef(el, 0)}
                    >
                        <div className="onlyjobs-section-image">
                            <div className="onlyjobs-image-wrapper">
                                <div className="onlyjobs-floating-element"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                                    alt="Tech workspace"
                                />
                                <div className="onlyjobs-image-overlay"></div>
                            </div>
                        </div>
                        <div className="onlyjobs-section-content">
                            <h2 className="onlyjobs-section-title">
                                DISCOVER YOUR CAREER PATH
                            </h2>
                            <p className="onlyjobs-section-description">
                                Find opportunities that match your skills and
                                ambitions with our advanced matching algorithm
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div
                        className="onlyjobs-section reverse"
                        ref={(el) => addSectionRef(el, 1)}
                    >
                        <div className="onlyjobs-section-image">
                            <div className="onlyjobs-image-wrapper">
                                <div className="onlyjobs-floating-element"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                    alt="Tech details"
                                />
                                <div className="onlyjobs-image-overlay"></div>
                            </div>
                        </div>
                        <div className="onlyjobs-section-content">
                            <h2 className="onlyjobs-section-title">
                                SHOWCASE YOUR TALENTS
                            </h2>
                            <p className="onlyjobs-section-description">
                                Upload portfolio items, code samples, and
                                project demos to highlight your unique abilities
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div
                        className="onlyjobs-section"
                        ref={(el) => addSectionRef(el, 2)}
                    >
                        <div className="onlyjobs-section-image">
                            <div className="onlyjobs-image-wrapper">
                                <div className="onlyjobs-floating-element"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                                    alt="Coding"
                                />
                                <div className="onlyjobs-image-overlay"></div>
                            </div>
                        </div>
                        <div className="onlyjobs-section-content">
                            <h2 className="onlyjobs-section-title">
                                CONNECT WITH EMPLOYERS
                            </h2>
                            <p className="onlyjobs-section-description">
                                Interact directly with hiring managers through
                                our secure messaging platform
                            </p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div
                        className="onlyjobs-section reverse"
                        ref={(el) => addSectionRef(el, 3)}
                    >
                        <div className="onlyjobs-section-image">
                            <div className="onlyjobs-image-wrapper">
                                <div className="onlyjobs-floating-element"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                                    alt="Person with laptop"
                                />
                                <div className="onlyjobs-image-overlay"></div>
                            </div>
                        </div>
                        <div className="onlyjobs-section-content">
                            <h2 className="onlyjobs-section-title">
                                REMOTE OPPORTUNITIES
                            </h2>
                            <p className="onlyjobs-section-description">
                                Find flexible remote positions that fit your
                                lifestyle from companies around the world
                            </p>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div
                        className="onlyjobs-section"
                        ref={(el) => addSectionRef(el, 4)}
                    >
                        <div className="onlyjobs-section-image">
                            <div className="onlyjobs-image-wrapper">
                                <div className="onlyjobs-floating-element"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                                    alt="Woman using laptop"
                                />
                                <div className="onlyjobs-image-overlay"></div>
                            </div>
                        </div>
                        <div className="onlyjobs-section-content">
                            <h2 className="onlyjobs-section-title">
                                SKILL DEVELOPMENT
                            </h2>
                            <p className="onlyjobs-section-description">
                                Access tailored learning resources to enhance
                                your professional skills and stay competitive
                            </p>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div
                        className="onlyjobs-section reverse"
                        ref={(el) => addSectionRef(el, 5)}
                    >
                        <div className="onlyjobs-section-image">
                            <div className="onlyjobs-image-wrapper">
                                <div className="onlyjobs-floating-element"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                                    alt="Laptop"
                                />
                                <div className="onlyjobs-image-overlay"></div>
                            </div>
                        </div>
                        <div className="onlyjobs-section-content">
                            <h2 className="onlyjobs-section-title">
                                JOIN OUR COMMUNITY
                            </h2>
                            <p className="onlyjobs-section-description">
                                Network with professionals and share insights in
                                our vibrant job-seeking community
                            </p>
                        </div>
                    </div>
                </div>

                <div className="onlyjobs-cta-container">
                    <h2>Ready to take the next step in your career?</h2>
                    <button className="onlyjobs-cta-button">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default OnlyJobsVideo;
