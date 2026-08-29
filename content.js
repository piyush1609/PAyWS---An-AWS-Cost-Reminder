const BILLABLE_SERVICES = [
  { id: "ec2", label: "Amazon EC2", icon: "🖥️", sound: "engine", patterns: ["/ec2/", "ec2/home"], lines: ["You spun up a tiny server. It has big dreams and an hourly rate.", "EC2 says hello. Finance says: for how long?", "That instance is now doing cardio on your invoice."] },
  { id: "rds", label: "Amazon RDS", icon: "🗄️", sound: "gasp", patterns: ["/rds/", "rds/home"], messageKeys: ["rds", "aurora"], lines: ["A managed database: because your data deserves a premium lifestyle.", "RDS is storing records and quietly collecting rent.", "Your tables have a reservation at the expensive restaurant."] },
  { id: "lambda", label: "AWS Lambda", icon: "⚡", sound: "zap", patterns: ["/lambda/", "lambda/home"], lines: ["Serverless? Yes. Costless? That’s adorable. ⚡", "A function has entered the chat—and possibly the billing report.", "Tiny execution, big main-character energy."] },
  { id: "ecs", label: "Amazon ECS", icon: "📦", sound: "engine", patterns: ["/ecs/", "ecs/home"], messageKeys: ["ecs", "fargate"], lines: ["Containers: now with a side of recurring spend.", "Your workload is orchestrated. Your budget is improvising."] },
  { id: "eks", label: "Amazon EKS", icon: "☸️", sound: "airRaid", patterns: ["/eks/", "eks/home"], lines: ["Kubernetes has arrived. Bring snacks and a budget spreadsheet.", "The cluster is healthy. The wallet needs observation."] },
  { id: "s3", label: "Amazon S3", icon: "🪣", sound: "coins", patterns: ["/s3/", "s3/home"], lines: ["Just one more bucket. What could possibly accumulate?", "S3: where ‘keep everything’ becomes a financial strategy.", "Your objects are safe. Your storage habits are being judged."] },
  { id: "dynamodb", label: "Amazon DynamoDB", icon: "⚙️", sound: "database", patterns: ["/dynamodb/", "dynamodb/home"], lines: ["DynamoDB is scaling. The invoice is taking notes.", "Fast key-value access, plus a speedy trip to the cost explorer."] },
  { id: "elasticache", label: "Amazon ElastiCache", icon: "🧠", sound: "zap", patterns: ["/elasticache/", "elasticache/home"], lines: ["Your cache is hot. Your cloud tab may be too.", "Memory is cheap until it’s managed and always on."] },
  { id: "redshift", label: "Amazon Redshift", icon: "📊", sound: "register", patterns: ["/redshift/", "redshift/home"], lines: ["Warehouse detected. Budget forklift requested.", "The data is shifting red. Coincidence? Finance has questions."] },
  { id: "opensearch", label: "Amazon OpenSearch", icon: "🔎", sound: "search", patterns: ["/opensearch/", "opensearch/home"], lines: ["Searching for insights, finding line items.", "OpenSearch is ready to index your logs and your choices."] },
  { id: "cloudfront", label: "Amazon CloudFront", icon: "🌍", sound: "whoosh", patterns: ["/cloudfront/", "cloudfront/home"], lines: ["Your content is going places. So is the bill.", "Global delivery enabled. Local budget concern activated."] },
  { id: "route53", label: "Amazon Route 53", icon: "🧭", sound: "whoosh", patterns: ["/route53/", "route53/home"], lines: ["DNS is routing. The coins know where to go.", "Route 53: guiding packets and a few cents toward AWS."] },
  { id: "vpc", label: "Amazon VPC", icon: "🌐", sound: "coins", patterns: ["/vpc/", "vpc/home"], lines: ["NAT Gateway spotted. The data transfer meter has opinions.", "This gateway is translating addresses into invoice vocabulary."] },
  { id: "bedrock", label: "Amazon Bedrock", icon: "🧱", sound: "windowsError", patterns: ["/bedrock/", "bedrock/home"], lines: ["Foundation models: because regular cloud spend lacked drama.", "Your prompts are thoughtful. Their token bill is too."] },
  { id: "sagemaker", label: "Amazon SageMaker", icon: "🤖", sound: "robot", patterns: ["/sagemaker/", "sagemaker/home"], lines: ["The model is learning. Your budget is learning fear.", "ML workloads: turning data into predictions and credits into memories."] },
  { id: "glue", label: "AWS Glue", icon: "🧪", sound: "bubble", patterns: ["/glue/", "glue/home"], lines: ["ETL is flowing. So are the billable job minutes.", "Glue is sticking your data together—and the spend to your report."] },
  { id: "elb", label: "Elastic Load Balancing", icon: "⚖️", sound: "alarm", patterns: ["loadbalancer", "elasticloadbalancing"], lines: [] },
  { id: "waf", label: "AWS WAF", icon: "🛡️", sound: "alarm", patterns: ["wafv2", "/waf/"], lines: [] },
  { id: "shield", label: "AWS Shield", icon: "🛡️", sound: "alarm", patterns: ["shield"], lines: [] },
  { id: "directconnect", label: "AWS Direct Connect", icon: "🔗", sound: "whoosh", patterns: ["directconnect", "direct-connect"], lines: [] },
  { id: "elasticbeanstalk", label: "AWS Elastic Beanstalk", icon: "🫘", sound: "bubble", patterns: ["elasticbeanstalk", "elastic-beanstalk"], lines: [] },
  { id: "lightsail", label: "Amazon Lightsail", icon: "💡", sound: "zap", patterns: ["lightsail"], lines: [] },
  { id: "apprunner", label: "AWS App Runner", icon: "🏃", sound: "engine", patterns: ["apprunner", "app-runner"], lines: [] },
  { id: "apigateway", label: "Amazon API Gateway", icon: "🚪", sound: "whoosh", patterns: ["apigateway", "api-gateway"], lines: [] },
  { id: "stepfunctions", label: "AWS Step Functions", icon: "👣", sound: "cluster", patterns: ["states", "stepfunctions", "step-functions"], lines: [] },
  { id: "eventbridge", label: "Amazon EventBridge", icon: "🌉", sound: "whoosh", patterns: ["eventbridge", "events/home"], lines: [] },
  { id: "sqs", label: "Amazon SQS", icon: "📬", sound: "bubble", patterns: ["sqs"], lines: [] },
  { id: "sns", label: "Amazon SNS", icon: "📣", sound: "zap", patterns: ["sns"], lines: [] },
  { id: "amazonmq", label: "Amazon MQ", icon: "✉️", sound: "bubble", patterns: ["amazonmq", "amazon-mq"], lines: [] },
  { id: "documentdb", label: "Amazon DocumentDB", icon: "📚", sound: "database", patterns: ["documentdb"], lines: [] },
  { id: "neptune", label: "Amazon Neptune", icon: "🪐", sound: "database", patterns: ["neptune"], lines: [] },
  { id: "emr", label: "Amazon EMR", icon: "🐘", sound: "cluster", patterns: ["elasticmapreduce", "/emr/", "emr/home"], lines: [] },
  { id: "athena", label: "Amazon Athena", icon: "🏛️", sound: "search", patterns: ["athena"], lines: [] },
  { id: "lakeformation", label: "AWS Lake Formation", icon: "🌊", sound: "splash", patterns: ["lakeformation", "lake-formation"], lines: [] },
  { id: "kinesis", label: "Amazon Kinesis", icon: "🌊", sound: "splash", patterns: ["kinesis"], lines: [] },
  { id: "msk", label: "Amazon MSK", icon: "📨", sound: "cluster", patterns: ["kafka", "msk/home"], lines: [] },
  { id: "efs", label: "Amazon EFS", icon: "📁", sound: "bubble", patterns: ["elasticfilesystem", "/efs/", "efs/home"], lines: [] },
  { id: "fsx", label: "Amazon FSx", icon: "🗂️", sound: "bubble", patterns: ["fsx"], lines: [] },
  { id: "backup", label: "AWS Backup", icon: "🏦", sound: "database", patterns: ["backup/home", "/backup/"], lines: [] },
  { id: "ecr", label: "Amazon ECR", icon: "🐳", sound: "bubble", patterns: ["ecr"], lines: [] },
  { id: "codebuild", label: "AWS CodeBuild", icon: "🏗️", sound: "engine", patterns: ["codebuild"], lines: [] },
  { id: "codepipeline", label: "AWS CodePipeline", icon: "🔁", sound: "evilLaugh", patterns: ["codepipeline"], lines: [] },
  { id: "codedeploy", label: "AWS CodeDeploy", icon: "✅", sound: "casino", patterns: ["codedeploy"], lines: [] },
  { id: "cloudwatch", label: "Amazon CloudWatch", icon: "👀", sound: "search", patterns: ["cloudwatch", "monitoring/home"], lines: [] },
  { id: "xray", label: "AWS X-Ray", icon: "🩻", sound: "search", patterns: ["xray", "x-ray"], lines: [] },
  { id: "cloudtrail", label: "AWS CloudTrail", icon: "🕵️", sound: "search", patterns: ["cloudtrail"], lines: [] },
  { id: "config", label: "AWS Config", icon: "🎙️", sound: "database", patterns: ["config/home", "/config/"], lines: [] },
  { id: "guardduty", label: "Amazon GuardDuty", icon: "🐕", sound: "alarm", patterns: ["guardduty"], lines: [] },
  { id: "inspector", label: "Amazon Inspector", icon: "🔍", sound: "search", patterns: ["inspector"], lines: [] },
  { id: "secretsmanager", label: "AWS Secrets Manager", icon: "🤫", sound: "database", patterns: ["secretsmanager", "secrets-manager"], lines: [] },
  { id: "kms", label: "AWS Key Management Service", icon: "🔑", sound: "database", patterns: ["kms/home", "/kms/"], lines: [] },
  { id: "cognito", label: "Amazon Cognito", icon: "👤", sound: "bubble", patterns: ["cognito"], lines: [] },
  { id: "ses", label: "Amazon SES", icon: "📧", sound: "whoosh", patterns: ["ses/home", "/ses/"], lines: [] },
  { id: "workspaces", label: "Amazon WorkSpaces", icon: "🖥️", sound: "engine", patterns: ["workspaces"], lines: [] },
  { id: "acm", label: "AWS Certificate Manager", icon: "🔐", sound: "database", patterns: ["acm/home", "/acm/"], lines: [] },
  { id: "costmanagement", label: "AWS Cost Management", icon: "📊", sound: "horror", patterns: ["cost-management", "costexplorer", "billing/home"], lines: [] },
  { id: "cloudformation", label: "AWS CloudFormation", icon: "🏗️", sound: "boom", patterns: ["cloudformation"], lines: [] },
  { id: "networkfirewall", label: "AWS Network Firewall", icon: "🛡️", sound: "alarm", patterns: ["network-firewall"], lines: [] },
  { id: "globalaccelerator", label: "AWS Global Accelerator", icon: "🏎️", sound: "whoosh", patterns: ["globalaccelerator", "global-accelerator"], lines: [] },
  { id: "batch", label: "AWS Batch", icon: "📦", sound: "engine", patterns: ["batch/home", "/batch/"], lines: [] },
  { id: "appsync", label: "AWS AppSync", icon: "🔄", sound: "bubble", patterns: ["appsync"], lines: [] },
  { id: "timestream", label: "Amazon Timestream", icon: "⏱️", sound: "clock", patterns: ["timestream"], lines: [] },
  { id: "firehose", label: "Amazon Data Firehose", icon: "🔥", sound: "splash", patterns: ["firehose"], lines: [] },
  { id: "codeartifact", label: "AWS CodeArtifact", icon: "📦", sound: "register", patterns: ["codeartifact"], lines: [] },
  { id: "macie", label: "Amazon Macie", icon: "🕵️", sound: "search", patterns: ["macie"], lines: [] },
  { id: "securityhub", label: "AWS Security Hub", icon: "🛡️", sound: "alarm", patterns: ["securityhub", "security-hub"], lines: [] },
  { id: "detective", label: "Amazon Detective", icon: "🕵️", sound: "search", patterns: ["detective"], lines: [] },
  { id: "accessanalyzer", label: "IAM Access Analyzer", icon: "🔐", sound: "search", patterns: ["access-analyzer", "accessanalyzer"], lines: [] },
  { id: "appstream", label: "Amazon AppStream 2.0", icon: "📺", sound: "whoosh", patterns: ["appstream"], lines: [] },
  { id: "connect", label: "Amazon Connect", icon: "☎️", sound: "dialup", patterns: ["connect/home", "/connect/"], lines: [] },
  { id: "workmail", label: "Amazon WorkMail", icon: "📧", sound: "whoosh", patterns: ["workmail"], lines: [] },
  { id: "mediaconvert", label: "AWS Elemental MediaConvert", icon: "🎬", sound: "boom", patterns: ["mediaconvert"], lines: [] },
  { id: "ivs", label: "Amazon IVS", icon: "📹", sound: "whoosh", patterns: ["ivs"], lines: [] },
  { id: "rekognition", label: "Amazon Rekognition", icon: "👁️", sound: "search", patterns: ["rekognition"], lines: [] },
  { id: "quicksight", label: "Amazon QuickSight", icon: "📊", sound: "sadTrombone", patterns: ["quicksight"], lines: [] },
  { id: "grafana", label: "Amazon Managed Grafana", icon: "📈", sound: "horror", patterns: ["grafana"], lines: [] },
  { id: "prometheus", label: "Amazon Managed Prometheus", icon: "📡", sound: "horror", patterns: ["prometheus"], lines: [] }
];

const LINES = [
  "Your CFO just felt a disturbance in the Force.",
  "Free tier is looking the other way. 👀",
  "Somewhere, a budget alert is stretching.",
  "Deploy first. Explain the invoice later. ✨",
  "Your cloud journey now has a subscription arc.",
  "The meter has entered the chat."
];

let lastUrl = "";

function currentService() {
  const haystack = `${location.hostname}${location.pathname}${location.hash}`.toLowerCase();
  const service = BILLABLE_SERVICES.find((candidate) => candidate.patterns.some((pattern) => haystack.includes(pattern)));
  return service ? { ...service, sound: contextualSound(haystack, service.sound) } : undefined;
}

function contextualSound(haystack, fallback) {
  const hints = [
    ["missionAlarm", ["elastic-ip", "elasticip", "addresses"]],
    ["creditDecline", ["nat-gateway", "natgateway", "aurora"]],
    ["levelUp", ["autoscaling", "auto-scaling"]],
    ["gasp", ["multi-az", "multiaz"]],
    ["funeralBell", ["stopped", "idle"]],
    ["recordScratch", ["test", "sandbox", "staging"]]
  ];
  return hints.find(([, patterns]) => patterns.some((pattern) => haystack.includes(pattern)))?.[0] || fallback;
}

async function checkService() {
  if (location.href === lastUrl) return;
  lastUrl = location.href;
  const service = currentService();
  if (!service) return;
  const result = await chrome.runtime.sendMessage({ type: "aws-service-visited", service });
  if (result?.alert) showToast(service);
}

function showToast(service) {
  document.getElementById("aws-spend-jumpscare-toast")?.remove();
  const toast = document.createElement("section");
  toast.id = "aws-spend-jumpscare-toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <button class="asj-close" aria-label="Dismiss spend alert">×</button>
    <div class="asj-icon">${service.icon}</div>
    <div class="asj-content">
      <p class="asj-kicker">POTENTIAL SPEND DETECTED</p>
      <strong>${service.label}</strong>
      <p>${randomLine(service)} 💸</p>
      <button class="asj-mute">Mute for 30 min</button>
    </div>`;
  document.documentElement.append(toast);
  toast.querySelector(".asj-close").addEventListener("click", () => toast.remove());
  toast.querySelector(".asj-mute").addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "mute-for-30" });
    toast.remove();
  });
  window.setTimeout(() => toast.remove(), 8500);
}

function randomLine(service) {
  const messageKeys = service.messageKeys || [service.id];
  const serviceLines = [...service.lines, ...messageKeys.flatMap((key) => EXTRA_SERVICE_MESSAGES[key] || [])];
  const generalLines = [...LINES, ...EXTRA_GENERAL_MESSAGES];
  // Keep explicit service jokes service-only and make them the usual outcome.
  const lines = serviceLines.length && Math.random() < 0.8 ? serviceLines : generalLines;
  return lines[Math.floor(Math.random() * lines.length)];
}

for (const method of ["pushState", "replaceState"]) {
  const original = history[method];
  history[method] = function (...args) {
    original.apply(this, args);
    queueMicrotask(checkService);
  };
}
addEventListener("popstate", checkService);
addEventListener("hashchange", checkService);
// AWS Console can change routes without emitting browser navigation events.
window.setInterval(checkService, 1000);
checkService();
