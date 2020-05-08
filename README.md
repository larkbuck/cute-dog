# *C U T E 🐾 D O G*
# Art Portfolio Bootstrap Demo

#### Responsive and customizable template + tutorials for artists who know some HTML/CSS

<br>

## 🦴🦴🦴🦴 Responsive:
* The portfolio photos form a (funky) grid in the browser and stack vertically on mobile.
* The navbar collapses to a hamburger menu on tablet + mobile

<br>

## 🦴🦴🦴🦴 Customizable:
* Custom classes ready for you to build from (details below)
* Fullscreen p5 sketch running in the background.

<br>

## 🦴🦴🦴🦴 Tutorials and Files

* See the live [website here](https://larkvcr.com/cute-dog/).
* Follow [YouTube tutorials here](https://www.youtube.com/playlist?list=PLT6L9mOkCXcPAcVwh9esKt3-hZ3baeEH6)
* Get the files from this repository or [download the zip here](bootstrap-demo.zip)

<br>

## Notes:

#### YouTube tutorials
* The completed demo has a few added features I mentioned but didn't complete in the YouTube videos (ie. paw icon in navbar)
* I also changed some of the navbar text and created blank subpages for "project" as well as "bio"
* Project and bio pages have a sticky footer =)

#### Custom CSS classes:

Here's the custom classes added to the demo and ready to go. There aren't any setup for the navbar - that's on you!

      /* custom css for jumbotron */
      .jumbo-custom {}

      /* class for whole portfolio grid div */
      .portfolio {
        color: #212121;
      }

      /* text in portfolio div */
      .portfolio p {
        padding-top: 15px;
      }

      /* each portfolio grid item */
      .port-item {
      }

      /* all portfolio photos */
      .port-photo {
        box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.1);
      }

      /* for footer */
      .page-footer {
      }


CSS for Full Screen canvas


      canvas {
        position: fixed;
        top: 0;
        left: 0;
        /* change z-index to position canvas IN FRONT OR BEHIND the HTML */
        z-index: -1;
        /* note: if the p5 canvas is on top, you have to set pointer-events to none
        so that you can click on links below */
        pointer-events: none;
      }
