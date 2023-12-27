import React from "react";

import { Button, Img, Line, Text } from "components";

const DesktopPagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-impact items-center justify-start mx-auto w-full">
        <div className="sm:h-[335px] md:h-[518px] h-[608px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] sm:h-[335px] h-[482px] md:h-[518px] left-[0] w-[96%] md:w-full">
            <div className="absolute flex flex-col items-center justify-start left-[0] shadow-bs1 top-[0]">
              <Text
                className="md:text-5xl text-[172.59px] text-blue_gray-900 text-shadow-ts tracking-[6.04px]"
                size="txtImpact17259"
              >
                <span className="text-blue_gray-900 font-oswald text-left font-bold">
                  CODING{" "}
                </span>
                <span className="text-blue_gray-900 font-oswald uppercase text-left font-bold">
                  clu
                </span>
                <span className="text-blue_gray-900 font-oswald uppercase text-left font-bold">
                  b
                </span>
              </Text>
            </div>
            <div className="absolute bottom-[0] font-montserrat sm:h-[335px] h-[443px] md:h-[518px] right-[0] w-[96%] md:w-full">
              <div className="absolute bg-white-A700_0c bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto outline outline-[2px] outline-white-A700_33 p-[34px] sm:px-5 rounded-[30px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-1.5 w-[96%] md:w-full">
                  <div className="flex flex-col gap-14 justify-start w-[55%] md:w-full">
                    <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[308px] w-[52%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[156px]"
                        leftIcon={
                          <Img
                            className="h-[30px] mr-1.5"
                            src="images/img_mdilinkedin.svg"
                            alt="mdi:linkedin"
                          />
                        }
                        shape="round"
                        size="sm"
                      >
                        <div className="capitalize leading-[normal] text-left text-xl">
                          LinkedIn
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[156px]"
                        leftIcon={
                          <Img
                            className="h-[30px] mr-[9px]"
                            src="images/img_antdesigngithubfilled.svg"
                            alt="ant-design:github-filled"
                          />
                        }
                        shape="round"
                        size="sm"
                      >
                        <div className="capitalize leading-[normal] text-left text-xl">
                          Github
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col font-barlow items-start justify-start mr-[163px]">
                      <Text
                        className="md:text-5xl text-6xl text-white-A700 tracking-[2.10px]"
                        size="txtBarlowBold60"
                      >
                        Mark Zuckerberg
                      </Text>
                      <Text
                        className="italic sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 tracking-[1.23px]"
                        size="txtBarlowLightItalic35"
                      >
                        FooBar 2023-24
                      </Text>
                      <Text
                        className="italic mt-3 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[0.88px]"
                        size="txtBarlowThinItalic25"
                      >
                        Student at IIITv
                      </Text>
                    </div>
                  </div>
                  <div className="font-barlow h-44 md:h-[145px] md:mt-0 mt-[33px] relative w-[35%] md:w-full">
                    <Text
                      className="absolute bottom-[0] italic right-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[-2.00px]"
                      size="txtBarlowMediumItalic40"
                    >
                      <>
                        I don’t believe in obstacles, <br />
                        only in opportunities.
                      </>
                    </Text>
                    <Img
                      className="absolute h-[81px] left-[0] top-[0]"
                      src="images/img_biquote.svg"
                      alt="biquote"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[221px] left-[5%] rounded-[50%] top-[0] w-[221px]"
                src="images/img_profilepic.png"
                alt="profilepic"
              />
            </div>
          </div>
          <div className="absolute bg-gradient1  flex flex-col font-notosans inset-x-[0] items-center justify-start mx-auto pb-[149px] top-[0] w-full">
            <header className="bg-gray-900 border-b border-purple-600_33 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-center mb-2.5 md:ml-[0] ml-[65px] md:mt-0 mt-[15px] w-[21%] md:w-full">
                <div className="h-[86px] relative w-[86px]">
                  <Img
                    className="h-[68px] m-auto w-[68px]"
                    src="images/img_mobile.svg"
                    alt="mobile"
                  />
                  <div className="absolute h-[86px] inset-[0] justify-center m-auto w-[86px]">
                    <Img
                      className="h-[86px] m-auto object-cover w-[86px]"
                      src="images/img_logotrans1.png"
                      alt="logotransOne"
                    />
                    <Img
                      className="absolute bottom-[10%] h-[33px] right-[0] rounded-[50%] w-[33px]"
                      src="images/img_piconlogo.png"
                      alt="piconlogo"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-200 tracking-[-1.80px]"
                    size="txtNotoSansRegular36"
                  >
                    Coding Club
                  </Text>
                  <Text
                    className="text-gray-200 text-lg"
                    size="txtNotoSansRegular18"
                  >
                    Members
                  </Text>
                </div>
              </div>
              <ul className="flex md:flex-1 md:flex-col flex-row gap-[25px] sm:hidden items-start justify-center md:ml-[0] ml-[593px] mr-[65px] md:mt-0 my-[37px] w-[30%] md:w-full common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="mb-0.5 sm:text-[19px] md:text-[21px] text-[23px] hover:text-purple-600 text-purple-A200 tracking-[-1.15px]"
                  >
                    <Text size="txtNotoSansRegular23">Events</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="md:mt-0 mt-0.5 sm:text-[19px] md:text-[21px] text-[23px] hover:text-purple-600 text-purple-A200 tracking-[-1.15px]"
                  >
                    <Text size="txtNotoSansRegular23">Projects</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-purple-600 tracking-[-1.15px]"
                  >
                    <Text size="txtNotoSansRegular23Purple600">Members</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="sm:text-[19px] md:text-[21px] text-[23px] hover:text-purple-600 text-purple-A200 tracking-[-1.15px]"
                  >
                    <Text size="txtNotoSansRegular23">Contact Us</Text>
                  </a>
                </li>
              </ul>
            </header>
          </div>
        </div>
        <div className="bg-gradient2  border-2 border-purple-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1310px] mt-[57px] mx-auto p-[30px] md:px-5 rounded-[30px] w-full">
          <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[34px] w-[41%] md:w-full">
            <Text
              className="capitalize sm:text-[35px] md:text-[41px] text-[45px] text-purple-A200 text-shadow-ts1 tracking-[1.58px]"
              size="txtBarlowBold45"
            >
              About Me
            </Text>
            <Img
              className="h-px md:ml-[0] ml-[30px]"
              src="images/img_underline.svg"
              alt="underline"
            />
            <Text
              className="ml-2.5 md:ml-[0] mt-[59px] sm:text-[22.27px] md:text-[24.27px] text-[26.27px] text-center text-shadow-ts2 text-white-A700 tracking-[0.92px] w-[99%] sm:w-full"
              size="txtOpenSansRomanSemiBold2627"
            >
              This Bio is So Beautiful, So Elegant just Looking Like a Wow.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <Line className="bg-purple-900_c1 h-[324px] md:h-px mb-3.5 ml-20 md:ml-[0] md:mt-0 mt-[19px] md:w-full w-px" />
          <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[90px] w-2/5 md:w-full">
            <Text
              className="capitalize sm:text-[35px] md:text-[41px] text-[45px] text-center text-purple-A200 text-shadow-ts1 tracking-[1.58px]"
              size="txtBarlowBold45"
            >
              My Skills
            </Text>
            <Img
              className="h-px"
              src="images/img_underline_purple_a200.svg"
              alt="underline_One"
            />
            <Text
              className="mt-[83px] sm:text-[22.27px] md:text-[24.27px] text-[26.27px] text-center text-shadow-ts2 text-white-A700 tracking-[0.92px]"
              size="txtOpenSansRomanSemiBold2627"
            >
              <>
                Something
                <br />
                Nothing
                <br />
                Everything
                <br />
                This and That
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1324px] mt-[54px] mx-auto md:px-5 w-full">
          <div className="backdrop-opacity-[0.5] blur-[1.00px] h-[589px] relative rounded-[49px] w-full">
            <div className="h-[589px] m-auto w-full">
              <Img
                className="h-[589px] m-auto object-cover rounded-[49px] w-full"
                src="images/img_selectionbackground.png"
                alt="selectionbackgr"
              />
              <div className="absolute bg-purple-900_21 border-[3px] border-purple-900 border-solid h-[531px] right-[0] rounded-[298px] shadow-bs2 top-[0] w-[46%]"></div>
              <Img
                className="absolute h-[589px] inset-y-[0] left-[0] my-auto object-cover w-[49%]"
                src="images/img_ellipse2.png"
                alt="ellipseTwo"
              />
            </div>
            <div className="absolute flex flex-col gap-[54px] inset-x-[0] items-center justify-start mx-auto top-[8%] w-[81%]">
              <div className="flex flex-col font-barlow gap-[9px] items-center justify-start w-[28%] md:w-full">
                <Text
                  className="capitalize sm:text-[41px] md:text-[47px] text-[55px] text-purple-A200 text-shadow-ts3 tracking-[1.93px]"
                  size="txtBarlowBold55"
                >
                  Experience
                </Text>
                <Img
                  className="h-px"
                  src="images/img_underline.svg"
                  alt="underline_Two"
                />
              </div>
              <Text
                className="sm:text-[22.27px] md:text-[24.27px] text-[26.27px] text-shadow-ts2 text-white-A700 tracking-[0.92px]"
                size="txtOpenSansRomanSemiBold2627"
              >
                <>
                  Company: Tech Solutions Inc.
                  <br />
                  Location: Cityville, Stateville
                  <br />
                  Position: Software Developer Intern
                  <br />
                  Duration: June 2023 – August 2023
                  <br />
                  Responsibilities: Assisted in the development of a mobile app,
                  participated in code reviews and resolved bugs.
                  <br />
                  Achievements: Implemented a new feature that improved app
                  usability by 20%.
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gradient2  border-2 border-purple-900 border-solid flex flex-col font-barlow md:gap-10 gap-[77px] items-center justify-start max-w-[1310px] mt-[54px] mx-auto p-[37px] md:px-5 rounded-[30px] w-full">
          <div className="flex flex-col gap-[9px] items-center justify-start w-[23%] md:w-full">
            <Text
              className="capitalize sm:text-[41px] md:text-[47px] text-[55px] text-center text-purple-A200 text-shadow-ts4 tracking-[1.93px]"
              size="txtBarlowBold55"
            >
              Projects
            </Text>
            <Img
              className="h-px"
              src="images/img_underline.svg"
              alt="underline_Three"
            />
          </div>
          <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start mb-[43px] w-[82%] md:w-full">
            <Text
              className="bg-deep_purple-A700 capitalize h-[30px] justify-center mb-[181px] md:mt-0 mt-[165px] px-2 rounded-[50%] text-white-A700 text-xl tracking-[0.70px] w-[30px]"
              size="txtOpenSansRomanBold20"
            >
              <>&lt;</>
            </Text>
            <div className="bg-blue_gray-900_99 border border-gray-800_53 border-solid flex flex-col justify-center md:ml-[0] ml-[25px] md:mt-0 my-[18px] p-[9px] rounded-[15px] w-[29%] md:w-full">
              <Img
                className="h-[108px] md:h-auto mt-[19px] rounded-[50%] w-[108px]"
                src="images/img_ellipse3.png"
                alt="ellipseThree"
              />
              <Text
                className="capitalize ml-9 md:ml-[0] mr-[54px] mt-4 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[0.88px]"
                size="txtOpenSansRomanSemiBold25"
              >
                Project Name
              </Text>
              <Text
                className="capitalize mt-1.5 text-[17px] text-center text-white-A700 tracking-[0.60px]"
                size="txtBarlowRegular17"
              >
                <>
                  Project Details Goes Here. <br />
                  Again Lorem ipsum Time.
                </>
              </Text>
              <Button
                className="capitalize cursor-pointer font-montserrat leading-[normal] min-w-[164px] my-4 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
              >
                Open Project
              </Button>
            </div>
            <div className="bg-blue_gray-900_99 border border-blue_gray-900_01 border-solid flex flex-col items-center justify-center md:ml-[0] ml-[9px] p-2.5 rounded-[15px] w-[32%] md:w-full">
              <Img
                className="h-[120px] md:h-auto mt-[22px] rounded-[50%] w-[120px]"
                src="images/img_ellipse3_120x120.png"
                alt="ellipseThree_One"
              />
              <Text
                className="capitalize mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[1.05px]"
                size="txtOpenSansRomanSemiBold30"
              >
                Project Name
              </Text>
              <Text
                className="capitalize mt-1 text-center text-white-A700 text-xl tracking-[0.70px] w-full"
                size="txtBarlowRegular20"
              >
                Project Details Goes Here. Again Lorem ipsum Time.
              </Text>
              <Button
                className="capitalize cursor-pointer font-montserrat leading-[normal] mb-[17px] min-w-[184px] mt-5 text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
              >
                Open Project
              </Button>
            </div>
            <div className="bg-blue_gray-900_99 border border-blue_gray-900_01 border-solid flex flex-col justify-center ml-2.5 md:ml-[0] md:mt-0 my-[18px] p-[9px] rounded-[15px] w-[29%] md:w-full">
              <Img
                className="h-[108px] md:h-auto mt-[19px] rounded-[50%] w-[108px]"
                src="images/img_ellipse3.png"
                alt="ellipseThree_Two"
              />
              <Text
                className="capitalize ml-9 md:ml-[0] mr-[54px] mt-4 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[0.88px]"
                size="txtOpenSansRomanSemiBold25"
              >
                Project Name
              </Text>
              <Text
                className="capitalize mt-1.5 text-[17px] text-center text-white-A700 tracking-[0.60px]"
                size="txtBarlowRegular17"
              >
                <>
                  Project Details Goes Here. <br />
                  Again Lorem ipsum Time.
                </>
              </Text>
              <Button
                className="capitalize cursor-pointer font-montserrat leading-[normal] min-w-[164px] my-4 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
              >
                Open Project
              </Button>
            </div>
            <Text
              className="bg-deep_purple-A700 capitalize h-[30px] justify-center mb-[181px] ml-6 md:ml-[0] md:mt-0 mt-[165px] pl-2.5 pr-[7px] rounded-[50%] text-white-A700 text-xl tracking-[0.70px] w-[30px]"
              size="txtOpenSansRomanBold20"
            >
              <>&gt;</>
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-opensans items-center justify-start max-w-[1310px] mt-[52px] mx-auto md:px-5 w-full">
          <div className="backdrop-opacity-[0.5] blur-[1.00px] h-[602px] relative rounded-[49px] w-full">
            <div className="h-[602px] m-auto w-full">
              <Img
                className="h-[602px] m-auto object-cover rounded-[49px] w-full"
                src="images/img_selectionbackground.png"
                alt="selectionbackgr_One"
              />
              <div className="absolute h-[531px] right-[0] top-[0] w-[45%] sm:w-full">
                <div className="bg-purple-900_21 border-[3px] border-purple-900 border-solid h-[531px] m-auto rounded-[291px] shadow-bs2 w-full"></div>
                <div className="absolute bottom-1/4 flex flex-col justify-start left-[13%] w-[68%]">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[26px]"
                      src="images/img_emaillogo.svg"
                      alt="emaillogo"
                    />
                    <Text
                      className="lowercase sm:text-[21.91px] md:text-[23.91px] text-[25.91px] text-center text-white-A700 tracking-[0.91px]"
                      size="txtOpenSansRomanSemiBold2591"
                    >
                      something@nothing.com
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[54px] mt-3.5 w-[68%] md:w-full">
                    <Img
                      className="h-8 mt-[3px] w-8"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <Text
                      className="lowercase sm:text-[21.23px] md:text-[23.23px] text-[25.23px] text-center text-white-A700 tracking-[0.88px]"
                      size="txtOpenSansRomanSemiBold2523"
                    >
                      +91 96666-66669
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[35px] mt-[27px] shadow-bs3 w-[79%] md:w-full">
                    <Img
                      className="h-[59px]"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Img
                      className="h-[72px] w-[72px]"
                      src="images/img_link.svg"
                      alt="link"
                    />
                    <Img
                      className="h-[74px] w-[74px]"
                      src="images/img_githublogo.svg"
                      alt="githublogo"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute font-barlow h-[602px] inset-y-[0] left-[0] my-auto w-1/2 md:w-full">
                <Img
                  className="h-[602px] m-auto object-cover w-full"
                  src="images/img_ellipse2_602x642.png"
                  alt="ellipseTwo_One"
                />
                <Text
                  className="absolute capitalize h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_cc tracking-[1.40px]"
                  size="txtBarlowBold40"
                >
                  <>
                    Let’s connect <br />
                    and create something amazing togather...
                  </>
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col font-barlow h-max inset-[0] items-center justify-center m-auto w-[28%]">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="capitalize sm:text-[41px] md:text-[47px] text-[55px] text-center text-purple-A200 text-shadow-ts4 tracking-[1.93px]"
                  size="txtBarlowBold55"
                >
                  Get in Touch
                </Text>
                <Img
                  className="h-px"
                  src="images/img_underline.svg"
                  alt="underline_Four"
                />
              </div>
              <Line className="bg-white-A700_4c h-[276px] mt-[50px] w-0.5" />
              <Button
                className="capitalize cursor-pointer font-semibold leading-[normal] min-w-[340px] mt-[53px] rounded-[17px] sm:text-[31px] md:text-[33px] text-[35px] text-center tracking-[1.23px]"
                color="white_A700_dd"
                size="md"
                variant="outline"
              >
                Referal Button
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gradient3  flex md:flex-col flex-row font-montserrat gap-3.5 items-center justify-center mt-[72px] p-4 w-full">
          <div className="h-9 md:ml-[0] ml-[424px] md:px-5 relative w-[4%] md:w-full">
            <div className="bg-gray-100 h-[29px] m-auto rounded-[17px] w-[78%]"></div>
            <Img
              className="absolute h-9 inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_logotrans1.png"
              alt="logotransOne_One"
            />
          </div>
          <Text
            className="mr-[426px] text-2xl md:text-[22px] text-center text-gray-100 sm:text-xl"
            size="txtMontserratRegular24"
          >
            Designed and Developed by Coding Club
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesktopPagePage;
