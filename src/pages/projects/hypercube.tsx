import React from 'react';
import { Link } from "gatsby"

// TODO add more info, style
const HyperCube = () => (
  <>
    <Link to="/">Back</Link>
    <br />
    <br />
    HyperCube is a 3D printer I built based loosely off of <Link to="https://www.thingiverse.com/thing:1752766" target="_blank">Tech2C's HyperCube design</Link>.
    <br />
    I've designed and created some of my own components for it, including <Link to="https://www.thingiverse.com/thing:4010707">a completely original hot end and extruder assembly</Link> for use with E3D's Hemera extruder.
    <br />
    <br />
    <Link to="/">Back</Link>
  </>
);

export default HyperCube;
