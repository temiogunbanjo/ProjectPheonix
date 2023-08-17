import React, { useCallback, useRef } from "react";
import { GiPrisoner, GiChart, GiHandcuffs } from "react-icons/gi";
import { MdEmail, MdOutlineFace } from "react-icons/md";
import { IoBookSharp, IoBarChartSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaEquals, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

import { Button } from "../components/common/Button";

import donations from "../data/donations";
import team from "../data/team";

import { formatAsMoney } from "../utility";
import Avatar from "../components/common/Avatar";

const { others: teamMembers, coordinator } = team;

const Home = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const handleCopy = useCallback(
    (ref) => (ev) => {
      try {
        // console.log(ref.current);
        const inputElement = ref.current;
        const button = ev.target;

        const text = inputElement.value;
        const initialButtonText = button.textContent;

        inputElement.select();

        if ("clipboard" in navigator) {
          navigator.clipboard
            .writeText(text)
            .then(() => {
              // Change button text to "Copied"
              button.setAttribute("disabled", true);
              button.textContent = "Copied";
              button.backgroundColor = "#516A7B";

              // Reset button text to initial text
              window.setTimeout(() => {
                button.removeAttribute("disabled");
                button.textContent = initialButtonText;
                button.backgroundColor = "var(--secondary-color)";
              }, 3000);
            })
            .catch((error) => {
              alert("Error copying text:", error);
            });
        } else {
          document.execCommand("copy");
        }
      } catch (error) {
        console.error("Error copying text:", error);
      }
    },
    []
  );

  return (
    <>
      <section className="hero flex flex-col items-center justify-center">
        <img
          src={require("../assets/qt=q_95.webp")}
          alt="Icon"
          className="mb-16"
        />
        <h1 className="uppercase text-center" style={{ lineHeight: 1.1 }}>
          Project Phoenix
        </h1>
        <h4 className="uppercase mt-2 text-center">The new chapter</h4>
        <Button text="Donate" className="rounded-md mt-8 text-black bg-white" href={"#donate"} />
        <span className="mt-8 text-center">{`Fundraising target: ${
          donations.currencySymbol || donations.currency
        }${formatAsMoney(donations.target)}`}</span>
      </section>

      <section
        className="flex flex-col items-center"
        style={styles.autoHeightSections}
      >
        <h2 className="text-center" style={{ textTransform: "initial" }}>
          Our U.N. S.D.G. Targets
        </h2>
        <div className="flex flex-col sm:flex-row justify-evenly mt-8 w-full">
          <div
            className="flex flex-col p-1 items-center"
            style={{ maxWidth: "120px" }}
          >
            <div className="mb-2">
              <IoBookSharp
                className=""
                style={{ color: "grey", fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-row items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                4
              </b>
              <span
                className="ml-1 font-bold uppercase text-gray-500 text-sm"
                style={{ lineHeight: 1.2 }}
              >
                Quality Education
              </span>
            </div>
            <div></div>
          </div>

          <div
            className="flex flex-col p-1 items-center self-end sm:self-auto"
            style={{ maxWidth: "200px" }}
          >
            <div className="mb-2">
              <IoBarChartSharp
                className=""
                style={{ color: "grey", fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-row items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                8
              </b>
              <span
                className="ml-1 font-bold uppercase text-gray-500 text-sm"
                style={{ lineHeight: 1.2 }}
              >
                Decent Work and Economic Growth
              </span>
            </div>
            <div></div>
          </div>

          <div
            className="flex flex-col p-1 items-center"
            style={{ maxWidth: "200px" }}
          >
            <div className="mb-2">
              <FaEquals
                className=""
                style={{ color: "grey", fontSize: "100px" }}
              />
            </div>
            <div
              className="flex flex-row items-center"
              style={{ maxWidth: "120px" }}
            >
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                10
              </b>
              <span
                className="ml-1 font-bold uppercase text-gray-500 text-sm"
                style={{ lineHeight: 1.2 }}
              >
                Reduced Inequality
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2>Introduction</h2>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row-reverse items-center my-8">
            <img
              src={require("../assets/_MG_9912.jpg")}
              alt="Who we are"
              className="border flex-none mb-6 sm:mb-0 rounded-lg"
              style={{ width: "auto", height: "200px" }}
            />

            <div className="flex flex-col items-center sm:items-start sm:mr-10">
              <h3 className="text-2xl capitalize font-normal mb-3 text-gray-500">
                What we are doing
              </h3>
              <p className="text-center sm:text-left">
                Project Phoenix is an initiative to equip convicts with digital
                skills. The goal is to prepare them on their reintegration
                journey for the 21st Century and its increasingly digital job
                market. The pilot project for four months will be a parallel cohort 
                of intro to web development and digital marketing - 10 juveniles each. 
                Project Phoenix aims to engage and equip 250 inmates with proficiency 
                of at least one digital skills each year.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center my-8">
            <img
              src={require("../assets/_MG_9901.jpg")}
              alt="Goals & Mission"
              className="border flex-none mb-6 sm:mb-0 rounded-lg"
              style={{ width: "auto", height: "200px" }}
            />
            <div className="flex flex-col items-center sm:items-start sm:ml-10">
              <h3 className="text-2xl capitalize font-normal mb-3 text-gray-500">
                Our Goals & Mission
              </h3>
              <p className="text-center sm:text-left">
                This initiative is a brainchild of Learnira, a STEM focused
                start-up that believes that every African child should have
                access to quality education. Our previous campaign which lasted
                from 2017 to 2019 was able to impact 7,400 students in 37
                schools. A large percentage of this was with public schools and
                primarily in Nigeria, but we likewise had stints in Ghana too.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row-reverse items-center my-8">
            <img
              src={require("../assets/getty.jpg")}
              alt="Target Audience"
              className="border flex-none mb-6 sm:mb-0 rounded-lg"
              style={{ width: "auto", height: "200px" }}
            />

            <div className="flex flex-col items-center sm:items-start sm:mr-10">
              <h3 className="text-2xl capitalize font-normal mb-3 text-gray-500">
                Target Audience
              </h3>
              <p className="text-center sm:text-left">
                We are addressing the United Nations Sustainable Development
                Goal 4, 8 & 10 with our focus on prison inmates. We are working
                with the X Prisons Service in Africa to run Project Phoenix as a
                pilot at their juvenile facility. Our goal is consultative and
                provision of technology skills that complements already existing
                vocational training within the facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="importance"
        className="flex flex-col items-center overflow-hidden"
      >
        <h2 className="text-center" style={{ color: "#fff" }}>
          Why is this important ?
        </h2>
        <span
          className="text-center text-sm"
          style={{ color: "#fff", maxWidth: "500px" }}
        >
          We are going to take a look at some statistics from the X Prisons
          Service. The most recent year of publication of the full audit is
          2015.
        </span>

        <div className="flex flex-row flex-wrap justify-evenly mt-8 w-full">
          <div className="card flex flex-col p-1 items-center mx-4 mb-8">
            <div className="mb-2">
              <IoIosPeople
                className="text-gray-200"
                style={{ fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                14,355
              </b>
              <span
                className="ml-1 font-bold uppercase text-sm my-3 text-center"
                style={{ lineHeight: 1.2 }}
              >
                average prison population
              </span>
            </div>
            <div>
              <p className="text-center text-sm" style={{ lineHeight: 2 }}>
                That year, 14,355 was the average prison population and{" "}
                <b style={{ color: "var(--indicator-text-color)" }}>81.7%</b> of
                them were convicts, while the rest were held in remand custody.
              </p>
            </div>
          </div>

          <div className="card flex flex-col p-1 items-center mx-4 mb-8">
            <div className="mb-2">
              <GiPrisoner
                className="text-gray-200"
                style={{ fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                77.7%
              </b>
              <span
                className="ml-1 font-bold uppercase text-sm my-3 text-center"
                style={{ lineHeight: 1.2 }}
              >
                prisoners between ages 18-35 admitted
              </span>
            </div>
            <div>
              <p className="text-center text-sm" style={{ lineHeight: 2 }}>
                In the same year,{" "}
                <b style={{ color: "var(--indicator-text-color)" }}>77.7%</b> of
                convicted prisoners admitted into the service were{" "}
                <b style={{ color: "var(--indicator-text-color)" }}>
                  between the ages 18-35
                </b>
                . The previous year, this age group was 70.4% of convicted
                admittances.
              </p>
            </div>
          </div>

          <div className="card flex flex-col p-1 items-center mx-4 mb-8">
            <div className="mb-2">
              <ImLibrary
                className="text-gray-200"
                style={{ fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                97.7%
              </b>
              <span
                className="ml-1 font-bold uppercase text-sm my-3 text-center"
                style={{ lineHeight: 1.2 }}
              >
                with incomplete tertiary education
              </span>
            </div>
            <div>
              <p className="text-center text-sm" style={{ lineHeight: 2 }}>
                Concerning the educational backgrounds of convict admission at
                the time; 97.7% did not complete tertiary education. This is a
                slight jump from 97.2% in the previous year.
              </p>
            </div>
          </div>
        </div>

        <p
          className="sectioner text-center text-md my-8 py-4 px-12 w-full sm:w-3/4"
          style={{
            color: "#fff",
            maxWidth: "unset",
            lineHeight: 2,
            backgroundColor: "#516A7B",
          }}
        >
          <BiSolidQuoteLeft
            className="text-md align-baseline"
            style={{
              display: "inline-block",
              color: "var(--indicator-text-color)",
            }}
          />{" "}
          So, we see a large amount of employable aged but largely unskilled
          individuals who are admitted into prison. It is important to note that
          their backgrounds could have been a contributing factor to the
          circumstances that got them into the facility.{" "}
          <BiSolidQuoteRight
            className="text-md align-baseline"
            style={{
              display: "inline-block",
              color: "var(--indicator-text-color)",
            }}
          />
        </p>

        <div className="flex flex-row flex-wrap justify-evenly items-center mt-8 w-full">
          <div className="card flex flex-col p-1 items-center mx-4 mb-8">
            <div className="mb-2">
              <GiHandcuffs
                className="text-gray-200"
                style={{ fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                6,997
              </b>
              <span
                className="ml-1 font-bold uppercase text-sm my-3 text-center"
                style={{ lineHeight: 1.3 }}
              >
                convicted & un-convicted prisoners discharged in 2015
              </span>
            </div>
            <div>
              <p className="text-center text-sm" style={{ lineHeight: 2 }}>
                We would also see 6,997 prisoners being discharged in 2015
                (convicts & un-convicted). If unassessed, there may be a
                significant number of unrefined individuals returning to
                society.
              </p>
            </div>
          </div>

          <div className="card flex flex-col p-1 items-center mx-4 mb-8">
            <div className="mb-2">
              <MdOutlineFace
                className="text-gray-200"
                style={{ fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                268
              </b>
              <span
                className="ml-1 font-bold uppercase text-sm my-3 text-center"
                style={{ lineHeight: 1.2 }}
              >
                convicts in our juvenile target group
              </span>
            </div>
            <div>
              <p className="text-center text-sm" style={{ lineHeight: 2 }}>
                Our juvenile target group for the pilot currently sit at 268
                convicts today.
              </p>
            </div>
          </div>

          <div className="card flex flex-col p-1 items-center mx-4 mb-8">
            <div className="mb-2">
              <GiChart
                className="text-gray-200"
                style={{ fontSize: "100px" }}
              />
            </div>
            <div className="flex flex-col items-center">
              <b
                className="text-4xl font-bold"
                style={{ color: "var(--indicator-text-color)" }}
              >
                23% increase
              </b>
              <span
                className="ml-1 font-bold uppercase text-sm my-3 text-center"
                style={{ lineHeight: 1.2 }}
              >
                in re-offenders from 1992 to 2013
              </span>
            </div>
            <div>
              <p className="text-center text-sm" style={{ lineHeight: 2 }}>
                After all, from 1992 to 2013 the rate of inmates that have
                reoffended increased by 23% and the recidivism percentage rate
                in the pilot country had been fluctuating from 21% in 2004
                through to 19.3% in 2008 and to 22.2% in 2011.
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-center text-md my-8 py-4 px-12 w-full sm:w-3/4"
          style={{
            color: "#fff",
            maxWidth: "unset",
            lineHeight: 2,
            backgroundColor: "#516A7B",
          }}
        >
          <BiSolidQuoteLeft
            className="text-md align-baseline"
            style={{
              display: "inline-block",
              color: "var(--indicator-text-color)",
            }}
          />{" "}
          With the accelerating rate of technological development coupled with
          poor educational backgrounds, most inmates would be left behind not
          having the appropriate skills to participate in their communities once
          they are reintegrated.{" "}
          <BiSolidQuoteRight
            className="text-md align-baseline"
            style={{
              display: "inline-block",
              color: "var(--indicator-text-color)",
            }}
          />
        </p>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-center" style={{ color: "var(--secondary-color)" }}>
          PILOT SCOPE, PROGRESS & PLAN
        </h2>
        <span
          className="text-center text-md"
          style={{ maxWidth: "850px", lineHeight: 2 }}
        >
          We launched this enterprise in Africa and are working with the Senior
          Correctional Centre. This is the only facility in the pilot country
          that serves juveniles and young offenders. We have begun liaising with
          the directors of the Senior Correctional Centre and are developing a
          suitable operational timetable to be part of the existing
          Reintegration Programs.
        </span>
        <div className="mt-8 w-full">
          <div
            className="hidden sm:flex relative w-full justify-center items-center mx-auto"
            style={{ maxWidth: "850px" }}
          >
            <img src={require("../assets/Picture1.png")} alt="" />
            <span
              className="absolute top-3 left-0 font-extrabold"
              style={{
                ...styles.flowChartText,
                color: "var(--secondary-color)",
                fontSize: "20px",
              }}
            >
              THE PLAN
            </span>

            <span
              className="absolute top-5 right-0 text-sm"
              style={{
                ...styles.flowChartText,
              }}
            >
              This track exposes learners to the opportunities available in the
              digital world, and netiquettes. It also equips them to be able to
              take on Digital Marketing roles or to help them market their
              skills.
            </span>

            <span
              className="absolute top-30 left-0 text-sm text-right"
              style={{
                ...styles.flowChartText,
                top: "10rem",
              }}
            >
              Software development offers so many exciting career opportunities!
              Our curriculum is project based, enabling the inmates to build as
              they learn.
            </span>

            <span
              className="absolute top-30 right-0 text-sm"
              style={{
                ...styles.flowChartText,
                top: "17rem",
              }}
            >
              Software development offers so many exciting career opportunities!
              Our curriculum is project based, enabling the inmates to build as
              they learn.
            </span>

            <span
              className="absolute top-30 left-0 text-sm text-right"
              style={{
                ...styles.flowChartText,
                top: "24rem",
              }}
            >
              Our goal is to provide learners access to formal education of
              their choice that can be achieved via an e-learning portals such
              as Udemy, Coursera, etc. Courses are to be taken from accredited
              institutions both local and international.
            </span>
          </div>
          <div className="sm:hidden flex flex-col relative">
            <img src={require("../assets/Picture2.png")} alt="" />
            <span
              className="font-extrabold"
              style={{
                // ...styles.flowChartText,
                color: "var(--secondary-color)",
                fontSize: "20px",
              }}
            >
              THE PLAN
            </span>
            <ol type="disc" style={{ listStyle: "auto", paddingLeft: "18px" }}>
              <li style={styles.planListItem}>
                <b style={{ color: "var(--secondary-color)" }}>
                  Digital Natives
                </b>
                <br />
                <p className="text-sm mt-1" style={{ lineHeight: 1.5 }}>
                  This track exposes learners to the opportunities available in
                  the digital world, and netiquettes. It also equips them to be
                  able to take on Digital Marketing roles or to help them market
                  their skills.
                </p>
              </li>

              <li style={styles.planListItem}>
                <b style={{ color: "var(--secondary-color)" }}>
                  Introduction to Coding
                </b>
                <br />
                <p className="text-sm mt-1" style={{ lineHeight: 1.5 }}>
                  This track exposes learners to the opportunities available in
                  the digital world, and netiquettes. It also equips them to be
                  able to take on Digital Marketing roles or to help them market
                  their skills.
                </p>
              </li>

              <li style={styles.planListItem}>
                <b style={{ color: "var(--secondary-color)" }}>
                  Access to formal education online
                </b>
                <br />
                <p className="text-sm mt-1" style={{ lineHeight: 1.5 }}>
                  This track exposes learners to the opportunities available in
                  the digital world, and netiquettes. It also equips them to be
                  able to take on Digital Marketing roles or to help them market
                  their skills.
                </p>
              </li>

              <li style={styles.planListItem}>
                <b style={{ color: "var(--secondary-color)" }}>
                  Re-integration program
                </b>
                <br />
                <p className="text-sm mt-1" style={{ lineHeight: 1.5 }}>
                  This track exposes learners to the opportunities available in
                  the digital world, and netiquettes. It also equips them to be
                  able to take on Digital Marketing roles or to help them market
                  their skills.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center"
        style={{ ...styles.autoHeightSections }}
      >
        <h2 className="text-center" style={{}}>
          HOW YOU CAN GET INVOLVED ?
        </h2>
        <span
          className="text-center text-md"
          style={{ maxWidth: "850px", lineHeight: 2 }}
        >
          Learnira has committed resources and continues to do so in pursuit of
          the goals of Project Phoenix. The initiative is non-profit and your
          donations in cash, time, teaching resources, and support would go a
          long way. To contribute, kindly reach out to us.
        </span>
      </section>

      <section
        // id="importance"
        className="flex flex-col items-center"
        style={{
          ...styles.autoHeightSections,
          padding: "48px 48px",
          color: "#fff",
          backgroundColor: "#0a0a0a",
        }}
      >
        <h2
          className="w-full sm:text-right text-center"
          style={{ color: "#fff" }}
        >
          About Co-ordinator
        </h2>
        <div
          className="flex sm:flex-row flex-col sm:items-start items-center my-8 w-full"
          style={{ backgroundColor: "transparent" }}
        >
          <Avatar
            src={coordinator?.imgSource}
            alt={`${coordinator?.name}`}
            className="border mb-5 sm:mb-0 rounded-full object-cover object-top flex-none"
            style={{ width: "200px", height: "200px" }}
          />

          <div
            className="flex flex-col sm:ml-10 items-center sm:items-start"
            // style={{ maxWidth: "calc(100% - 200px - 148px)" }}
          >
            <h3 className="text-2xl uppercase font-bold text-white text-center sm:text-left">
              {coordinator?.name}
            </h3>
            <span className="inline-block text-lg capitalize font-small mt-1 mb-3 text-gray-400 text-center sm:text-left">
              {coordinator?.role?.[0]}
            </span>
            <p className="text-center sm:text-left" style={{ lineHeight: 2 }}>
              {coordinator?.description}
            </p>

            <div className="flex flex-row mt-6">
              {coordinator?.email && (
                <Button
                  href={`mailto:${coordinator?.email}`}
                  text={
                    <div className="flex flex-row items-center">
                      <MdEmail />
                      <span className="ml-2 text-sm">Send Email</span>
                    </div>
                  }
                  {...contactIconProps}
                  style={{
                    ...contactIconProps.style,
                    marginLeft: 0,
                  }}
                />
              )}
              {coordinator?.linkedIn && (
                <Button
                  text={
                    <div className="flex flex-row items-center">
                      <FaLinkedinIn />
                      <span className="ml-2 text-sm">LinkedIn</span>
                    </div>
                  }
                  {...contactIconProps}
                />
              )}

              {coordinator?.website && (
                <Button
                  text={
                    <div className="flex flex-row items-center">
                      <FaLinkedinIn />
                      <span className="ml-2 text-sm">LinkedIn</span>
                    </div>
                  }
                  {...contactIconProps}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="flex flex-col items-center"
        style={{
          ...styles.autoHeightSections,
          backgroundColor: "initial",
          backgroundImage: "none",
        }}
      >
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube-nocookie.com/embed/z52hCrYIPzk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          // style={{ minHeight: "200px", maxHeight: "235px" }}
        ></iframe>
      </section> */}

      <section
        id="donate"
        className="flex flex-col items-center"
        style={{
          ...styles.autoHeightSections,
          backgroundColor: "initial",
          backgroundImage: "none",
        }}
      >
        <h2 className="text-center" style={{}}>
          HOW TO CONTRIBUTE
        </h2>

        <div className="flex flex-row flex-wrap sm:flex-nowrap w-full items-stretch mt-3">
          <div className="flex flex-col-reverse sm:flex-col justify-between flex-shrink donations w-full sm:w-1/2 sm:p-6  pb-6 rounded-lg bg-white sm:border border-slate-200">
            <div className="flex flex-col">
              <div className="inline items-baseline">
                <h6 className="text-2xl mr-1 font-medium">{`${
                  donations.currencySymbol || donations.currency
                } ${formatAsMoney(donations.currentAmount)} `}</h6>
                <span className="text-xl text-gray-500 ">
                  {`raised of ${
                    donations.currencySymbol || donations.currency
                  } ${formatAsMoney(donations.target)} goal`}
                </span>
              </div>

              <div
                className="overflow-hidden w-full my-3 bg-slate-200 rounded-md"
                style={{ height: "14px", maxWidth: "450px" }}
              >
                <div
                  className="h-full bg-green-600 rounded-md"
                  style={{
                    width: `calc((${donations.currentAmount} / ${donations.target}) * 100%)`,
                  }}
                ></div>
              </div>

              <span className="text-lg text-gray-500">{`${formatAsMoney(
                donations.numberOfDonations
              )} contributions`}</span>
            </div>

            <div className="flex flex-row flex-wrap rounded-lg bg-white border-slate-200 mb-8 sm:mb-0 sm:mt-4">
              {/* <video
                className="w-full border bg-slate-300"
                style={{ minHeight: "200px", maxHeight: "235px" }}
                controls
                preload
              >
                <source src="https://www.youtube-nocookie.com/embed/z52hCrYIPzk" />
              </video> */}

              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/z52hCrYIPzk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="rounded-lg"
                style={{ minHeight: "200px", maxHeight: "315px" }}
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/2 sm:ml-4">
            <div className="flex flex-col w-full p-6 rounded-lg bg-white border border-slate-200">
              <h3 className="text-xl font-medium mb-1">{`De-Fi Wallet (Crypto Stablecoin)`}</h3>
              <div className="flex flex-row items-center">
                <span className="text-sm text-gray-500 mr-1">{`Token Name: `}</span>
                <span className="text-sm text-gray-500">{`${donations?.wallets?.defi?.tokenName}`}</span>
              </div>
              <div className="flex flex-col items-start mt-0.5">
                <label htmlFor="wallet-address-input" className="text-sm text-gray-500 mr-1 whitespace-nowrap">{`Wallet Address:`}</label>

                <div className="flex flex-row mt-1 w-full">
                  <input
                    id="wallet-address-input"
                    ref={inputRef1}
                    className="bg-slate-100 text-gray-500 px-2 py-1 rounded-sm text-sm w-full"
                    value={`${donations?.wallets?.defi?.address}`}
                    readOnly={true}
                    style={{
                      outlineWidth: "1px",
                      outlineColor: "var(--secondary-color)",
                    }}
                  />
                  <Button
                    text={"Copy"}
                    style={styles.copyButton}
                    onClick={handleCopy(inputRef1)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mt-3 p-6 rounded-lg bg-white border border-slate-200">
              <h3 className="text-xl font-medium mb-1">{`Bank Information (${donations?.wallets?.bank?.currency})`}</h3>

              <div className="flex flex-row items-center">
                <span className="text-sm text-gray-500 mr-1">{`Bank Name:`}</span>
                <span className="text-sm text-gray-500">{`${donations?.wallets?.bank?.name}`}</span>
              </div>

              <div className="flex flex-row items-center mt-0.5">
                <span className="text-sm text-gray-500 mr-1">{`Account Name:`}</span>
                <span className="text-sm text-gray-500">{`${donations?.wallets?.bank?.accountName}`}</span>
              </div>

              <div className="flex flex-row items-center mt-0.5">
                <span className="text-sm text-gray-500 mr-1">{`Swift Code:`}</span>
                <span className="text-sm text-gray-500">{`${donations?.wallets?.bank?.swiftCode}`}</span>
              </div>

              <div className="flex flex-row items-center mt-0.5">
                <span className="text-sm text-gray-500 mr-1">{`Sort Code:`}</span>
                <span className="text-sm text-gray-500">{`${donations?.wallets?.bank?.sortCode}`}</span>
              </div>

              <div className="flex flex-col items-start mt-0.5">
                <label htmlFor="account-number-input" className="text-sm text-gray-500 mr-1 whitespace-nowrap">{`Account Number:`}</label>

                <div className="flex flex-row mt-1 w-full">
                  <input
                    id="account-number-input"
                    ref={inputRef2}
                    className="bg-slate-100 text-gray-500 px-2 py-1 rounded-sm text-sm w-full"
                    value={`${donations?.wallets?.bank?.accountNumber}`}
                    readOnly={true}
                    style={{
                      outlineWidth: "1px",
                      outlineColor: "var(--secondary-color)",
                    }}
                  />
                  <Button
                    text={"Copy"}
                    style={styles.copyButton}
                    onClick={handleCopy(inputRef2)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center"
        style={{
          ...styles.autoHeightSections,
          color: "#fff",
          backgroundColor: "var(--secondary-color)",
        }}
      >
        <h2 className="w-full text-center text-white">Meet the team</h2>
        <div
          className="flex sm:flex-row flex-col items-start justify-center my-8 w-full"
          style={{ backgroundColor: "transparent" }}
        >
          {teamMembers.map((each, index) => (
            <div
              key={index}
              className="flex flex-col items-center my-8 mx-auto sm:mx-12 w-full sm:w-1/4"
            >
              <Avatar
                src={each?.imgSource}
                alt={each?.name}
                className="flex flex-row items-center justify-center text-center align-middle border rounded-full bg-gray-500 object-cover object-top"
                style={{ width: "200px", height: "200px" }}
              />

              <div className="flex flex-col mt-5 items-center">
                <h3 className="text-xl mb-1 capitalize font-medium text-center">
                  {each?.name}
                </h3>
                {each?.role.map((role, ind) => (
                  <span
                    key={ind}
                    className="inline-block capitalize font-small mb-0.5 text-white text-center text-xs"
                    style={{ maxWidth: "260px" }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-row mt-4">
                {each?.email && (
                  <Button
                    href={`mailto:${each?.email}`}
                    text={
                      <div className="flex flex-row items-center">
                        <MdEmail />
                        <span className="ml-2 text-xs">Mail</span>
                      </div>
                    }
                    {...contactIconProps}
                  />
                )}
                {each?.linkedIn && (
                  <Button
                    target="blank"
                    href={each?.linkedIn}
                    text={
                      <div className="flex flex-row items-center">
                        <FaLinkedinIn />
                        <span className="ml-2 text-xs">LinkedIn</span>
                      </div>
                    }
                    {...contactIconProps}
                  />
                )}
                {each?.website && (
                  <Button
                    target="blank"
                    href={each?.website}
                    text={
                      <div className="flex flex-row items-center">
                        <FaGlobe />
                        <span className="ml-2 text-xs">Website</span>
                      </div>
                    }
                    {...contactIconProps}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const contactIconProps = {
  className: "rounded-sm mx-2 text-lg border border-2 bg-transparent hover:bg-white text-white hover:text-black transition-all",
  style: { padding: "10px" },
};

const styles = {
  autoHeightSections: {
    minHeight: "unset",
    backgroundColor: "#fce7bf",
    backgroundSize: "8%",
    backgroundImage: "url(/assets/noise.png)",
    padding: "38px 36px 64px",
  },
  flowChartText: {
    maxWidth: "350px",
    width: "calc(50% - 140px)",
    lineHeight: 1.3,
    fontSize: "12px",
    // border: '1px solid',
  },
  copyButton: {
    color: "white",
    textTransform: "capitalize",
    backgroundColor: "var(--secondary-color)",
    fontSize: "14px",
  },
  planListItem: {
    marginTop: "4px",
    marginBottom: "4px",
    lineHeight: 2,
  },
};

export default Home;
