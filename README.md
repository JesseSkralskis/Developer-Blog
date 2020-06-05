

**Coding Blog**

After graduating from my computer science program, I wanted to keep expanding my skills and learn some new technologies, So I decided to build a full CRUD Blog web application where I could make posts about my coding journey. I decided to build it using React, Redux, and Fire Base for the database. I also wanted to implement google authorization and routing control based on authorization. When a user visits the site there is a google Login Button. I set this up using the fireBase Auth system. And the way it works is that if I log in with my google I get the full administrative privileges giving me the ability to post blogs, update blogs and delete blogs. And if anybody but me logs in they only have the ability to read the blog page and cannot navigate to any other portion of the site even when typing in the url. 






![alt_text](/public/images/realLanding.png "image_tooltip")


Once logged in the user is led to the Blog list page that contains a list of blogs as well as a search box that allows the user to filter the blogs by choosing a date range, key words, as well the ability to list blogs from oldest first or newest first.






![alt_text](/public/images/Dashboard.png "image_tooltip")





![alt_text](/public/images/datePicker.png "image_tooltip")


From here the user has the option to click the read more button on each specific blog post which leads the user to an expanded version of the blog.






![alt_text](/public/images/readMore.png "image_tooltip")


If anyone else is logged in they only have the ability to read the blog, and no buttons will appear. If I am logged in I have two buttons that appear, one that allows me to delete the blog, and another that allows me to update the blog and repost it. 

From the Bloglist Page I as the administrator of the site also have the ability to post new blogs and that page looks like this. 






![alt_text](/public/images/post.png "image_tooltip")


At any point there is always a logout button which will log the user out and redirect back to the login page. 

**Technologies**

This site required me to learn how to integrate many different technologies,and  have them interact with each other to achieve the required result. The first problem I tackled was creating the search box and writing the code that allowed for the filtering of the blogs. To do this I needed to implement the React-Date-Picker Component and configure it in the exact way I wanted it to work within my app. From there I created the functionality that allowed me to be able to create a blog. For this I used Redux creating actions that when dispatched would pass the desired data to the reducer which would process the data and return the result to distribute in my web page. This Process was very similar for all the remaining aspects of the crud functionality. Once this functionality was all implemented, tested and working I needed to make the data persistent so I turned to FireBase to manage my data. Using the Redux Thunk package I was able to get Redux and FireBase to work together because when Thunk is installed in the app I now could make changes to the actual database from my actions and then dispatch the return of the changes to Redux that then rendered the changes to my application. The final step was dictating how the authorization would create different experiences based on the credentials of the user. This was accomplished by using React Router and creating private routes  and public routes where I wrote logic that essentially allowed only a person with the master code user Id to have access to areas of the site where if the user id was regular then those options would not be available. 

**Features that Could Be Added**

Having other login options would be a good Idea because not everyone has a google account so adding facebook or github as well would be beneficial. I could also add a visit as a guest button, but to be honest the whole reason I created the way I did is so I could learn how to work with authorization and security within my site. I Also like the idea of creating a comment section where people could comment on my blogs and people could also comment on the comments.
