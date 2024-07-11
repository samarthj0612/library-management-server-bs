# Library management system backend
This repository contains the backend code for a library management system built with Next.js. The system provides various functionalities to manage library operations such as book inventory, user management, borrowing and returning books, and more.

## Table of Contents

- [Setup](#setup)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Setup

To get started with this project, clone the repository using the commands below:

```bash
git clone https://github.com/samarthj0612/library-management-server-bs.git
cd library-management-server-bs
```

Add serviceAccountKey.json file to the project.

Create a .env file in the root directory of the project and add the following environment variables:

```
PORT=3001

FIREBASE_SERVICE_ACCOUNT_KEY_PATH=<path_to_serviceAccountKey>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your_firebase_project_id>
NEXT_PUBLIC_FIREBASE_PROJECT_DATABASE_URL=<your_firebase_database_url>

```

Ensure to replace <your_firebase_project_id> and <your_firebase_database_url> with your actual Firebase project details.

## Installation

Install the necessary dependencies by running the following command:
```
npm install
```

## Usage
Now run the server locally by executing command mentioned below-

```bash
npm run start
```

## License
Distributed under the MIT License.