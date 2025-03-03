import Image from "react-bootstrap/Image";
import { CircleArrowRight } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";

export function MainContent() {
  return (
    <div className="AboutCompny">
      <div className="CompnyDetails">
        <div className="APR">About › Programs & Initiatives ›</div>
        <div className="Ted2">TEDx Program</div>
        <div className="company">
          TEDx is a grassroots initiative, created in the spirit of TED's
          overall mission to research and discover “ideas worth spreading.” TEDx
          brings the spirit of TED to local communities around the globe through
          TEDx events. These events are organized by passionate individuals who
          seek to uncover new ideas and to share the latest research in their
          local areas that spark conversations in their communities. TEDx events
          include live speakers and recorded TED Talks, and are organized
          independently under a free license granted by TED. These events are
          not controlled by TED, but event organizers agree to abide by our
          format, and are offered guidelines for curation, speaker coaching,
          event organizing and more. They learn from us and from each other.
          More than 3000 events are now held annually.
        </div>
        <div className="ImageTag">
          <Image
            src="https://pi.tedcdn.com/r/pb-assets.tedcdn.com/system/baubles/files/000/006/745/original/TEDx_banner.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82&w=1400"
            fluid
          />
        </div>
        <div className="CompanyMainDetails">
          <div>
            <div className="firstHeading">Organize your first TEDx event</div>
            <div className="paratags1">
              Bring the global TED experience to your community through a
              combination of live speakers and TED Talk videos.
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />
              <h4>Before you start</h4>
            </div>
            <div className="paratags1">
              What you need to know before you apply for a license
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />
              <h4>Apply for a license</h4>
            </div>
            <div className="paratags1">
              Start the application process to host your own TEDx event
            </div>
            <hr />
            <div className="firstHeading">Attend a TEDx event</div>

            <div className="paratags1">
              Attend a TED event near you featuring live speakers and TED Talk
              videos, sparking conversation and connections.
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />

              <h4>Find an event near you</h4>
            </div>
            <hr />
            <div className="firstHeading">Partner with TEDX</div>
            <div className="paratags1">
              When you support the TEDx program, you enable our efforts to
              empower and grow the global TEDx community of volunteers.
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />

              <h4>Partner with TEDX</h4>
            </div>
          </div>
          <div>
            <div className="firstHeading">Already an organizer?</div>
            <div className="paratags1">
              Planning and designing a TEDx event is a big endeavor. Here`s
              everything you need to help you organize your next TED event.
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />

              <h4>Organizer guide</h4>
            </div>
            <div className="paratags1">
              General instructions and best practices from experienced
              conference hosts
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />

              <h4>Resources</h4>
            </div>
            <hr />
            <div className="paratags1">
              A place where organizers can spark connection and peer learning
            </div>
            <div className="firstHeading">Watch TEDx talks</div>
            <div className="paratags1">
              Dive into our library of TED Talks - local speakers presenting to
              local audiences about everything from politics to pollination.
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />

              <h4>Browse the library of TEDx talks</h4>
            </div>
            <hr />
            <div className="firstHeading">Speak at a TEDx event</div>
            <div className="paratags1">
              Learn more about how TEDx organizers find their speakers
            </div>
            <div className="headingText">
              <CircleArrowRight color="red" style={{ marginTop: "3px" }} />

              <h4>Speaking at TEDx</h4>
            </div>
            <hr />
            <div className="firstHeading">Follow TEDx</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
