import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "pathseg"
import Matter from "matter-js"
import MatterAttractors from "matter-attractors"
import Colors from "./colors"

const PARTICLE_RADIUS = 2

const Scene = () => {

  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create({
        constraintIterations: 2,
        enableSleeping: true,
        positionIterations: 6,
        velocityIterations: 4
      }),
      world = engine.world;

  // customize world
  world.gravity.scale = 0;


  // create renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 800,
      wireframes: false,
      background: 'rgba(255,255,255,0)'
    }
  })

  Render.setPixelRatio(render, 'auto')
  Render.run(render)

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

  // add floor
  World.add(world, 
    Bodies.rectangle(0, 800, 2400, 20, {
      isStatic: true,
      render: {fillStyle: "blue"},
    })
  );

  // add bodies
  // Matter.Composites.stack(x, y, columns, rows, columnGap, rowGap, callback)
  var stack = Composites.stack(0, 0, 320, 218, 0, 0, (x, y) => {
    return Bodies.circle(x, y, PARTICLE_RADIUS, { 
      friction: 0.1, 
      restitution: 0.25, 
      density: 0.01 
    }, 6);
  });

  World.add(world, stack);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  return (<div id="the-home-show"></div>)
}

export default Scene;