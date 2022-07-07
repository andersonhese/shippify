# Shippify

#### How to install.
- Install [node](https://nodejs.org/en/download/ "node") (recommend v12.22.9 version or higher).
	- Make sure NPM was installed, if not, install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "npm").
- Run the command (`npm install`) to install the necessary modules.

------------

#### How to execute.
- Run the command (`npm run dev`).


------------

#### How to use (get the information).
- Make a POST request to the http://localhost:31/find-route URL
	- For the better experience, make sure you are using the right parameters for this POST (see example)

```
    {
    	"maximun_distance": 10, // integer
    	"considerer_traffic": false, // boolean
    	"plot": false, // boolean
    	"maximun_distance_between_points": 50, // integer
    }
```
