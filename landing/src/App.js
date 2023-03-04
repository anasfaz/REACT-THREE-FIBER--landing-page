import React from "react";
import { ScrollControls, Scroll, Environment,Float } from "@react-three/drei";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";
import { Butterfly } from "./model/Buttefly";
import {EffectComposer,Bloom, DepthOfField, Vignette} from '@react-three/postprocessing'
function App() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} />
      <spotLight position={[0,25,0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

      <Environment preset="warehouse" />
      <EffectComposer>
       <Bloom intensity={2} luminaceThreshold={0.2} luminanceSmoothing={0.9} height={1000}/>
       <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480}/>
       <Vignette eskil={false} offset={1.5} darkness={1.5}/>
      </EffectComposer>
      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
        <Float 
        speed={1}
        rotationIntensity={2}
        floatIntetensity={0.2}
        floatingRange={[1,1]}
        >
        
          <Butterfly scale={0.05} position={[-1, -12.5, 0]} />
          <Butterfly scale={0.05} position={[12, -14.5, -10]} />
          </Float>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <Container style={{ position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Life can be a struggle
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Sometimes you can feel
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Lost</h1>
                  <h1 style={{ marginBottom: "0px" }}>OverWhelmed</h1>
                  <h1 style={{ marginBottom: "0px" }}>Empty inside</h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    Drifting through life <br />
                    With no help or guidance
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "400vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    But there is hope...
                    <br /> and people who can help
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "500vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                    It's time to get
                    <br /> the support you need
                  </h1>
                  <h2 style={{ marginBottom: "30px", marginTop: "-20px" }}>
                    To get your life back
                  </h2>
                  <Button variant="outline-light" size="lg">
                    Get help now
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
