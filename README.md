Microweber documentation
===

# Microweber Documentation

### Cloning + running the docs

nginx configuration:

```
server {
        listen 80;
        server_name localhost;
        root /path-to/microweber-docs;
        include hhvm.conf;
        location / {
                try_files $uri /index.php$is_args$args;
        }
        location ~ \.md$ {
                try_files index.php /index.php$is_args$args;
        }
}
```

### What is Microweber CMS?

#### Microweber is an open source drag and drop CMS

Our personal motivation to make this software open source is that we view the open source culture as the future of internet. 

A future that equals a freedom to discover, share, communicate and create. 

A future that is of benefit to end-users and developers, designers and bloggers, online entrepreneurs and freelancers, individuals and companies.

The core idea of the software is to let you create your own website, online shop or blog. From this moment of creation on, your journey towards success begins. Tagging all along will be different modules, customizations and features of the CMS, among them many specifically tailored for e-commerce enthusiasts and bloggers.

The most important thing you need to know is that Microweber pairs the latest CMS trend – the unique Drag & Drop technology, with a revolutionary Real-Time Text Writing & Editing feature. Talking in user benefit, this pair of features means improved user experience, easier and quicker content management, visually highly appealing environment and flexibility.

### The CMS has two core target audiences

* The end-user lacking serious technical knowledge comes first because we know how frustrating can the vast world of technology be. Microweber aims to deliver an easy experience that will make even the most uninitiated in matters technological true masters of their website, online shop or blog. 
* A second main audience is the developer and designer community. We want to see this community benefit from the software and unleash their imagination by creating and sharing custom-made templates or modules. 
