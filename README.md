# Track and Forward

## Overview
**Track and Forward** is a Next.js web application that uses Google Analytics meta tags to track user navigation data effectively. Once data is collected, the application redirects users to a designated final website, enhancing user engagement and optimizing conversion rates through precise targeting.

## Features
- **User Tracking**: Implements Google Analytics meta tags to collect detailed navigation data.
- **Smart Redirection**: Dynamically redirects users to specified websites based on analytics insights.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v12.0 or newer)
- npm (v6.0 or newer)

## Installation
To set up **Track and Forward**, follow these steps:

1. Clone the repository:
	```bash
	git clone https://github.com/iglizar/track-and-forward.git
	```

2. Navigate to the project directory:
	```bash
	cd track-and-forward	
	```

3. Install the dependencies:
	```bash
	npm install
	```

## Usage
To run the application in development:
	```bash
	npm run dev
	```

## Configuration
Configure your application with your Google Analytics credentials and target URL in the .env file:

	```
	GA_TRACKING_ID=YOUR_GOOGLE_ANALYTICS_TRACKING_ID
	REDIRECT_URL=YOUR_TARGET_URL
	```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

	```
	This Markdown-formatted README is ready for GitHub. It will display headings, code blocks, and sections clearly once uploaded to your repository.
	```


