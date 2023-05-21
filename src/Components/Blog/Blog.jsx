import React from "react";
import UseTitle from "../UseTitle/UseTitle";


const Blog = () => {
  UseTitle('Blog')
  return (
    <div>
      <h2 className="my-5 text-center text-4xl font-medium">My Blog</h2>
      <div className='m-20 '>
            <div className='bg-orange-200 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p><span className="font-bold">Access Token: </span>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.

                In addition, if you have chosen to allow users to log in through an Identity Provider (IdP), such as Facebook, the IdP will issue its own access token to allow your application to call the IDP's API. For example, if your user authenticates using Facebook, the access token issued by Facebook can be used to call the Facebook Graph API. These tokens are controlled by the IdP and can be issued in any format. See Identity Provider Access Tokens for details.</p>
                <p><span className="font-bold">Refresh Token: </span>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.</p>
                <p><span className="font-bold">There Work: </span>Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.

                    But what about the refresh token? I cannot store it in a cookie, because (1) it would be send with every request to my Resource Server as well which makes it vulnerable to CSRF too and (2) it would send expose both access/refresh token with an identical attack vector.</p>
               
            </div>
            <div className='bg-orange-300 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>Compare SQL and NoSQL databases?</h1>
                <p className='text-lg mb-8'>SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.

                    </p>
            </div>
            <div className='bg-orange-400 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>
                What is express js? What is Nest JS?
                </h1>
                <p><span className="font-bold">Express js: </span>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.</p>
                <p><span className="font-bold">Nest js: </span>Nest. JS is a framework that helps build Node. JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. Also, read: Top 20 TypeScript Questions and Answers for 2023.</p>
            </div>
            <div className='bg-orange-500 p-10 m-10 rounded-xl'>
                <h1 className='text-3xl font-bold mb-6'>
                What is MongoDB aggregate and how does it work?
                </h1>
                <p className='text-lg mb-8'>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    </div>
  );
};

export default Blog;
