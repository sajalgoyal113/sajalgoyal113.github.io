---
date: '3'
title: 'Self-Driving Vehicle Simulation'
cover: './octoprofile.png'
external: 'https://in.mathworks.com/help/fusion/examples/track-vehicles-using-lidar.html'
tech:
  - Data Cleaning
  - Object Segmentation
  - Tracking
showInProjects: true
---

'***You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.***'  ~ Dr. Seuss

- Pre-processed the Point cloud data, collected by Velodyne’s Puck lidar sensor(VLP-16), in MATLAB to remove invalid points
- Implemented code to differentiate ground points while getting bounding boxes of different objects by DBSCAN algorithm
- Implemented robust tracking using Kalman filter optimally estimating the current state of the surrounding objects
