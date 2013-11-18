Introduction
============

This is a personal website for Chris Augier (me!)

It's still under development but so far is just a single page containing my details.

In the future I will expand to be more interactive and highlight some of the work I've done.

Thanks for the interest.

Getting up and running
----------------------

The site has been created using node.js so here are the instructions to get it up and running (assuming you don't have node installed).

1. Go to the [node.js homepage](http://nodejs.org/), download and install for whatever platform you are using.

2. Part of the node install will include **node package manager** (npm) which is similar to homebrew but just for node modules.

3. Clone the repository and go to the root.

4. Type 'npm install' which will go and get all the dependencies as described in _package.json_.

5. Type 'sudo npm install -g grunt'. This will install grunt globally, the taskrunning we use for deployment.

6. Type 'grunt' to start the server.

7. Go to localhost: + port number described in the console.
