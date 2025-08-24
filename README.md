# **Product Review System - MongoDB Schema**

## **Overview**

You're helping build the backend of a product review platform. In this assignment, your task is to design a Mongoose schema to represent products, the reviews they receive, and related data validations.

> You'll write the schema in a `schema.js` file inside the boilerplate project.

## **Schema Requirements**

### **General Guidelines**

- Use proper data types and Mongoose validators
- Ensure fields like `category` use enums
- Use embedded or referenced documents where appropriate
- Apply constraints like `required`, `default`, `min`, `max`, or `enum` where it makes sense

### **Schema Fields**

#### **Product Schema**

- `name`

  - Type: String
  - Required: true
  - Purpose: Product’s display name

- `category`

  - Type: String
  - Required: true
  - Enum: \['electronics', 'fashion', 'home', 'books']
  - Purpose: Product classification

- `price`

  - Type: Number
  - Required: true
  - Minimum: 1
  - Purpose: Price of the product in INR

- `inStock`

  - Type: Boolean
  - Default: true
  - Purpose: Availability of the product

- `releaseDate`

  - Type: Date
  - Optional
  - Purpose: Launch date of the product

- `reviews`

  - Type: Array of ObjectIds
  - Ref: 'Review'
  - Purpose: List of reviews received for this product

#### **Review Schema**

- `reviewerName`

  - Type: String
  - Required: true
  - Purpose: Name of the reviewer

- `rating`

  - Type: Number
  - Required: true
  - Min: 1
  - Max: 5
  - Purpose: Rating score given to the product

- `comment`

  - Type: String
  - Optional
  - Purpose: Text feedback

- `createdAt`

  - Type: Date
  - Default: current date
  - Purpose: Time of review submission

- `product`

  - Type: ObjectId
  - Ref: 'Product'
  - Required: true
  - Purpose: The product being reviewed

## **Deliverable**

- Write a MongoDB schema for the above review management system, ensuring all required fields, validations, enums, and data types are correctly implemented.

# **How to Fork and Set Up Your Repository**

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:

  - **Option 1: Download and Push**

    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:

       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```

       Replace `<your_github_repo_url>` with your personal GitHub repository URL.

    3. Commit and push the files to your GitHub repository:

       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```

  - **Option 2: Push Directly**

    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

## **Submission Instructions**

- Submit your GitHub repo link
- Submit the Google Drive video link (ensure access permissions are open to `kalvium.community`)
- Include a short 1–2 line note summarizing your schema design
- **All of the above details must be added to a PDF file and uploaded on the submission portal.**

### **PDF Submission Format**

Title your submission file as:
`mongoose-practice#1-schema_<yourname>.pdf`

Your PDF should include:

- GitHub repository link
- Google Drive link to your video
- A short note on the schema you wrote (1–2 lines)

---

### **Example Submission Format**

- GitHub: `https://github.com/<your_username>/product-review-schema`
- Video: Google Drive link
- Note: “I created schemas for products and reviews with appropriate validations and used referencing to connect reviews with their respective products.”
