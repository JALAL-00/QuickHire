# QuickHire - Professional Job Board Application

QuickHire is a full-stack, pixel-perfect job board application where users can discover, filter, and apply for their dream jobs. It features a streamlined application process for job seekers and a dedicated management dashboard for administrators to post and manage listings.

This project was built as a technical assessment, strictly following a provided Figma design and fulfilling all MERN stack requirements within a 6-8 hour development window.

---

## Live Demo & Video
- **Loom Demo (Video Walkthrough):** [https://www.loom.com/share/2601f4a5d8f74907b44b8c2358ddc5fd](https://www.loom.com/share/2601f4a5d8f74907b44b8c2358ddc5fd)
- **Live Deployment:** [https://quick-hire-theta.vercel.app/](https://quick-hire-theta.vercel.app/)

---

# Getting Started & How to Run

To run the application locally, you must set up both the backend server and the frontend application. **Ensure your MongoDB instance is accessible before starting.**

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)
- [Git](https://git-scm.com/)

### Step 1: Run the Backend Server

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/JALAL-00/QuickHire.git
    cd QuickHire
    ```

2.  **Navigate to the Backend Directory:**
    ```bash
    cd backend
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Set Up Environment Variables:**
    Create a `.env` file in the `/backend` directory:
    ```plaintext
    PORT=5001
    MONGO_URI=mongodb+srv://[username]:[password]@[cluster].mongodb.net/quickhire
    ```

5.  **Run the Backend (TypeScript):**
    ```bash
    npm run dev
    ```
    The API will be running at `http://localhost:5001`.

### Step 2: Run the Frontend Application

1.  **Open a New Terminal** in the root project directory.

2.  **Navigate to the Frontend Directory:**
    ```bash
    cd frontend
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Set Up Environment Variables:**
    Create a `.env.local` file in the `/frontend` directory:
    ```plaintext
    NEXT_PUBLIC_API_URL=http://127.0.0.1:5001/api
    ```

5.  **Run the Frontend:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## Test Credentials & Admin Access

The Admin Panel is protected to simulate a real-world environment. Use the credentials below to access management features.

### Admin Login
- **URL:** `http://localhost:3000/admin`
- **Password:** `admin123`

_Note: Once logged in, the Navbar will dynamically update to show "Dashboard" and "Logout" buttons instead of Login/Sign-Up._

---

## Technology Stack

This project uses the MERN stack with a strong emphasis on Type Safety and Modular Architecture.

### Frontend
- **Framework:** **Next.js 15** (App Router)
- **Language:** **TypeScript**
- **Styling:** **Tailwind CSS v3** (Custom Figma Config)
- **Icons:** **Lucide React**

### Backend
- **Framework:** **Node.js** with **Express.js**
- **Language:** **TypeScript**
- **Database:** **MongoDB** with **Mongoose ODM**
- **Validation:** Regex-based Email and URL validation
- **Middleware:** CORS, Express JSON Parser

---

# Key Features

The application is built to provide a seamless "Quick Hire" experience for both candidates and employers:

### **User Functionality**
- **Job Discovery:** Search through listings via keywords or filter by specific industries (Design, Marketing, Engineering, etc.).
- **Dynamic Browsing:** Responsive job cards featuring company details, location, and colorful category tags.
- **Detailed View:** Full job descriptions and requirements fetched directly from the database.
- **Application System:** A functional "Apply Now" form with client-side and server-side validation for emails and resume URLs.
- **Brand Consistency:** Pixel-perfect UI matching the Figma template using a custom Tailwind color palette.

### **Admin Functionality**
- **Protected Access:** A secure login shield prevents unauthorized access to management tools.
- **Job Management Dashboard:**
  - **Create:** Post new job opportunities through a comprehensive form.
  - **Read:** Monitor all active listings in a clean, tabular layout.
  - **Delete:** Remove outdated or filled positions instantly from the database.
- **Real-time Synchronization:** Changes made in the Admin panel reflect instantly on the public landing page.

---

## API Endpoints

### Jobs
- **GET** `/api/jobs` - List all jobs (supports `?search=` and `?category=` filtering)
- **GET** `/api/jobs/:id` - Get single job details
- **POST** `/api/jobs` - Create a new job listing (Admin access)
- **DELETE** `/api/jobs/:id` - Remove a job listing (Admin access)

### Applications
- **POST** `/api/applications` - Submit a new job application (Requires name, email, resumeLink)

---

## Author
**[Jalal Uddin]**
*Associate Software Engineer Applicant*