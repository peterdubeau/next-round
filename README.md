# Next Round


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Next Round** is an app that will allow users to create tasks and track who has and has not completed a task. A user can create a room and will be given admin privilege as well as a 4 alphanumeric access code. The admin can then share that code with their friends and add a task to the room. When a user completes the task (ie buying a round of drinks at the bar) their name is removed from the pool. Once all users have completed the task, all user names are placed back in the task pool to repeat the process. Wether it be buying rounds of drinks at the bar or completing household chores, Next Round will make sure everybody chips in. 


<br>

## MVP

The **Next Round** MVP will allow a user to create a room with a randomly generated 4 character alphanumeric code. The creator becomes the admin and can create a task for that room. Users then give themselves a nickname, join that room and have their name added to the queue pool that has been created by the Admin. Once they have completed the tasks their names are moved from the queue and added to a completed list. Once all users have completed the task, all names will be put back into the queue. The Admin will be able to change the task, edit user info and be able to "close" or destroy the room. 

<br>

### Goals

- _Backend rails DB_
- _Frontend react app_
- _RESTful API connecting front end and backend_
- _User generated room with unique roomcode_
- _Admin with ability to create, update and delete list_
- _User access to a room with ability to mark a task as completed_
- _Live Deployment_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end_ |
|   React Router   | _Allows routing between screens_ |
|      CORS        | _Allow access to the API_ |
|  Ruby on Rails   | _Back end. Will allow full CRUD_ |


<br>

### Client (Front End)

#### Wireframes


[Desktop Wireframe](https://wireframe.cc/T8TF4T)

[Mobile WireFrame](url)

[Tablet Wireframe](url)


#### Component Tree

[Component Tree](https://app.diagrams.net/?libs=general#G16tc1RuICvaLYvxeh0TAH9813fTRv4yJ2)

#### Component Hierarchy

``` structure

src
|__ components/
      |__ JoinRoom
      |__ CreateRoom
      |__ CreateUser
      |__ CreateTask     
      |__ CompleteTask
      |__ OnHook
      |__ OffHook
      |__ EditTask
      |__ DeleteRoom
      |__ shared
            |__ Header/Nav
            |__ Footer
|_ screens
      |__ Home
      |__ AdminCreateRoom
      |__ RoomDetails
      |__ UserJoinRoom
      |__ ViewRoom   
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ tasks.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|  Header/nav  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   JoinRoom   | functional |   n   |   n   | _Where users will enter room code to join room._      |
|  CreateRoom  | class      |   y   |   Y   | _The cards will render the post info via props._                 |
|  CreateUser  | class      |   y   |   n   | _Allows the user to create a nickname and add it to the DB_
|  CreateTask  | class      |   y   |   Y   | _Allows admin to create a task for the room._ |
| CompleteTask | functional |   n   |   n   | _Allows users to change from OnHook to OffHook._ |
|    OnHook    | class      |   y   |   n   | _State of users who haven't completed the task._ |
|    OffHook   | class      |   y   |   n   | _State of user who have completed the task_ |
|   EditTask   | functional |   n   |   n   | _allows Admin to change the task in the room._ |
|  DeleteRoom  | functional |   n   |   n   | _Closes room and deletes it from the DB._ |



#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|  Basic file setup   |    H     |     2 hrs      |     - hrs     |     TBD  |
|    Rails Models     |    H     |     1 hrs      |     - hrs     |     TBD     |
|    Rails Routes     |    H     |     1 hrs      |     - hrs     |     TBD     |
|  Rails Controllers  |    H     |     4 hrs      |     - hrs     |     TBD     |
|      JoinRoom       |    H     |     3 hrs      |     - hrs     |     TBD     |
|     CreateRoom      |    H     |     3 hrs      |     - hrs     |     TBD     |
|     CreateUser      |    H     |     3 hrs      |     - hrs     |     TBD     |
|     CreateTask      |    H     |     3 hrs      |     - hrs     |     TBD     |
|      EditTask       |    H     |     3 hrs      |     - hrs     |     TBD     |
|    CompleteTask     |    H     |     4 hrs      |     - hrs     |     TBD     |
|      OnHook         |    H     |     3 hrs      |     - hrs     |     TBD     |
|      OffHook        |    H     |     3 hrs      |     - hrs     |     TBD     |
|    DeleteRoom       |    H     |     3 hrs      |     - hrs     |     TBD     |
|    CSS & Styling    |    L     |     5 hrs      |     - hrs     |     TBD     |
|      TOTAL          |          |    41 hrs      |     - hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[DRAW.io](https://app.diagrams.net/#G1smTuHSzxBih0Hqz2N5L0_PUwEne6-2lo)

<br>

***

## Post-MVP

- Require 2 other users to confirm task is complete.
- Allow multiple tasks in one room.
- Integrate websocket for live updates.

***

## Code Showcase

----------------------------

## Code Issues & Resolutions

----------------------------