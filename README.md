# Mark's Cloud Resume

Hi folks, this is my cloud resume built on AWS. It's a static website stored on S3 with a visitor counter built using Lambda. The website is built using HTML, CSS, and Javascript. I've excluded IaaC for now.

## Services used:
+ S3
+ CloudFront
+ Certificate Manager
+ Lambda
+ IAM
+ Dynamo DB
+ GitHub Actions


## Documentation:
+ Converted my resume to HTML. CSS included from the template.
+ Created S3 bucket with a name that matches the domain name I will use (important). Enabled S3 website hosting. 
+ Purchased domain in Route53 and created appropriate A-records for both www and non-www buckets. Requested certificates for HTTPS use and created CNAME records for both www and non-www buckets. 
+ Created a cloudfront distribution and updated A-records from Route53 to point to the distribution. 
+ Made a dynamodb table that will store the visit count of my webpage. 
+ Made an index.js that will call the lambda function (for visitor counter) and print it on the webpage. 
+ Created a lambda function that will call the item from DynamoDB and increment it and store it back on the table.  
+ Used Python on the lambda function. 
+ Created a github repository. Installed Git for windows and configured on terminal the initial directories and initial commit for website code. Installed VSCode for easier use for coding and further commits.  
+ Created GitHub Actions such that when I push new website code, the S3 bucket automatically gets updated. (Need to invalidate your CloudFront cache in the code as well.) Did not commit AWS credentials to source control, but rather configured it on repository’s
  secrets and variables (created a new IAM user and assigned S3 policy & obtain Access ID and secret access key). Enabled ACL on S3 to allow the GitHub Actions. 

 

 
