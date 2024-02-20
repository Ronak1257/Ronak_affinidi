
## Introduction

Welcome to our cutting-edge web application built with React, Next.js, and powered by Affinidi for secure direct logins from the Affinidi Vault. Our platform offers a seamless and secure checkout process, leveraging the latest in authentication and authorization technologies.

At the heart of our application is the integration with Affinidi, a leading provider of secure digital identity solutions. Through Affinidi, users can enjoy a frictionless login experience directly from their Affinidi Vault, ensuring their credentials and personal data remain private and protected.


## Features

1. Gender Based item showing

At the core of our platform lies the groundbreaking feature of gender-based clothing suggestions tailored to each user's preferences. Leveraging Affinidi's secure data retrieval capabilities, we intelligently gather user information, including gender, directly from their Affinidi Vault.

Male: For users who identify as male, our platform curates a selection of stylish and trendy clothing options specifically catered to men's fashion preferences.

Female: Similarly, for users who identify as female, we showcase a diverse array of fashionable and chic clothing choices tailored to women's style preferences.

Not Selected: In cases where the user has not specified their gender, our platform intelligently combines male and female clothing options, providing a comprehensive selection to suit diverse tastes and preferences.

This dynamic approach ensures that every user receives personalized clothing recommendations aligned with their unique style and preferences, enhancing the overall shopping experience.

```
const { gender } = useLocalContent();
  const maleproducts = [
    { id: 1, name: "Man Hoodie", price: 30, imageUrl: "man_hoodie.webp" },
    { id: 2, name: "Man T-Shirt", price: 20, imageUrl: "man_tshirt.jpg" },
    { id: 3, name: "Man Shirt", price: 25, imageUrl: "man_shirt.png" },
  ];
  const femaleproducts = [
    { id: 4, name: "Female Hoodie", price: 25, imageUrl: "female_hoodie.jpg" },
    { id: 5, name: "Female T-Shirt", price: 15, imageUrl: "female_tshirt.webp" },
    
  ];
  let products=[];
  const checkgen=()=>{
    if (gender==="male") {
      products=maleproducts;
      return "Men's wear"
    }
    else if(gender==="female"){
      products=femaleproducts;
      return "Woman's wear"
    }
    else{
      products=maleproducts.concat(femaleproducts);
      return "Men's and Woman's wear"
    }
  }
```

2. Showing Name and Profile Picture in Header Section

Profile Picture Display: The header prominently showcases the user's profile picture, providing a visual representation of their identity and personalization. This feature adds a human touch to the browsing experience, fostering a sense of connection between the user and the platform.

Name Recognition: Alongside the profile picture, the user's name is displayed in the header section. By acknowledging the user by name, the platform creates a personalized experience, reinforcing the user's identity and making them feel valued and recognized.

Enhanced User Engagement: By prominently featuring the user's profile picture and name in the header section, the platform encourages active engagement and interaction. Users feel acknowledged and connected to the platform, driving increased participation and loyalty over time

```
if (isAuthenticated && user) {
      return (
        <div className="flex items-center">
          <span className="mr-2.5 text-slate-700 text-2xl">Welcome,<b><i>{user.firstName}</i></b></span>
          <div className="">
            <img className=" object-cover rounded-3xl h-12 w-12 hover:shadow-sm hover:shadow-green-600" src={user.picture} alt="Profile" />
          </div>
          <button className="py-1.5 px-3 text-xl leading-1 rounded-xl  bg-blue-600 mx-4" onClick={logout}>Logout</button>
        </div>
      );
    }
```

3. Improvement in cart section:
   In our cart section, users can effortlessly adjust item quantities with intuitive controls, making shopping a breeze. They can increase or decrease quantities with a simple click, tailoring their order to perfection. Additionally, a sleek delete icon allows for swift removal of unwanted items, ensuring a clutter-free and personalized shopping experience.

   
## User Experience

#Enhancing UI with Tailwind CSS and React:

Integration: Tailwind CSS can be seamlessly integrated into React projects using either traditional CSS imports or tools like craco or @craco/craco for Create React App projects. Once integrated, developers can apply Tailwind CSS utility classes directly to JSX elements within React components.

Component Styling: Tailwind CSS classes can be used to style individual React components, including layout, typography, spacing, colors, and more. By leveraging Tailwind CSS utility classes, developers can rapidly iterate on UI designs and prototypes without writing custom CSS.

Responsive Design: Tailwind CSS utilities enable developers to create responsive layouts and components that adapt to different screen sizes and devices. Media query breakpoints and responsive utilities make it easy to define styles for various viewport sizes, ensuring a consistent user experience across devices.

State Management: React's state management capabilities, combined with Tailwind CSS styling, allow developers to create dynamic and interactive UIs. Components can respond to user interactions and update their state accordingly, triggering re-renders with updated styles and content.

site link : https://ronak-affinidi-shopping-stackup.vercel.app/

Images

Home Page:

![home page male](https://github.com/Ronak1257/Ronak_affinidi/assets/130481625/863c5221-f102-41fb-a166-5f3dc9b6e622)

Cart Page:

![cart](https://github.com/Ronak1257/Ronak_affinidi/assets/130481625/a5b1d31c-aa15-48a4-a4e0-97b1193e74c6)

Checkout Page:

![checkout page](https://github.com/Ronak1257/Ronak_affinidi/assets/130481625/b40dabe2-def8-462c-8c05-528b6acba7e4)

other Images:

![cart pop up](https://github.com/Ronak1257/Ronak_affinidi/assets/130481625/c226f6e6-e180-427b-8ba3-30790b9d6d83)

![oreder submit pop up](https://github.com/Ronak1257/Ronak_affinidi/assets/130481625/a457e3c0-9f35-46b8-b905-9a595f5c4e83)
