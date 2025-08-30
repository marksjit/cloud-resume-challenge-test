# Mark's Cloud Resume

Built a static cloud-hosted resume website using AWS S3, with a visitor counter implemented via Lambda. The site is developed using HTML, CSS, and JavaScript.

## Services used:
+ S3
+ CloudFront
+ Certificate Manager
+ Lambda
+ IAM
+ Dynamo DB
+ GitHub Actions


## Documentation:
<!--+ Converted my resume to HTML. CSS included from the template.
+ Created S3 bucket with a name that matches the domain name I will use (important). Enabled S3 website hosting. 
+ Purchased domain in Route53 and created appropriate A-records for both www and non-www buckets. Requested certificates for HTTPS use and created CNAME records for both www and non-www buckets. 
+ Created a cloudfront distribution and updated A-records from Route53 to point to the distribution. 
+ Made a dynamodb table that will store the visit count of my webpage. 
+ Made an index.js that will call the lambda function (for visitor counter) and print it on the webpage. 
+ Created a lambda function that will call the item from DynamoDB and increment it and store it back on the table.  
+ Used Python on the lambda function. 
+ Created a github repository. Installed Git for windows and configured on terminal the initial directories and initial commit for website code. Installed VSCode for easier use for coding and further commits.  
+ Created GitHub Actions such that when I push new website code, the S3 bucket automatically gets updated. (Need to invalidate your CloudFront cache in the code as well.) Did not commit AWS credentials to source control, but rather configured it on repository’s
  secrets and variables (created a new IAM user and assigned S3 policy & obtain Access ID and secret access key). Enabled ACL on S3 to allow the GitHub Actions. -->
+ Converted resume to HTML/CSS and hosted it on an S3 bucket configured for static website hosting.

+ Registered a domain in Route 53, configured A-records for www and non-www versions, and enabled HTTPS using Certificate Manager.

+ Set up a CloudFront distribution pointing to the S3 bucket for global content delivery and performance optimization.

+ Created a DynamoDB table to track page visits, and implemented a Python Lambda function to increment and retrieve the visitor count.

+ Connected the Lambda function to the website via JavaScript (index.js) to dynamically display the visit count.

+ Managed source control via GitHub, using GitHub Actions to automatically deploy website updates to S3 while securely handling AWS credentials via repository secrets.

 

 
