import React from "react";
import styles from "./education.module.css";

function Education() {
    return (
        <div className={`row card ${styles.font}`} id="education">
            <div className="education">
                <div className="col-s12">
                    <h2>Education</h2>
                    <div className="column-2a">
                        <table className="table-style">
                            <tbody>
                                <tr>
                                    <td>Master of Computer and Information Technology</td>
                                    <td>University of Pennsylvania</td>
                                    <td>Aug, 2022 - Present</td>
                                </tr>
                                <tr>
                                    <td>Master of Science in Materials Science</td>
                                    <td>Purdue University</td>
                                    <td>Aug, 2018 - May, 2020</td>
                                </tr>
                                <tr>
                                    <td>MS/BS in Chemical Engineering</td>
                                    <td>National Tsing Hua University</td>
                                    <td>Graduated in 2016</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-s12">
                    <h3>Achievements</h3>
                    <ul>
                        <li>
                            Student Poster Third Place, 145th TMS Annual Meeting & Exhibition, Nashville, USA, Feb. 2016
                        </li>
                        <li>
                            Scholarship, Eternal Materials Co. Ltd., Kaohsiung, Taiwan, Dec. 2015
                        </li>
                        <li>
                            Best Poster Presentation Award, The 62nd TwICHE Annual Conference, Taiwan, Nov. 2015
                        </li>
                        <li>
                            College Student Research Award, Ministry of Science and Technology, Taipei, Taiwan, Jul. 2014
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-s12">
                    <h3>Publications</h3>
                    <ul>
                        <li>
                            <strong>Alan Hwader Chu</strong>, Bradlee Beauchamp, Deesha Shah, Aveek Dutta, Alexandra Boltasseva, Vladimir M. Shalaev, Ernesto E. Marinero, “Hybrid Magneto Photonic Material Structure for Plasmon Assisted Magnetic Switching”, Optical Materials Express, Vol. 10, No. 12, pp. 3107-3118, (2020).
                        </li>
                        <li>
                            Sinn-wen Chen, <strong>Alan Hwader Chu</strong>, and David Shan-hill Wong, “Interfacial reactions at the joints of CoSb3-based thermoelectric devices”, Journal of Alloys and Compounds, Vol. 699, pp. 448-454, (2017).
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Education;
