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

- Pre-processed Point cloud data collected by Velodyne's Puck(VLP-16) in MATLAB to remove invalid points
- Implemented code to cluster and differentiate ground points from the object clusters, while getting bounding boxes with labels of different objects by DBSCAN algorithm
- Implemented robust tracking using Kalman filter which optimally estimates the current state of the surrounding objects
- Computed state estimate error covariance matrix for each track with JPDA tracker
