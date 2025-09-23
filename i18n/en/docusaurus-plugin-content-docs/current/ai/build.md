---
sidebar_position: 3
title: Try Building
---
Build your plugin.

## Building Blank Projects (meaning no pom.xml or build.gradle)
Continue to enter the following request in the chat bar:
![alt text](/img/build/image.png)
Then the problem arises, AI used JAVA17, but the project MC version is 1.21, so the JAVA version needs to be modified.
![alt text](/img/build/image1.png)
You can manually change the JAVA version, or use AI to modify it.

## Building Projects (with pom.xml or build.gradle)
Open the project through IDEA, there will be a message prompt in the bottom right corner asking whether to load the maven/gradle project, click to load.
Take maven as an example:
![alt text](/img/build/image2.png)
Double-click to run maven/package to start building.
If there is an error, directly copy the error message and enter the error log part in the chat bar, you can ask additional questions:
![alt text](/img/build/image3.png)

If the build is successful, a `project-name-1.x.x.jar` file will be generated in the project's `target` directory. This is your plugin.