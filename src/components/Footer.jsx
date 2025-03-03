import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";

export function Footer() {
  const footerList1 = [
    "TEDx",
    "TED FELLOWS",
    "TED Ed",
    "TED Translators",
    "TED Institute",
    "The Audacious Project",
    "TED@Work",
    "Podcasts",
    "TED Blog",
    "More ways to get TED",
  ];

  const footerList2 = [
    "TED Speakers",
    "TED FELLOWS",
    "TED Translators",
    "TEDx Organizers",
    "TED Community",
  ];

  return (
    <div className="MainFooter">
      <div className="headTed">TED</div>

      <div className="footerAllList">
        <div>
          <div className="headTag">Explore</div>
          {footerList1.map(function (item) {
            return (
              <div className="footerItems1" key={item}>
                {item}
              </div>
            );
          })}
        </div>

        <div>
          <div className="headTag">Our community</div>
          {footerList2.map(function (item) {
            return (
              <div className="footerItems2" key={item}>
                {item}
              </div>
            );
          })}
        </div>

        <div className="SecHeadText">
          <div className="head1tag hidden">Newsletters</div>
          <div className="head2 hidden">Get the latest talks</div>
          <div className="paraTag hidden">
            Get a daily email featuring the latest talk, plus a quick mix of
            trending content.
          </div>
          <div className="hidden">
            <InputGroup size="lg" color="white">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Text id="inputGroup-sizing-lg">
                Subcribe
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className="paraTags2 hidden">
            By subscribing, you understand and agree that we will store, process
            and manage your personal information according to our Privacy Policy
          </div>
        </div>
        <div className="headText">
          <div className="headTag">Become a TED Member</div>
          <div>
            TED Members help billions of people worldwide access inspiring
            ideas. Plus, they get exclusive benefits like invite-only events
            with speakers. Join today for a brighter future - and a better you.
          </div>
          <div className="FollowTED">Follow TED</div>
          <div className="socialTag">
            <span>
              <Linkedin />
            </span>
            <span>
              <Youtube />
            </span>
            <span>
              <Instagram />
            </span>
            <span>
              <Twitter />
            </span>
            <span>
              <Facebook />
            </span>
          </div>

          <div className="DownloadTED">Download the TED App</div>
        </div>
      </div>
      <div className="endDetails">
        <div>
          <div className="lastDetails hidden">TED Talks Usage Policy</div>
          <div className="lastDetails hidden">Jobs</div>
        </div>
        <div>
          <div className="lastDetails hidden">Privacy Policy</div>
          <div className="lastDetails hidden">Press</div>
        </div>
        <div>
          <div className="lastDetails hidden">Advertising / Partnership</div>
          <div className="lastDetails hidden">Help</div>
        </div>
        <div>
          <div className="lastDetails hidden">TED.com Terms of Use</div>
          <div className="lastDetails hidden">Privacy Preferences</div>
        </div>
        <div className="hidden">
          © TED Conferences, LLC. All rights reserved.
        </div>
      </div>
    </div>
  );
}
