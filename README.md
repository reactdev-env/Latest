#Learning

A bundler in React is a tool that combines JavaScript files, CSS, images, and other assets into a single file or bundle. Bundlers are used to optimize application performance and reduce file size. 


//How do bundlers work? 

1.Dependency resolution: Create a map of how all the files relate to each other
2.Packing: Prepare the assets so the browser can handle them

//Why use bundlers? 

1.To reduce the number of HTTP requests the browser needs to make
2.To improve page load performance
3.To manage complex dependencies
4.To get your project production-ready

//Common bundlers for React 

Webpack: A widely used bundler that's highly configurable and extensible

Parcel: A fast bundler that requires little configuration

esbuild: A lightweight and efficient bundler

Rollup: A build command that outputs optimized static assets for production

Vite: A bundler that's gaining popularity for its faster and more efficient builds

#parcel

- dev build 
- A local server will be created by parcel.
- HMR - Hot module replacement.
- The HMR is due to File watching Algorithm written in c++.
- Parcel gives faster builds beacuse of caching. Caching is the process of storing copies of data in a temporary location so that it can be accessed faster.
- Image Optimization

In React, "image optimization" refers to the practice of modifying and delivering images in a way that maintains visual quality while minimizing their file size, ultimately improving the loading speed of your web application by reducing the amount of data needed to display images on the page; this often involves choosing the right image format, compressing images, serving different image sizes based on screen resolution, and using techniques like lazy loading to only load images that are currently visible on the screen. 


- Minification

Minification is the process of minimizing code and markup in your web pages and script files. It's one of the main methods used to reduce load times and bandwidth usage on websites. Minification dramatically improves site speed and accessibility, directly translating into a better user experience.

- Bundle

A bundler in React is a tool that combines JavaScript files, CSS, images, and other assets into a single file or bundle. Bundlers are used to optimize application performance and reduce file size. 

- compress

In React, "compress" refers to the process of reducing the size of a React application's bundle by optimizing the JavaScript code, usually done through a bundler like Webpack, to minimize the amount of data needed to deliver the application to the user, leading to faster loading times on the website; essentially, it's about making the application smaller by removing unnecessary parts and encoding the remaining data more efficiently. 
Key points about compression in React:
Benefits:
Smaller bundle size means faster loading times for users, improving overall application performance. 

- consistent Hashing

In React, "consistent hashing" refers to a distributed system technique where data objects and server nodes are positioned on a virtual ring (called a "hash ring"), allowing for efficient data distribution even when adding or removing servers, minimizing the need to reassign large amounts of data when the server infrastructure changes; essentially, it helps maintain data consistency across a dynamic server environment, making it particularly useful for scaling web applications. 

- code splitting

Code splitting is a technique that breaks down a React application's JavaScript bundle into smaller chunks. This technique improves performance by reducing the amount of code that needs to be loaded initially.

- Differential Bundling

To support older browsers it gives the support in mobile browser,desktop Browser

When you use <script type="module">, Parcel automatically generates a nomodule fallback for old browsers as well, depending on your browser targets.

This results in much smaller bundles for a majority of users in modern browsers, while still supporting older browsers as well!

Learn more →
​<script type="module" src="app.js"></script>
​<script type="module" src="app.c9a6fe.js"></script>
<script nomodule="" src="app.f7d631.js"></script>



- Error handling

It gives us good error suggestions.

- HTTPS (or) SSL 

we can also host our site in HTTPS. Parcel also give that features also.

HTTPS and SSL are not the same, although they are closely related: HTTPS is a protocol that uses SSL (or its newer version, TLS) to encrypt data transmitted over the internet, essentially making HTTP secure; so, HTTPS is built on top of SSL to provide secure communication, while SSL is the underlying encryption technology itself. 

- Tree Shaking algorithm

removes unused code which we are not using. The tree shaking algorithm will remove it.





