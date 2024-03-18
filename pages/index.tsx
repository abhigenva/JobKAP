import type { NextPage } from "next";
import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./index.module.css";

const CoverFrame: NextPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.coverFrame}>
        <div className={styles.coverFrameChild} />
        <img className={styles.coverFrameItem} alt="" src="/group-16@2x.png" />
        <img className={styles.coverFrameInner} alt="" src="/group-17.svg" />
        <div className={styles.madeByTeam}>Made by Team Locofy</div>
        <div className={styles.travelWebsiteWrapper}>
          <div className={styles.travelWebsite}>Travel Website</div>
        </div>
        <div className={styles.homepage}>
          <div className={styles.heroSection}>
            <header className={styles.topHeader}>
              <div className={styles.topContainer}>
                <img
                  className={styles.fickleflightLogoIcon}
                  alt=""
                  src="/fickleflight-logo.svg"
                />
                <div className={styles.navigationRight}>
                  <div className={styles.navigationMenu}>
                    <div className={styles.explore}>Explore</div>
                    <div className={styles.search}>Search</div>
                    <div className={styles.hotels}>Hotels</div>
                    <div className={styles.offers}>Offers</div>
                  </div>
                  <div className={styles.accountSection}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className={styles.unsplashd1upkifd04aIcon}
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.searchSection}>
              <div className={styles.bannerGradient} />
              <img
                className={styles.bannerBackground}
                alt=""
                src="/banner--background@2x.png"
              />
              <div className={styles.searchContainer}>
                <div className={styles.title}>
                  <div
                    className={styles.letsExplore}
                  >{`Let’s explore & travel the world`}</div>
                  <div className={styles.findTheBest}>
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className={styles.searchForm}>
                  <div className={styles.inputsRow}>
                    <div className={styles.inputGroup}>
                      <Autocomplete
                        className={styles.departureField}
                        size="medium"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                      />
                    </div>
                    <div className={styles.inputGroup1}>
                      <div className={styles.arrivalField}>
                        <div className={styles.input}>
                          <div className={styles.labelContainer}>
                            <div className={styles.arrival}>Arrival</div>
                          </div>
                          <div className={styles.active}>
                            <div className={styles.muiautocompletetag}>
                              <div className={styles.chip}>
                                <div className={styles.container}>
                                  <div className={styles.avatar}>
                                    <div className={styles.op}>F</div>
                                  </div>
                                  <div className={styles.typography}>
                                    <div className={styles.chip1}>Chip</div>
                                  </div>
                                  <img
                                    className={styles.cancelIcon}
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className={styles.chip2}>
                                <div className={styles.container1}>
                                  <div className={styles.avatar1}>
                                    <div className={styles.op1}>F</div>
                                  </div>
                                  <div className={styles.typography1}>
                                    <div className={styles.chip3}>Chip</div>
                                  </div>
                                  <img
                                    className={styles.cancelIcon1}
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.losAngelesLa}>
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputGroup2}>
                      <div className={styles.dateField}>
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              variant: "outlined",
                              size: "medium",
                              fullWidth: true,
                              required: false,
                              autoFocus: false,
                              error: false,
                              color: "primary",
                              placeholder: "Date",
                            },
                            openPickerIcon: {
                              component: () => <></>,
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonGroup}>
                    <div className={styles.searchFlightsButton}>
                      <div className={styles.button}>Search flights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContents}>
            <div className={styles.upcomingFlightSection}>
              <b className={styles.upcomingFlight}>Upcoming Flight</b>
              <div className={styles.flightDetails}>
                <div className={styles.flightMainContainer}>
                  <div className={styles.toAndFrom}>
                    <div className={styles.fromDetails}>
                      <b className={styles.sin}>SIN</b>
                      <div className={styles.singapore}>Singapore</div>
                    </div>
                    <div className={styles.duration}>
                      <b className={styles.h55m}>15H 55M</b>
                      <img
                        className={styles.durationChild}
                        alt=""
                        src="/group-17.svg"
                      />
                    </div>
                    <div className={styles.toDetails}>
                      <b className={styles.lax}>LAX</b>
                      <div className={styles.losAngeles}>Los Angeles</div>
                    </div>
                  </div>
                  <div className={styles.horizontalLine} />
                  <div className={styles.departureDetails}>
                    <div className={styles.departsOn1}>
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className={styles.daysToGoContainer}>
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className={styles.lineSeparator} />
                <div className={styles.prepareMenu}>
                  <div className={styles.prepareForYour}>
                    Prepare for your trip
                  </div>
                  <div className={styles.tripMenus}>
                    <button className={styles.hotel}>
                      <img
                        className={styles.hotelChild}
                        alt=""
                        src="/group-21.svg"
                      />
                      <div className={styles.hotel1}>Hotel</div>
                    </button>
                    <button className={styles.attractions}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <div className={styles.attractions1}>Attractions</div>
                    </button>
                    <button className={styles.eats}>
                      <img
                        className={styles.eatsChild}
                        alt=""
                        src="/group-21.svg"
                      />
                      <div className={styles.eats1}>Eats</div>
                    </button>
                    <button className={styles.commute}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.groupItem} />
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.commute1}>Commute</div>
                    </button>
                    <button className={styles.taxi}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.groupInner} />
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.taxi1}>Taxi</div>
                    </button>
                    <button className={styles.movies}>
                      <div className={styles.groupDiv}>
                        <div className={styles.rectangleDiv} />
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.movies1}>Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitles}>
                <div className={styles.titleContainer}>
                  <b className={styles.planYourNext}>Plan your next trip</b>
                  <b className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </b>
                </div>
                <a className={styles.viewAllTop}>
                  <div className={styles.viewAllDestinations}>
                    View all destinations
                  </div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/arrowright.svg"
                  />
                </a>
              </div>
              <div className={styles.cardsContainer}>
                <button className={styles.card1}>
                  <div className={styles.unsplashnnzkznywhauParent}>
                    <img
                      className={styles.unsplashnnzkznywhauIcon}
                      alt=""
                      src="/unsplashnnzkznywhau@2x.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Paris</b>
                      <div className={styles.parent}>
                        <div className={styles.div}>$699</div>
                        <div className={styles.from}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.card2}>
                  <div className={styles.unsplashyc8qqp50bdaParent}>
                    <img
                      className={styles.unsplashyc8qqp50bdaIcon}
                      alt=""
                      src="/unsplashyc8qqp50bda@2x.png"
                    />
                    <div className={styles.destinationDetails1}>
                      <b className={styles.greece}>Greece</b>
                      <div className={styles.group}>
                        <div className={styles.div1}>$1079</div>
                        <div className={styles.from1}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.card3}>
                  <div className={styles.unsplashltnpejwdsayParent}>
                    <img
                      className={styles.unsplashltnpejwdsayIcon}
                      alt=""
                      src="/unsplashltnpejwdsay@2x.png"
                    />
                    <div className={styles.destinationDetails2}>
                      <b className={styles.norway}>Norway</b>
                      <div className={styles.parent1}>
                        <div className={styles.div2}>$895</div>
                        <div className={styles.from2}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.card4}>
                  <div className={styles.unsplashm0oiyn5u8zmParent}>
                    <img
                      className={styles.unsplashm0oiyn5u8zmIcon}
                      alt=""
                      src="/unsplashm0oiyn5u8zm@2x.png"
                    />
                    <div className={styles.destinationDetails3}>
                      <b className={styles.tuscany}>Tuscany</b>
                      <div className={styles.parent2}>
                        <div className={styles.div3}>$1245</div>
                        <div className={styles.from3}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom}>
                <div className={styles.viewAllDestinations1}>
                  View all destinations
                </div>
                <img
                  className={styles.arrowRightIcon1}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitle}>
                <b className={styles.recommendedHolidays}>
                  Recommended Holidays
                </b>
                <a className={styles.viewAllHolidaysParent}>
                  <div className={styles.viewAllHolidays}>
                    View all holidays
                  </div>
                  <img
                    className={styles.arrowRightIcon2}
                    alt=""
                    src="/arrowright.svg"
                  />
                </a>
              </div>
              <div className={styles.recCardsContainer}>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/unsplash5mv818tzxeo@2x.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.frameParent}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Bali</div>
                        <div className={styles.d3n}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$899</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard2}>
                  <img
                    className={styles.unsplashj82dskoxvy8Icon}
                    alt=""
                    src="/unsplashj82dskoxvy8@2x.png"
                  />
                  <div className={styles.holidayDetails1}>
                    <div className={styles.frameGroup}>
                      <div className={styles.switzerlandParent}>
                        <div className={styles.switzerland}>Switzerland</div>
                        <div className={styles.d5n}>6D5N</div>
                      </div>
                      <div className={styles.div5}>$900</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard3}>
                  <img
                    className={styles.unsplash4ezkckxolreIcon}
                    alt=""
                    src="/unsplash4ezkckxolre@2x.png"
                  />
                  <div className={styles.holidayDetails2}>
                    <div className={styles.frameContainer}>
                      <div className={styles.boracayParent}>
                        <div className={styles.boracay}>Boracay</div>
                        <div className={styles.d4n}>5D4N</div>
                      </div>
                      <div className={styles.div6}>$699</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard4}>
                  <img
                    className={styles.unsplashuyqmxhjr3neIcon}
                    alt=""
                    src="/unsplashuyqmxhjr3ne@2x.png"
                  />
                  <div className={styles.holidayDetails3}>
                    <div className={styles.frameDiv}>
                      <div className={styles.palawanParent}>
                        <div className={styles.palawan}>Palawan</div>
                        <div className={styles.d3n1}>4D3N</div>
                      </div>
                      <div className={styles.div7}>$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom1}>
                <div className={styles.viewAllHolidays1}>View all holidays</div>
                <img
                  className={styles.arrowRightIcon3}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <form className={styles.popularStays}>
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <b className={styles.popularStays1}>Popular Stays</b>
                </div>
                <a className={styles.viewAllStaysParent}>
                  <div className={styles.viewAllStays}>View all stays</div>
                  <img
                    className={styles.arrowRightIcon4}
                    alt=""
                    src="/arrowright.svg"
                  />
                </a>
              </div>
              <div className={styles.hotelCards}>
                <div className={styles.hotelCard1}>
                  <a className={styles.hotelCard}>
                    <img
                      className={styles.unsplashhhrfsdwxxusIcon}
                      alt=""
                      src="/unsplashhhrfsdwxxus@2x.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.entireBungalowParent}>
                        <div className={styles.entireBungalow}>
                          Entire bungalow
                        </div>
                        <b className={styles.matterhornSuites}>
                          Matterhorn Suites
                        </b>
                        <div className={styles.night}>$575/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/video.svg"
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(60 reviews)</div>
                      <div className={styles.parent3}>
                        <div className={styles.div8}>4.9</div>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </a>
                </div>
                <div className={styles.hotelCard2}>
                  <a className={styles.hotelCard3}>
                    <img
                      className={styles.unsplashtsn8bpopveoIcon}
                      alt=""
                      src="/unsplashtsn8bpopveo@2x.png"
                    />
                    <div className={styles.stayDetails1}>
                      <div className={styles.storyBeachfrontSuiteParent}>
                        <div className={styles.storyBeachfrontSuite}>
                          2-Story beachfront suite
                        </div>
                        <b className={styles.discoveryShores}>
                          Discovery Shores
                        </b>
                        <div className={styles.night1}>$360/night</div>
                      </div>
                    </div>
                    <div className={styles.rating1}>
                      <div className={styles.reviews1}>(116 reviews)</div>
                      <div className={styles.parent4}>
                        <div className={styles.div9}>4.8</div>
                        <img
                          className={styles.vectorIcon4}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton1}>
                      <div className={styles.button2}>More details</div>
                    </button>
                  </a>
                </div>
                <div className={styles.hotelCard31}>
                  <a className={styles.hotelCard4}>
                    <img
                      className={styles.unsplashrlwe8f8anocIcon}
                      alt=""
                      src="/unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className={styles.stayDetails2}>
                      <div className={styles.singleDeluxeHutParent}>
                        <div className={styles.singleDeluxeHut}>
                          Single deluxe hut
                        </div>
                        <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                        <div className={styles.night2}>$420/night</div>
                      </div>
                    </div>
                    <div className={styles.rating2}>
                      <div className={styles.reviews2}>(78 reviews)</div>
                      <div className={styles.parent5}>
                        <div className={styles.div10}>4.7</div>
                        <img
                          className={styles.vectorIcon5}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton2}>
                      <div className={styles.button3}>More details</div>
                    </button>
                  </a>
                </div>
                <div className={styles.hotelCard41}>
                  <a className={styles.hotelCard5}>
                    <img
                      className={styles.unsplashyqrybvxug5qIcon}
                      alt=""
                      src="/unsplashyqrybvxug5q@2x.png"
                    />
                    <div className={styles.stayDetails3}>
                      <div className={styles.deluxeKingRoomParent}>
                        <div className={styles.deluxeKingRoom}>
                          Deluxe King Room
                        </div>
                        <b className={styles.lakeLouiseInn}>Lake Louise Inn</b>
                        <div className={styles.night3}>$244/night</div>
                      </div>
                      <img
                        className={styles.videoIcon1}
                        alt=""
                        src="/video.svg"
                      />
                    </div>
                    <div className={styles.rating3}>
                      <div className={styles.reviews3}>(63 reviews)</div>
                      <div className={styles.parent6}>
                        <div className={styles.div11}>4.6</div>
                        <img
                          className={styles.vectorIcon6}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton3}>
                      <div className={styles.button4}>More details</div>
                    </button>
                  </a>
                </div>
              </div>
              <div className={styles.viewAllStaysGroup}>
                <div className={styles.viewAllStays1}>View all stays</div>
                <img
                  className={styles.arrowRightIcon5}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </form>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.rectangleParent1}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-186@2x.png"
              />
              <div className={styles.shareYourTravelsForm}>
                <div className={styles.formHeader}>
                  <b className={styles.formTitleSubtext}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitle}>Get weekly updates</b>
                </div>
                <div className={styles.form}>
                  <div className={styles.formText}>
                    <div className={styles.fillInYour}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFields}>
                    <div className={styles.destinationNameInput}>
                      <TextField
                        className={styles.input1}
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "41.9212646484375px",
                          },
                        }}
                      />
                    </div>
                    <div className={styles.nameInput}>
                      <TextField
                        className={styles.input2}
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "41.9212646484375px",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <button className={styles.button5}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.button6}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleflightBio}>
                <img className={styles.logoIcon} alt="" src="/logo.svg" />
                <div className={styles.fickleFlightIs}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="/social-icons.svg"
                />
              </div>
              <div className={styles.footerChild} />
              <div className={styles.footerLinks}>
                <div className={styles.company}>
                  <a className={styles.aboutUs}>About Us</a>
                  <div className={styles.company1}>Company</div>
                  <div className={styles.news}>News</div>
                  <div className={styles.careers}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.support}>
                  <div className={styles.account}>Account</div>
                  <div className={styles.support1}>Support</div>
                  <div className={styles.supportCenter}>Support Center</div>
                  <div className={styles.faq}>FAQ</div>
                  <div className={styles.accessibility}>Accessibility</div>
                </div>
                <div className={styles.more}>
                  <div className={styles.covidAdvisory}>Covid Advisory</div>
                  <div className={styles.more1}>More</div>
                  <div className={styles.airlineFees}>Airline Fees</div>
                  <div className={styles.tips}>Tips</div>
                  <div className={styles.quarantineRules}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;
