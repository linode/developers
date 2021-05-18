import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#ffffff'
};

const CommunityFeaturedNav = () => (
    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--community"
        className="c-featured"
        href="https://www.linode.com/content/cloud-cpu-benchmarking-report/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','cpu-benchmark-report')
        }
      >
        <img
          width="632"
          height="316"
          src="https://www.linode.com/wp-content/uploads/2021/02/CPUBenchmark-LP-Hero-632x316.jpg"
          className="c-featured__background"
          alt="CPU Benchmark Report"
          loading="lazy"
          srcSet="https://www.linode.com/wp-content/uploads/2021/02/CPUBenchmark-LP-Hero-632x316.jpg 632w, https://www.linode.com/wp-content/uploads/2021/02/CPUBenchmark-LP-Hero-1064x531.jpg 1064w, https://www.linode.com/wp-content/uploads/2021/02/CPUBenchmark-LP-Hero.jpg 1922w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 632px"
        />
        <img
          width="273"
          height="163"
          src="https://www.linode.com/wp-content/uploads/2021/03/CPUBenchmark-Slider-Small.png"
          className="c-featured__image"
          alt="Cloud CPU Benchmark Report"
          loading="lazy"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            Cloud CPU Benchmarks
          </div>
          <div className="c-featured__excerpt">Benchmarking and analysis from Cloud Spectator includes Linode, AWS, Azure, Google Compute Engine, Alibaba, and DigitalOcean.</div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/content/cloud-cpu-benchmarking-report/"
          >
              Download
          </span>
        </div>
      </a>
    </div>
);

export default CommunityFeaturedNav;
